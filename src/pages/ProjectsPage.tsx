
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

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
          <Button className="bg-aws-blue hover:bg-aws-blue/90 text-white" size="lg">
            Contact Me
          </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
