import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Compliance - AugmentOS',
  description: 'Compliance and regulatory information for AugmentOS - Enterprise AI Browser',
}

export default function Compliance() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Compliance</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Compliance Commitment</h2>
            <div className="space-y-4 text-gray-700">
              <p>AugmentOS is committed to maintaining the highest standards of compliance with applicable laws, regulations, and industry standards. We understand that enterprise customers require assurance that their data is handled in accordance with strict compliance requirements.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection Compliance</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">GDPR (General Data Protection Regulation)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full compliance with EU data protection requirements</li>
                  <li>Data processing agreements (DPAs) available</li>
                  <li>Right to data portability and deletion</li>
                  <li>Privacy by design and default principles</li>
                  <li>Data Protection Impact Assessments (DPIAs)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">CCPA (California Consumer Privacy Act)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compliance with California privacy requirements</li>
                  <li>Consumer rights to know, delete, and opt-out</li>
                  <li>Transparent data collection practices</li>
                  <li>Non-discrimination policies</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">PIPEDA (Personal Information Protection and Electronic Documents Act)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compliance with Canadian privacy laws</li>
                  <li>Consent-based data collection</li>
                  <li>Purpose limitation and data minimization</li>
                  <li>Individual access and correction rights</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industry Standards & Certifications</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">SOC 2 Type II</h3>
                <p className="mb-3">Annual third-party audits covering:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Security controls and procedures</li>
                  <li>Availability and system reliability</li>
                  <li>Processing integrity and accuracy</li>
                  <li>Confidentiality of customer data</li>
                  <li>Privacy protection measures</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">ISO 27001</h3>
                <p className="mb-3">International standard for information security management:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information security management system (ISMS)</li>
                  <li>Risk assessment and management</li>
                  <li>Security control implementation</li>
                  <li>Continuous improvement processes</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">ISO 27018</h3>
                <p className="mb-3">Code of practice for protection of personally identifiable information (PII) in public clouds:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>PII protection in cloud environments</li>
                  <li>Consent and choice mechanisms</li>
                  <li>Purpose specification and limitation</li>
                  <li>Data minimization and retention</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industry-Specific Compliance</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Healthcare (HIPAA Ready)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Business Associate Agreements (BAAs) available</li>
                  <li>Administrative, physical, and technical safeguards</li>
                  <li>Workforce training and access management</li>
                  <li>Audit controls and monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Financial Services</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>PCI DSS compliance for payment processing</li>
                  <li>SOX compliance for financial reporting</li>
                  <li>GLBA compliance for financial privacy</li>
                  <li>FFIEC guidelines adherence</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Government & Defense</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>FedRAMP compliance framework</li>
                  <li>FISMA security requirements</li>
                  <li>ITAR compliance for export controls</li>
                  <li>NIST Cybersecurity Framework</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Audit & Assessment</h2>
            <div className="space-y-4 text-gray-700">
              <p>We undergo regular third-party audits and assessments:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Annual SOC 2 Type II audits</strong> by independent auditors</li>
                <li><strong>Penetration testing</strong> by certified security professionals</li>
                <li><strong>Vulnerability assessments</strong> on a quarterly basis</li>
                <li><strong>Code reviews</strong> and security testing in development</li>
                <li><strong>Compliance gap assessments</strong> for new regulations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Residency & Sovereignty</h2>
            <div className="space-y-4 text-gray-700">
              <p>We support data residency requirements for various jurisdictions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>EU Data Residency:</strong> Data processing within EU boundaries</li>
                <li><strong>US Data Residency:</strong> Data processing within US boundaries</li>
                <li><strong>Canada Data Residency:</strong> Data processing within Canadian boundaries</li>
                <li><strong>Custom Regions:</strong> Flexible data residency options</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Documentation</h2>
            <div className="space-y-4 text-gray-700">
              <p>We provide comprehensive compliance documentation:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Security and compliance reports</li>
                <li>Data processing agreements (DPAs)</li>
                <li>Business Associate Agreements (BAAs)</li>
                <li>Compliance matrices and mappings</li>
                <li>Audit reports and certifications</li>
                <li>Privacy impact assessments</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Compliance</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our compliance program includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular compliance training for all employees</li>
                <li>Automated compliance monitoring and reporting</li>
                <li>Policy and procedure updates as regulations change</li>
                <li>Risk assessments and mitigation strategies</li>
                <li>Incident response procedures for compliance violations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Compliance Team</h2>
            <div className="space-y-4 text-gray-700">
              <p>For compliance-related questions or to request documentation:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> compliance@augmentos.com</p>
                <p><strong>Address:</strong> AugmentOS Inc., 123 Enterprise Blvd, San Francisco, CA 94105</p>
                <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
