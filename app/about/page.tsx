import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, TrendingUp, Clock, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-white sm:py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Our Mission: Make AWS Costs Transparent
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                We're a team of cloud enthusiasts who believe that managing AWS costs shouldn't be complicated.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gray-50 sm:py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Billgist was born out of frustration. As startup founders ourselves, we experienced the shock of
                  unexpected AWS bills that threatened our runway. One month, our bill jumped from $2,000 to $20,000
                  without warning.
                </p>
                <p>
                  After digging through the complex AWS billing dashboard, we discovered hidden data transfer costs and
                  improperly configured resources that were draining our budget. We realized that if we—experienced
                  cloud engineers—struggled with this, others must be facing the same challenges.
                </p>
                <p>
                  We built Billgist to solve this problem once and for all. Our platform provides clear, actionable
                  insights into your AWS spending, helping you optimize costs without sacrificing performance.
                </p>
                <p>
                  Today, we're proud to help thousands of companies save millions on their AWS bills, giving them the
                  financial breathing room to focus on what matters: building great products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white sm:py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold ml-4">Customer First</h3>
                </div>
                <p className="text-gray-600">
                  We build for our customers, not for ourselves. Every feature is designed with your needs in mind.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold ml-4">Excellence</h3>
                </div>
                <p className="text-gray-600">
                  We're committed to building the best product possible, with attention to every detail.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold ml-4">Continuous Improvement</h3>
                </div>
                <p className="text-gray-600">
                  We're never satisfied with the status quo. We're always looking for ways to make Billgist better.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold ml-4">Respect for Time</h3>
                </div>
                <p className="text-gray-600">
                  We know your time is valuable. Our product is designed to save you time, not waste it.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold ml-4">Empathy</h3>
                </div>
                <p className="text-gray-600">
                  We understand the challenges you face because we've faced them too. We're here to help.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold ml-4">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  We're constantly exploring new ways to help you understand and optimize your AWS costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50 sm:py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-xl text-gray-600">The people behind Billgist</p>
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Alex Johnson" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Alex Johnson</h3>
                <p className="text-primary">CEO & Co-Founder</p>
                <p className="mt-2 text-gray-600">
                  Former AWS Solutions Architect with a passion for simplifying complex systems.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Sarah Chen" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Sarah Chen</h3>
                <p className="text-primary">CTO & Co-Founder</p>
                <p className="mt-2 text-gray-600">
                  Cloud infrastructure expert who's built systems for startups and Fortune 500 companies.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Michael Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-primary">Head of Product</p>
                <p className="mt-2 text-gray-600">
                  Product leader focused on creating intuitive, user-friendly experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary sm:py-24">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to Take Control of Your AWS Costs?
              </h2>
              <p className="mt-6 text-xl text-white opacity-90">
                Join thousands of companies saving money with Billgist.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-primary hover:bg-gray-100" size="lg" asChild>
                  <Link href="/signup">Start Your Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

