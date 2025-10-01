import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-16 lg:px-32">
        <div className="w-full">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8">
            Enterprise Solutions
          </h1>
          <p className="text-2xl md:text-3xl text-black/60 max-w-4xl leading-relaxed">
            Scale AugmentOS across your organization with enterprise-grade security, management, and support.
          </p>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="mt-24 md:mt-32 lg:mt-40 w-full px-16 lg:px-32 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 text-center">
          Enterprise Solution Packs
        </h2>
        <div className="w-full mt-12 md:mt-16 lg:mt-24 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Security Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-enterprise-security" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FF6B6B"></stop>
                          <stop offset="56.52%" stopColor="#FF6B6B"></stop>
                          <stop offset="100%" stopColor="#4ECDC4"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-enterprise-security)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-white">Enterprise Security</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-white/90 leading-relaxed">
                    Bank-level encryption, SSO integration, and compliance with SOC 2, GDPR standards.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-20 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20"></div>
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20 -translate-x-2"></div>
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20 -translate-x-4"></div>
                    </div>
                    <p className="text-sm text-white/70">5 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[3deg] -translate-y-[8px] group-hover:rotate-[5deg] group-hover:-translate-y-[15px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[4deg] translate-y-[8px] group-hover:-rotate-[6deg] group-hover:translate-y-[10px] group-hover:-translate-x-[3px]"></div>
            </div>

            {/* Management Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-enterprise-management" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#667EEA"></stop>
                          <stop offset="56.52%" stopColor="#667EEA"></stop>
                          <stop offset="100%" stopColor="#764BA2"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-enterprise-management)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-white">Centralized Management</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-white/90 leading-relaxed">
                    Deploy and manage AugmentOS across thousands of devices from a single dashboard.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-16 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20"></div>
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20 -translate-x-2"></div>
                    </div>
                    <p className="text-sm text-white/70">4 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[5deg] -translate-y-[10px] group-hover:rotate-[7deg] group-hover:-translate-y-[13px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[3deg] -translate-y-[9px] group-hover:-rotate-[5deg] group-hover:-translate-y-[12px] group-hover:-translate-x-[3px]"></div>
            </div>

            {/* Support Pack */}
            <div className="relative group">
              <div className="relative z-2 rounded-3xl after:absolute after:inset-0 after:rounded-3xl after:border after:border-black/10 after:z-1 after:pointer-events-none group-hover:-translate-y-[10px] transition-transform duration-300 ease-out">
                <div className="relative z-1 rounded-3xl p-6 md:p-8 bg-cover bg-no-repeat flex flex-col h-full transition-shadow duration-200 ease-out shadow-lg group-hover:shadow-xl aspect-[3/4]">
                  <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                    <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-enterprise-support" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F093FB"></stop>
                          <stop offset="56.52%" stopColor="#F093FB"></stop>
                          <stop offset="100%" stopColor="#F5576C"></stop>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gradient-enterprise-support)"></rect>
                    </svg>
                  </div>
                  <h3 className="relative z-1 text-2xl md:text-3xl font-bold text-white">24/7 Premium Support</h3>
                  <p className="relative z-1 mt-6 mb-auto text-lg text-white/90 leading-relaxed">
                    Dedicated support team, priority response times, and custom training programs.
                  </p>
                  <div className="relative z-1 mt-auto flex items-center gap-x-4">
                    <div className="w-16 h-auto flex">
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20"></div>
                      <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20 -translate-x-2"></div>
                    </div>
                    <p className="text-sm text-white/70">3 features</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl -rotate-[2deg] -translate-y-[10px] group-hover:-rotate-[4deg] group-hover:-translate-y-[13px] group-hover:-translate-x-[3px]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl border border-black/8 transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl rotate-[4deg] translate-y-[10px] group-hover:rotate-[6deg] group-hover:translate-y-[7px] group-hover:-translate-x-[3px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Tools Section */}
      <section className="w-full px-16 lg:px-32 flex flex-col gap-y-12 md:gap-y-16 mt-32 md:mt-40">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center">
          Essential Enterprise Tools
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Admin Dashboard */}
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-[1.675/1] bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <div className="w-24 h-24 bg-black/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-black/60 mb-4">/admin-dashboard</div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                  Comprehensive policy management and user provisioning.
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <p className="text-sm text-black/60">@enterprise</p>
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

          {/* Security Center */}
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-[1.675/1] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
              <div className="w-24 h-24 bg-black/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-black/60 mb-4">/security-center</div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                  Zero-trust security with end-to-end encryption.
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <p className="text-sm text-black/60">@enterprise</p>
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

          {/* Analytics Suite */}
          <div className="bg-white border border-black/10 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-[1.675/1] bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <div className="w-24 h-24 bg-black/10 rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-black/60 mb-4">/analytics-suite</div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 line-clamp-2">
                  Usage analytics and detailed compliance reporting.
                </h3>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <p className="text-sm text-black/60">@enterprise</p>
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

      {/* Pricing Tiers */}
      <section className="py-20 px-16 lg:px-32 border-t border-black/10">
        <div className="w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-16 text-center">
            Enterprise Pricing
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Starter */}
            <div className="border border-black/20 rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Starter</h3>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">$15</div>
                <p className="text-lg text-black/60">per user/month</p>
              </div>
              <ul className="space-y-4 text-lg text-black/60">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Up to 100 users
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Basic admin controls
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Email support
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  SSO integration
                </li>
              </ul>
              <button className="w-full py-4 px-6 border border-black text-black rounded-xl hover:bg-black hover:text-white transition-colors text-lg font-medium">
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="border-2 border-black rounded-2xl p-8 space-y-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Professional</h3>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">$35</div>
                <p className="text-lg text-black/60">per user/month</p>
              </div>
              <ul className="space-y-4 text-lg text-black/60">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Up to 1,000 users
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Advanced admin controls
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Analytics dashboard
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <button className="w-full py-4 px-6 bg-black text-white rounded-xl hover:bg-black/90 transition-colors text-lg font-medium">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="border border-black/20 rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Enterprise</h3>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">Custom</div>
                <p className="text-lg text-black/60">contact for pricing</p>
              </div>
              <ul className="space-y-4 text-lg text-black/60">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Unlimited users
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  White-label options
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  24/7 dedicated support
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Custom development
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  On-premise deployment
                </li>
              </ul>
              <button className="w-full py-4 px-6 border border-black text-black rounded-xl hover:bg-black hover:text-white transition-colors text-lg font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-16 lg:px-32 border-t border-black/10">
        <div className="w-full text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8">
            Ready to Transform
            <br />
            <span className="inline-flex pb-1 chroma-text chroma-text-animate">Your Organization?</span>
          </h2>
          <p className="text-2xl md:text-3xl text-black/60 mb-16 max-w-4xl leading-relaxed">
            Join leading enterprises who trust AugmentOS to power their teams' productivity and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              className="inline-flex h-16 px-8 items-center justify-center gap-4 text-xl rounded-2xl bg-black text-white hover:bg-black/90 transition-colors min-w-64"
              title="Contact Sales" 
              href="mailto:enterprise@augmentos.com"
            >
              <span>Contact Sales</span>
            </a>
            <a 
              className="inline-flex h-16 px-8 items-center justify-center gap-4 text-xl rounded-2xl border border-black text-black hover:bg-black hover:text-white transition-colors min-w-64"
              title="Schedule Demo" 
              href="mailto:demo@augmentos.com"
            >
              <span>Schedule Demo</span>
            </a>
          </div>
          <p className="text-lg mt-12 text-black/50">
            Enterprise solutions available worldwide with local data residency options.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
