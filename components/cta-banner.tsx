import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Simplify AWS Costs and Understand What Drives Costs 💡</h2>
            <div className="space-y-4">
              <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/signup">START SAVING NOW</Link>
              </Button>
              <p>
                Need more information?{" "}
                <Link href="https://calendly.com/anzay" className="text-primary hover:underline">
                  Schedule a call
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
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

