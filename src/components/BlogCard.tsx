import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <Link href={slug} className="block border border-gray-200 rounded-lg p-6 hover:shadow-lg transition bg-white">
      <p className="text-sm text-gray-500">{date}</p>
      <h2 className="text-2xl text-black font-semibold text-primary mt-2 mb-2">{title}</h2>
      <p className="text-gray-700">{excerpt}</p>
      <span className="text-accent mt-3 inline-block">Read more →</span>
    </Link>
  );
}
