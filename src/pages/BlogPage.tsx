
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with AWS Lambda Functions",
    excerpt: "A comprehensive guide to creating and deploying your first AWS Lambda function with practical examples.",
    date: "April 2, 2025",
    readTime: "8 min read",
    tags: ["AWS", "Serverless", "Lambda"],
    icon: <Cloud className="h-8 w-8 text-aws-orange" />,
  },
  {
    id: 2,
    title: "Infrastructure as Code Best Practices",
    excerpt: "Learn how to implement infrastructure as code using Terraform and AWS CloudFormation for reliable deployments.",
    date: "March 25, 2025",
    readTime: "10 min read",
    tags: ["IaC", "Terraform", "CloudFormation"],
    icon: <Server className="h-8 w-8 text-aws-blue" />,
  },
  {
    id: 3,
    title: "Containerization with Docker and AWS ECS",
    excerpt: "A step-by-step guide to containerize your applications and deploy them on Amazon ECS.",
    date: "March 18, 2025",
    readTime: "12 min read",
    tags: ["Docker", "ECS", "Containers"],
    icon: <Database className="h-8 w-8 text-aws-orange" />,
  },
  {
    id: 4,
    title: "Building CI/CD Pipelines for Cloud Applications",
    excerpt: "Learn how to create efficient CI/CD pipelines using AWS CodePipeline and GitHub Actions.",
    date: "March 10, 2025",
    readTime: "9 min read",
    tags: ["CI/CD", "DevOps", "Automation"],
    icon: <Server className="h-8 w-8 text-aws-blue" />,
  },
  {
    id: 5,
    title: "Cloud Cost Optimization Strategies",
    excerpt: "Practical techniques to reduce your AWS bill without compromising performance or reliability.",
    date: "March 3, 2025",
    readTime: "7 min read",
    tags: ["Cost Optimization", "AWS", "Cloud Management"],
    icon: <Cloud className="h-8 w-8 text-aws-orange" />,
  },
  {
    id: 6,
    title: "Multi-Region Deployment for High Availability",
    excerpt: "Design patterns and best practices for creating resilient multi-region architectures on AWS.",
    date: "February 25, 2025",
    readTime: "11 min read",
    tags: ["High Availability", "Multi-Region", "Disaster Recovery"],
    icon: <Database className="h-8 w-8 text-aws-blue" />,
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-aws-blue to-cloud-dark text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Cloud Engineering Blog</h1>
          <p className="text-xl max-w-3xl">
            Articles, tutorials, and insights about cloud computing, AWS services, DevOps practices, and more.
          </p>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="section-container py-12">
        <div className="cloud-card p-0 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-aws-blue via-cloud-blue to-aws-orange p-12 flex items-center justify-center">
              <Cloud className="h-32 w-32 text-white" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-aws-orange font-semibold">FEATURED</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">April 5, 2025</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">15 min read</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Future of Cloud Computing: Trends to Watch in 2025
              </h2>
              <p className="text-gray-600 mb-6">
                Explore emerging trends in cloud computing, from serverless architectures to edge computing, 
                and learn how these innovations are reshaping the technology landscape.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">Cloud Computing</span>
                <span className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">Serverless</span>
                <span className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">Edge Computing</span>
              </div>
              <Button className="bg-aws-blue hover:bg-aws-blue/90">
                Read Article
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="section-container py-12">
        <h2 className="text-2xl font-bold mb-8 gradient-heading">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="cloud-card p-6">
              <div className="flex items-center space-x-2 mb-4">
                {post.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="#">
                <Button variant="outline" className="w-full border-aws-blue text-aws-blue hover:bg-aws-blue/10">
                  Read More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-cloud-light py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-heading">Stay Updated</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to receive the latest articles about cloud computing, AWS services, and DevOps best practices.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aws-blue"
              />
              <Button className="bg-aws-orange hover:bg-aws-orange/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
