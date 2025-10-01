'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlanningSection() {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with slide 1 (index 0) as active
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Get the information you need, in the format that you need it",
      video: "https://stream.mux.com/5Y1GQNQ4L8hXQyLwBN00FgfYPM4vV8KwOO4vbMlnCEj00.m3u8",
      poster: "https://image.mux.com/5Y1GQNQ4L8hXQyLwBN00FgfYPM4vV8KwOO4vbMlnCEj00/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: true,
      image: "https://cdn.sanity.io/images/e5fj2khm/production/d590cc3117793853c2c2258e90ee88d3fac67baf-480x400.png?auto=format&q=100&w=800",
      layout: "normal" // video left, image right
    },
    {
      title: "Immediate to-do lists, so you can get on with the real work",
      video: "https://stream.mux.com/B01vpE62Ujuv300iZnAZKLWjakvnedzYSOc01zgZPlBhAA.m3u8",
      poster: "https://image.mux.com/B01vpE62Ujuv300iZnAZKLWjakvnedzYSOc01zgZPlBhAA/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: false
    },
    {
      title: "Translate on demand",
      video: "https://stream.mux.com/mjwqbUh8uD202CWx7DftSbpWWM700iLtZZbh2dZik3z2A.m3u8",
      poster: "https://image.mux.com/mjwqbUh8uD202CWx7DftSbpWWM700iLtZZbh2dZik3z2A/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: false
    },
    {
      title: "Never stress over the group order again",
      video: "https://stream.mux.com/uvWJjb9lO3QplsHRTWRA01nigaidupkguDieCmyzLa00E.m3u8",
      poster: "https://image.mux.com/uvWJjb9lO3QplsHRTWRA01nigaidupkguDieCmyzLa00E/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: false
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section 
      id="plan" 
      className="w-full flex flex-col justify-center items-center h-max relative z-10 mt-20 sm:mt-40 lg:mt-50"
      style={{ opacity: 1 }}
    >
      {/* Section Header */}
      <h2 className="relative z-30 mx-auto w-max text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ opacity: 1 }}>
        AugmentOS is for
        <span className="inline-flex pb-1 chroma-text chroma-text-animate ml-2">
          Planning
        </span>
      </h2>
      
      <p className="mt-4 md:mt-6 text-xl md:text-2xl text-black/60 text-center p1" style={{ opacity: 1 }}>
        A personal assistant that's already up to speed
      </p>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center gap-5 w-max mx-auto mt-5 md:mt-10" style={{ opacity: 1 }}>
        {/* Previous Button */}
        <button 
          title="Previous slide" 
          className="transition-opacity duration-200 opacity-50 hover:opacity-100 rounded-full"
          onClick={prevSlide}
        >
          <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#D9D9D9"></rect>
            <path d="M10.2947 18C10.0535 18 9.8391 17.9196 9.6783 17.7588C9.32989 17.4372 9.32989 16.8744 9.6783 16.5528L14.2076 11.9966L9.6783 7.46734C9.32989 7.14573 9.32989 6.58291 9.6783 6.26131C9.99991 5.9129 10.5627 5.9129 10.8843 6.26131L16.0301 11.407C16.3785 11.7286 16.3785 12.2915 16.0301 12.6131L10.8843 17.7588C10.7235 17.9196 10.5091 18 10.2947 18Z" fill="currentColor"></path>
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5 w-max">
          {slides.map((_, index) => (
            <button
              key={index}
              title={`Go to slide ${index + 1}`}
              className="block h-2 rounded-full relative bg-gray-300 overflow-hidden transition-all duration-300"
              style={{ width: currentSlide === index ? '30px' : '8px' }}
              onClick={() => goToSlide(index)}
            >
              <div 
                className="absolute inset-0 h-full w-full bg-black rounded-full transition-transform duration-300"
                style={{ 
                  transform: currentSlide === index ? 'translateX(0%)' : 'translateX(-100%)'
                }}
              ></div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button 
          title="Next slide" 
          className="transition-opacity duration-200 opacity-50 hover:opacity-100 rounded-full"
          onClick={nextSlide}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#D9D9D9"></rect>
            <path d="M10.2947 18C10.0535 18 9.8391 17.9196 9.6783 17.7588C9.32989 17.4372 9.32989 16.8744 9.6783 16.5528L14.2076 11.9966L9.6783 7.46734C9.32989 7.14573 9.32989 6.58291 9.6783 6.26131C9.99991 5.9129 10.5627 5.9129 10.8843 6.26131L16.0301 11.407C16.3785 11.7286 16.3785 12.2915 16.0301 12.6131L10.8843 17.7588C10.7235 17.9196 10.5091 18 10.2947 18Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>

      {/* Carousel Content */}
      <div className="mt-9 w-full px-2.5 overflow-x-clip" style={{ opacity: 1 }}>
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="flex flex-col gap-5 max-w-lg">
                  {slides[currentSlide].hasImage ? (
                    <div className="flex gap-2.5 items-center">
                      <div className="flex flex-col gap-5">
                        {/* Title */}
                        <div className="text-black/60 text-lg md:text-xl lg:text-2xl w-full text-pretty text-left px-4 p1">
                          <p dangerouslySetInnerHTML={{ 
                            __html: slides[currentSlide].title.replace(/\b(in the format|Immediate to-do lists|Translate)\b/g, '<span class="text-black">$1</span>')
                          }} />
                        </div>
                        
                        {/* Video */}
                        <video
                          preload="metadata"
                          poster={slides[currentSlide].poster}
                          className="rounded-2xl w-full h-auto max-h-72 md:max-h-96 lg:max-h-[500px] xl:max-h-[550px]"
                          muted
                          playsInline
                          autoPlay
                          loop
                          src={slides[currentSlide].video}
                        />
                      </div>
                      <div>
                        <div className="image overflow-hidden">
                          <img
                            className="w-full h-auto max-w-48 object-cover"
                            alt="AugmentOS Browser"
                            src={slides[currentSlide].image}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      {/* Title */}
                      <div className="text-black/60 text-lg md:text-xl lg:text-2xl w-full text-pretty text-center px-4 p1">
                        <p dangerouslySetInnerHTML={{ 
                          __html: slides[currentSlide].title.replace(/\b(Immediate to-do lists|Translate)\b/g, '<span class="text-black">$1</span>')
                        }} />
                      </div>
                      
                      {/* Video */}
                      <video
                        preload="metadata"
                        poster={slides[currentSlide].poster}
                        className="rounded-2xl w-full h-auto max-h-72 md:max-h-96 lg:max-h-[500px] xl:max-h-[550px]"
                        muted
                        playsInline
                        autoPlay
                        loop
                        src={slides[currentSlide].video}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center min-h-96 lg:min-h-[500px] xl:min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-5">
                {/* Content Layout */}
                {slides[currentSlide].hasImage ? (
                  <div className="flex gap-2.5 items-center">
                    <div className="flex flex-col gap-5">
                      {/* Title */}
                      <div className="text-black/60 text-xl md:text-2xl lg:text-3xl w-full text-pretty text-left max-w-4xl p1">
                        <p dangerouslySetInnerHTML={{ 
                          __html: slides[currentSlide].title.replace(/\b(in the format)\b/g, '<span class="text-black">$1</span>')
                        }} />
                      </div>
                      
                      {/* Video */}
                      <video
                        preload="metadata"
                        poster={slides[currentSlide].poster}
                        className="rounded-2xl md:rounded-[40px] w-auto h-full max-h-96 lg:max-h-[500px] xl:max-h-[550px]"
                        muted
                        playsInline
                        autoPlay
                        loop
                        src={slides[currentSlide].video}
                      />
                    </div>
                    <div>
                      <div className="image overflow-hidden">
                        <img
                          className="w-full h-auto max-w-48 hidden lg:block object-cover"
                          alt="AugmentOS Browser"
                          src={slides[currentSlide].image}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    {/* Title */}
                    <div className="text-black/60 text-xl md:text-2xl lg:text-3xl w-full text-pretty text-center max-w-4xl mx-auto p1">
                      <p dangerouslySetInnerHTML={{ 
                        __html: slides[currentSlide].title.replace(/\b(Immediate to-do lists|Translate)\b/g, '<span class="text-black">$1</span>')
                      }} />
                    </div>
                    
                    {/* Video */}
                    <video
                      preload="metadata"
                      poster={slides[currentSlide].poster}
                      className="rounded-2xl md:rounded-[40px] w-auto h-full max-h-96 lg:max-h-[500px] xl:max-h-[550px] mx-auto"
                      muted
                      playsInline
                      autoPlay
                      loop
                      src={slides[currentSlide].video}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
