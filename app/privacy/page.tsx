import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-16 bg-white sm:py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>

              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

              <div className="prose max-w-none">
                <p className="text-lg mb-6">Last updated: March 12, 2024</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Account information (name, email, company details)</li>
                  <li>AWS billing and usage data through secure IAM roles</li>
                  <li>Communication preferences and settings</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and improve our cost management services</li>
                  <li>Send notifications about your AWS spending</li>
                  <li>Generate cost optimization recommendations</li>
                  <li>Communicate about service updates and features</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Encryption in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Strict access controls and authentication</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
                <p>
                  We retain your data for as long as your account is active or as needed to provide services. You can
                  request data deletion at any time.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
                <p>We may use third-party services for:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Analytics and performance monitoring</li>
                  <li>Email communications</li>
                  <li>Customer support</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request data deletion</li>
                  <li>Object to data processing</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
                <p>For privacy-related questions, please contact us at:</p>
                <p>Email: privacy@billgist.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

