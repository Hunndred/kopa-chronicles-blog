
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">9JAKOPA</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/faq" className="font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link 
            to="https://chat.whatsapp.com/EXAMPLELINK" 
            className="font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join WhatsApp
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="https://chat.whatsapp.com/EXAMPLELINK" 
              className="font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Join WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
