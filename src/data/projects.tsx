export interface ProjectSection {
  type: 'overview' | 'warning' | 'code' | 'list' | 'text';
  title?: string;
  content: string;
  items?: string[];
  language?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  githubUrl?: string;
  date?: string;
  sections?: ProjectSection[];
}

export const projectsData: Project[] = [
  {
    title: 'ACM Near Expiry IaC',
    description: 'Building infrastructure as code for ACM resources nearing expiry.',
    link: 'https://github.com/DBCD20/terrafom-aws-acm-expiry-notification',
    tags: ['Terraform', 'AWS', 'IaC'],
    date: '2025-07-24',
    sections: [
      {
        type: 'overview',
        title: 'Overview',
        content: 'This project provides a notification system for expiring AWS Certificate Manager (ACM) certificates. It is crucial for maintaining the security and reliability of web applications and services that rely on TLS/SSL certificates.'
      },
      {
        type: 'warning',
        content: '⚠️ Note: This system is not yet fully tested, but it may still provide valuable guidance or serve as a starting point for implementing your own ACM expiry alerting solution.'
      },
      {
        type: 'list',
        title: '⚠️ Why ACM Expiry Notifications Matter',
        content: 'TLS/SSL certificates are essential for:',
        items: [
          'Securing communications between clients and servers',
          'Establishing trust through domain validation',
          'Avoiding browser warnings and failed connections'
        ]
      },
      {
        type: 'list',
        title: 'When a certificate expires',
        content: 'If a certificate expires without renewal:',
        items: [
          'Your service may become inaccessible',
          'Users will see security warnings or connection errors',
          'This can lead to loss of trust, downtime, and revenue impact'
        ]
      },
      {
        type: 'list',
        title: 'Auto-renewal Isnt Always Enough',
        content: 'While ACM supports automatic renewal for some certificates (like those in use by Elastic Load Balancers or CloudFront), not all certificates are automatically renewed. Even when auto-renewal is enabled:',
        items: [
          'Certificates may fail to renew due to DNS issues or validation problems',
          'Human oversight is often needed to confirm successful renewal',
          'Notification gives you time to investigate and fix issues before service is impacted'
        ]
      },
      {
        type: 'code',
        title: '🛠️ Setup',
        content: `module "acm_expiry_notification" {
    source             = "git::https://github.com/DBCD20/module-acm-expiry-notification.git"
    notification_email = myemail@gmail.com
}`,
        language: 'hcl'
      },
      {
        type: 'text',
        title: '🚧 Status',
        content: 'This project is a work in progress. Although not fully tested, it may still offer useful ideas or a framework for building your own solution.'
      }
    ]
  },
{
  title: 'Terraform Module: VPC',
  description: 'Building infrastructure as code for VPC resources.',
  link: 'https://github.com/DBCD20/aws-modules/tree/main/terraform-aws-vpc',
  tags: ['Terraform', 'AWS', 'VPC'],
  date: '2025-08-11',
  sections: [
    {
      type: 'overview',
      title: 'Overview',
      content: 'This Terraform module provisions a Virtual Private Cloud (VPC) and its associated networking components in a cloud environment such as AWS, Google Cloud, or Azure. It is designed to be reusable, configurable, and aligned with infrastructure-as-code best practices.'
    },
    {
      type: 'list',
      title: 'Key Components',
      content: 'The module enables the creation of a secure and segmented network architecture by managing key components such as:',
      items: [
        'VPC (Virtual Network)',
        'Subnets (Public and Private)',
        'Route Tables',
        'Internet Gateways',
        'NAT Gateways',
        'Network ACLs and Security Groups'
      ]
    },
    {
      type: 'list',
      title: 'Features',
      content: 'This module provides the following features:',
      items: [
        'Easily customizable via input variables (e.g., CIDR ranges, subnet counts, availability zones)',
        'Supports public and private subnet creation',
        'Enables centralized or distributed NAT gateway configuration',
        'Designed for multi-environment usage (dev, staging, prod)',
        'Promotes reusability and consistent infrastructure patterns'
      ]
    },
    {
      type: 'code',
      title: 'Usage',
      content: `module "vpc_networking" {
  source  = "github.com/your-org/terraform-vpc-networking-module"

  cidr_block             = "10.0.0.0/16"
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.101.0/24", "10.0.102.0/24"]
  project_name    = "main"
  enable_nat_gateway   = true
  environment          = "dev"
  region               = "us-east-1"
  availability_zones   = ["us-east-1a", "us-east-1b"]
}`,
      language: 'hcl'
    },
    {
      type: 'text',
      title: 'Parameters',
      content: 'For a complete list of available parameters, please refer to the parameters documentation.'
    }
  ]
},
{
  title: "Delete IaC Identity Infrastructure",
  description:
    "This Terraform module is used to safely delete identity resources such as IAM users, roles, and policies that were previously created using Infrastructure as Code (IaC). It's designed for secure, auditable, and controlled cleanup of cloud identity resources.",
  link: "https://github.com/your-org/tf-delete-iac-identity",
  githubUrl: "https://github.com/your-org/tf-delete-iac-identity",
  tags: ["Terraform", "IAM", "Infrastructure as Code", "Cloud", "Security"],
  date: "2025-08-18",
  sections: [
{
      title: "🚀 Purpose",
      type: "text",
      content: "Infrastructure environments evolve, and identity resources (e.g., IAM users or roles) can become obsolete or orphaned. This module helps ensure unused identities are properly removed, reducing risk and maintaining compliance.",
    },
    {
      title: "⚙️ How to Use",
      type: "text",
      content: "1. Clone the repository"
    },
        {
      type: 'code',
      title: 'Usage',
      content: `git clone https://github.com/your-org/tf-delete-iac-identity.git
cd tf-delete-iac-identity`,
      language: 'hcl'
    },
    {
      title: "🧪 Testing",
      type: "text",
      content:
        "* Deploy in a sandbox or staging environment\n* Use terraform plan to preview all changes\n* Ensure you have backup or export of deleted resources (if needed)",
    },
    {
      title: "❗ Disclaimer",
      type: "warning",
      content:
        "This module is destructive by design. It should only be used by experienced cloud engineers with a clear understanding of the implications. The authors and maintainers are not responsible for unintended deletions.",
    },
    {
      title: "📄 License",
      type: "text",
      content: "MIT License",
    },
  ],
},
    {
        title: 'Terraform Module: VPC Flow Logs',
        description: 'Building infrastructure as code for VPC Flow Logs.',
        link: '#',
        tags: ['Terraform', 'AWS', 'VPC'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'This module is designed to create and manage VPC Flow Logs in AWS. It allows you to capture information about the IP traffic going to and from network interfaces in your VPC.',
      }]
    },
    {
        title: 'Detect Disabled CloudTrail IaC',
        description: 'Building infrastructure as code for detecting disabled CloudTrail.',
        link: '#',
        tags: ['Terraform', 'AWS', 'CloudTrail'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'This module is designed to detect if CloudTrail is disabled in your AWS account. It helps ensure that your account activity is being logged and monitored.',
      }]
    },
    {
        title: 'Network Firewall IaC',
        description: 'Building infrastructure as code for network firewalls.',
        link: '#',
        tags: ['Terraform', 'AWS', 'Network Firewall', 'Security'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'This module is designed to create and manage network firewalls in AWS. It allows you to define rules and policies to control traffic flow within your VPC.',
      }]
    },
    {
        title: 'Terraform Module: EKS',
        description: 'Building infrastructure as code for EKS resources.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS', 'Kubernetes'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'This module is designed to create and manage EKS (Elastic Kubernetes Service) clusters in AWS. It allows you to deploy, manage, and scale containerized applications using Kubernetes.',
      }]
    },
    {
        title: 'Terraform Module: ECS',
        description: 'Building infrastructure as code for ECS resources.',
        link: '#',
        tags: ['Terraform', 'AWS', 'ECS', 'Containers'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'This module is designed to create and manage ECS (Elastic Container Service) clusters in AWS. It allows you to deploy, manage, and scale containerized applications using Docker.',
      }]
    },
    {
        title: 'EKS Add On: Node Monitoring and Auto Repair Capability',
        description: 'Building infrastructure as code for EKS add-ons Node Monitoring and Auto Repair Capability.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'EKS add-ons for node monitoring and auto repair capability help ensure the health and reliability of your EKS clusters. This module provides a framework for integrating monitoring tools and implementing auto-repair mechanisms.',
      }]
    },
    {
        title: 'EKS Add On: Basic',
        description: 'Building infrastructure as code for EKS add-ons Basic.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'EKS add-ons provide additional functionality and features for your EKS clusters. This module serves as a basic template for creating and managing EKS add-ons, allowing you to extend the capabilities of your clusters.',
      }]
    },
    {
        title: 'EKS Add On: KEDA',
        description: 'Building infrastructure as code for EKS add-ons KEDA.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'KEDA (Kubernetes Event-driven Autoscaling) is an open-source project that allows you to scale your Kubernetes workloads based on external events. This module provides a framework for integrating KEDA with your EKS clusters, enabling event-driven scaling of your applications.',
      }]
    },
    {
        title: 'EKS Add On: Karpenter',
        description: 'Building infrastructure as code for EKS add-ons Karpenter.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'Karpenter is an open-source Kubernetes cluster autoscaler that helps you optimize your EKS clusters by automatically provisioning and scaling nodes based on workload demands. This module provides a framework for integrating Karpenter with your EKS clusters, enabling efficient resource management.',
      }]
    },
    {
        title: 'EKS Add On: Falco',
        description: 'Building infrastructure as code for EKS add-ons Falco.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: 'YYYY-MM-DD',
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'Falco is an open-source runtime security tool for Kubernetes that helps you detect and respond to security threats in your EKS clusters. This module provides a framework for integrating Falco with your EKS clusters, enabling real-time threat detection and response.',
      }]
    },
    {
        title: 'Remove Inactive Identities',
        description: 'Building infrastructure as code for removing inactive identities.',
        link: '#',
        tags: ['Terraform', 'AWS', 'IAM'],
        date: 'YYYY-MM-DD', // Update with actual date
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'Removing inactive identities helps maintain a clean and secure IAM environment. This module provides a framework for identifying and removing unused IAM users, roles, and policies in your AWS account.',
      }]
    },
    {   title: 'Alert Unauthorized API Requests',
        description: 'Building infrastructure as code for alerting unauthorized API requests.',
        link: '#',
        tags: ['Terraform', 'AWS', 'API Gateway'],
        date: 'YYYY-MM-DD', // Update with actual date
        sections: [
      {
        type: 'overview',
        title: 'Still work in progress 🚧',
        content: 'Alerting unauthorized API requests helps ensure the security and integrity of your APIs. This module provides a framework for monitoring API Gateway logs and sending alerts for unauthorized access attempts.',
      }]

    },
// // add more
];
