'use client'
import { MDXProvider } from '@mdx-js/react'
import type { Project, ProjectSection, ProjectTag, ProjectMetadata } from '@/types/project';
import { GitHubButton } from './GithubButton';

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl md:text-5xl font-bold mb-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg leading-relaxed mb-4" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto" {...props} />
  ),
  code: (props: any) => (
    <code className="text-sm font-mono" {...props} />
  ),
}

const Warning = ({ content, className }: { content: string; className?: string }) => (
  <div className={`bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 my-4 ${className || ''}`}>
    <p className="text-yellow-700 text-sm sm:text-base">{content}</p>
  </div>
)

const List = ({ items, className }: { items: string[]; className?: string }) => (
  <ul className={`list-disc pl-4 sm:pl-6 space-y-2 text-base sm:text-lg ${className || ''}`}>
    {items.map((item, i) => (
      <li key={i} className="ml-2">{item}</li>
    ))}
  </ul>
)

export function ProjectContent({ sections, githubUrl }: { sections: ProjectSection[]; githubUrl?: string }) {
  return (
    <MDXProvider components={components}>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-gray-800">
          {/* Existing sections mapping */}
          {sections.map((section, index) => {
            const sectionClass = section.className || '';
            
            switch (section.type) {
              case 'warning':
                return <Warning 
                  key={index} 
                  content={section.content} 
                  className={sectionClass}
                />
              case 'list':
                return (
                  <div key={index} className={`space-y-4 ${sectionClass}`}>
                    {section.title && <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>}
                    {section.content && <p className="text-lg leading-relaxed mb-4">{section.content}</p>}
                    <List items={section.items || []} className={sectionClass} />
                  </div>
                )
              case 'code':
                return (
                  <div key={index} className={sectionClass}>
                    {section.title && <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>}
                    <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                      <code className={`language-${section.language} text-sm font-mono`}>
                        {section.content}
                      </code>
                    </pre>
                  </div>
                )
              default:
                return (
                  <div key={index} className={sectionClass}>
                    {section.title && <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>}
                    <p className="text-lg leading-relaxed">{section.content}</p>
                  </div>
                )
            }
          })}
          {/* GitHub Button */}
          {githubUrl && (
            <div className="mt-12">
              <GitHubButton href={githubUrl} className="w-full sm:w-auto" />
            </div>
          )}
        </div>
      </article>
    </MDXProvider>
  )
}