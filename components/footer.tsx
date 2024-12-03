import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';
import { X } from '@/components/icons/x-logo';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a 
              href="mailto:rajesh@rajeshdsouza.com" 
              className="text-[#00FF94] hover:underline"
            >
              rajesh@rajeshdsouza.com
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div><Link href="/work" className="hover:text-[#00FF94] transition-colors">My Work</Link></div>
              <div><Link href="/blogs" className="hover:text-[#00FF94] transition-colors">Blogs</Link></div>
              <div><Link href="/projects" className="hover:text-[#00FF94] transition-colors">Projects</Link></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rajeshdsouza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#00FF94] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/rdgoesgeek" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#00FF94] transition-colors"
              >
                <X className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/livesofrd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#00FF94] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}