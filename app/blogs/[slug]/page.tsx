import { getBlogPosts } from '@/lib/blog';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export const revalidate = 3600;

// Generate static params at build time
export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-zinc-400">
            <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <Markdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </Markdown>
        </div>
      </article>
    </div>
  );
}