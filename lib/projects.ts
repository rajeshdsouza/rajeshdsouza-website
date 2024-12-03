import { Project } from './types';
import { readMarkdownFile, sortByDate } from './utils/file';

export function getProjects(): Project[] {
  const projects = [
    {
      title: "AI Blog Content Generator",
      description: "Automated blog creation system using RPA tools and AI for undetectable content generation",
      date: "2024-01-01",
      content: readMarkdownFile('content/projects/project-1.md'),
      readingTime: "4 min read",
      projectUrl: "https://github.com/yourusername/ai-blog-generator"
    }
  ];

  return sortByDate(projects);
}