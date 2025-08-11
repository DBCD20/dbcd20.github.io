import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-black fixed top-0 w-full z-100 p-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
        <div className="text-2xl font-semibold">
          <Link href="/#" className="hover:text-accent">Remote DevOps</Link>
        </div>
        <nav className="space-x-6">
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/#projects" className="hover:text-accent">Projects</Link>
          <Link href="/#contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}