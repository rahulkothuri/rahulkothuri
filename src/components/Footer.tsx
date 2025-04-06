import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aws-blue text-white py-2">
      <div className="max-w-500xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-300 hover:text-cloud-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-cloud-blue transition-colors">Projects</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-cloud-blue transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-cloud-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cloud-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cloud-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Rahul Kothuri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;