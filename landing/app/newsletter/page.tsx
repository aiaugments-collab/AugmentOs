import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Newsletter - AugmentOS',
  description: 'Subscribe to AugmentOS newsletter for updates and insights',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="w-full max-w-[1040px] mx-auto pt-100 800:pt-150 1000:pt-200 px-20">
        <header className="flex flex-col gap-y-24 mb-[120px]">
          <div className="flex flex-col 800:flex-row justify-between items-end">
            <h1 className="h1 leading-[1]">Newsletter</h1>
          </div>
        </header>

        <div className="w-full gap-y-[64px] gap-x-[120px] mb-[120px] grid grid-cols-1 1000:grid-cols-[1fr_580px]">
          <div className="1000:col-start-2 flex flex-col gap-[64px] p2">
            <div>
              <h3 className="h3 mb-16 text-black/85">Stay Updated</h3>
              <p className="mb-16 text-black/60">
                Get the latest updates on AugmentOS features, AI insights, and productivity tips delivered directly to your inbox. Our newsletter is designed for professionals who want to stay ahead of the curve in AI-powered productivity.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">What You'll Get</h3>
              <ul className="mb-16 text-black/60 space-y-4">
                <li><strong>Product Updates:</strong> Be the first to know about new features and improvements</li>
                <li><strong>AI Insights:</strong> Deep dives into how AI is transforming work and productivity</li>
                <li><strong>Tips & Tricks:</strong> Advanced techniques to get the most out of AugmentOS</li>
                <li><strong>Industry News:</strong> Curated updates on enterprise AI and browser technology</li>
                <li><strong>Behind the Scenes:</strong> Stories from our team and development process</li>
              </ul>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Subscribe</h3>
              <div className="bg-black/5 border border-black/10 p-8 rounded-2xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black/50 text-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">
                      Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black/50 text-lg"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 border border-black/20 rounded focus:outline-none focus:border-black/50"
                        required
                      />
                      <span className="text-black/70">
                        I agree to receive newsletters and updates from AugmentOS. You can unsubscribe at any time.
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-black/90 transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Privacy</h3>
              <p className="mb-16 text-black/60">
                We respect your privacy. Your email will only be used for our newsletter and product updates. We never share your information with third parties, and you can unsubscribe at any time with one click.
              </p>
              <p className="mb-16 text-black/60">
                Read our full <a href="/privacy" className="underline">Privacy Policy</a> for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
