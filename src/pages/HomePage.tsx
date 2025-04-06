
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aws-blue via-cloud-dark to-aws-blue text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-aws-orange/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud Engineer & <span className="text-aws-orange">DevOps</span> Specialist
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Building resilient, scalable infrastructure and optimizing cloud operations for modern applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-aws-orange text-white hover:bg-aws-orange/90" size="lg">
                View Projects
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-cloud-light">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 gradient-heading">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm a Computer Science student passionate about cloud computing, AWS, and DevOps practices. 
                My journey started with simple virtual machines and has evolved into designing complex cloud architectures and CI/CD pipelines.
              </p>
              <p className="text-gray-700 mb-6">
                I specialize in AWS services, infrastructure as code, containerization, and automation.
                My goal is to build reliable, secure, and cost-effective cloud solutions.
              </p>
              <div className="flex gap-4">
                <Button className="bg-aws-blue hover:bg-aws-blue/90">
                  My Skills
                </Button>
                <Link to="/projects">
                  <Button variant="outline" className="border-aws-blue text-aws-blue hover:bg-aws-blue/10">
                    My Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="cloud-card p-6 animate-float">
                  <Cloud className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-600">Designing and implementing scalable cloud architectures</p>
                </div>
                <div className="cloud-card p-6 animate-float" style={{animationDelay: "0.5s"}}>
                  <Server className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">DevOps</h3>
                  <p className="text-gray-600">Creating CI/CD pipelines and automation workflows</p>
                </div>
                <div className="cloud-card p-6 animate-float" style={{animationDelay: "1s"}}>
                  <Database className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">Database Management</h3>
                  <p className="text-gray-600">Working with SQL and NoSQL cloud databases</p>
                </div>
                <div className="cloud-card p-6 animate-float" style={{animationDelay: "1.5s"}}>
                  <svg 
                    className="h-10 w-10 text-aws-orange mb-4" 
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 0 1 .847.047c.253.254.29.627.09.846l-5.377 5.377c-.54-.54-.54-.867 0-1.83zm-1.9 2.975l5.45-5.45c.353-.353.42-.918.15-1.285.115-.175.192-.374.235-.595.152-.09.298-.194.435-.333l.953-.952.636.636a1.001 1.001 0 0 1-1.166 1.635c-.07.12-.157.227-.253.321l-6.082 6.082c-.196-.195-.364-.481-.358-.983zm-2.258 2.392c-.195-.195-.195-.512 0-.707l.957-.957c.134-.134.294-.202.459-.203a.778.778 0 0 1 .551.235.511.51 0 0 1 .033.7l-.992.992c-.196.196-.513.196-.708 0zm.258 4.323c-.206 0-.405-.082-.553-.228a.784.784 0 0 1-.234-.553.781.781 0 0 1 .226-.555c.283-.25.471-.6.888-.155.884.884 1.109 2.043.757 2.395-.175.175-.524.176-.945.11-.216-.03-.322-.043-.139-.014zm2.606-2.606c-.195-.195-.195-.512 0-.707l.951-.951a.5.5 0 0 1 .701.701l-.945.949a.498.498 0 0 1-.707.008zm2.669-2.669a.501.501 0 0 1-.705-.004l.949-.949a.504.504 0 0 1 .715.7l-.945.951-.014.002zm2.245-2.245a.501.501 0 0 1-.705-.004l.949-.949a.504.504 0 0 1 .715.7l-.946.95-.013.003z" />
                  </svg>
                  <h3 className="font-bold text-lg mb-2">Kubernetes</h3>
                  <p className="text-gray-600">Container orchestration and management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-heading">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work with cloud technologies, showcasing AWS implementations, infrastructure as code, and DevOps practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="cloud-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-aws-blue to-cloud-blue flex items-center justify-center">
                <Cloud className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AWS Serverless API</h3>
                <p className="text-gray-600 mb-4">
                  Built a serverless API using AWS Lambda, API Gateway, and DynamoDB with infrastructure as code.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">AWS Lambda</span>
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">API Gateway</span>
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">DynamoDB</span>
                </div>
                <Link to="/projects">
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Details</Button>
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="cloud-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-cloud-blue to-aws-orange flex items-center justify-center">
                <Server className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">CI/CD Pipeline</h3>
                <p className="text-gray-600 mb-4">
                  Automated deployment pipeline using AWS CodePipeline, CodeBuild, and CloudFormation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">CodePipeline</span>
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">CodeBuild</span>
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">CloudFormation</span>
                </div>
                <Link to="/projects">
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Details</Button>
                </Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="cloud-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-aws-orange to-aws-blue flex items-center justify-center">
                <Database className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Container Orchestration</h3>
                <p className="text-gray-600 mb-4">
                  Deployed microservices on Amazon ECS with auto-scaling and load balancing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">ECS</span>
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">Docker</span>
                  <span className="px-2 py-1 bg-aws-gray text-aws-blue text-xs rounded-full">Terraform</span>
                </div>
                <Link to="/projects">
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-aws-orange hover:bg-aws-orange/90">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-aws-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time positions in cloud engineering and DevOps.
          </p>
          <Button className="bg-aws-orange hover:bg-aws-orange/90 text-white" size="lg">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
