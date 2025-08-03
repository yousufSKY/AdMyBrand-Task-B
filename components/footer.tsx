"use client"

import { Twitter, Linkedin, Youtube, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-white">
                ADmyBRAND AI Suite
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Transform your marketing with AI-powered precision. Generate engaging content, optimize campaigns, 
              and maintain brand consistency with our comprehensive marketing suite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/60 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center">
              <div className="text-white/60 text-sm">© 2025 ADmyBRAND AI Suite. All rights reserved.</div>
              <span className="hidden md:inline mx-2 text-white/60">•</span>
              <div className="text-white/60 text-sm">Designed & Developed by <a href="https://yousufsky.vercel.app" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">yousufSKY</a></div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
