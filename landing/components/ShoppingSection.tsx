'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShoppingSection() {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with slide 1 (index 0) as active
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Talk yourself out of a $400 sweater that matches the one you're wearing",
      video: "https://stream.mux.com/uXWnOI7nVijz2xOo2MDTL00dKl6yuMpyEAw8275cmdiI.m3u8",
      poster: "https://image.mux.com/uXWnOI7nVijz2xOo2MDTL00dKl6yuMpyEAw8275cmdiI/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: false
    },
    {
      title: "Discover more of what you love at the right price",
      video: "https://stream.mux.com/vYFfL02e6ZGfspr00LCX00Oh9Aobg1KoyB53pUP00X2T44s.m3u8",
      poster: "https://image.mux.com/vYFfL02e6ZGfspr00LCX00Oh9Aobg1KoyB53pUP00X2T44s/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: true,
      image: "https://cdn.sanity.io/images/e5fj2khm/production/6222ba08a4cb1543e49359f2d90523d07eb3adad-400x400.png?auto=format&q=100&w=800"
    },
    {
      title: "Blitz through customer reviews to know before you buy",
      video: "https://stream.mux.com/HKZiN49fjqsTPLaymQMnW6DgDjMIaA100Y7c1Atm01TFI.m3u8",
      poster: "https://image.mux.com/HKZiN49fjqsTPLaymQMnW6DgDjMIaA100Y7c1Atm01TFI/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
      hasImage: false
    },
    {
      title: "Size up products to find the one that's right for you",
      video: "https://stream.mux.com/il7PsWc02DgmmqNraFlrtJjHuv25N00wP1X1PbAlHIygc.m3u8",
      poster: "https://image.mux.com/il7PsWc02DgmmqNraFlrtJjHuv25N00wP1X1PbAlHIygc/thumbnail.jpg?width=1920&fit_mode=preserve&time=0",
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
      id="shop" 
      className="w-full flex flex-col justify-center items-center h-max relative z-10 mt-20 sm:mt-40 lg:mt-50"
      style={{ opacity: 1 }}
    >
      {/* Section Header */}
      <h2 className="relative z-30 mx-auto w-max text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ opacity: 1 }}>
        AugmentOS is for
        <span className="inline-flex pb-1 chroma-text chroma-text-animate ml-2">
          Shopping
        </span>
      </h2>
      
      <p className="mt-4 md:mt-6 text-xl md:text-2xl text-black/60 text-center p1" style={{ opacity: 1 }}>
        A retail concierge wherever you browse
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
                    <div className="flex gap-2.5 items-center flex-row-reverse">
                      <div className="flex flex-col gap-5">
                        {/* Title */}
                        <div className="text-black/60 text-lg md:text-xl lg:text-2xl w-full text-pretty text-left px-4 p1">
                          <p dangerouslySetInnerHTML={{ 
                            __html: slides[currentSlide].title.replace(/\b(more of what you love|know before you buy|Size up products)\b/g, '<span class="text-black">$1</span>')
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
                          __html: slides[currentSlide].title.replace(/\b(know before you buy|Size up products)\b/g, '<span class="text-black">$1</span>')
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
                  <div className="flex gap-2.5 items-center flex-row-reverse">
                    <div className="flex flex-col gap-5">
                      {/* Title */}
                      <div className="text-black/60 text-xl md:text-2xl lg:text-3xl w-full text-pretty text-left max-w-4xl p1">
                        <p dangerouslySetInnerHTML={{ 
                          __html: slides[currentSlide].title.replace(/\b(more of what you love)\b/g, '<span class="text-black">$1</span>')
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
                        __html: slides[currentSlide].title.replace(/\b(know before you buy|Size up products)\b/g, '<span class="text-black">$1</span>')
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
