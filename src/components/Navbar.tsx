import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const navLinks = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'About Us',
  to: '/about'
},
{
  label: 'Services',
  to: '/services'
},
{
  label: 'Industries',
  to: '/industries'
},
{
  label: 'Why Us',
  to: '/why-us'
},

];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full flex justify-between items-center py-5 px-8 md:px-16 lg:px-24 z-50 transition-all duration-300 bg-bgDark ${scrolled ? 'shadow-lg shadow-black/10' : ''}`}>
      
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center select-none focus:outline-none focus:ring-2 focus:ring-accentCyan rounded-sm"
        aria-label="Go to homepage">
        
        <img
          src="/digivera_logo.jpg"
          alt="DigiVera Technologies India Pvt. Ltd."
          className="h-10 md:h-12 w-auto object-contain" />
        
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => {
          const active = location.pathname === link.to;
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-body font-medium px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accentCyan ${active ? 'text-accentCyan bg-white/5' : 'text-white/70 hover:text-accentCyan hover:bg-white/5'}`}>
                
                {link.label}
              </Link>
            </li>);

        })}
      </ul>

      {/* Mobile Hamburger */}
      <div className="relative md:hidden">
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[60] text-white hover:text-accentCyan transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accentCyan focus:ring-offset-2 focus:ring-offset-bgDark rounded-sm">
          
          {isOpen ?
          <X size={28} strokeWidth={2} /> :

          <Menu size={28} strokeWidth={2} />
          }
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full right-0 mt-4 w-64 bg-[#0e2236]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          role="menu"
          aria-label="Navigation menu">
          
          <div className="py-4 px-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      role="menuitem"
                      className={`block text-lg font-body font-medium py-3 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accentCyan ${active ? 'text-accentCyan bg-white/5' : 'text-white/80 hover:text-accentCyan hover:bg-white/5'}`}>
                      
                      {link.label}
                    </Link>
                  </li>);

              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>);

}