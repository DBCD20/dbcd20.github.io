import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
        <section className="max-w-5xl w-full px-6 flex flex-col md:flex-row items-center gap-10 sm:mt-16 mb-32">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/my-photo.jpg" // replace with your actual image path
              alt="Profile photo"
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>

          {/* About Text */}
          <div>
            <h1 className="text-4xl md:text-5xl text-center md:text-left text-black font-bold text-primary mb-12">About Me</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I&apos;m a <span className="text-primary font-medium">DevOps Engineer</span> with over 8 years of experience specializing in
              <span className="text-orange font-medium"> Amazon Web Services (AWS)</span>. I design, automate, and manage
              scalable infrastructure that powers reliable and efficient applications.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              My expertise spans infrastructure as code (Terraform, CloudFormation), CI/CD pipelines, container orchestration (EKS, ECS, Docker), and cloud-native monitoring tools like CloudWatch.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I focus on building robust systems that enable developer velocity, security, and cost efficiency—while staying hands-on with the latest cloud and DevOps tools.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-5xl w-full px-6">
          <h2 className="text-4xl md:text-5xl text-center font-semibold text-black mb-24">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "AWS", logo: "/tech/aws.svg" },
              { name: "Docker", logo: "/tech/docker.svg" },
              { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
              { name: "Terraform", logo: "/tech/terraform.svg" },
              { name: "Python", logo: "/tech/python.svg" },
              { name: "Node", logo: "/tech/nodedotjs.svg" },
              { name: "jenkins", logo: "/tech/jenkins.svg" },
              { name: "Github Actions", logo: "/tech/githubactions.svg" },
              { name: "ECS", logo: "/tech/ecs.svg" },
              { name: "Gitlab", logo: "/tech/gitlab.svg" },
              { name: "Helm", logo: "/tech/helm.svg" },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="mb-2"
                />
                <span className="text-sm text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
