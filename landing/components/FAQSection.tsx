'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes AugmentOS different from other browsers?",
      answer: "AugmentOS is the first enterprise-grade browser with built-in AI agents. Unlike Chrome or Safari, AugmentOS prioritizes privacy and automation, letting you automate repetitive tasks using just natural language — 'scrap prices from this page and add it to a spreadsheet' — no coding needed."
    },
    {
      question: "What AI models does AugmentOS support?",
      answer: "AugmentOS supports OpenAI GPT models, Anthropic Claude, Google Gemini, and local models through Ollama and LMStudio. You can bring your own API keys and easily switch between providers."
    },
    {
      question: "What operating systems does AugmentOS support?",
      answer: "AugmentOS currently supports macOS, Windows, and Linux. The browser runs on the same system requirements as Google Chrome or Safari."
    },
    {
      question: "Is AugmentOS compatible with Chrome extensions?",
      answer: "Yes! AugmentOS is a Chromium fork, so all your favorite Chrome extensions work seamlessly. You can import your existing bookmarks, passwords, and extensions from Chrome with just a few clicks."
    },
    {
      question: "How much does AugmentOS cost?",
      answer: "AugmentOS offers flexible pricing plans for enterprise teams. Contact our sales team for custom pricing based on your organization's needs and requirements."
    },
    {
      question: "Can I get a demo or trial?",
      answer: "Yes! We offer free trials for enterprise teams. Contact our sales team to schedule a personalized demo and discuss your specific use cases."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div 
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Got more questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our enterprise team is here to help you get the most out of AugmentOS.
            </p>
            <a
              href="mailto:sales@augmentos.com"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
