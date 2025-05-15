import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const caseStudies = [
  {
    company: "Traindex",
    description: "How Traindex reduced their AWS bill by 15% in 2 months",
    link: "/case-studies/traindex",
  },
  {
    company: "TechFlow",
    description: "TechFlow saves $50,000 annually with Billgist's optimization",
    link: "/case-studies/techflow",
  },
  {
    company: "DataViz",
    description: "DataViz achieves 25% cost reduction in data transfer costs",
    link: "/case-studies/dataviz",
  },
]

export default function OfferPage() {
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

              <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Special Offer: 3-Month Guarantee
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  We guarantee to reduce your AWS bill by at least 7% within 3 months, or our service is free.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">How It Works</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                    <p>
                      Our AWS cost optimization experts will analyze your entire AWS infrastructure and spending
                      patterns.
                    </p>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                    <p>
                      We identify opportunities for savings through reserved instances, spot instances, rightsizing, and
                      more.
                    </p>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                    <p>Custom implementation plan tailored to your specific needs and business requirements.</p>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                    <p>
                      Flexible pricing based on your business size - we're here to help everyone from startups to
                      enterprises.
                    </p>
                  </li>
                  <li className="flex">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                    <p>Money-back guarantee if we don't achieve at least 7% savings within 3 months.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Billgist Team"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      We started Billgist after experiencing severe bill shocks due to AWS billing malpractices in our
                      previous startups. One month, our AWS bill unexpectedly jumped from $2,000 to $20,000 due to
                      overlooked data transfer costs and improperly configured resources.
                    </p>
                    <p className="text-gray-700 mb-4">
                      This painful experience taught us the importance of proactive cost management and the hidden
                      complexities of cloud billing. We built Billgist to ensure no other company has to learn these
                      lessons the hard way.
                    </p>
                    <p className="text-gray-700">
                      Today, we're passionate about helping businesses of all sizes optimize their AWS spending and
                      avoid the same costly mistakes we made.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Success Stories</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {caseStudies.map((study) => (
                    <Link
                      key={study.company}
                      href={study.link}
                      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-lg mb-2">{study.company}</h3>
                      <p className="text-gray-600">{study.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Ready to Start Saving?</h2>
                <Button className="bg-primary hover:bg-primary/90 text-white" size="lg" asChild>
                  <Link href="mailto:contact@billgist.com">Contact Us Today</Link>
                </Button>
                <p className="mt-4 text-gray-600">
                  Or{" "}
                  <Link href="https://calendly.com/anzay" className="text-primary hover:underline">
                    schedule a call
                  </Link>{" "}
                  to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

