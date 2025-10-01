import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - AugmentOS',
  description: 'Learn about AugmentOS - Enterprise AI Browser',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="w-full max-w-[1040px] mx-auto pt-100 800:pt-150 1000:pt-200 px-20">
        <header className="flex flex-col gap-y-24 mb-[120px]">
          <div className="flex flex-col 800:flex-row justify-between items-end">
            <h1 className="h1 leading-[1]">About Us</h1>
          </div>
        </header>

        <div className="w-full gap-y-[64px] gap-x-[120px] mb-[120px] grid grid-cols-1 1000:grid-cols-[1fr_580px]">
          <div className="1000:col-start-2 flex flex-col gap-[64px] p2">
            <div>
              <h3 className="h3 mb-16 text-black/85">Our Mission</h3>
              <p className="mb-16 text-black/60">
                AugmentOS is building the future of intelligent browsing. We believe that AI should enhance human capability, not replace it. Our enterprise-grade browser brings powerful AI tools directly into your workflow, making you more productive while keeping your data secure.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Our Story</h3>
              <p className="mb-16 text-black/60">
                Founded by a team of experienced engineers and designers, AugmentOS emerged from the recognition that modern work requires modern tools. We saw the gap between powerful AI capabilities and practical, everyday applications that respect privacy and security.
              </p>
              <p className="mb-16 text-black/60">
                Today, we're proud to serve enterprises and individuals who demand both cutting-edge technology and uncompromising data protection.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Our Values</h3>
              <ul className="mb-16 text-black/60 space-y-4">
                <li><strong>Privacy First:</strong> Your data belongs to you, always.</li>
                <li><strong>Human-Centered AI:</strong> Technology should amplify human intelligence, not replace it.</li>
                <li><strong>Enterprise Ready:</strong> Built for the security and scale that businesses demand.</li>
                <li><strong>Continuous Innovation:</strong> Always pushing the boundaries of what's possible.</li>
              </ul>
            </div>

            <div>
              <h3 className="h3 mb-16 text-black/85">Contact</h3>
              <p className="mb-16 text-black/60">
                Questions? We'd love to hear from you at <a className="underline" href="mailto:hello@augmentos.com">hello@augmentos.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
