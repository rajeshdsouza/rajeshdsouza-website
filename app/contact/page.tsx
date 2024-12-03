'use client';

import { Mail, Linkedin, Instagram } from 'lucide-react';
import { X } from '@/components/icons/x-logo';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact</h1>
      
      <p className="text-lg text-gray-300 mb-12">
        Feel free to reach out to me through any of the following channels. I&apos;m always open to new opportunities and connections!
      </p>

      <div className="space-y-4">
        <a 
          href="mailto:rajesh@rajeshdsouza.com"
          className="work-card flex items-center gap-4 p-6 rounded-lg hover:cursor-pointer group"
        >
          <div className="p-3 rounded-full bg-[#00FF94]/10 text-[#00FF94]">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Email</h2>
            <p className="text-[#00FF94]">rajesh@rajeshdsouza.com</p>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/rajeshdsouza/"
          target="_blank"
          rel="noopener noreferrer"
          className="work-card flex items-center gap-4 p-6 rounded-lg hover:cursor-pointer group"
        >
          <div className="p-3 rounded-full bg-[#00FF94]/10 text-[#00FF94]">
            <Linkedin className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">LinkedIn</h2>
            <p className="text-[#00FF94]">rajeshdsouza</p>
          </div>
        </a>

        <a 
          href="https://twitter.com/rdgoesgeek"
          target="_blank"
          rel="noopener noreferrer"
          className="work-card flex items-center gap-4 p-6 rounded-lg hover:cursor-pointer group"
        >
          <div className="p-3 rounded-full bg-[#00FF94]/10 text-[#00FF94]">
            <X className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">X</h2>
            <p className="text-[#00FF94]">@rdgoesgeek</p>
          </div>
        </a>

        <a 
          href="https://www.instagram.com/livesofrd/"
          target="_blank"
          rel="noopener noreferrer"
          className="work-card flex items-center gap-4 p-6 rounded-lg hover:cursor-pointer group"
        >
          <div className="p-3 rounded-full bg-[#00FF94]/10 text-[#00FF94]">
            <Instagram className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Instagram</h2>
            <p className="text-[#00FF94]">@livesofrd</p>
          </div>
        </a>
      </div>
    </div>
  );
}