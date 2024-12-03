import { getMediumProjects } from '@/lib/medium';
import { format } from 'date-fns';
import Link from 'next/link';

// Set a shorter revalidation period for more frequent updates
export const revalidate = 60; // Revalidate every minute

export default async function ProjectsPage() {
  const projects = await getMediumProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-12">Projects</h1>

      <div className="grid gap-8">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card block p-6 rounded-lg"
          >
            <article>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <div className="flex items-center gap-4 text-zinc-400 text-sm mb-4">
                <time>
                  {format(new Date(project.date), 'MMMM d, yyyy')}
                </time>
                <span>{project.readingTime}</span>
              </div>
              <p className="text-gray-300">{project.description}</p>
            </article>
          </Link>
        ))}

        {projects.length === 0 && (
          <p className="text-gray-400 text-center py-12">
            No projects found. Please make sure your Medium posts are tagged with &ldquo;Projects&rdquo;.
          </p>
        )}
      </div>
    </div>
  );
}