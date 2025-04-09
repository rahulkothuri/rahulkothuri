import { Button } from "@/components/ui/button";
import { Cloud, Database, Server, Settings, Monitor, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Automated Receipt Processing System",
    description: "The Automated Receipt Processing System is designed to streamline the organization and management of paper receipts by leveraging AWS services.",
    tags: ["AWS Lambda", "AWS S3", "DynamoDB", "AWS Textract","AWS SES"],
    icon: <Cloud className="h-12 w-12 text-aws-blue" />,
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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-aws-blue to-cloud-dark text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl max-w-3xl">
            A collection of my work in cloud computing, focusing on AWS services, infrastructure as code, 
            DevOps practices, and Machine Learning.
          </p>
        </div>
      </section>
      
      {/* Project Grid */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="cloud-card overflow-hidden">
              <div className={`h-40 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`}>
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Project</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-cloud-light py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-heading">Interested in working together?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your cloud journey.
          </p>
          <a
            href="https://linktr.ee/rahulkothuri"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button className="bg-aws-orange hover:bg-aws-orange/90 text-white" size="lg">
            Contact Me
          </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
