import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - AugmentOS',
  description: 'Privacy Policy for AugmentOS - Enterprise AI Browser',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="w-full max-w-[1040px] mx-auto pt-100 800:pt-150 1000:pt-200 px-20">
        <header className="flex flex-col gap-y-24 mb-[120px]">
          <div className="flex flex-col 800:flex-row justify-between items-end">
            <h1 className="h1 leading-[1]">Privacy</h1>
          </div>
        </header>

        <div className="w-full gap-y-[64px] gap-x-[120px] mb-[120px] grid grid-cols-1 1000:grid-cols-[1fr_580px]">
          <div className="col-start-1 hidden 1000:block">
            <h3 className="h3">TL;DR</h3>
          </div>
          
          <div className="1000:col-start-2 flex flex-col gap-[64px] p2">
            <div>
              <h3 className="h3 mb-16 text-black/85">Your browser should be a personal space</h3>
              <p className="mb-16 text-black/60">
                We believe you should be able to go just about anywhere online without giving up your privacy. But to get helpful answers with AugmentOS, you sometimes need to share a little — like your question or the page you're on.
              </p>
              <p className="mb-16 text-black/60">
                Here's how AugmentOS generally works: your content data is encrypted and stored locally, right on your device. When you send a request to AugmentOS's Chat, that request is either routed to a search engine or a trusted AI partner. If it's AI, the data required for your request (like your question, or your open tab) is briefly sent to our servers and passed to a trusted partner to return an answer in seconds.
              </p>
              <p className="mb-16 text-black/60">
                Our goal is to keep your data safe while keeping you moving.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Privacy by design</h3>
              
              <h4 className="h4 mb-16 text-black/85">1. Your data lives on your device.</h4>
              <p className="mb-16 text-black/60">
                Your conversations, history, bookmarks, and files are encrypted and stored locally on your device. When you ask AugmentOS's Chat a question, only the data relevant to that request is sent off your device.
              </p>
              
              <h4 className="h4 mb-16 text-black/85">2. Your data is only shared when needed.</h4>
              <p className="mb-16 text-black/60">
                When your request is routed to our servers, we only send the necessary data (your question, the page you're on, etc.) to our AI partners. These partners are restricted from training on your data, and may not store it after your request is complete.
              </p>
              
              <h4 className="h4 mb-16 text-black/85">3. You can delete your data at any time.</h4>
              <p className="mb-16 text-black/60">
                When you clear your chats, files, or history, they're gone for good. And when you browse in incognito mode, nothing is ever stored.
              </p>
              
              <h4 className="h4 mb-16 text-black/85">4. Your data is not for sale.</h4>
              <p className="mb-16 text-black/60">
                We will never sell your personal data. Period. We only use it to help AugmentOS provide the most accurate and helpful results.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Contact</h3>
              <p className="mb-16 text-black/60">
                Questions? Don't hesitate to reach out at <a className="underline" href="mailto:privacy@augmentos.com">privacy@augmentos.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
