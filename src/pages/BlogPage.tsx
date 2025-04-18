
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
      <ScrollToTop />
      <section className="bg-gradient-to-r from-aws-blue to-cloud-dark text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Personal Blog</h1>
          <p className="text-xl max-w-5xl">
            Articles, tutorials, and insights about cloud computing, AWS services, produtivity, and more.
          </p>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="section-container py-12">
        <div className="cloud-card p-0 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-aws-blue via-cloud-blue to-aws-orange p-12 flex items-center justify-center">
              <Landmark className="h-32 w-32 text-white" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-aws-orange font-semibold">FEATURED</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">April 19, 2023</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">3 min read</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Skill vs Degree: What Sets Successful Computer Science Students Apart
              </h2>
              <p className="text-gray-600 mb-6">
              As a computer science student, you may wonder what sets you apart from your peers. It’s true that everyone 
              is exposed to the same curriculum, but what truly makes a difference is what you do beyond formal education.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">Skills</span>
                <span className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">Degree</span>
                <span className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">Students</span>
              </div>
              <a
                href="https://rahulkothuri.medium.com/skill-vs-degree-what-sets-successful-computer-science-students-apart-253c344e6b4b"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button className="bg-aws-blue hover:bg-aws-blue/90">
                Read Article
              </Button>
              </a>
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
      
    </div>
  );
};

export default BlogPage;
