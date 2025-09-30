'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(1) // Start with "Extract" tab

  const useCases = [
    {
      title: "Browse",
      description: "Intelligent browsing with AI-powered insights"
    },
    {
      title: "Extract",
      description: "Automated data extraction and processing"
    },
    {
      title: "Research",
      description: "AI-powered research and analysis tools"
    }
  ]

  const renderTeslaBrowserMockup = () => (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Browser Frame */}
      <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 flex items-center space-x-1">
            <div className="px-3 py-1 bg-white rounded-t text-xs text-gray-900 border-b-2 border-orange-500">
              tesla.com/inventory/new...
            </div>
            <div className="px-2 py-1 bg-gray-200 rounded-t text-xs text-gray-600">
              +
            </div>
          </div>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
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
          <div className="flex-1 bg-gray-100 rounded-md px-3 py-2 ml-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <span className="text-gray-600 text-sm">tesla.com/inventory/new/m37amangeby=savings&zip=94105&range=200</span>
            </div>
          </div>
          <div className="flex space-x-2 ml-2">
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </button>
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex h-96">
        {/* Tesla Website Content */}
        <div className="flex-1 bg-white p-4">
          {/* Tesla Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-6">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>Vehicles</span>
                <span>Energy</span>
                <span>Charging</span>
                <span>Discover</span>
                <span>Shop</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </button>
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-blue-800">2.99% APR for a limited time. Learn More</p>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Inventory</h1>
          <p className="text-gray-600 mb-4">Available now within 200 miles of 94105</p>

          {/* Tabs */}
          <div className="flex space-x-1 mb-4">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium">New</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">Pre-Owned</button>
          </div>

          {/* Filters and Content */}
          <div className="flex space-x-4">
            {/* Left Sidebar Filters */}
            <div className="w-48 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Model</h3>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input type="radio" name="model" className="mr-2" />
                    <span className="text-sm">Model S</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="model" checked className="mr-2" />
                    <span className="text-sm">Model 3</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="model" className="mr-2" />
                    <span className="text-sm">Model X</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="model" className="mr-2" />
                    <span className="text-sm">Model Y</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="model" className="mr-2" />
                    <span className="text-sm">Cybertruck</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input type="radio" name="payment" checked className="mr-2" />
                    <span className="text-sm">Cash</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-sm">Lease</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <span className="text-sm">Finance</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Price Range</h3>
                <div className="text-sm text-gray-600">
                  <span>$34,000</span> - <span>$48,000</span>
                </div>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" checked className="mr-2" />
                  <span className="text-sm">Include $7,500 Federal Tax Credit</span>
                </label>
              </div>
            </div>

            {/* Vehicle Listings */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
                  <h3 className="font-semibold text-gray-900 mb-1">Long Range Rear-Wheel Drive</h3>
                  <p className="text-lg font-bold text-gray-900 mb-1">$37,040</p>
                  <p className="text-sm text-gray-600 mb-1">0 mi • 358 mi range</p>
                  <p className="text-xs text-gray-500">Pearl White Multi-Coat • 18" Aero Wheels • Black Interior</p>
                  {i === 1 && <p className="text-xs text-green-600 mt-1">Reduced by $2,000</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Panel */}
        <div className="w-80 bg-gray-50 border-l border-gray-200">
          {/* Panel Tabs */}
          <div className="flex border-b border-gray-200">
            <button className="px-4 py-2 text-sm text-gray-600 border-b-2 border-transparent">LLM Chat</button>
            <button className="px-4 py-2 text-sm text-gray-600 border-b-2 border-transparent">LLM Hub</button>
            <button className="px-4 py-2 text-sm text-gray-900 border-b-2 border-orange-500 font-medium">Agent</button>
          </div>

          {/* Agent Content */}
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tasks</h3>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Go to tesla inventory page (https://www.tesla.com/inventory/new)</li>
                <li>2. Select model 3</li>
                <li>3. Extract title, mileage and prices</li>
                <li>4. Save result in google docs</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Thinking...</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>I need to navigate to the Tesla inventory page and locate the Model 3 section. Then I'll extract the vehicle information including titles, mileage, and prices. Finally, I'll save this data to a Google Doc.</p>
                <p>Let me start by navigating to the inventory page and finding the Model 3 vehicles...</p>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-500">Extracting data from page...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            How To Use <span className="text-orange-500 italic">AugmentOS</span>
          </motion.h2>
        </div>

        {/* Use Cases Tabs */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-full">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                    activeTab === index
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {useCase.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {renderTeslaBrowserMockup()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
