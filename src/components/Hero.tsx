import BackgroundVideo from './BackgroundVideo';

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center relative"
      id="hero"
    >
      <BackgroundVideo />
      <div className="text-center space-y-4 px-4 rounded-lg p-6 relative">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl  text-shadow-lg/70">Hello, I&apos;m David</h1>
        <p className="text-xl text-gray-100 max-w-xl mx-auto  text-shadow-lg/70">
          a passionate DevOps engineer specializing in automation, CI/CD pipelines, and cloud infrastructure. With a focus on efficiency, reliability, and scalability
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-accent text-white bg-dark"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
