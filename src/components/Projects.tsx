
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'ACM Near Expiry IaC',
    description: 'Building infrastructure as code for ACM resources nearing expiry.',
    image: 'acm-near-expiry.jpg',
    label: 'Solution',
    link: 'https://github.com/DBCD20/terrafom-aws-acm-expiry-notification',
  },
    {
    title: 'AWS Module IaC',
    description: 'Building infrastructure as code for AWS resources.',
    label: 'Module',
    link: '#',
  },
      {
    title: 'Alert Unauthorized API Requests IaC',
    description: 'Building infrastructure as code for alerting unauthorized API requests.',
    label: 'Solution',
    link: '#',
  },
  {
    title: 'Detect Disabled CloudTrail IaC',
    description: 'Building infrastructure as code for detecting disabled CloudTrail.',
    label: 'Solution',
    link: '#',
  },      {
    title: 'Network Firewall IaC',
    description: 'Building infrastructure as code for network firewalls.',
    label: 'Module',
    link: '#',
  },
  // add more
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white grid">
      <div className="container mx-auto px-6 lg:grid-cols-3 md:grid-cols-8">
        <h2 className="text-3xl text-black font-semibold text-primary mb-8">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group block overflow-hidden bg-white hover:shadow-lg transition">
              <div className="pb-4 border-b border-gray-200">
                <h3 className="text-xl text-gray-800 font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-700">{p.description}</p>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Terraform</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">IaC</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
