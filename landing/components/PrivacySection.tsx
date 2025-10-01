export default function PrivacySection() {
  return (
    <section 
      id="privacy" 
      className="mt-20 mb-40 md:mt-32 py-24 mx-auto flex flex-col justify-center items-center px-10"
      style={{ opacity: 1 }}
    >
      {/* Lock Icon */}
      <div style={{ opacity: 1 }}>
        <svg 
          className="overflow-visible" 
          width="56" 
          height="76" 
          viewBox="0 0 28 38" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4.25 10.709V15.25H6.65234V10.4355C6.65234 8.74284 6.97786 7.29102 7.62891 6.08008C8.27995 4.86914 9.15885 3.94466 10.2656 3.30664C11.3854 2.6556 12.6289 2.33008 13.9961 2.33008C15.3893 2.33008 16.6393 2.6556 17.7461 3.30664C18.8529 3.94466 19.7383 4.86914 20.4023 6.08008C21.0664 7.29102 21.3984 8.74284 21.3984 10.4355V22.0625H23.7617V10.709C23.7617 8.41732 23.319 6.48372 22.4336 4.9082C21.5482 3.31966 20.3633 2.11523 18.8789 1.29492C17.3945 0.461589 15.7669 0.0449219 13.9961 0.0449219C12.2383 0.0449219 10.6172 0.461589 9.13281 1.29492C7.66146 2.11523 6.47656 3.31966 5.57812 4.9082C4.69271 6.48372 4.25 8.41732 4.25 10.709Z" 
            fill="black" 
            style={{ transform: 'none', transformOrigin: '50% 50%', transformBox: 'fill-box' }}
          />
          <path 
            d="M23.1133 15.0176C24.4154 15.0176 25.431 15.4017 26.1602 16.1699C26.8563 16.8909 27.2194 17.9026 27.251 19.2051H27.2578V33.1699C27.2578 34.5632 26.8932 35.6374 26.1641 36.3926C25.4479 37.1608 24.4323 37.5449 23.1172 37.5449H4.89453C3.59245 37.5449 2.57682 37.1608 1.84766 36.3926C1.15155 35.6716 0.788394 34.6599 0.756836 33.3574H0.75V19.3926C0.75 17.9993 1.11459 16.9251 1.84375 16.1699C2.5599 15.4017 3.57552 15.0176 4.89062 15.0176H23.1133Z" 
            fill="black"
          />
        </svg>
      </div>

      {/* Heading */}
      <h2 
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center text-balance mx-auto max-w-[12ch] md:max-w-[15ch] lg:max-w-[18ch] mt-12"
        style={{ opacity: 1 }}
      >
        Privacy in AugmentOS, you're in control
      </h2>

      {/* Description */}
      <div 
        className="text-center text-2xl md:text-3xl lg:text-4xl p1 mt-8 md:mt-12 max-w-[45ch] text-pretty mx-auto text-black/60 px-8"
        style={{ opacity: 1 }}
      >
        <p>
          AugmentOS exists to make the internet better, not to profit off your personal data. We believe it's up to you to customize what you see and what you share.{' '}
          <a className="underline" href="/privacy">
            Learn more about privacy in AugmentOS.
          </a>
        </p>
      </div>

      {/* Privacy Image */}
      <div 
        className="w-full max-w-6xl mx-auto mt-8 md:mt-24"
        style={{ opacity: 1 }}
      >
        <div className="image overflow-hidden">
          <picture>
            <source 
              srcSet="https://cdn.sanity.io/images/e5fj2khm/production/88f178981fc52f44d99bd0e1a71150d18853362f-3200x1280.png?auto=format&q=100&w=1600" 
              media="(min-width: 1400px)" 
            />
            <source 
              srcSet="https://cdn.sanity.io/images/e5fj2khm/production/88f178981fc52f44d99bd0e1a71150d18853362f-3200x1280.png?auto=format&q=100&w=1400" 
              media="(min-width: 1200px)" 
            />
            <source 
              srcSet="https://cdn.sanity.io/images/e5fj2khm/production/88f178981fc52f44d99bd0e1a71150d18853362f-3200x1280.png?auto=format&q=100&w=1200" 
              media="(min-width: 1000px)" 
            />
            <source 
              srcSet="https://cdn.sanity.io/images/e5fj2khm/production/88f178981fc52f44d99bd0e1a71150d18853362f-3200x1280.png?auto=format&q=100&w=800" 
              media="(min-width: 800px)" 
            />
            <source 
              srcSet="https://cdn.sanity.io/images/e5fj2khm/production/88f178981fc52f44d99bd0e1a71150d18853362f-3200x1280.png?auto=format&q=100&w=600" 
              media="(min-width: 600px)" 
            />
            <img 
              className="w-full h-auto" 
              src="https://cdn.sanity.io/images/e5fj2khm/production/88f178981fc52f44d99bd0e1a71150d18853362f-3200x1280.png?auto=format&q=100&w=800" 
              alt="AugmentOS Browser Privacy Features"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
