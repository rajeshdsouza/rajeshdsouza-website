import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-[#00FF94] text-2xl font-bold hover:opacity-80 transition-opacity">
            RD
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/work" className="nav-link text-white hover:text-[#00FF94] transition-colors">
              My Work
            </Link>
            <Link href="/blogs" className="nav-link text-white hover:text-[#00FF94] transition-colors">
              Blogs
            </Link>
            <Link href="/projects" className="nav-link text-white hover:text-[#00FF94] transition-colors">
              Projects
            </Link>
            <Link href="/contact">
              <Button className="button-highlight bg-[#00FF94] text-black hover:bg-[#00FF94]/90">
                Contact
              </Button>
            </Link>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}