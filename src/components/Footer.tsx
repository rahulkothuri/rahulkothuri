
import { Cloud, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aws-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-7 w-7 text-aws-orange" />
              <span className="text-xl font-bold">CloudFolio</span>
            </div>
            <p className="text-sm text-gray-300 max-w-md">
              A cloud engineer specializing in AWS, DevOps, and cloud architecture.
              Building scalable, reliable, and secure cloud solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-aws-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-aws-orange transition-colors">Projects</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-aws-orange transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-aws-orange transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-aws-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-aws-orange transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
