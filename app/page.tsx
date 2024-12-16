'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I&apos;m{' '}
        <span className="gradient-text">
          Rajesh D&apos;Souza
        </span>
      </h1>

      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Delivering outcomes, not excuses
      </h2>

      <p className="text-lg text-gray-300 max-w-3xl mb-8">
        High agency operator who owns cross-functional day-to-day execution enabling
        founders to focus on big picture goals. Check out my{' '}
        <Link href="/work" className="text-[#00FF94] hover:text-[#00FF94]/80 hover:underline transition-colors">
          professional experience,
        </Link>
        {' '}I also enjoy writing which can be found{' '}
        <Link href="/blogs" className="text-[#00FF94] hover:text-[#00FF94]/80 hover:underline transition-colors">
          here
        </Link>
        . I&apos;m actively learning tech and building projects using various AI tools—{' '}
        <Link href="/projects" className="text-[#00FF94] hover:text-[#00FF94]/80 hover:underline transition-colors">
          view my recent projects
        </Link>
        .
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <Link href="/work">
          <Button className="button-highlight bg-[#00FF94] text-black hover:bg-[#00FF94]/90">
            View My Work
          </Button>
        </Link>
        <Link href="/blogs">
          <Button className="button-highlight bg-[#00FF94] text-black hover:bg-[#00FF94]/90">
            Read My Blogs
          </Button>
        </Link>
        <Link href="/projects">
          <Button className="button-highlight bg-[#00FF94] text-black hover:bg-[#00FF94]/90">
            View Projects
          </Button>
        </Link>
      </div>

      <div className="mt-12 mb-16">
        <h3 className="text-2xl font-bold mb-4 text-center">
          I&apos;m recommended by Elon
        </h3>
        <div className="max-w-xl mx-auto">
          <Image
            src="/elon-tweet.png"
            alt="Elon Musk's recommendation tweet"
            width={600}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
