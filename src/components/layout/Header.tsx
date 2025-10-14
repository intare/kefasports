'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SiteSettings {
  title?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
  };
}

interface HeaderProps {
  siteSettings?: SiteSettings;
}

const Header: React.FC<HeaderProps> = ({ siteSettings }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away to update state with initial scroll position
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Prevent hydration mismatch by using consistent initial state
  const headerClasses = `header-black bg-black shadow-sm sticky top-0 z-50 w-full transition-all duration-300 ${
    mounted && scrolled ? 'shadow-md' : ''
  }`;

  return (
    <header
      className={headerClasses}
      style={{
        backgroundColor: '#000000',
        borderBottom: '1px solid #333'
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Placeholder */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-white">
            {/* Replace with SVG Logo Component later */}
            <Image src="/logo-white.png" alt={siteSettings?.title || "KefaSports"} width={100} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Info & CTA */}
        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
          <a
            href={`tel:${siteSettings?.contactInfo?.phone || '+250787666677'}`}
            className="flex items-center text-sm text-gray-300 hover:text-brand-accent transition-colors duration-200 group"
            onClick={() => {
              // Track phone call click
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_call', {
                  event_category: 'contact',
                  event_label: 'header_phone_click'
                });
              }
            }}
          >
            <svg className="h-4 w-4 mr-2 group-hover:text-brand-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden lg:inline">{siteSettings?.contactInfo?.phone || '+250 787 666 677'}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-brand-white bg-brand-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="-mr-2 flex items-center sm:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {/* Hamburger Icon */}
            <svg
              className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />

          {/* Menu Panel */}
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-brand-dark">{siteSettings?.title || 'KefaSports'}</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-accent hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="px-6 py-4 border-t border-gray-200 mt-4">
              <div className="space-y-3">
                <a
                  href={`tel:${siteSettings?.contactInfo?.phone || '+250787666677'}`}
                  className="flex items-center text-brand-accent font-semibold hover:text-brand-dark transition-colors"
                >
                  <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteSettings?.contactInfo?.phone || '+250 787 666 677'}
                </a>
                <Link
                  href="/contact"
                  className="block w-full bg-brand-accent text-white text-center py-3 px-4 rounded-md font-semibold hover:bg-brand-dark transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



