import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-8">The project you're looking for doesn&apos;t exist.</p>
        <Link
          href="/projects"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  )
}