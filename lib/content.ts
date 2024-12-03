import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import type { BlogPost, Project } from './types';

interface MarkdownData {
  content: string;
  data: Record<string, unknown>;
}

function readMarkdownFile(path: string): MarkdownData {
  const fileContent = readFileSync(join(process.cwd(), path), 'utf-8');
  return matter(fileContent);
}

function sortByDate<T extends { date: string }>(items: T[]): T[] {
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPosts(): BlogPost[] {
  const posts = [
    {
      title: "Getting Started with AI Tools in 2024",
      description: "A comprehensive guide to leveraging AI tools for productivity and automation",
      date: "2024-01-01",
      slug: "getting-started-with-ai",
      content: readMarkdownFile('content/blog/first-post.md').content,
      readingTime: "5 min read"
    }
  ];

  return sortByDate(posts);
}

export function getProjects(): Project[] {
  const projects = [
    {
      title: "AI Blog Content Generator",
      description: "Automated blog creation system using RPA tools and AI for undetectable content generation",
      date: "2024-01-01",
      content: readMarkdownFile('content/projects/project-1.md').content,
      readingTime: "4 min read",
      projectUrl: "https://github.com/yourusername/ai-blog-generator"
    }
  ];

  return sortByDate(projects);
}