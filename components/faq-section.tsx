"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How does ADmyBRAND's AI content generation work?",
    answer:
      "Our AI analyzes your brand voice, industry context, and target audience to generate high-quality content. Simply input your requirements, and our AI will create engaging content optimized for your specific marketing needs, from blog posts to social media content.",
  },
  {
    question: "Can I maintain my brand's unique voice with AI-generated content?",
    answer:
      "Absolutely! Our Brand Voice Engine learns your unique style, tone, and messaging guidelines through AI training. You can customize voice settings, and our system ensures consistency across all generated content while maintaining your brand's authenticity.",
  },
  {
    question: "What types of content can the AI create?",
    answer:
      "Our AI can generate various content types including blog posts, social media updates, email campaigns, ad copy, landing page content, product descriptions, and more. All content is SEO-optimized and can be customized for different platforms and audiences.",
  },
  {
    question: "How does the campaign optimization feature work?",
    answer:
      "Our AI continuously analyzes your campaign performance across all channels, providing real-time insights and automated optimizations. It handles A/B testing, audience targeting, budget allocation, and provides actionable recommendations to improve ROI.",
  },
  {
    question: "Is there a limit to how much content I can generate?",
    answer:
      "Content generation limits depend on your plan. Free users can create up to 5 AI-generated posts per month, Professional users get 100 posts, and Enterprise users have unlimited generation. All plans include our full suite of optimization tools.",
  },
  {
    question: "Can I try ADmyBRAND before committing?",
    answer:
      "Yes! We offer a 14-day free trial of our Professional plan with no credit card required. You'll have full access to all features including AI content generation, campaign optimization, and analytics tools to experience the full power of our platform.",
  },
  {
    question: "How do you ensure content quality and accuracy?",
    answer:
      "Our AI is trained on high-quality marketing content and continuously updated with industry best practices. We use advanced algorithms to ensure accuracy, and all content can be easily reviewed and edited before publishing. Our system also learns from your feedback to improve over time.",
  },
  {
    question: "What makes ADmyBRAND different from other AI marketing tools?",
    answer:
      "ADmyBRAND uniquely combines advanced AI content generation with comprehensive campaign management and brand voice preservation. Our focus on maintaining brand authenticity while maximizing marketing efficiency sets us apart from generic AI writing tools.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent inline-block mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            Learn more about ADmyBRAND AI Suite&apos;s powerful marketing features
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border border-purple-500/10 hover:border-purple-500/20 rounded-lg px-6 animate-fade-in-up transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="text-base font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-white/80 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-4">
            <p className="text-white/80 text-base">
              Still have questions about our AI marketing suite?
            </p>
            <p className="text-sm text-white/60">
              Our AI experts are ready to help you get started
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient" 
              size="lg"
              className="glass-button shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 cursor-pointer"
            >
              Schedule a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-purple-500/20 text-white hover:border-purple-500/40 hover:bg-purple-500/10 cursor-pointer"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
