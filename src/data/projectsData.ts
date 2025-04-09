
import { ReactNode } from "react";
import { FileText, Database, Server, Settings, Monitor, Wifi } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  color: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Automated Receipt Processing System",
    description: "The Automated Receipt Processing System is designed to streamline the organization and management of paper receipts by leveraging AWS services.",
    tags: ["AWS Lambda", "AWS S3", "DynamoDB", "AWS Textract", "AWS SES"],
    icon: <FileText className="h-12 w-12 text-aws-blue" />,
    color: "from-aws-blue to-cloud-blue"
  },
  {
    id: 2,
    title: "CI/CD Pipeline",
    description: "Automated deployment pipeline using AWS CodePipeline, CodeBuild, and CloudFormation for a React application.",
    tags: ["CodePipeline", "CodeBuild", "CloudFormation", "React"],
    icon: <Server className="h-12 w-12 text-aws-blue" />,
    color: "from-cloud-blue to-aws-orange"
  },
  {
    id: 3,
    title: "Container Orchestration",
    description: "Deployed microservices on Amazon ECS with auto-scaling and load balancing.",
    tags: ["ECS", "Docker", "Terraform", "Microservices"],
    icon: <Database className="h-12 w-12 text-aws-blue" />,
    color: "from-aws-orange to-aws-blue"
  },
  {
    id: 4,
    title: "Kubernetes Cluster",
    description: "Set up and managed a Kubernetes cluster on AWS EKS with monitoring and logging.",
    tags: ["Kubernetes", "EKS", "Prometheus", "Grafana"],
    icon: <Settings className="h-12 w-12 text-aws-blue" />,
    color: "from-cloud-dark to-cloud-blue"
  },
  {
    id: 5,
    title: "Multi-Region Infrastructure",
    description: "Designed and implemented a multi-region AWS architecture for high availability.",
    tags: ["Multi-Region", "Route53", "CloudFront", "Disaster Recovery"],
    icon: <Wifi className="h-12 w-12 text-aws-blue" />,
    color: "from-aws-blue to-aws-orange"
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Optimized cloud resources and reduced AWS costs by 30% while improving performance.",
    tags: ["Cost Optimization", "Performance", "CloudWatch", "Auto Scaling"],
    icon: <Monitor className="h-12 w-12 text-aws-blue" />,
    color: "from-cloud-blue to-aws-blue"
  }
];
