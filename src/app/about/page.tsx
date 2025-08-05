import Header from "@/components/Header";

export default function About() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <section className="max-w-3xl ">
        <h1 className="text-4xl text-black font-bold text-primary mb-6">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I&apos;m a <span className="text-primary font-medium">DevOps Engineer</span> with over 8 years of experience specializing in
          <span className="text-primary font-medium"> Amazon Web Services (AWS)</span>. I design, automate, and manage
          scalable infrastructure that powers reliable and efficient applications.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          My expertise spans infrastructure as code (Terraform, CloudFormation), CI/CD pipelines, container orchestration (EKS, ECS, Docker), and cloud-native monitoring tools like CloudWatch.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          I focus on building robust systems that enable developer velocity, security, and cost efficiency—while staying hands-on with the latest cloud and DevOps tools.
        </p>
      </section>
    </main>
    </>
  );
}
