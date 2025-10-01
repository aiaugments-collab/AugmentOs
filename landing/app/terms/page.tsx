import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use - AugmentOS',
  description: 'Terms and Conditions for AugmentOS - Enterprise AI Browser',
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="w-full max-w-[1040px] mx-auto pt-100 800:pt-150 1000:pt-200 px-20">
        <header className="flex flex-col gap-y-24 mb-[120px]">
          <div className="flex flex-col 800:flex-row justify-between items-end">
            <h1 className="h1 leading-[1]">Terms of Use</h1>
          </div>
        </header>

        <div className="w-full gap-y-[64px] gap-x-[120px] mb-[120px] grid grid-cols-1 1000:grid-cols-[1fr_580px]">
          <div className="1000:col-start-2 flex flex-col gap-[64px] p2">
            <div>
              <h3 className="h3 mb-16 text-black/85">Acceptance of Terms</h3>
              <p className="mb-16 text-black/60">
                By accessing and using AugmentOS ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Description of Service</h3>
              <p className="mb-16 text-black/60">
                AugmentOS is an enterprise-grade AI-powered browser that provides intelligent automation capabilities. The Service includes AI-powered browsing assistance, productivity tools, and enterprise security features.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">User Responsibilities</h3>
              <p className="mb-16 text-black/60">
                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Privacy and Data Protection</h3>
              <p className="mb-16 text-black/60">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Limitation of Liability</h3>
              <p className="mb-16 text-black/60">
                In no event shall AugmentOS be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Changes to Terms</h3>
              <p className="mb-16 text-black/60">
                We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Use on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Contact</h3>
              <p className="mb-16 text-black/60">
                If you have any questions about these Terms of Use, please contact us at <a className="underline" href="mailto:legal@augmentos.com">legal@augmentos.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
