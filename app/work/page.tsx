'use client';

import Link from 'next/link';

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-12">My Work</h1>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-[40px] bottom-0 w-0.5 bg-[#00FF94]/30" />
        
        {/* Work Experience Items */}
        <div className="space-y-8">
          {/* First Venture */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-[40px] w-3.5 h-3.5 bg-[#00FF94] rounded-full shadow-[0_0_10px_#00FF94]" />
            <div className="work-card rounded-lg p-6 border border-[#00FF94]/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-white text-2xl font-semibold mb-1">First Venture</h2>
                  <p className="text-zinc-400">Founder &middot; Full Time</p>
                </div>
                <p className="text-zinc-400">Feb 2024 - Present &middot; 11 months</p>
              </div>
              <ul className="space-y-3 text-white">
                <li>I work with 2 startups within the founder&apos;s office, I handle partnerships, sales, customer success and content writing.</li>
                <li>Created infrastructure to enable mass outbound—scaled outbound reach from 0-3000 emails/per day.</li>
                <li>Developed an automated blog creation system using RPA tools, scraping content from a leading news site, processing it to be AI-undetectable, and publishing on Webflow.</li>
                <li>Set up automated customer outreach (email, LinkedIn, and Social media platforms) &amp; customer success systems using Airtable, make.com &amp; ZeroWork.</li>
              </ul>
            </div>
          </div>

          {/* Jackett/CoTeach */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-[40px] w-3.5 h-3.5 bg-[#00FF94] rounded-full shadow-[0_0_10px_#00FF94]" />
            <div className="work-card rounded-lg p-6 border border-[#00FF94]/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-white text-2xl font-semibold mb-1">Jackett/CoTeach</h2>
                  <p className="text-zinc-400">Business Development/Customer Support &middot; Full-time</p>
                </div>
                <p className="text-zinc-400">Aug 2021 - Nov 2023 &middot; 2 years 4 months</p>
              </div>
              <ul className="space-y-3 text-white">
                <li>Conducted 100+ demos, converting ~20% to customers, and maintained 70% retention rate.</li>
                <li>Set up automations to acknowledge bugs and user feedback, saving ~20 hours per week.</li>
                <li>Collaborated with the product and engineering team to help prioritize bugs and features on the product roadmap leveraging user data(Mixpanel &amp; UXCam) and feedback from customer development calls.</li>
                <li>Jackett pivoted to <Link href="#" className="text-[#00FF94] hover:opacity-80">CoTeach</Link>. Secured 5 pilot partnerships with major content creators (5M+ total subscribers) through strategic multi-platform outreach within one month.</li>
              </ul>
            </div>
          </div>

          {/* Multiple Internships */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-[40px] w-3.5 h-3.5 bg-[#00FF94] rounded-full shadow-[0_0_10px_#00FF94]" />
            <div className="work-card rounded-lg p-6 border border-[#00FF94]/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-white text-2xl font-semibold mb-1">Multiple Internships</h2>
                  <p className="text-zinc-400">Full-time &middot; Part Time</p>
                </div>
                <p className="text-zinc-400">Jun 2021 - Dec 2021 &middot; 6 months</p>
              </div>
              <ul className="space-y-3 text-white">
                <li><Link href="#" className="text-[#00FF94] hover:opacity-80">Mintifi</Link> is a fin-tech company that provides loans to SMBs that banks find too risky to touch.</li>
                <li>Generated $300,000 USD in revenue by independently owning the entire sales cycle for Mintifi.</li>
                <li>Collaborated cross-functionally to ensure timely lender compliance.</li>
                <li>Reached #2 in annual sales performance at Tommy Hilfiger, achieving this milestone in just 9 months of joining.</li>
                <li>Entrusted with critical store responsibilities: opening/closing operations, cash management, and direct bank deposits for business accounts.</li>
                <li>Sertumer is a med-tech company. I was responsible for B2B &amp; B2C sales, setting up e-com stores and procurement.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
