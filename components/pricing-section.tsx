"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for content creators just getting started",
    features: [
      "Up to 5 AI-generated posts per month",
      "Basic content templates",
      "Standard analytics",
      "Email support",
      "1 brand voice profile",
    ],
    popular: false,
    cta: "Get Started for Free"
  },
  {
    name: "Professional",
    monthlyPrice: 12,
    yearlyPrice: 120,
    description: "Ideal for marketing teams and growing brands",
    features: [
      "Up to 100 AI-generated posts per month",
      "Advanced content templates",
      "Campaign optimization tools",
      "Priority support",
      "5 brand voice profiles",
      "Social media scheduling",
      "SEO optimization tools",
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    monthlyPrice: 25,
    yearlyPrice: 250,
    description: "For agencies and large marketing teams",
    features: [
      "Unlimited AI content generation",
      "Custom brand training",
      "Advanced campaign analytics",
      "Dedicated account manager",
      "Unlimited brand voices",
      "API access",
      "White-label options",
      "Custom integrations",
    ],
    popular: false,
    cta: "Contact Sales"
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4">
            Scale Your Content Marketing
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8">
            Choose a plan that grows with your marketing needs. All plans include our AI-powered content generation tools.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-8 sm:mb-12">
            <span
              className={`text-xs sm:text-sm ${!isYearly ? "text-white font-semibold" : "text-white/60"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-5 sm:h-6 w-10 sm:w-11 items-center rounded-full transition-colors ${
                isYearly ? "gradient-primary" : "bg-white/20"
              }`}
            >
              <span
                className={`inline-block h-3.5 sm:h-4 w-3.5 sm:w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-5 sm:translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm ${isYearly ? "text-white font-semibold" : "text-white/60"}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs sm:text-sm gradient-primary text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              variant="glass"
              className={`relative group transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${
                plan.popular
                  ? "border-2 border-purple-500/50 sm:scale-102 lg:scale-105 shadow-lg shadow-purple-500/20"
                  : "hover:border-purple-500/30"
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{plan.name}</CardTitle>
                <div className="mt-3 sm:mt-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-xs sm:text-sm text-white/60">/{isYearly ? "year" : "month"}</span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-white/80 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  className={`w-full ${
                    plan.popular 
                      ? "glass-button shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                      : "glass border-purple-500/20 text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Have questions? Check out our{" "}
            <a href="#faq" className="text-purple-400 hover:text-purple-300 underline">
              FAQ section
            </a>{" "}
            or{" "}
            <a href="#contact" className="text-purple-400 hover:text-purple-300 underline">
              contact our sales team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
