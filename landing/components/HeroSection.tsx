'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Animated text component for the rotating words
function AnimatedText() {
  const words = ['Chat', 'Write', 'Learn', 'Shop'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          className="chroma-text chroma-text-animate inline-block"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
          }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ 
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{
            // Reset animation on each word change
            animation: 'chroma-sweep .9s ease-in-out .1s forwards'
          }}
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Animated Search Demo Component
function AnimatedSearchDemo() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [currentQuery, setCurrentQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const demos = [
    {
      query: "help me find a food product",
      results: [
        { title: "June Newsletter", subtitle: "Substack", icon: "📧", color: "bg-orange-100" },
        { title: "Brand Voice", subtitle: "Notion", icon: "🎯", color: "bg-yellow-100" },
        { title: "Food Products", subtitle: "Amazon", icon: "🛒", color: "bg-blue-100" }
      ]
    },
    {
      query: "show me my research tabs",
      results: [
        { title: "AI Research Papers", subtitle: "arXiv.org", icon: "📚", color: "bg-purple-100" },
        { title: "Machine Learning", subtitle: "GitHub", icon: "🤖", color: "bg-green-100" },
        { title: "Neural Networks", subtitle: "Wikipedia", icon: "🧠", color: "bg-pink-100" }
      ]
    },
    {
      query: "organize my work documents",
      results: [
        { title: "Project Docs", subtitle: "Google Drive", icon: "📁", color: "bg-indigo-100" },
        { title: "Meeting Notes", subtitle: "Notion", icon: "📝", color: "bg-teal-100" },
        { title: "Presentations", subtitle: "Figma", icon: "🎨", color: "bg-red-100" }
      ]
    }
  ];

  // Type out query animation
  const typeQuery = async (query: string) => {
    setIsTyping(true);
    setCurrentQuery('');
    
    for (let i = 0; i <= query.length; i++) {
      setCurrentQuery(query.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 80));
    }
    
    setIsTyping(false);
    // Show results after typing
    setTimeout(() => setShowResults(true), 500);
  };

  // Clear and move to next demo
  const nextDemo = () => {
    setShowResults(false);
    setCurrentQuery('');
    setTimeout(() => {
      const nextIndex = (currentDemo + 1) % demos.length;
      setCurrentDemo(nextIndex);
      typeQuery(demos[nextIndex].query);
    }, 800);
  };

  // Start first demo
  useEffect(() => {
    const timer = setTimeout(() => {
      typeQuery(demos[0].query);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Cycle through demos
  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        nextDemo();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showResults, currentDemo]);

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl h-64 md:h-72 lg:h-80">
      {/* Search Bar */}
      <div className="p-4 md:p-5 border-b border-gray-100">
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
          <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🔍</span>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              className="text-gray-800 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {currentQuery}
              {isTyping && (
                <motion.span
                  className="inline-block w-0.5 h-4 bg-blue-500 ml-0.5"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <div className="p-4 md:p-5 flex-1">
        <AnimatePresence mode="wait">
          {showResults && (
            <motion.div
              key={currentDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="space-y-3"
            >
              {demos[currentDemo].results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${result.color} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-base">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                      {result.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {result.subtitle}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/50 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">→</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!showResults && !isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-full text-gray-400"
          >
            <div className="text-center">
              <div className="w-15 h-15 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <p className="text-sm">AugmentOS AI is ready to help</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  return (
    <section className="flex flex-col h-full text-50 chroma-hero relative overflow-hidden" style={{ opacity: 1 }}>
      <div className="pb-100 pt-120 800:py-140 1000:pt-210 1000:pb-170 px-20 h-max relative z-2 flex flex-col justify-center items-center mx-auto">
        {/* Subtitle */}
        <div className="relative z-2 p1 text-center text-black/50 rich-text" style={{ opacity: 1 }}>
          <p>A new AI browser from the makers of Arc</p>
        </div>

        {/* Main Headline */}
        <h1 
          className="relative z-2 text-center h1 mt-20 flex flex-wrap justify-center chroma-text--hero"
          style={{
            opacity: 1,
            filter: 'blur(0px)',
            backgroundPosition: '0% 0%',
          }}
        >
          <AnimatedText />
          &nbsp;with your tabs
        </h1>

        {/* CTA Button */}
        <div className="relative z-2 mt-34" style={{ opacity: 1 }}>
          <a
            className=""
            title="Download Browser"
            target="_blank"
            rel="noopener noreferrer"
            href="#download"
          >
            <div className="h-50 px-24 flex items-center justify-center gap-14 p2 rounded-16 bg-black text-white button--cta min-w-170 w-max">
              <span>Download Browser</span>
            </div>
          </a>
        </div>
      </div>

      {/* Browser Mockup Container */}
      <div className="relative max-w-1160 mx-auto z-2 px-25 1000:px-34 w-full" style={{ opacity: 1 }}>
        {/* Mobile Browser Mockup */}
        <svg
          className="1000:hidden w-full h-auto"
          width="752"
          height="350"
          viewBox="0 0 752 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_3441_61802"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="-65"
            y="0"
            width="882"
            height="350"
          >
            <rect
              x="-65"
              width="882"
              height="350"
              fill="url(#paint0_linear_3441_61802)"
            ></rect>
          </mask>
          <g mask="url(#mask0_3441_61802)">
            {/* Browser Window Chrome */}
            <circle
              cx="19.7457"
              cy="19.642"
              r="4.88519"
              stroke="black"
              strokeOpacity="0.1"
            ></circle>
            <circle
              cx="37.6966"
              cy="19.642"
              r="4.88519"
              stroke="black"
              strokeOpacity="0.1"
            ></circle>
            <circle
              cx="55.6472"
              cy="19.642"
              r="4.88519"
              stroke="black"
              strokeOpacity="0.1"
            ></circle>
            
            {/* Browser Window Frame */}
            <mask id="path-6-inside-1_3441_61802" fill="white">
              <path d="M227.676 27.6157C227.676 31.7019 229.952 35.2552 233.305 37.08C234.155 37.5425 235.131 37.6899 236.098 37.6899H736C741.523 37.6899 746 42.1671 746 47.6899V770.69C746 776.213 741.523 780.69 736 780.69H15C9.47715 780.69 5 776.213 5 770.69V47.6899C5.00001 42.1671 9.47716 37.6899 15 37.6899H67.9123C68.9232 37.6899 69.9445 37.5311 70.815 37.0172C73.7236 35.2998 75.6756 32.1353 75.6758 28.5132V13.3862C75.6758 8.96795 79.2575 5.38623 83.6758 5.38623H219.676C224.094 5.38623 227.676 8.96795 227.676 13.3862V27.6157Z"></path>
            </mask>
            <path
              d="M227.676 27.6157H226.676V27.6158L227.676 27.6157ZM746 47.6899H747H746ZM746 770.69H747H746ZM736 780.69V781.69V780.69ZM5 770.69H4H5ZM5 47.6899H4H5ZM15 37.6899V36.6899V37.6899ZM75.6758 28.5132L76.6758 28.5132V28.5132H75.6758ZM70.815 37.0172L70.3066 36.1561L70.815 37.0172Z"
              fill="currentColor"
              fillOpacity="0.1"
              mask="url(#path-6-inside-1_3441_61802)"
            ></path>
            
            {/* Address Bar */}
            <g clipPath="url(#clip0_3441_61802)">
              <mask id="path-10-inside-2_3441_61802" fill="white">
                <path d="M10 43H545V82.4914H10V43Z"></path>
              </mask>
              <path
                d="M545 82.4914V81.4914H10V82.4914V83.4914H545V82.4914Z"
                fill="currentColor"
                fillOpacity="0.1"
                mask="url(#path-10-inside-2_3441_61802)"
              ></path>
            </g>
            
            {/* Browser Content Area */}
            <rect
              x="10.5"
              y="43.5"
              width="534"
              height="731"
              rx="4.5"
              stroke="black"
              strokeOpacity="0.1"
            ></rect>
            
            {/* Backdrop Blur Effect */}
            <foreignObject x="0" y="0" width="0" height="0">
              <div
                style={{
                  backdropFilter: 'blur(17.95px)',
                  clipPath: 'url(#bgblur_1_3441_61802_clip_path)',
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            </foreignObject>
            
            {/* Background Blur */}
            <g data-figma-bg-blur-radius="35.9013">
              <path
                d="M0 16C0 10.3995 0 7.59921 1.08993 5.46009C2.04867 3.57847 3.57847 2.04867 5.46009 1.08993C7.59921 0 10.3995 0 16 0H736C741.601 0 744.401 0 746.54 1.08993C748.422 2.04867 749.951 3.57847 750.91 5.46009C752 7.59921 752 10.3995 752 16V770C752 775.601 752 778.401 750.91 780.54C749.951 782.422 748.422 783.951 746.54 784.91C744.401 786 741.601 786 736 786H16C10.3995 786 7.59921 786 5.46009 784.91C3.57847 783.951 2.04867 782.422 1.08993 780.54C0 778.401 0 775.601 0 770V16Z"
                fill="white"
                fillOpacity="0.2"
              ></path>
              <path
                d="M16 0.5H736C738.809 0.5 740.885 0.500573 742.527 0.634766C743.959 0.751751 745.028 0.968149 745.934 1.35742L746.312 1.53516C747.988 2.38894 749.37 3.71981 750.287 5.35547L750.465 5.6875C750.968 6.67471 751.232 7.83634 751.365 9.47266C751.499 11.1151 751.5 13.1915 751.5 16V770C751.5 772.809 751.499 774.885 751.365 776.527C751.248 777.959 751.032 779.028 750.643 779.934L750.465 780.312C749.611 781.988 748.28 783.37 746.645 784.287L746.312 784.465C745.325 784.968 744.164 785.232 742.527 785.365C740.885 785.499 738.809 785.5 736 785.5H16C13.1915 785.5 11.1151 785.499 9.47266 785.365C8.04088 785.248 6.97247 785.032 6.06641 784.643L5.6875 784.465C4.01185 783.611 2.62958 782.28 1.71289 780.645L1.53516 780.312C1.03225 779.325 0.768463 778.164 0.634766 776.527C0.500573 774.885 0.5 772.809 0.5 770V16C0.5 13.1915 0.500573 11.1151 0.634766 9.47266C0.751752 8.04088 0.968146 6.97247 1.35742 6.06641L1.53516 5.6875C2.38894 4.01185 3.7198 2.62958 5.35547 1.71289L5.6875 1.53516C6.67471 1.03224 7.83635 0.768464 9.47266 0.634766C11.1151 0.500573 13.1915 0.5 16 0.5Z"
                stroke="black"
                strokeOpacity="0.1"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath
              id="bgblur_1_3441_61802_clip_path"
              transform="translate(0 0)"
            >
              <path d="M0 16C0 10.3995 0 7.59921 1.08993 5.46009C2.04867 3.57847 3.57847 2.04867 5.46009 1.08993C7.59921 0 10.3995 0 16 0H736C741.601 0 744.401 0 746.54 1.08993C748.422 2.04867 749.951 3.57847 750.91 5.46009C752 7.59921 752 10.3995 752 16V770C752 775.601 752 778.401 750.91 780.54C749.951 782.422 748.422 783.951 746.54 784.91C744.401 786 741.601 786 736 786H16C10.3995 786 7.59921 786 5.46009 784.91C3.57847 783.951 2.04867 782.422 1.08993 780.54C0 778.401 0 775.601 0 770V16Z"></path>
            </clipPath>
            <linearGradient
              id="paint0_linear_3441_61802"
              x1="376"
              y1="0"
              x2="376"
              y2="350"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9"></stop>
              <stop
                offset="1"
                stopColor="#737373"
                stopOpacity="0"
              ></stop>
            </linearGradient>
            <clipPath id="clip0_3441_61802">
              <rect
                x="10"
                y="43"
                width="535"
                height="732"
                rx="5"
                fill="white"
              ></rect>
            </clipPath>
          </defs>
        </svg>

        {/* Desktop Browser Mockup */}
        <svg
          className="hidden 1000:block w-full h-auto"
          width="1160"
          height="250"
          viewBox="0 0 1160 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Similar structure but larger for desktop */}
          <mask
            id="mask0_3441_61854"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="-83"
            y="0"
            width="1326"
            height="250"
          >
            <rect
              x="-83"
              width="1326"
              height="250"
              fill="url(#paint0_linear_3441_61854)"
            ></rect>
          </mask>
          <g mask="url(#mask0_3441_61854)">
            {/* Desktop browser mockup content - simplified for brevity */}
            <foreignObject x="0" y="0" width="0" height="0">
              <div
                style={{
                  backdropFilter: 'blur(17.95px)',
                  clipPath: 'url(#bgblur_0_3441_61854_clip_path)',
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="35.9013">
              <path
                d="M0 16C0 10.3995 0 7.59921 1.08993 5.46009C2.04867 3.57847 3.57847 2.04867 5.46009 1.08993C7.59921 0 10.3995 0 16 0H1144C1149.6 0 1152.4 0 1154.54 1.08993C1156.42 2.04867 1157.95 3.57847 1158.91 5.46009C1160 7.59921 1160 10.3995 1160 16V770C1160 775.601 1160 778.401 1158.91 780.54C1157.95 782.422 1156.42 783.951 1154.54 784.91C1152.4 786 1149.6 786 1144 786H16C10.3995 786 7.59921 786 5.46009 784.91C3.57847 783.951 2.04867 782.422 1.08993 780.54C0 778.401 0 775.601 0 770V16Z"
                fill="white"
                fillOpacity="0.2"
              ></path>
            </g>
            {/* Browser chrome elements */}
            <circle cx="19.7457" cy="19.642" r="4.88519" stroke="black" strokeOpacity="0.1"></circle>
            <circle cx="37.6966" cy="19.642" r="4.88519" stroke="black" strokeOpacity="0.1"></circle>
            <circle cx="55.6472" cy="19.642" r="4.88519" stroke="black" strokeOpacity="0.1"></circle>
          </g>
          <defs>
            <clipPath
              id="bgblur_0_3441_61854_clip_path"
              transform="translate(0 0)"
            >
              <path d="M0 16C0 10.3995 0 7.59921 1.08993 5.46009C2.04867 3.57847 3.57847 2.04867 5.46009 1.08993C7.59921 0 10.3995 0 16 0H1144C1149.6 0 1152.4 0 1154.54 1.08993C1156.42 2.04867 1157.95 3.57847 1158.91 5.46009C1160 7.59921 1160 10.3995 1160 16V770C1160 775.601 1160 778.401 1158.91 780.54C1157.95 782.422 1156.42 783.951 1154.54 784.91C1152.4 786 1149.6 786 1144 786H16C10.3995 786 7.59921 786 5.46009 784.91C3.57847 783.951 2.04867 782.422 1.08993 780.54C0 778.401 0 775.601 0 770V16Z"></path>
            </clipPath>
            <linearGradient
              id="paint0_linear_3441_61854"
              x1="580"
              y1="0"
              x2="580"
              y2="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9"></stop>
              <stop
                offset="1"
                stopColor="#737373"
                stopOpacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Browser Demo Content */}
        <div className="absolute inset-x-4 top-16 md:top-20 z-10 flex justify-center">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <AnimatedSearchDemo />
          </div>
        </div>
      </div>

      {/* Watch Trailer Button */}
      <button
        className="absolute z-9 bottom-20 800:left-20 left-1/2 -translate-x-1/2 800:translate-x-0 h-50 w-max bg-fill-secondary hover:bg-fill-secondary-hover rounded-16 cursor-pointer overflow-hidden flex items-center pl-6 pr-24 p2 focus:outline-none transition-colors duration-200 site-ease"
        style={{ opacity: 1 }}
      >
        <div className="relative">
          <img
            src="https://cdn.sanity.io/images/e5fj2khm/production/3b43597691b31efbfd054265efb72b29cb41dca8-512x288.png?w=100&q=100"
            alt="Demo Thumbnail"
            className="w-60 h-38 rounded-12 object-cover"
          />
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.74658 12.9229C1.47803 12.9229 1.26318 12.8252 1.10205 12.6299C0.945801 12.4395 0.867676 12.1855 0.867676 11.8682V1.57031C0.867676 1.25293 0.945801 0.999023 1.10205 0.808594C1.26318 0.618164 1.47803 0.522949 1.74658 0.522949C1.89307 0.522949 2.03223 0.549805 2.16406 0.603516C2.2959 0.652344 2.43506 0.718262 2.58154 0.80127L11.1216 5.74512C11.4292 5.9209 11.6416 6.07959 11.7588 6.22119C11.8809 6.35791 11.9419 6.52393 11.9419 6.71924C11.9419 6.91455 11.8809 7.08301 11.7588 7.22461C11.6416 7.36133 11.4292 7.52002 11.1216 7.70068L2.58154 12.6372C2.43506 12.7251 2.2959 12.7935 2.16406 12.8423C2.03223 12.896 1.89307 12.9229 1.74658 12.9229Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <span className="ml-14">Watch the demo</span>
      </button>

      {/* Background Animation Container */}
      <div className="absolute inset-0 h-full w-full z-1 pointer-events-none flex items-center justify-center overflow-hidden"></div>

      {/* Pause Animation Button */}
      <button
        title={isAnimationPaused ? "Resume Animation" : "Pause Animation"}
        className="hidden 800:flex absolute z-9 right-10 bottom-80 800:bottom-20 800:right-20 h-36 w-36 1000:h-24 1000:w-24 rounded-full bg-black/8 items-center justify-center transition-colors duration-200 site-ease text-black/30 hover:text-black"
        style={{ opacity: 1 }}
        onClick={() => setIsAnimationPaused(!isAnimationPaused)}
      >
        <span>
          <svg
            className="h-17 w-auto object-contain"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"></path>
            <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"></path>
          </svg>
        </span>
      </button>
    </section>
  );
}
