'use client';

import { useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "AugmentOS helps me localize content for Brazil. When I'm stuck, AugmentOS suggests words for a Brazilian audience.",
      name: "Pedro",
      role: "Digital Strategist",
      image: "https://cdn.sanity.io/images/e5fj2khm/production/10c431ca753e15f6e8e7f016cec15cb0316b6220-2316x3088.jpg?w=80&q=100"
    },
    {
      quote: "AugmentOS is my eng tutor: it answers questions in-line and gives me practice problems to test myself.",
      name: "Quinn",
      role: "Engineering Student",
      image: "https://cdn.sanity.io/images/e5fj2khm/production/623621574f3c89fa7e196d1c382ffe96f52948c2-1828x1828.png?w=80&q=100"
    },
    {
      quote: "AugmentOS helped me pick SaaS tools for my team, comparing options with context on what matters most for us.",
      name: "Mohaned",
      role: "Graphic Designer and Fullstack Web Developer",
      image: "https://cdn.sanity.io/images/e5fj2khm/production/ff3d3ce23295f73be740264cc3d9ecc5b09fffcf-1081x1080.png?w=80&q=100"
    },
    {
      quote: "AugmentOS cuts the busywork. With just a prompt and tabs, I find sources in minutes, not hours.",
      name: "Vitus",
      role: "Student Journalist",
      image: "https://cdn.sanity.io/images/e5fj2khm/production/a4737539e727e6ac3a87f7bad6b57c20047192d2-512x512.png?w=80&q=100"
    },
    {
      quote: "Personalization in AugmentOS is a secret weapon to stay pitch perfect across all our client brands.",
      name: "Kimberly",
      role: "Agency Director",
      image: "https://cdn.sanity.io/images/e5fj2khm/production/4f16ada5ff75c00bc79003e4298f29f5c426c2da-351x351.jpg?w=80&q=100"
    },
    {
      quote: "I make new apps all the time. There's a ton of context, but AugmentOS helps me solve problems super fast.",
      name: "Los",
      role: "Product Engineer",
      image: "https://cdn.sanity.io/images/e5fj2khm/production/4ed0293adef52f5736c2e0f2a59d50374f2f0424-400x400.png?w=80&q=100"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one full set
      const cardWidth = 480 + 32; // card width + gap
      const totalWidth = cardWidth * testimonials.length;
      
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [testimonials.length]);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="p-10 rounded-3xl bg-white bg-opacity-90 flex flex-col justify-between shadow-sm backdrop-blur-[32px] w-[480px] h-[200px] overflow-visible shrink-0">
      <blockquote className="text-3xl leading-8 -tracking-wide text-black/60">
        <span>{testimonial.quote}</span>
      </blockquote>
      <div className="flex items-center gap-6 mt-4">
        <img
          src={testimonial.image}
          alt={`Photo of ${testimonial.name}`}
          className="w-24 h-24 aspect-square rounded-lg object-cover"
          loading="lazy"
        />
        <div className="text-lg leading-tight">
          <span className="text-black/60">{testimonial.name}</span>
          <span className="block mt-2 text-black/40">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="md:mb-36 flex flex-col items-center w-full overflow-clip mt-20 sm:mt-40 lg:mt-50"
      aria-label="Customer Testimonials"
      style={{ opacity: 1 }}
    >
      {/* Section Header */}
      <h2 className="relative z-30 mx-auto w-max text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ opacity: 1 }}>
        AugmentOS is for
        <span className="inline-flex pb-1 chroma-text chroma-text-animate ml-2">
          You
        </span>
      </h2>

      {/* Scrolling Testimonials */}
      <div className="h-max py-16 mt-24 w-full" style={{ opacity: 1 }}>
        <div className="flex flex-row overflow-hidden">
          <div 
            ref={scrollRef}
            className="shrink-0 flex"
            aria-hidden="false"
          >
            <div className="flex gap-8 pr-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="shrink-0 flex" aria-hidden="true">
            <div className="flex gap-8 pr-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Third set for extra smooth scrolling */}
          <div className="shrink-0 flex" aria-hidden="true">
            <div className="flex gap-8 pr-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`duplicate2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
