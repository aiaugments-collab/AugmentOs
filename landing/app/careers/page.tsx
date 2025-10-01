import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Careers - AugmentOS',
  description: 'Join the AugmentOS team - Enterprise AI Browser careers',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="w-full max-w-[1040px] mx-auto pt-100 800:pt-150 1000:pt-200 px-20">
        <header className="flex flex-col gap-y-24 mb-[120px]">
          <div className="flex flex-col 800:flex-row justify-between items-end">
            <h1 className="h1 leading-[1]">Careers</h1>
          </div>
        </header>

        <div className="w-full gap-y-[64px] gap-x-[120px] mb-[120px] grid grid-cols-1 1000:grid-cols-[1fr_580px]">
          <div className="1000:col-start-2 flex flex-col gap-[64px] p2">
            <div>
              <h3 className="h3 mb-16 text-black/85">Join Our Mission</h3>
              <p className="mb-16 text-black/60">
                We're building the future of intelligent browsing, and we're looking for exceptional people to join us. At AugmentOS, you'll work on cutting-edge AI technology while solving real problems for enterprises and individuals worldwide.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">What We Offer</h3>
              <ul className="mb-16 text-black/60 space-y-4">
                <li><strong>Competitive Compensation:</strong> Industry-leading salary and equity packages</li>
                <li><strong>Flexible Work:</strong> Remote-first culture with optional office spaces</li>
                <li><strong>Health & Wellness:</strong> Comprehensive health, dental, and vision coverage</li>
                <li><strong>Learning & Growth:</strong> Annual learning budget and conference attendance</li>
                <li><strong>Time Off:</strong> Unlimited PTO and company-wide recharge weeks</li>
                <li><strong>Equipment:</strong> Top-tier hardware and software for your role</li>
              </ul>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Open Positions</h3>
              <p className="mb-16 text-black/60">
                We're always looking for talented individuals across engineering, design, product, and operations. Even if you don't see a specific role listed, we'd love to hear from exceptional candidates.
              </p>
              
              <div className="space-y-6">
                <div className="border border-black/10 rounded-16 p-6">
                  <h4 className="h4 mb-4 text-black/85">Senior Frontend Engineer</h4>
                  <p className="text-black/60 mb-4">Build the next generation of browser interfaces with React, TypeScript, and modern web technologies.</p>
                  <span className="text-sm text-black/50">San Francisco, CA • Remote</span>
                </div>
                
                <div className="border border-black/10 rounded-16 p-6">
                  <h4 className="h4 mb-4 text-black/85">AI/ML Engineer</h4>
                  <p className="text-black/60 mb-4">Develop and optimize AI models for real-time browser integration and user assistance.</p>
                  <span className="text-sm text-black/50">San Francisco, CA • Remote</span>
                </div>
                
                <div className="border border-black/10 rounded-16 p-6">
                  <h4 className="h4 mb-4 text-black/85">Product Designer</h4>
                  <p className="text-black/60 mb-4">Design intuitive experiences that make AI feel natural and powerful for enterprise users.</p>
                  <span className="text-sm text-black/50">San Francisco, CA • Remote</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Apply</h3>
              <p className="mb-16 text-black/60">
                Ready to join us? Send your resume and a note about what excites you most about AugmentOS to <a className="underline" href="mailto:careers@augmentos.com">careers@augmentos.com</a>.
              </p>
              <p className="mb-16 text-black/60">
                We're an equal opportunity employer committed to diversity and inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
