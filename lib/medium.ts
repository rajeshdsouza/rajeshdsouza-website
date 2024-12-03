import Parser from 'rss-parser';
import { BlogPost, Project } from './types';
import { convert } from 'html-to-text';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      'category',
      'creator',
      ['dc:creator', 'dcCreator'],
    ],
  },
});

const MEDIUM_USERNAME = 'rajeshdsouza07';
// Using a CORS proxy to avoid direct Medium API calls
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const MEDIUM_FEED_URL = `${CORS_PROXY}${encodeURIComponent(`https://medium.com/feed/@${MEDIUM_USERNAME}`)}`;

interface MediumRawPost {
  title: string;
  link: string;
  contentEncoded?: string;
  content: string;
  pubDate: string;
  categories?: string[];
  creator?: string;
  dcCreator?: string;
  guid: string;
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

function extractDescription(content: string): string {
  const plainText = convert(content, {
    wordwrap: 130,
    preserveNewlines: false,
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } }
    ]
  });
  return plainText.slice(0, 160).trim() + '...';
}

function cleanContent(content: string): string {
  return content
    .replace(/<div[^>]*class="[^"]*medium-[^"]*"[^>]*>.*?<\/div>/g, '')
    .replace(/<figure[^>]*class="[^"]*medium-[^"]*"[^>]*>.*?<\/figure>/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

async function fetchMediumFeed(): Promise<MediumRawPost[]> {
  try {
    console.log('Fetching Medium feed...');
    const feed = await parser.parseURL(MEDIUM_FEED_URL);
    
    if (!feed.items?.length) {
      console.log('No items found in feed');
      return [];
    }

    console.log(`Found ${feed.items.length} items in feed`);
    
    return feed.items.map(item => ({
      title: item.title || '',
      link: item.link || '',
      content: item.content || '',
      contentEncoded: item['content:encoded'] || item.content || '',
      pubDate: item.pubDate || '',
      categories: item.categories || [],
      creator: item.creator || item['dc:creator'] || '',
      guid: item.guid || ''
    }));
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    return [];
  }
}

export async function getMediumBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await fetchMediumFeed();
    console.log('Filtering blog posts...');
    
    const blogPosts = posts
      .filter(post => {
        const categories = post.categories || [];
        const isBlogPost = categories.some(cat => 
          cat.toLowerCase() === 'blog' || 
          cat.toLowerCase().includes('blog')
        );
        console.log(`Post "${post.title}" categories:`, categories);
        return isBlogPost;
      })
      .map(post => ({
        title: post.title,
        description: extractDescription(post.contentEncoded || post.content),
        date: new Date(post.pubDate).toISOString(),
        slug: post.link,
        content: cleanContent(post.contentEncoded || post.content),
        readingTime: getReadingTime(post.contentEncoded || post.content)
      }));

    console.log(`Found ${blogPosts.length} blog posts`);
    return blogPosts;
  } catch (error) {
    console.error('Error processing blog posts:', error);
    return [];
  }
}

export async function getMediumProjects(): Promise<Project[]> {
  try {
    const posts = await fetchMediumFeed();
    console.log('Filtering project posts...');
    
    const projectPosts = posts
      .filter(post => {
        const categories = post.categories || [];
        const isProject = categories.some(cat => 
          cat.toLowerCase() === 'projects' || 
          cat.toLowerCase().includes('project')
        );
        console.log(`Post "${post.title}" categories:`, categories);
        return isProject;
      })
      .map(post => ({
        title: post.title,
        description: extractDescription(post.contentEncoded || post.content),
        date: new Date(post.pubDate).toISOString(),
        content: cleanContent(post.contentEncoded || post.content),
        readingTime: getReadingTime(post.contentEncoded || post.content),
        projectUrl: post.link
      }));

    console.log(`Found ${projectPosts.length} project posts`);
    return projectPosts;
  } catch (error) {
    console.error('Error processing projects:', error);
    return [];
  }
}
