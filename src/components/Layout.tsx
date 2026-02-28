import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Star, Shield, Clock, MapPin, Zap } from 'lucide-react';
import { BUSINESS_DETAILS, cn } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Emergency', path: '/emergency' },
    { name: 'EICR', path: '/eicr' },
    { name: 'Fuse Board', path: '/fuseboard' },
    { name: 'Rewires', path: '/rewires' },
    { name: 'Lighting', path: '/lighting' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="emergency-banner">
        🔴 ELECTRICAL EMERGENCY? We're Available RIGHT NOW — 24 Hours, 7 Days a Week. Call: <a href={`tel:${BUSINESS_DETAILS.phone}`} className="underline">{BUSINESS_DETAILS.phoneDisplay}</a>
      </div>
      
      <nav className="bg-primary-bg/90 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-primary-cta fill-primary-cta" />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-tighter text-white">FIXUK</span>
                <div className="flex items-center gap-1 text-[10px] text-secondary-cta font-bold uppercase">
                  <Star className="w-2 h-2 fill-secondary-cta" /> {BUSINESS_DETAILS.rating} Rated
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary-cta",
                    location.pathname === link.path ? "text-primary-cta" : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="bg-primary-cta text-white px-6 py-2 rounded-full font-display font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Phone className="w-4 h-4" /> CALL NOW
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-secondary-bg border-t border-border-subtle overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-4 text-lg font-bold uppercase tracking-wider border-b border-border-subtle/50",
                      location.pathname === link.path ? "text-primary-cta" : "text-gray-300"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 grid grid-cols-1 gap-4">
                  <a 
                    href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="bg-primary-cta text-white py-4 rounded-lg font-display font-bold flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" /> CALL NOW
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary-bg border-t border-border-subtle pt-16 pb-32 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-primary-cta fill-primary-cta" />
              <span className="text-2xl font-display font-black tracking-tighter text-white">FIXUK</span>
            </Link>
            <p className="text-gray-400">
              Birmingham's 24-Hour Electrician. 5.0★ Rated. We're available when you need us most — 3am, weekends, and holidays.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-secondary-cta font-bold">
                <Star className="w-4 h-4 fill-secondary-cta" /> 5.0 Rated
              </div>
              <div className="text-gray-500">|</div>
              <div className="text-gray-400 font-bold">38 Reviews</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/emergency" className="hover:text-primary-cta transition-colors">Emergency Callout</Link></li>
              <li><Link to="/eicr" className="hover:text-primary-cta transition-colors">EICR Certificates</Link></li>
              <li><Link to="/fuseboard" className="hover:text-primary-cta transition-colors">Fuse Boards</Link></li>
              <li><Link to="/rewires" className="hover:text-primary-cta transition-colors">Full Rewires</Link></li>
              <li><Link to="/lighting" className="hover:text-primary-cta transition-colors">Lighting Installation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-cta shrink-0" />
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors">{BUSINESS_DETAILS.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-cta shrink-0" />
                <span>Birmingham & West Midlands Areas</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-cta shrink-0" />
                <span>Open 24 Hours, 7 Days a Week</span>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 uppercase tracking-wider">Accreditations</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-bg p-4 rounded border border-border-subtle flex items-center justify-center font-bold text-xs text-center">
                NICEIC REGISTERED
              </div>
              <div className="bg-primary-bg p-4 rounded border border-border-subtle flex items-center justify-center font-bold text-xs text-center">
                18TH EDITION
              </div>
              <div className="bg-primary-bg p-4 rounded border border-border-subtle flex items-center justify-center font-bold text-xs text-center">
                CITY & GUILDS
              </div>
              <div className="bg-primary-bg p-4 rounded border border-border-subtle flex items-center justify-center font-bold text-xs text-center">
                FULLY INSURED
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} FixUK Electricians. All Rights Reserved. NICEIC Registered.</p>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 h-16 border-t border-border-subtle">
      <a 
        href={`tel:${BUSINESS_DETAILS.phone}`}
        className="bg-primary-cta flex flex-col items-center justify-center gap-1 text-white font-bold text-[10px] uppercase"
      >
        <Phone className="w-5 h-5" /> CALL NOW
      </a>
      <a 
        href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
        className="bg-secondary-cta flex flex-col items-center justify-center gap-1 text-white font-bold text-[10px] uppercase"
      >
        <MessageCircle className="w-5 h-5" /> WHATSAPP
      </a>
      <Link 
        to="/contact"
        className="bg-white flex flex-col items-center justify-center gap-1 text-primary-bg font-bold text-[10px] uppercase"
      >
        <Zap className="w-5 h-5" /> GET QUOTE
      </Link>
    </div>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`}
      className="fixed bottom-20 right-6 lg:bottom-8 lg:right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200"
      aria-label="WhatsApp Us"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        {children}
      </main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppButton />
    </div>
  );
};
