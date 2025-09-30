'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      tag: "Local AI Agent",
      title: "Build agents with natural language",
      description: "Automate any task—from scraping websites to filling out forms—just by describing what you want to do in plain language. AugmentOS translates your words into a repeatable agent that runs locally, giving you custom automation without code."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-8-2h2v-2h-2v2zm0-4h2V9h-2v4zm0-4h2V5h-2v2z"/>
        </svg>
      ),
      tag: "Split View",
      title: "ChatGPT, Claude, Gemini on any website",
      description: "Summarize articles, draft documents, or get answers without ever leaving the page you are on by opening your favorite AI model in a side panel - ChatGPT, Gemini, Claude or Grok!"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      tag: "Integrations",
      title: "Install any MCP server",
      description: "AugmentOS comes with pre-installed MCP servers for Gmail, Calendar, Docs, Sheets, and Notion. One-click install any other MCP server — your browser becomes the command center for all work tools."
    }
  ]

  const renderAgentGenerator = () => (
    <div className="relative">
      {/* Background Image Mock */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden">
        <div className="w-full h-full opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Crect width='60' height='60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Agent Generator Panel */}
      <div className="relative bg-white rounded-xl p-6 shadow-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Agent generator</h3>
          <div className="flex space-x-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Run
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
              </svg>
              Save
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CURRENT PLAN</label>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-900">Goal:</span>
                <p className="text-sm text-gray-600 mt-1">Extract Tesla Model 3 prices and add them to a Google Sheet.</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900">Steps:</span>
                <ol className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>1. Navigate to the Tesla website</li>
                  <li>2. Locate and click on the 'inventory' or similar button for vehicles</li>
                  <li>3. Select the 'Model 3' vehicle</li>
                  <li>4. Extract the prices of the Model 3 and its available configurations/options</li>
                  <li>5. Check if Google Sheets MCP server is installed and get server URL</li>
                  <li>6. Get available tools from Google Sheets MCP server</li>
                  <li>7. Use Google Sheets MCP to add the extracted prices to a new or existing Google Sheet</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Make Your
            <span className="text-orange-500 italic"> Life</span>
            <br />
            Easier with AugmentOS
          </motion.h2>
        </div>

        {/* Features Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Feature Cards */}
          <div className="space-y-4 order-1 lg:order-1 lg:col-span-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-orange-50 border-2 border-orange-200'
                    : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-xl ${
                    activeTab === index ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Agent Generator */}
          <div className="relative order-2 lg:order-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {renderAgentGenerator()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
