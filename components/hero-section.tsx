import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-white">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-orange-100 text-orange-800">
            All in one cost management solution 💼
          </div>
          <div className="relative mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl relative z-10 mb-4">
              Control, Monitor and Moderate your AWS Billing. 💰
            </h1>
            <svg className="absolute -bottom-4 left-0 w-full h-8" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path
                d="M0,50 Q250,0 500,50 T1000,50"
                fill="none"
                stroke="#F97316"
                strokeWidth="6"
                className="animate-draw"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="mt-6 text-xl text-gray-600">
            All you need to know about your AWS spending, delivered right where you want it. Knowledge is power -- start
            saving right away! ✨
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
            <Button variant="outline" className="min-w-[150px] bg-gray-200 text-gray-800 hover:bg-gray-300" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button
              className="min-w-[200px] bg-[#f97316] hover:bg-white hover:text-[#f97316] hover:border-[#f97316] hover:border transition-all"
              asChild
            >
              <Link href="/signup" className="flex items-center gap-2">
                Start Saving Now <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-900 font-medium">
            14 Day Free Trial. No Credit Card. <span className="inline-block animate-rocket">🚀</span>
          </p>
          <div className="mt-12 relative max-w-2xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen-JBUjrjDVRT6UAeajvSYAhuYPUQoajS.png"
              alt="Billgist Dashboard Preview"
              width={800}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

