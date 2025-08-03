"use client"

import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    text: "ADmyBRAND AI transformed our content strategy completely. Their AI generates content that perfectly matches our brand voice - an invaluable creative partner.",
    author: "Gabrielle Williams",
    position: "Head of Marketing, Stellar Media",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    text: "Exceeded our expectations with innovative campaigns that brought our marketing vision to life - a truly remarkable AI tool.",
    author: "Samantha Johnson", 
    position: "VP of Brand Strategy, Bluewave Inc.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 3,
    text: "Their ability to generate high-converting content is unparalleled - an incredible marketing collaborator.",
    author: "Isabella Rodriguez",
    position: "Content Director, NovaTech",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    text: "From concept to execution, their AI creativity knows no bounds - a game-changer for our brand's marketing success.",
    author: "Natalie Martinez",
    position: "Senior Campaign Manager, Orbit Solutions",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 5,
    text: "A refreshing and innovative AI tool that consistently delivers exceptional marketing results - highly recommended for any business.",
    author: "Victoria Thompson",
    position: "Digital Marketing Lead, Apex Group",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    id: 6,
    text: "Their AI's strategic approach resulted in remarkable campaign performance - a reliable creative partner.",
    author: "John Peterson",
    position: "Growth Specialist, Quantum Marketing",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
]

export function TestimonialsSection() {
  // Marquee animation duration (seconds)
  const ANIMATION_DURATION = 30

  // Duplicate testimonials for seamless loop
  const marqueeTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-purple-700 text-white text-xs font-semibold shadow">
            <span className="mr-2">★</span> Rated 4/5 by over 1 Lakh users
          </span>
        </div>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-white">
          Words of praise from others about our presence.
        </h2>
        <div className="overflow-hidden rounded-2xl bg-[#232347] shadow-2xl px-2 py-8">
          <div
            className="flex items-center"
            style={{
              animation: `marquee ${ANIMATION_DURATION}s linear infinite`,
              minWidth: 'max-content',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.animationPlayState = 'paused'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.animationPlayState = 'running'
            }}
          >
            {marqueeTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#232347] border border-purple-900 rounded-xl shadow-lg mx-3 w-[320px] flex-shrink-0 p-6 flex flex-col justify-between h-[260px]"
                style={{ minWidth: '320px', maxWidth: '320px' }}
              >
                <div className="mb-4 flex flex-col flex-1">
                  <Quote className="h-5 w-5 text-purple-400 mb-2" />
                  <p className="text-white/80 text-sm leading-normal min-h-[70px] flex items-start text-left">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={36}
                    height={36}
                    className="rounded-full object-cover border-2 border-purple-400 mr-3"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-purple-300 text-xs">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  )
}
