'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 md:top-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 md:border md:rounded-full md:px-6 md:py-3 md:shadow-lg">
      <div className="flex items-center justify-between h-10 md:h-12 px-4 md:px-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-900">AugmentOS</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-1 text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 px-3 py-1 text-sm font-medium transition-colors">
              Use Cases
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 px-3 py-1 text-sm font-medium transition-colors">
              FAQ
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
              if (emailInput) {
                emailInput.focus();
                emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center"
          >
            <span>Get Started</span>
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg px-4 py-3"
        >
          <div className="space-y-2">
            <a href="#features" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
              Use Cases
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-sm font-medium">
              FAQ
            </a>
            <button
              onClick={() => {
                const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailInput) {
                  emailInput.focus();
                  emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                setIsMenuOpen(false);
              }}
              className="bg-gray-900 text-white block px-3 py-2 text-sm font-medium rounded-full mt-2 w-full"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
