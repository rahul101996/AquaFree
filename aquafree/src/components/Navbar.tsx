"use client"
// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, ShoppingCart } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Our Services',
    href: '/services'
  },
  {
    label: 'Pages',
    href: '/pages',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Process', href: '/process' },
      { label: 'Our Clients', href: '/clients' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Our Team', href: '/team' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Tools', href: '/tools' }
    ]
  },
  {
    label: 'Portfolio',
    href: '/portfolio'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Store',
    href: '/store'
  },
  {
    label: 'Contacts',
    href: '/contacts'
  }
];

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className={`bg-transparent backdrop-blur-sm z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              Planty
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && hoveredItem === item.label && (
                    <div className="absolute z-20 top-full left-0 mt-2 w-64 bg-gray-800 bg-opacity-95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 animate-in fade-in-0 zoom-in-95 duration-200">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 p-2 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/quote"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-white hover:text-gray-300 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Fixed side elements */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          <button className="bg-red-600 hover:bg-red-700 text-white p-3 transition-colors duration-200">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white p-3 transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white p-3 transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;