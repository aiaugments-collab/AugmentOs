import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions - AugmentOS',
  description: 'Terms and Conditions for AugmentOS - Enterprise AI Browser',
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>By accessing and using AugmentOS ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <div className="space-y-4 text-gray-700">
              <p>AugmentOS is an enterprise-grade AI-powered browser that provides intelligent automation capabilities. The Service includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered web automation</li>
                <li>Browser-based workflow management</li>
                <li>Integration with third-party services</li>
                <li>Customer support and documentation</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <div className="space-y-4 text-gray-700">
              <p>To access certain features of the Service, you must register for an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <div className="space-y-4 text-gray-700">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or harmful content</li>
                <li>Attempt to gain unauthorized access to systems</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>Use the Service for any unlawful or prohibited purpose</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p>The Service and its original content, features, and functionality are owned by AugmentOS Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>For paid services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We may change our fees with 30 days' notice</li>
                <li>You are responsible for all applicable taxes</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Availability</h2>
            <div className="space-y-4 text-gray-700">
              <p>We strive to maintain high service availability but do not guarantee uninterrupted access. We may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perform scheduled maintenance</li>
                <li>Update or modify the Service</li>
                <li>Suspend access for security reasons</li>
                <li>Discontinue features with reasonable notice</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>To the maximum extent permitted by law, AugmentOS Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> legal@augmentos.com</p>
                <p><strong>Address:</strong> AugmentOS Inc., 123 Enterprise Blvd, San Francisco, CA 94105</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
