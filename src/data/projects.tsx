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
        title: 'Terraform Module: VPC Flow Logs',
        description: 'Building infrastructure as code for VPC Flow Logs.',
        link: '#',
        tags: ['Terraform', 'AWS', 'VPC'],
        date: '2024-02-15'
    },
    {
        title: 'Detect Disabled CloudTrail IaC',
        description: 'Building infrastructure as code for detecting disabled CloudTrail.',
        link: '#',
        tags: ['Terraform', 'AWS', 'CloudTrail'],
        date: '2024-02-15'
    },
    {
        title: 'Network Firewall IaC',
        description: 'Building infrastructure as code for network firewalls.',
        link: '#',
        tags: ['Terraform', 'AWS', 'Network Firewall'],
        date: '2024-02-15'
    },
    {
        title: 'Terraform Module: EKS',
        description: 'Building infrastructure as code for EKS resources.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: '2024-02-15'
    },
    {
        title: 'Terraform Module: ECS',
        description: 'Building infrastructure as code for ECS resources.',
        link: '#',
        tags: ['Terraform', 'AWS', 'ECS'],
        date: '2024-02-15'
    },
    {
        title: 'EKS Add On: Node Monitoring and Auto Repair Capability',
        description: 'Building infrastructure as code for EKS add-ons Node Monitoring and Auto Repair Capability.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: '2024-02-15'
    },
    {
        title: 'EKS Add On: Basic',
        description: 'Building infrastructure as code for EKS add-ons Basic.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: '2024-02-15'
    },
    {
        title: 'EKS Add On: KEDA',
        description: 'Building infrastructure as code for EKS add-ons KEDA.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: '2024-02-15'
    },
    {
        title: 'EKS Add On: Karpenter',
        description: 'Building infrastructure as code for EKS add-ons Basic.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: '2024-02-15'
    },
    {
        title: 'EKS Add On: Falco',
        description: 'Building infrastructure as code for EKS add-ons Falco.',
        link: '#',
        tags: ['Terraform', 'AWS', 'EKS'],
        date: '2024-02-15'
    },
// // add more
];
