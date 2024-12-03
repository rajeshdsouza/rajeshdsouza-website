'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/work"
              className="text-white hover:text-[#00FF94] text-lg"
              onClick={() => setIsOpen(false)}
            >
              My Work
            </Link>
            <Link
              href="/blogs"
              className="text-white hover:text-[#00FF94] text-lg"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-[#00FF94] text-lg"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              <Button className="bg-[#00FF94] text-black hover:bg-[#00FF94]/90 w-full">
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}