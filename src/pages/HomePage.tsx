
import { Button } from "@/components/ui/button";
import { Code, Database, GraduationCap, Cloud, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-aws-blue via-blue-900 to-cloud-dark text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-aws-orange/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-aws-blue to-aws-orange p-1">
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Rahul Kothuri
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Computer Science Student passionate about software development, cloud computing, and innovative technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button className="bg-aws-orange text-white hover:bg-aws-orange/90" size="lg">
                    View Projects
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-cloud-light">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-aws-blue">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm a Computer Science student with a strong foundation in programming, algorithms, and data structures. 
                My academic journey has exposed me to various technologies and domains in the field of computing.
              </p>
              <p className="text-gray-700 mb-6">
                I'm particularly interested in cloud computing, web development, and software engineering. I enjoy learning new technologies 
                and applying them to solve real-world problems through practical projects.
              </p>
              <div className="flex gap-4">
                <Button className="bg-aws-blue hover:bg-aws-blue/90 text-white">
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
                  <Code className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">Programming</h3>
                  <p className="text-gray-600">Building applications with modern languages and frameworks</p>
                </div>
                <div className="cloud-card p-6 animate-float" style={{animationDelay: "0.5s"}}>
                  <Cloud className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">Cloud Computing</h3>
                  <p className="text-gray-600">Working with AWS and cloud platforms</p>
                </div>
                <div className="cloud-card p-6 animate-float" style={{animationDelay: "1s"}}>
                  <Database className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">Data Systems</h3>
                  <p className="text-gray-600">Database design and data analytics</p>
                </div>
                <div className="cloud-card p-6 animate-float" style={{animationDelay: "1.5s"}}>
                  <Cpu className="h-10 w-10 text-aws-blue mb-4" />
                  <h3 className="font-bold text-lg mb-2">Computer Science</h3>
                  <p className="text-gray-600">Algorithms, data structures, and system design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-aws-blue">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my academic and personal projects across various domains of computer science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="cloud-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-aws-blue to-aws-orange flex items-center justify-center">
                <Cloud className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cloud Project</h3>
                <p className="text-gray-600 mb-4">
                  A serverless application built with AWS Lambda and API Gateway.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">AWS</span>
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">Serverless</span>
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">NodeJS</span>
                </div>
                <Link to="/projects">
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Details</Button>
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="cloud-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-aws-blue to-aws-orange flex items-center justify-center">
                <Globe className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Application</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack web application with React, Node.js, and MongoDB.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">MongoDB</span>
                </div>
                <Link to="/projects">
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Details</Button>
                </Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="cloud-card overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-aws-blue to-aws-orange flex items-center justify-center">
                <Cpu className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Machine Learning Model</h3>
                <p className="text-gray-600 mb-4">
                  Image classification system using Python and TensorFlow.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">Python</span>
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">TensorFlow</span>
                  <span className="px-2 py-1 bg-gray-100 text-aws-blue text-xs rounded-full">ML</span>
                </div>
                <Link to="/projects">
                  <Button className="w-full bg-aws-blue hover:bg-aws-blue/90">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-aws-orange hover:bg-aws-orange/90 text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-aws-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always interested in learning opportunities, collaborative projects, and networking with fellow computer science enthusiasts.
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
