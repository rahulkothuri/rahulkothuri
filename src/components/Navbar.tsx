
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-aws-blue">Rahul Kothuri</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-aws-blue font-medium transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-aws-blue font-medium transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-aws-blue font-medium transition-colors">
              Blog
            </Link>
            <a
              href="https://linktr.ee/rahulkothuri"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button variant="outline" className="border-aws-blue text-aws-blue hover:bg-aws-blue hover:text-white">
              Contact
            </Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={isMenuOpen ? "bg-aws-blue text-white" : ""}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-aws-blue" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="px-3 py-2">
            <a
                href="https://linktr.ee/rahulkothuri"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button className="w-full bg-aws-blue text-white hover:bg-aws-blue/90">
                Contact
              </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
