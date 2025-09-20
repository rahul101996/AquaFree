// components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navLinks = [
  {
    name: 'Home',
    href: '/',
    dropdown: [
      { name: 'Our Team', href: '/team' },
      { name: 'Service', href: '/service' },
    ],
  },
  { name: 'About Us', href: '/about' },
  {
    name: 'Pages',
    href: '#',
    dropdown: [
      { name: 'Why Choose Us', href: '/why-choose-us' },
      { name: 'Testimonial', href: '/testimonials' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Login & Register', href: '/login-register' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo2.png"
              alt="Techwix Logo"
              width={120}
              height={32}
            />
          </Link>
        </div>

        {/* Middle Section: Navigation Links (Desktop) */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            // CHANGED: Added padding to the bottom (pb-4) to create the "invisible bridge"
            <div
              key={link.name}
              className="relative py-2" // py-2 to maintain vertical alignment
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDownIcon
                    className={`ml-1 h-4 w-4 text-gray-400 transition-transform ${
                      openDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>
              {link.dropdown && openDropdown === link.name && (
                // CHANGED: Positioned relative to the new padded container using 'top-full'
                <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2 z-50">
                  <div className="w-48 rounded-md bg-white p-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {link.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block rounded-md px-3 py-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Icons and Button */}
        <div className="flex items-center gap-x-4">
          
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 text-base font-semibold text-white shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;