'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState(0)

  const workFeatures = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2l-2-2H8L6 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
        </svg>
      ),
      tag: "Productivity",
      title: "Next-gen productivity",
      description: "Turn your browser into a second brain — search history and bookmarks by meaning, not just keywords. The built-in highlighter keeps important bits right where you found them. No more lost research."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      ),
      tag: "Privacy",
      title: "True privacy with local LLMs",
      description: "Run models locally with Ollama or bring your own API keys for cloud models. Your company and work data stay on your machine unless you choose to send it out."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      tag: "Personal Assistant",
      title: "Your executive assistant, built in",
      description: "Our built-in AI assistant connects to your work apps like Gmail and Calendar to draft replies and schedule meetings. You focus on the real work — your browser handles the rest."
    }
  ]

  const renderBrowserMockup = () => (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Browser Tabs */}
      <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex space-x-1 ml-4">
          <div className="px-3 py-1 bg-gray-200 rounded-t text-xs text-gray-600">New Tab</div>
          <div className="px-3 py-1 bg-white rounded-t text-xs text-gray-900 border-b-2 border-orange-500">AugmentOS - Enterprise</div>
          <div className="px-3 py-1 bg-gray-200 rounded-t text-xs text-gray-600">aiaugments-collab</div>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-white px-4 py-2 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 ml-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span className="text-gray-600 text-sm">augmentos.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-white p-6">
        {/* Article Header Image */}
        <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            <p className="text-sm">Article Header Image</p>
          </div>
        </div>

        {/* Article URL */}
        <p className="text-xs text-gray-500 mb-4">sic.com/engineering/writing-tools-for-agents</p>

        {/* Article Content */}
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            Too many tools or overlapping tools can also distract agents from pursuing efficient strategies.
          </p>
          <p>
            <span className="bg-yellow-200 px-1">Your AI agents will potentially gain access to dozens of MCP servers and hundreds of different tools-inclu</span>
          </p>
          <p>
            <span className="bg-yellow-200 px-1">When tools overlap in function or hav get confused about which ones to use,</span>
          </p>
          <p>
            Namespacing your tools.
          </p>
        </div>

        {/* Bookmark Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
            Bookmark
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex space-x-4">
              <span>Claude</span>
              <span>API</span>
              <span>Solutions</span>
              <span>Research</span>
              <span>Commit</span>
            </div>
            <div className="flex space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            AugmentOS for
            <span className="text-orange-500 italic"> Work</span>
          </motion.h2>
        </div>

        {/* Work Features - Reversed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Browser Mockup - Takes 2 columns */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderBrowserMockup()}
            </motion.div>
          </div>

          {/* Feature Cards - Takes 1 column */}
          <div className="space-y-4 order-1 lg:order-2 lg:col-span-1">
            {workFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
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
        </div>
      </div>
    </section>
  )
}
