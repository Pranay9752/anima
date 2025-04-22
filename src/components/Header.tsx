import React, { useState, useEffect } from 'react';
import { Flag, Menu, X } from 'lucide-react';
import { useStore } from '../store/animationStore';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollProgress } = useStore();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Flag className="text-red-600 mr-2" size={28} />
          <span className="text-2xl font-bold">F1 Motion</span>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-red-600" style={{ width: `${scrollProgress * 100}%` }}></div>
        
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-red-500 transition-colors">Teams</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Drivers</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Schedule</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Technology</a></li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm">
          <ul className="py-4 px-4 space-y-4">
            <li><a href="#" className="block py-2 hover:text-red-500 transition-colors">Teams</a></li>
            <li><a href="#" className="block py-2 hover:text-red-500 transition-colors">Drivers</a></li>
            <li><a href="#" className="block py-2 hover:text-red-500 transition-colors">Schedule</a></li>
            <li><a href="#" className="block py-2 hover:text-red-500 transition-colors">Technology</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}