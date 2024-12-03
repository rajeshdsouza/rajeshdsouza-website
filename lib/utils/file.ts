import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Cache for markdown content
const contentCache = new Map<string, string>();

export function readMarkdownFile(path: string): string {
  // Check cache first
  if (contentCache.has(path)) {
    return contentCache.get(path)!;
  }

  // Read and parse file
  const fullPath = join(process.cwd(), path);
  const fileContent = readFileSync(fullPath, 'utf-8');
  const { content } = matter(fileContent);
  
  // Cache the content
  contentCache.set(path, content);
  
  return content;
}

export function sortByDate<T extends { date: string }>(items: T[]): T[] {
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}