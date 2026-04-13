import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Models', href: '#models' },
  { label: 'Areas', href: '#areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const companyInfo = {
  name: 'FixurDevice',
  nameHighlight: 'Device',
  logo: 'levlox_logo.png',
  phone: '9343584460',
  whatsapp: '919663360775',
  whatsappMessage: 'Hi, I need iPhone repair service',
};

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !transparent
          ? 'glass-strong shadow-2xl shadow-primary/20 backdrop-blur-xl border-b border-white/10 bg-black/40'
          : 'bg-transparent border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 sm:h-16 md:h-20 px-2 sm:px-4 md:px-6 lg:px-8">
          
          {/* Logo + Company Name */}
          <a 
            href="/" 
            className="group flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={companyInfo.logo}
              alt="Logo"
              className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden xs:flex items-center gap-1 sm:gap-2">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white tracking-tight whitespace-nowrap">
                Fixur
              </span>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                {companyInfo.nameHighlight}
              </span>
            </div>
            <span className="xs:hidden text-xs font-bold text-white">
              FixurDevice
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink('')}
                className="relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group whitespace-nowrap"
              >
                {link.label}
                <span
                  className={`absolute bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                    activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop Call Button */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
            <a
              href={`tel:${companyInfo.phone}`}
              className="group relative flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-4 sm:px-5 md:px-6 py-2 md:py-2.5 lg:py-3 rounded-lg text-xs sm:text-sm font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone className="w-4 h-4 relative z-10 group-hover:animate-pulse flex-shrink-0" />
              <span className="relative z-10 whitespace-nowrap">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 sm:p-2.5 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-5 sm:w-6 h-5 sm:h-6 animate-rotate" />
            ) : (
              <Menu className="w-5 sm:w-6 h-5 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden glass-strong border-t border-white/10 bg-black/60 backdrop-blur-xl animate-slide-down">
            <div className="w-full px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 max-w-7xl mx-auto">
              
              {/* Mobile Nav Links */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3 sm:my-4" />

              {/* Mobile CTA Buttons */}
              <div className="space-y-2 sm:space-y-3">
                {/* Call Button */}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 active:scale-95 animate-fade-up"
                  style={{ animationDelay: `${navLinks.length * 50}ms` }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Call Now – Free Diagnosis</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 active:scale-95 animate-fade-up"
                  style={{ animationDelay: `${(navLinks.length + 1) * 50}ms` }}
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust Message */}
              <div className="text-center pt-2 sm:pt-4 animate-fade-up" style={{ animationDelay: `${(navLinks.length + 2) * 50}ms` }}>
                <p className="text-xs text-gray-400">
                  ✓ Available 24/7 • Same-day service
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(90deg);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-fade-up {
          animation: fade-up 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-rotate {
          animation: rotate 0.3s ease-out;
        }

        @media (max-width: 640px) {
          nav {
            padding: 0 8px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;