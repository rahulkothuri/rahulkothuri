
import { GraduationCap, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-7 w-7 text-blue-300" />
              <span className="text-xl font-bold">Rahul Kothuri</span>
            </div>
            <p className="text-sm text-gray-300 max-w-md">
              A Computer Science student passionate about software development, cloud computing, and innovative technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-blue-300 transition-colors">Projects</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-blue-300 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Rahul Kothuri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
