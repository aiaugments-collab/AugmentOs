export default function CTASection() {
  return (
    <section 
      className="mt-40 mb-32 md:my-40 md:mt-60 max-w-4xl mx-auto flex flex-col justify-center items-center px-8 md:px-0"
      style={{ opacity: 1 }}
    >
      {/* Main Heading */}
      <h2 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center" style={{ opacity: 1 }}>
        <span>Bring your tabs</span>
        <br />
        <span className="inline-flex pb-1 chroma-text chroma-text-animate">to life</span>
      </h2>

      {/* Download Button */}
      <div className="relative z-20 mt-24" style={{ opacity: 1 }}>
        <a 
          className="" 
          title="Download Browser" 
          target="_blank" 
          rel="noopener noreferrer" 
          href="#download"
        >
          <div className="h-24 px-16 flex items-center justify-center gap-10 text-2xl rounded-3xl bg-black text-white hover:bg-gray-800 transition-colors duration-200 min-w-80 w-max shadow-xl">
            <span className="font-semibold">Download Browser</span>
          </div>
        </a>
      </div>

      {/* Empty space for potential additional content */}
      <div className="relative z-20 mt-8 text-lg text-center text-black/50" style={{ opacity: 1 }}>
        {/* This div is intentionally empty to match the original structure */}
      </div>

      {/* Beta Badge */}
      <p className="text-lg mt-20 text-black/50" style={{ opacity: 1 }}>
        AugmentOS is currently in
        <span className="text-sm pl-3 pr-2 border border-solid border-black/50 rounded-lg h-7 inline-block leading-7 ml-3">
          Beta
        </span>
      </p>

      {/* Availability Info */}
      <div className="text-lg mt-3 text-center text-black/50" style={{ opacity: 1 }}>
        <p>Currently available on Apple macOS 14+ with M1 chips or later.</p>
      </div>
    </section>
  );
}
