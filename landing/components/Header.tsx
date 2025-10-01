'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="print:hidden fixed top-4 left-4 right-4 md:top-10 md:left-10 md:right-10 flex flex-col items-center gap-y-4 z-50">
      {/* Mobile Navigation */}
      <nav className="md:hidden relative w-full rounded-3xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg z-10 overflow-hidden">
        <div className="flex items-center h-14 justify-between px-6">
          <a className="block w-max flex-shrink-0" aria-label="AugmentOS" href="/">
            <span className="text-2xl font-bold text-black">AugmentOS</span>
          </a>
          <button 
            title="Toggle menu" 
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" 
                 className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
              <path d="M1 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
              <path d="M9 17.0001L9 1.00012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Content */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 pb-6 pt-2 border-t border-black/10">
            <ul className="space-y-4 mb-6">
              <li>
                <a className="block py-2 text-lg font-medium text-black/70 hover:text-black transition-colors" 
                   href="/enterprise" onClick={() => setIsMobileMenuOpen(false)}>
                  Enterprise
                </a>
              </li>
              <li>
                <a className="block py-2 text-lg font-medium text-black/70 hover:text-black transition-colors" 
                   href="/features" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </a>
              </li>
            </ul>
            <div className="space-y-3">
              <a className="w-full h-12 rounded-xl text-white bg-black px-6 text-sm font-medium flex items-center justify-center hover:bg-black/90 transition-colors" 
                 href="#download">
                Download AugmentOS
              </a>
              <button className="w-full h-12 rounded-xl text-black bg-black/5 px-6 text-sm font-medium flex items-center justify-center gap-3 hover:bg-black/10 transition-colors">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.24658 12.4229C0.978027 12.4229 0.763184 12.3252 0.602051 12.1299C0.445801 11.9395 0.367676 11.6855 0.367676 11.3682V1.07031C0.367676 0.75293 0.445801 0.499023 0.602051 0.308594C0.763184 0.118164 0.978027 0.0229492 1.24658 0.0229492C1.39307 0.0229492 1.53223 0.0498047 1.66406 0.103516C1.7959 0.152344 1.93506 0.218262 2.08154 0.30127L10.6216 5.24512C10.9292 5.4209 11.1416 5.57959 11.2588 5.72119C11.3809 5.85791 11.4419 6.02393 11.4419 6.21924C11.4419 6.41455 11.3809 6.58301 11.2588 6.72461C11.1416 6.86133 10.9292 7.02002 10.6216 7.20068L2.08154 12.1372C1.93506 12.2251 1.7959 12.2935 1.66406 12.3423C1.53223 12.396 1.39307 12.4229 1.24658 12.4229Z" fill="black"></path>
                </svg>
                Watch demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex h-52 rounded-20 w-full items-center justify-between md:p-6 pt-12 z-10 relative text-primary">
        <div className="px-20 h-50 rounded-16 flex gap-20 items-center bg-white/90 backdrop-blur-xl border border-black/10 shadow-lg">
          <a className="w-max transition-opacity duration-200 hover:opacity-70" aria-label="AugmentOS" href="/">
            <span className="text-2xl font-bold text-black">AugmentOS</span>
          </a>
          <ul className="flex gap-20">
            <li>
              <a className="text-xl font-medium text-black/70 hover:text-black transition-colors duration-200" href="/enterprise">
                Enterprise
              </a>
            </li>
            <li>
              <a className="text-xl font-medium text-black/70 hover:text-black transition-colors duration-200" href="/features">
                Features
              </a>
            </li>
          </ul>
        </div>
        <a className="h-50 rounded-16 text-white bg-black px-24 text-xl font-medium flex items-center justify-center hover:bg-black/90 transition-colors duration-200 backdrop-blur-xl" 
           href="#download">
          Download AugmentOS
        </a>
      </nav>
    </header>
  );
}
