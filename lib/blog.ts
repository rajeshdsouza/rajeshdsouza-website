import { BlogPost } from './types';
import { readMarkdownFile, sortByDate } from './utils/file';

export function getBlogPosts(): BlogPost[] {
  const posts = [
    {
      title: "Getting Started with AI Tools in 2024",
      description: "A comprehensive guide to leveraging AI tools for productivity and automation",
      date: "2024-01-01",
      slug: "getting-started-with-ai",
      content: readMarkdownFile('content/blog/first-post.md'),
      readingTime: "5 min read"
    }
  ];

  return sortByDate(posts);
}