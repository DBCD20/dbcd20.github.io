export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-fixed bg-center bg-gray-700 bg-blend-multiply"
      id="hero"
    >
      <div className="text-center space-y-4 px-4 rounded-lg p-6">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Hello, I&apos;m David</h1>
        <p className="text-xl text-gray-100 max-w-xl mx-auto">
          a passionate DevOps engineer specializing in automation, CI/CD pipelines, and cloud infrastructure. With a focus on efficiency, reliability, and scalability       </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-primary"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
