import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Help - AugmentOS',
  description: 'Get help and support for AugmentOS - Enterprise AI Browser',
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="w-full max-w-[1040px] mx-auto pt-100 800:pt-150 1000:pt-200 px-20">
        <header className="flex flex-col gap-y-24 mb-[120px]">
          <div className="flex flex-col 800:flex-row justify-between items-end">
            <h1 className="h1 leading-[1]">Help</h1>
          </div>
        </header>

        <div className="w-full gap-y-[64px] gap-x-[120px] mb-[120px] grid grid-cols-1 1000:grid-cols-[1fr_580px]">
          <div className="1000:col-start-2 flex flex-col gap-[64px] p2">
            <div>
              <h3 className="h3 mb-16 text-black/85">Getting Started</h3>
              <p className="mb-16 text-black/60">
                Download and install AugmentOS from our official website. The installation process is straightforward and takes just a few minutes.
              </p>
              <p className="mb-16 text-black/60">
                Once installed, set up your AI preferences in the settings panel, configure your workspace and productivity tools, and explore the AI-powered features.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Common Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="h4 mb-4 text-black/85">How do I enable AI features?</h4>
                  <p className="mb-16 text-black/60">Navigate to Settings &gt; AI Features and toggle on the features you want to use. You can customize AI behavior for different websites and tasks.</p>
                </div>
                
                <div>
                  <h4 className="h4 mb-4 text-black/85">Is my data secure?</h4>
                  <p className="mb-16 text-black/60">Yes, AugmentOS prioritizes your privacy and security. All data processing happens locally on your device, and we never store or share your personal information.</p>
                </div>
                
                <div>
                  <h4 className="h4 mb-4 text-black/85">How do I update AugmentOS?</h4>
                  <p className="mb-16 text-black/60">Updates are automatically downloaded and installed. You'll receive a notification when an update is available, and you can also check for updates manually in Settings &gt; About.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Contact Support</h3>
              <p className="mb-16 text-black/60">
                Still need help? Our support team is here to assist you at <a className="underline" href="mailto:support@augmentos.com">support@augmentos.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
