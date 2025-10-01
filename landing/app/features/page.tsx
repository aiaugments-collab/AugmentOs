import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-16 lg:px-32">
        <div className="w-full">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8">
            Powerful Features
          </h1>
          <p className="text-2xl md:text-3xl text-black/60 max-w-4xl leading-relaxed">
            Discover the advanced capabilities that make AugmentOS the most intelligent browser for modern workflows.
          </p>
        </div>
      </section>

      {/* Featured Packs Section */}
      <section className="mt-24 md:mt-32 lg:mt-40 w-full px-16 lg:px-32 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 text-center">
          Featured Feature Packs
        </h2>
        <div className="w-full mt-12 md:mt-16 lg:mt-24 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            {/* AI Intelligence Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-ai" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#96D0FF"></stop>
                          <stop offset="56.52%" stopColor="#96D0FF"></stop>
                          <stop offset="100%" stopColor="#FFC1FD"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-ai)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-black">AI Intelligence</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-black/80 leading-relaxed">
                    Smart tab management, intelligent search, and content summarization powered by advanced AI.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-16 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20"></div>
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20 -translate-x-2"></div>
                    </div>
                    <p className="text-sm text-black/60">4 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[2deg] -translate-y-[8px] group-hover:rotate-[4deg] group-hover:-translate-y-[15px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[5deg] translate-y-[8px] group-hover:-rotate-[7deg] group-hover:translate-y-[10px] group-hover:-translate-x-[3px]"></div>
            </div>

            {/* Productivity Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4] text-white">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-productivity" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#340B05"></stop>
                          <stop offset="56.52%" stopColor="#340B05"></stop>
                          <stop offset="100%" stopColor="#5092C7"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-productivity)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-white">Productivity Boost</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-white/90 leading-relaxed">
                    Quick actions, analytics dashboard, and privacy shield to supercharge your workflow.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-12 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20"></div>
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20 -translate-x-2"></div>
                    </div>
                    <p className="text-sm text-white/70">3 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[6deg] -translate-y-[10px] group-hover:rotate-[8deg] group-hover:-translate-y-[13px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[2deg] -translate-y-[9px] group-hover:-rotate-[4deg] group-hover:-translate-y-[12px] group-hover:-translate-x-[3px]"></div>
            </div>

            {/* Developer Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-developer" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFF1AC"></stop>
                          <stop offset="56.52%" stopColor="#FFF1AC"></stop>
                          <stop offset="100%" stopColor="#FF6F3C"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-developer)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-black">Developer Tools</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-black/80 leading-relaxed">
                    Advanced DevTools with AI-powered debugging and performance analysis.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-20 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20"></div>
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20 -translate-x-2"></div>
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20 -translate-x-4"></div>
                    </div>
                    <p className="text-sm text-black/60">5 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[4deg] -translate-y-[10px] group-hover:rotate-[6deg] group-hover:-translate-y-[13px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[1deg] translate-y-[10px] translate-x-[14px] group-hover:-rotate-[3deg] group-hover:translate-y-[7px] group-hover:translate-x-[11px]"></div>
            </div>

            {/* Security Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-security" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#C679C4"></stop>
                          <stop offset="56.52%" stopColor="#C679C4"></stop>
                          <stop offset="100%" stopColor="#FFADA0"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-security)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-black">Privacy & Security</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-black/80 leading-relaxed">
                    Advanced privacy protection with customizable security settings and encryption.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-16 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20"></div>
                      <div className="w-8 h-8 rounded-full bg-black/20 border border-black/20 -translate-x-2"></div>
                    </div>
                    <p className="text-sm text-black/60">3 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[2deg] -translate-y-[10px] group-hover:-rotate-[4deg] group-hover:-translate-y-[13px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[4deg] translate-y-[10px] group-hover:rotate-[6deg] group-hover:translate-y-[7px] group-hover:-translate-x-[3px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Features Section */}
      <section className="w-full px-16 lg:px-32 flex flex-col gap-y-12 md:gap-y-16 mt-32 md:mt-40">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center">
          The ones we keep coming back to
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Smart Tab Organizer */}
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-[1.675/1] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="w-24 h-24 bg-black/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-black/60 mb-4">/smart-tab-organizer</div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                  Automatically organize your tabs by project and context.
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <p className="text-sm text-black/60">@augmentos</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 h-12 rounded-xl border border-black/20 bg-transparent hover:bg-black/5 transition-colors flex items-center justify-center text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 15 12">
                      <path d="M14.4688 6.21191C14.4688 6.39746 14.3955 6.56104 14.249 6.70264L9.37842 11.5586C9.23682 11.6953 9.07812 11.7637 8.90234 11.7637C8.72168 11.7637 8.57031 11.7026 8.44824 11.5806C8.32617 11.4634 8.26514 11.3145 8.26514 11.1338C8.26514 11.0459 8.27979 10.9629 8.30908 10.8848C8.33838 10.8018 8.38232 10.731 8.44092 10.6724L10.0815 9.00244L12.9893 6.3584L13.1357 6.71729L10.7773 6.86377H1.51221C1.32178 6.86377 1.16553 6.80273 1.04346 6.68066C0.92627 6.55859 0.867676 6.40234 0.867676 6.21191C0.867676 6.02148 0.92627 5.86523 1.04346 5.74316C1.16553 5.62109 1.32178 5.56006 1.51221 5.56006H10.7773L13.1357 5.70654L12.9893 6.07275L10.0815 3.42139L8.44092 1.75146C8.38232 1.69287 8.33838 1.62451 8.30908 1.54639C8.27979 1.46338 8.26514 1.37793 8.26514 1.29004C8.26514 1.10937 8.32617 0.960449 8.44824 0.843262C8.57031 0.721191 8.72168 0.660156 8.90234 0.660156C8.99023 0.660156 9.07324 0.677246 9.15137 0.711426C9.23438 0.745605 9.31494 0.801758 9.39307 0.879883L14.249 5.72119C14.3955 5.86279 14.4688 6.02637 14.4688 6.21191Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Content Summarizer */}
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-[1.675/1] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <div className="w-24 h-24 bg-black/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-black/60 mb-4">/ai-content-summarizer</div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                  Get instant summaries of any article or webpage.
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <p className="text-sm text-black/60">@augmentos</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 h-12 rounded-xl border border-black/20 bg-transparent hover:bg-black/5 transition-colors flex items-center justify-center text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 15 12">
                      <path d="M14.4688 6.21191C14.4688 6.39746 14.3955 6.56104 14.249 6.70264L9.37842 11.5586C9.23682 11.6953 9.07812 11.7637 8.90234 11.7637C8.72168 11.7637 8.57031 11.7026 8.44824 11.5806C8.32617 11.4634 8.26514 11.3145 8.26514 11.1338C8.26514 11.0459 8.27979 10.9629 8.30908 10.8848C8.33838 10.8018 8.38232 10.731 8.44092 10.6724L10.0815 9.00244L12.9893 6.3584L13.1357 6.71729L10.7773 6.86377H1.51221C1.32178 6.86377 1.16553 6.80273 1.04346 6.68066C0.92627 6.55859 0.867676 6.40234 0.867676 6.21191C0.867676 6.02148 0.92627 5.86523 1.04346 5.74316C1.16553 5.62109 1.32178 5.56006 1.51221 5.56006H10.7773L13.1357 5.70654L12.9893 6.07275L10.0815 3.42139L8.44092 1.75146C8.38232 1.69287 8.33838 1.62451 8.30908 1.54639C8.27979 1.46338 8.26514 1.37793 8.26514 1.29004C8.26514 1.10937 8.32617 0.960449 8.44824 0.843262C8.57031 0.721191 8.72168 0.660156 8.90234 0.660156C8.99023 0.660156 9.07324 0.677246 9.15137 0.711426C9.23438 0.745605 9.31494 0.801758 9.39307 0.879883L14.249 5.72119C14.3955 5.86279 14.4688 6.02637 14.4688 6.21191Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Shield */}
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-[1.675/1] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <div className="w-24 h-24 bg-black/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-black/60 mb-4">/privacy-shield</div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                  Advanced privacy protection with one click.
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <p className="text-sm text-black/60">@augmentos</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 h-12 rounded-xl border border-black/20 bg-transparent hover:bg-black/5 transition-colors flex items-center justify-center text-sm font-medium">
                    <span>Learn more</span>
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 15 12">
                      <path d="M14.4688 6.21191C14.4688 6.39746 14.3955 6.56104 14.249 6.70264L9.37842 11.5586C9.23682 11.6953 9.07812 11.7637 8.90234 11.7637C8.72168 11.7637 8.57031 11.7026 8.44824 11.5806C8.32617 11.4634 8.26514 11.3145 8.26514 11.1338C8.26514 11.0459 8.27979 10.9629 8.30908 10.8848C8.33838 10.8018 8.38232 10.731 8.44092 10.6724L10.0815 9.00244L12.9893 6.3584L13.1357 6.71729L10.7773 6.86377H1.51221C1.32178 6.86377 1.16553 6.80273 1.04346 6.68066C0.92627 6.55859 0.867676 6.40234 0.867676 6.21191C0.867676 6.02148 0.92627 5.86523 1.04346 5.74316C1.16553 5.62109 1.32178 5.56006 1.51221 5.56006H10.7773L13.1357 5.70654L12.9893 6.07275L10.0815 3.42139L8.44092 1.75146C8.38232 1.69287 8.33838 1.62451 8.30908 1.54639C8.27979 1.46338 8.26514 1.37793 8.26514 1.29004C8.26514 1.10937 8.32617 0.960449 8.44824 0.843262C8.57031 0.721191 8.72168 0.660156 8.90234 0.660156C8.99023 0.660156 9.07324 0.677246 9.15137 0.711426C9.23438 0.745605 9.31494 0.801758 9.39307 0.879883L14.249 5.72119C14.3955 5.86279 14.4688 6.02637 14.4688 6.21191Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Features */}
      <section className="py-20 px-16 lg:px-32 border-t border-black/10">
        <div className="w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">
            Built for Developers
          </h2>
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-semibold text-black">
                  Advanced DevTools
                </h3>
                <p className="text-xl md:text-2xl text-black/60 leading-relaxed">
                  Enhanced developer tools with AI-powered debugging, performance analysis, and code suggestions.
                </p>
                <ul className="space-y-4 text-lg md:text-xl text-black/60">
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Real-time performance monitoring
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Intelligent error detection
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Code optimization suggestions
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-black/40">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                  <p className="text-lg">DevTools Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-16 lg:px-32 border-t border-black/10">
        <div className="w-full text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
            Ready to Experience
            <br />
            <span className="inline-flex pb-1 chroma-text chroma-text-animate">the Future?</span>
          </h2>
          <p className="text-2xl md:text-3xl text-black/60 mb-16 max-w-4xl mx-auto leading-relaxed">
            Join thousands of users who have already transformed their browsing experience with AugmentOS.
          </p>
          <div className="relative z-2">
            <a 
              className="inline-flex h-16 px-8 items-center justify-center gap-4 text-xl rounded-2xl bg-black text-white hover:bg-black/90 transition-colors min-w-64"
              title="Download Browser" 
              href="/"
            >
              <span>Download Browser</span>
            </a>
          </div>
          <p className="text-lg mt-12 text-black/50">
            AugmentOS is currently in
            <span className="inline-block ml-2 px-3 py-1 border border-black/50 rounded-md text-sm">Beta</span>
          </p>
          <div className="text-lg mt-2 text-black/50">
            <p>Currently available on Apple macOS 14+ with M1 chips or later.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
