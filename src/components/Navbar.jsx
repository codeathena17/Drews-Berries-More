import React, { useState } from 'react';

const Navbar = () => {
  // Mock states for UI checking
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMember = true; // Toggle to check member view
  const credits = 120;
  const currentPath = '/about'; 

  const navItems = [
    { label: 'Association', path: '/about' },
    { label: 'Membership', path: '/membership' },
    { label: 'Farm Offerings', path: '/exchange' },
    { label: 'Cabins & Stays', path: '/stays' },
    { label: 'Mutual Aid', path: '/aid' },
    { label: 'Contact', path: '/contact' },
  ];

  // Helper for conditional classes
  const getLinkClass = (path, isMobile = false) => {
    const base = isMobile ? "block text-lg" : "text-sm font-medium transition-colors";
    const active = currentPath === path ? 'text-earth-deep font-bold' : 'text-earth-sage hover:text-earth-deep';
    return `${base} ${active}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-earth-tan" style={{ fontFamily: 'sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-earth-deep">LOGO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} className={getLinkClass(item.path)}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Member Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isMember && (
              <div className="bg-earth-cream px-4 py-2 rounded-full flex items-center gap-2 border border-earth-tan">
                <span className="text-[10px] uppercase tracking-tighter font-bold text-earth-deep">Credits</span>
                <span className="text-lg font-bold text-earth-deep">{credits}</span>
              </div>
            )}
            <a
              href="/membership"
              className="bg-earth-green text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-earth-deep transition-all shadow-sm"
            >
              {isMember ? 'My Portal' : 'Member Access'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-earth-deep">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-earth-tan px-4 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <a key={item.path} href={item.path} className={getLinkClass(item.path, true)}>
              {item.label}
            </a>
          ))}
          <a href="/membership" className="block w-full text-center bg-earth-green text-white px-6 py-4 rounded-full text-sm font-bold shadow-md">
            {isMember ? 'My Portal' : 'Member Access'}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;