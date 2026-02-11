"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* 🔹 Top Bar */}
      <div className="hidden md:block bg-[#ffcc66] text-[#003366] text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left Section */}
            <div className="flex items-center space-x-3 border-l border-[#003366] pl-3">
              <Link href="/admissions" className="hover:underline">
                Admissions
              </Link>
              <Link href="/student-login" className="hover:underline">
                Student Login
              </Link>
              <Link href="/lms" className="hover:underline">
                LMS Portal
              </Link>
                  <div className="flex items-center space-x-4">
          
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>admissions</span>
            </div>
          </div>

            </div>
      
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-700 transition"
              >
                <FaInstagram size={16} />
              </a>
                <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span>gmail</span>
            </div>
            </div>

            {/* Links */}
          
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <Image className="bg-accent"
                src="/bgrmv.png"
                alt="mySchool Logo"
                width={80}
                height={60}
              />
            
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-[#ffcc66] transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#ffcc66] transition">
                About
              </Link>
              <Link href="/academics" className="hover:text-[#ffcc66] transition">
                Academics
              </Link>
              <Link href="/admissions" className="hover:text-[#ffcc66] transition">
                Admissions
              </Link>
              <Link href="/contact" className="hover:text-[#ffcc66] transition">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#003366] text-white px-4 pb-4 space-y-2">
            <Link href="/" className="block hover:text-[#ffcc66]">Home</Link>
            <Link href="/about" className="block hover:text-[#ffcc66]">About</Link>
            <Link href="/academics" className="block hover:text-[#ffcc66]">Academics</Link>
            <Link href="/admissions" className="block hover:text-[#ffcc66]">Admissions</Link>
            <Link href="/contact" className="block hover:text-[#ffcc66]">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
