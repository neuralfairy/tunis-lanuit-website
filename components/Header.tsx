"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-4 text-center text-sm">
        <span className="mr-4">🚀 Start your free 7-day trial today!</span>
        <Link href="/contact" className="underline hover:no-underline font-semibold">
          Get Started Free
        </Link>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Tunislanuit</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-teal-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-teal-600 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/contact" className="btn-secondary">
                Book Demo
              </Link>
              <Link href="/contact" className="btn-primary">
                Start Free Trial
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/" className="text-gray-700 hover:text-teal-600">
                  Home
                </Link>
                <Link href="/features" className="text-gray-700 hover:text-teal-600">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-teal-600">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-teal-600">
                  About
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-teal-600">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-teal-600">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/contact" className="btn-secondary text-center">
                    Book Demo
                  </Link>
                  <Link href="/contact" className="btn-primary text-center">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
