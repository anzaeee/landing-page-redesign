"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { BarChart3, FileText, BellRing, Hourglass, Cog, MessageSquare, Slack, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Comprehensive Cost Dashboard",
    description:
      "Get a complete view of all your AWS costs in one place. Our intuitive dashboard helps you identify cost trends and potential savings opportunities at a glance.",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Customizable Cost Reports",
    description:
      "Save reports locally or get them delivered to your email. Tailor your cost reports to focus on the metrics that matter most to your organization.",
  },
  {
    icon: <BellRing className="w-8 h-8 text-primary" />,
    title: "Smart Budget Alarms",
    description:
      "Set up threshold alerts to prevent unexpected costs. Stay ahead of budget overruns with intelligent alerts that notify you before costs spiral out of control.",
  },
  {
    icon: <Hourglass className="w-8 h-8 text-primary" />,
    title: "Credit Tracking System",
    description:
      "Keep tabs on your remaining AWS credits with real-time updates. Our system provides clear visibility into your credit usage and expiration dates.",
  },
  {
    icon: <Cog className="w-8 h-8 text-primary" />,
    title: "Rightsizing Recommendations",
    description:
      "Receive AI-powered suggestions to optimize your AWS resources. Achieve the perfect balance between performance and cost-efficiency.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "AI Billing Assistant",
    description:
      "Get instant answers to your AWS billing questions with our AI-powered chatbot. From cost breakdowns to optimization tips, our assistant is available 24/7.",
  },
  {
    icon: <Slack className="w-8 h-8 text-primary" />,
    title: "Slack Integration",
    description:
      "Seamlessly integrate Billgist alerts into your Slack workspace. Keep your team informed with instant notifications about budget alerts and cost spikes.",
  },
]

export function FeatureCards() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50 sm:py-24" id="features">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Powerful AWS Cost Management Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 mb-8">
            Everything you need to take control of your AWS spending and optimize your cloud resources.
          </p>
          <p className="text-sm text-gray-600 mb-2">See how Billgist can transform your AWS cost management</p>
          <Button
            className="bg-white text-[#f97316] border border-[#f97316] hover:bg-[#f97316] hover:text-white transition-all"
            size="lg"
            asChild
          >
            <Link href="/demo" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Interactive Live Demo
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.slice(0, 6).map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="opacity-0 transition-all duration-300 ease-in-out"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-bold ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
          <div
            ref={(el) => (featureRefs.current[6] = el)}
            className="opacity-0 transition-all duration-300 ease-in-out lg:col-start-2"
            style={{
              animationDelay: `${6 * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {features[6].icon}
                  <h3 className="text-lg font-bold ml-4">{features[6].title}</h3>
                </div>
                <p className="text-sm text-gray-600">{features[6].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            className="bg-[#f97316] hover:bg-white hover:text-[#f97316] hover:border-[#f97316] hover:border transition-all"
            asChild
          >
            <Link href="/features">Learn More About Billgist</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

