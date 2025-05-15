import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-orange-500 py-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-white text-center md:text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Simplify AWS Costs and Understand What Drives Costs 💡</h2>
            <p className="text-xl mb-8">
              Join thousands of companies saving money with Billgist's intelligent cost management platform.
            </p>
            <div className="space-y-4">
              <Button className="bg-white text-orange-500 hover:bg-orange-100" size="lg" asChild>
                <Link href="/signup">START SAVING NOW</Link>
              </Button>
              <p>
                Need more information?{" "}
                <Link href="https://calendly.com/anzay" className="underline hover:text-orange-200">
                  Schedule a call
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="AWS Cost Management"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

