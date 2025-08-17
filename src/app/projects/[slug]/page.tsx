import { ProjectContent } from '@/components/ProjectContent'
import { notFound } from 'next/navigation'
import { createSlug, formatDate } from '@/utils/projectUtils'
import { projectsData } from "@/data/projects"
import type { Project, ProjectSection, ProjectTag, ProjectMetadata } from '@/types/project';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => createSlug(p.title) === params.slug)
  
  if (!project) notFound()

return (
    <main className="min-h-screen bg-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-4 text-gray-900">
            {project.title}
          </h1>
            <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-xs">
              This text is published with the help of ChatGPT & Copilot
            </span>
          {project.date && (
            <time className="text-sm text-gray-600">
            
              Last updated {formatDate(project.date)}
            </time>
          )}
        </div>
        <ProjectContent sections={project.sections} githubUrl={project.githubUrl || project.link} />
      </div>
    </main>
  )
}