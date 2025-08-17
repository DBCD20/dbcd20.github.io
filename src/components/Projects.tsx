'use client'; // This line is essential for using useState
import Link from 'next/link'
import { usePagination } from "../hooks/usePagination";
import { projectsData } from "@/data/projects";

// Add this after your interface definition
const truncateText = (text: string, limit: number = 60) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

function createSlug(title: string) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export default function Projects() {
    const {
        currentItems,
        currentPage,
        totalPages,
        nextPage,
        previousPage,
        hasNext,
        hasPrevious
    } = usePagination(projectsData, 6); // Show 4 items per page

    return (
        <section id="projects" className="min-h-screen py-12 bg-white grid place-content-center">
      <div className="container mx-auto px-6 lg:grid-cols-3 gap-8">
        <h2 className="text-4xl md:text-6xl text-black font-semibold text-primary mb-8">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {currentItems.map((p, i) => (
            <Link 
              key={i}
              href={`/projects/${createSlug(p.title)}`}
              className="group block overflow-hidden bg-white hover:shadow-lg transition"
            >
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-xl md:text-2xl xl:text-3xl text-gray-800 font-semibold mb-2">
                  {truncateText(p.title, 30)}
                </h3>
                <p className="text-gray-500 md:text-xl">
                  {truncateText(p.description, 60)}
                </p>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Terraform
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  IaC
                </span>
              </div>
            </Link>
          ))}
        </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={previousPage}
                    disabled={!hasPrevious}
                    className={`px-4 py-2 rounded-md ${
                        hasPrevious 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={!hasNext}
                    className={`px-4 py-2 rounded-md ${
                        hasNext 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Next
                </button>
            </div>
        </section>
    );
}