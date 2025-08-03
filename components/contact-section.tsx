"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Transform Your Marketing with ADmyBRAND AI Suite
          </h2>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            Ready to revolutionize your marketing? Get in touch to learn how ADmyBRAND AI Suite can enhance your content creation and campaign performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card variant="glass" className="shadow-xl animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/80">
                    Thank you for your message. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Tell us about your team and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="gradient"
                    className="w-full cursor-pointer"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Let&apos;s start a conversation</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Whether you&apos;re looking to improve team communication, need a custom solution, or just want to learn
                more about how ADmyBRAND can transform your workflow, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-base">Email Us</h4>
                  <p className="text-sm text-white/80">hello@admybrand.com</p>
                  <p className="text-sm text-white/80">support@admybrand.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-base">Call Us</h4>
                  <p className="text-sm text-white/80">+1 (555) 123-4567</p>
                  <p className="text-xs text-white/60">Mon-Fri 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-base">Visit Us</h4>
                  <p className="text-sm text-white/80">
                    123 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-white mb-4 text-base">Ready to get started?</h4>
              <Button variant="gradient" className="mr-4 cursor-pointer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
