'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DemoSection() {
  const [currentDemo, setCurrentDemo] = useState(0)

  const demos = [
    {
      title: "Automated Research",
      description: "AI agent researching competitors and compiling reports",
      screenshots: [
        { url: "google.com/search?q=competitor+analysis", title: "Searching for competitors..." },
        { url: "crunchbase.com/company/example", title: "Analyzing company data..." },
        { url: "linkedin.com/company/example", title: "Gathering insights..." },
        { url: "docs.google.com/spreadsheets", title: "Compiling report..." }
      ]
    },
    {
      title: "Data Extraction",
      description: "Extracting product information from e-commerce sites",
      screenshots: [
        { url: "amazon.com/product/example", title: "Scanning product details..." },
        { url: "shopify.com/store/example", title: "Extracting pricing data..." },
        { url: "etsy.com/listing/example", title: "Collecting reviews..." },
        { url: "sheets.google.com/spreadsheets", title: "Organizing data..." }
      ]
    },
    {
      title: "Content Creation",
      description: "AI writing and publishing content across platforms",
      screenshots: [
        { url: "notion.so/workspace/content", title: "Drafting content..." },
        { url: "medium.com/@user/new-story", title: "Publishing article..." },
        { url: "linkedin.com/feed", title: "Sharing on social..." },
        { url: "mailchimp.com/campaigns", title: "Sending newsletter..." }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [demos.length])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            See AugmentOS in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Watch how AI agents automate complex workflows across multiple websites and applications
          </motion.p>
        </div>

        {/* Demo Container */}
        <div className="relative">
          {/* Demo Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentDemo === index
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDemo}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {demos[currentDemo].title}
                </h3>
                <p className="text-gray-600">
                  {demos[currentDemo].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Browser Mockup */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-t-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 ml-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <span className="text-gray-300 text-sm">
                        {demos[currentDemo].screenshots[0]?.url}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="bg-white rounded-b-lg overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentDemo}-0`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100"
                  >
                    {/* Mock Website Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                          </div>
                          <div>
                            <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-24"></div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-16 h-8 bg-gray-200 rounded"></div>
                          <div className="w-16 h-8 bg-gray-200 rounded"></div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                      </div>

                      <div className="mt-8 grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-3 bg-gray-100 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Agent Indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>AI Agent Active</span>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white rounded-lg p-3 shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {demos[currentDemo].screenshots[0]?.title}
                          </span>
                          <span className="text-xs text-gray-500">Step 1 of 4</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "25%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-orange-500 h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Multiple Browser Windows */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {demos[currentDemo].screenshots.slice(1).map((screenshot, index) => (
                <motion.div
                  key={`${currentDemo}-${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-800 p-2">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xs">A</span>
                      </div>
                      <div className="text-xs text-gray-600 px-2 text-center">
                        {screenshot.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
