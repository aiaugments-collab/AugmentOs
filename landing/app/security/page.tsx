import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Security - AugmentOS',
  description: 'Security practices and measures for AugmentOS - Enterprise AI Browser',
}

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Security</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Security Commitment</h2>
            <div className="space-y-4 text-gray-700">
              <p>At AugmentOS, security is our top priority. We implement industry-leading security measures to protect your data and ensure the integrity of our services. Our security program is designed to meet enterprise-grade standards and compliance requirements.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-gray-900">Encryption</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data in Transit:</strong> All data transmission is encrypted using TLS 1.3</li>
                <li><strong>Data at Rest:</strong> All stored data is encrypted using AES-256 encryption</li>
                <li><strong>Database Encryption:</strong> All databases are encrypted with industry-standard algorithms</li>
                <li><strong>Key Management:</strong> Encryption keys are managed using secure key management systems</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900">Access Controls</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-factor authentication (MFA) for all administrative access</li>
                <li>Role-based access controls (RBAC) with principle of least privilege</li>
                <li>Regular access reviews and permission audits</li>
                <li>Session management with automatic timeout</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Infrastructure Security</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-gray-900">Cloud Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hosted on enterprise-grade cloud infrastructure</li>
                <li>Network segmentation and micro-segmentation</li>
                <li>DDoS protection and traffic filtering</li>
                <li>Regular security updates and patch management</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900">Monitoring & Logging</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>24/7 security monitoring and incident response</li>
                <li>Comprehensive audit logging of all system activities</li>
                <li>Real-time threat detection and alerting</li>
                <li>Security information and event management (SIEM)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Application Security</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-gray-900">Secure Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure coding practices and code reviews</li>
                <li>Automated security testing in CI/CD pipeline</li>
                <li>Regular penetration testing by third-party experts</li>
                <li>Vulnerability scanning and remediation</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900">API Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>API authentication and authorization</li>
                <li>Rate limiting and abuse prevention</li>
                <li>Input validation and sanitization</li>
                <li>API versioning and deprecation management</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance & Certifications</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">SOC 2 Type II</h3>
                  <p>Annual audits of our security, availability, and confidentiality controls</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">ISO 27001</h3>
                  <p>International standard for information security management systems</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">GDPR Compliance</h3>
                  <p>Full compliance with European data protection regulations</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">CCPA Compliance</h3>
                  <p>Compliance with California Consumer Privacy Act requirements</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Incident Response</h2>
            <div className="space-y-4 text-gray-700">
              <p>We maintain a comprehensive incident response plan that includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>24/7 security operations center (SOC)</li>
                <li>Rapid incident detection and response procedures</li>
                <li>Customer notification protocols</li>
                <li>Post-incident analysis and improvement processes</li>
                <li>Regular incident response training and drills</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We carefully vet all third-party vendors and service providers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Security assessments of all vendors</li>
                <li>Data processing agreements with security requirements</li>
                <li>Regular vendor security reviews</li>
                <li>Incident notification requirements</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Awareness</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our team undergoes regular security training including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Security awareness training for all employees</li>
                <li>Role-specific security training</li>
                <li>Phishing simulation and testing</li>
                <li>Secure coding practices</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reporting Security Issues</h2>
            <div className="space-y-4 text-gray-700">
              <p>If you discover a security vulnerability, please report it to us immediately:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> security@augmentos.com</p>
                <p><strong>PGP Key:</strong> Available upon request</p>
                <p><strong>Response Time:</strong> We aim to respond within 24 hours</p>
              </div>
              <p className="mt-4">Please do not publicly disclose vulnerabilities until we have had a chance to address them.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Security Team</h2>
            <div className="space-y-4 text-gray-700">
              <p>For security-related questions or concerns:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> security@augmentos.com</p>
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
