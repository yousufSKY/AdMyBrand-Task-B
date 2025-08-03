"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, BrainCircuit } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on scroll
  useEffect(() => {
    if (isMenuOpen) {
      const handleScroll = () => setIsMenuOpen(false)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  // Close menu on resize (if screen becomes larger than mobile breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-gradient-to-b from-black/80 to-black/60 border-b border-white/5 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 relative z-50">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <BrainCircuit className="text-white h-6 w-6" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ADmyBRAND <span className="text-blue-400">AI Suite</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="relative text-gray-300 hover:text-white transition-all duration-300 group font-medium text-sm">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="relative text-gray-300 hover:text-white transition-all duration-300 group font-medium text-sm">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="relative text-gray-300 hover:text-white transition-all duration-300 group font-medium text-sm">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-300 hover:text-white transition-all duration-300 group font-medium text-sm">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="relative overflow-hidden group px-6 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-lg cursor-pointer"
              >
                <span className="relative z-10">Sign In</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button 
                className="relative overflow-hidden group px-6 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 cursor-pointer"
              >
                <span className="relative z-10">Start Free Trial</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-white/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></span>
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-gray-300 hover:text-white hover:bg-white/10 rounded-xl p-2 transition-all duration-200 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`fixed inset-0 top-[80px] z-30 md:hidden transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Backdrop */}
            <div 
              className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`} 
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div 
              className={`relative bg-gradient-to-b from-gray-900 to-gray-950/95 backdrop-blur-lg border-t border-white/5 transform transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-2'
              }`}
            >
              <div className="container mx-auto px-4 py-4 space-y-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                <div className="space-y-1">
                  <a
                    href="#features"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const element = document.getElementById('features')
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY
                        const offsetPosition = elementPosition - headerOffset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="block py-3 px-3 -mx-3 text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const element = document.getElementById('pricing')
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY
                        const offsetPosition = elementPosition - headerOffset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="block py-3 px-3 -mx-3 text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Pricing
                  </a>
                  <a
                    href="#testimonials"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const element = document.getElementById('testimonials')
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY
                        const offsetPosition = elementPosition - headerOffset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="block py-3 px-3 -mx-3 text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const element = document.getElementById('contact')
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY
                        const offsetPosition = elementPosition - headerOffset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="block py-3 px-3 -mx-3 text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Contact
                  </a>
                </div>
                
                <div className="pt-4 space-y-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full justify-center py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 border border-white/10 cursor-pointer"
                  >
                    Sign In
                  </Button>
                  <Button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full justify-center py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/20 cursor-pointer"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
