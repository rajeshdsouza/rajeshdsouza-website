export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-12">My Work</h1>
      
      <div className="relative">
        <div className="absolute left-[7px] top-[40px] bottom-0 w-0.5 bg-[#00FF94]/30" />
        
        <div className="space-y-8">
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

          {/* Additional work experience items... */}
        </div>
      </div>
    </div>
  );
}