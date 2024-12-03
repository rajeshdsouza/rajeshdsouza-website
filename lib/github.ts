import { Octokit } from 'octokit';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const OWNER = process.env.GITHUB_USERNAME;

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
  readingTime: string;
}

export interface Project {
  title: string;
  description: string;
  date: string;
  content: string;
  readingTime: string;
  repoUrl: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data: files } = await octokit.rest.repos.getContent({
      owner: OWNER,
      repo: 'blog-content',
      path: 'posts',
    });

    if (!Array.isArray(files)) {
      throw new Error('No blog posts found');
    }

    const posts = await Promise.all(
      files.map(async (file) => {
        const { data } = await octokit.rest.repos.getContent({
          owner: OWNER,
          repo: 'blog-content',
          path: file.path,
        });

        if ('content' in data) {
          const content = Buffer.from(data.content, 'base64').toString();
          const { data: frontmatter, content: markdownContent } = matter(content);
          
          return {
            title: frontmatter.title,
            description: frontmatter.description,
            date: frontmatter.date,
            slug: file.name.replace('.md', ''),
            content: markdownContent,
            readingTime: readingTime(markdownContent).text,
          };
        }
        throw new Error('Invalid file content');
      })
    );

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { data: repos } = await octokit.rest.repos.listForUser({
      username: OWNER,
      sort: 'updated',
      per_page: 100,
    });

    const projects = await Promise.all(
      repos.map(async (repo) => {
        try {
          const { data: readme } = await octokit.rest.repos.getReadme({
            owner: OWNER,
            repo: repo.name,
          });

          const content = Buffer.from(readme.content, 'base64').toString();
          const { data: frontmatter, content: markdownContent } = matter(content);

          return {
            title: frontmatter.title || repo.name,
            description: frontmatter.description || repo.description || '',
            date: frontmatter.date || repo.created_at,
            content: markdownContent,
            readingTime: readingTime(markdownContent).text,
            repoUrl: repo.html_url,
          };
        } catch (error) {
          return null;
        }
      })
    );

    return projects
      .filter((project): project is Project => project !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}