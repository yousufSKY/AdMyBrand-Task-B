"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PenTool, TrendingUp, Sparkles, Share2 } from "lucide-react"
export function HeroSection() {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 transition-all duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 animate-fade-in-up stagger-1">
            <div className="flex -space-x-1">
              <Avatar className="w-6 h-6 border border-background">
                <AvatarFallback 
                  className="bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://i.pravatar.cc/24?img=1)' }}
                />
              </Avatar>
              <Avatar className="w-6 h-6 border border-background">
                <AvatarFallback 
                  className="bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://i.pravatar.cc/24?img=2)' }}
                />
              </Avatar>
              <Avatar className="w-6 h-6 border border-background">
                <AvatarFallback 
                  className="bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://i.pravatar.cc/24?img=3)' }}
                />
              </Avatar>
              <Avatar className="w-6 h-6 border border-background">
                <AvatarFallback 
                  className="bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://i.pravatar.cc/24?img=4)' }}
                />
              </Avatar>
            </div>
            <span className="text-white/80 text-sm">
              <span className="font-medium text-white">+1,254 happy customers</span>{" "}
              <span className="text-white/60">Trusted by leading brands</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in-up stagger-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Transform Your Marketing with{" "}
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent mt-2 sm:mt-4">
              Precision and Creativity 🚀
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6">
              Generate compelling content, optimize campaigns, and scale your brand like never before with our comprehensive AI marketing suite.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="glass border-purple-500/20 text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer text-sm px-5 py-2.5 rounded-md"
            >
              Watch Demo
            </Button>
            <Button 
              variant="gradient" 
              size="sm"
              className="glass-button shadow-sm shadow-purple-500/10 hover:shadow-purple-500/30 cursor-pointer text-sm px-5 py-2.5 rounded-md"
              aria-label="Start Free Trial"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up stagger-4">
            <Badge variant="feature" className="text-sm cursor-pointer hover:scale-105 transition-transform">
              <PenTool className="w-3 h-3 mr-1" />
              AI Content Creation
            </Badge>
            <Badge variant="feature" className="text-sm cursor-pointer hover:scale-105 transition-transform">
              <TrendingUp className="w-3 h-3 mr-1" />
              Campaign Optimization
            </Badge>
            <Badge variant="feature" className="text-sm cursor-pointer hover:scale-105 transition-transform">
              <Sparkles className="w-3 h-3 mr-1" />
              Brand Voice AI
            </Badge>
            <Badge variant="feature" className="text-sm cursor-pointer hover:scale-105 transition-transform">
              <Share2 className="w-3 h-3 mr-1" />
              Social Media
            </Badge>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20 animate-fade-in-up stagger-5">
          <p className="text-center text-white/60 text-sm mb-8">Trusted by innovative teams worldwide</p>
          <div className="relative w-full overflow-hidden">
            <style>{`
              @keyframes logo-marquee {
                0% { transform: translate3d(0,0,0); }
                100% { transform: translate3d(-50%,0,0); }
              }
              .logo-marquee {
                display: flex;
                gap: 3rem;
                min-width: 200%;
                animation: logo-marquee 32s linear infinite;
                will-change: transform;
                align-items: center;
              }
              .logo-marquee:hover {
                animation-play-state: paused;
              }
              .logo-item {
                display: flex;
                align-items: center;
                gap: 1.2rem;
                font-size: 1.5rem;
                color: #e5e7eb;
                opacity: 0.7;
                padding: 0.5rem 1.5rem;
                min-width: 160px;
                max-width: 220px;
                justify-content: flex-start;
              }
              .logo-svg {
                width: 2.5rem;
                height: 2.5rem;
                flex-shrink: 0;
                opacity: 0.8;
                background: transparent;
                border-radius: 0.5rem;
              }
              @media (max-width: 900px) {
                .logo-marquee {
                  gap: 2rem;
                }
                .logo-item {
                  font-size: 1.1rem;
                  padding: 0.5rem 1rem;
                  min-width: 120px;
                  max-width: 160px;
                }
                .logo-svg {
                  width: 1.5rem;
                  height: 1.5rem;
                }
              }
            `}</style>
            <div className="logo-marquee opacity-80 py-2">
              {Array.from({ length: 5 }).flatMap(() => ([
                { name: "SAMSUNG", svg: <svg className="logo-svg" viewBox="0 0 32 32"><rect x="4" y="10" width="24" height="12" rx="6" fill="#e5e7eb" /></svg> },
                { name: "DATADOG", svg: <svg className="logo-svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#e5e7eb" /><rect x="10" y="10" width="12" height="12" fill="#222" /></svg> },
                { name: "stripe", svg: <svg className="logo-svg" viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="16" rx="4" fill="#e5e7eb" /></svg> },
                { name: "monday.com", svg: <svg className="logo-svg" viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="12" ry="8" fill="#e5e7eb" /></svg> },
                { name: "RIPPLING", svg: <svg className="logo-svg" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="4" fill="#e5e7eb" /></svg> },
                { name: "perplexity", svg: <svg className="logo-svg" viewBox="0 0 32 32"><polygon points="16,4 28,28 4,28" fill="#e5e7eb" /></svg> },
                { name: "ramp", svg: <svg className="logo-svg" viewBox="0 0 32 32"><path d="M4 28 L28 4" stroke="#e5e7eb" strokeWidth="4"/></svg> },
                { name: "shopify", svg: <svg className="logo-svg" viewBox="0 0 32 32"><rect x="10" y="10" width="12" height="12" rx="3" fill="#e5e7eb" /></svg> },
                { name: "US FOODS", svg: <svg className="logo-svg" viewBox="0 0 32 32"><rect x="6" y="14" width="20" height="4" fill="#e5e7eb" /></svg> },
                { name: "mercado libre", svg: <svg className="logo-svg" viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="12" ry="7" fill="#e5e7eb" /></svg> }
              ])).map((item, idx) => (
                <div
                  key={idx}
                  className="logo-item font-semibold whitespace-nowrap transition-transform duration-300 cursor-pointer hover:opacity-100 hover:scale-105"
                  style={{ flex: '0 0 auto' }}
                >
                  {item.svg}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}