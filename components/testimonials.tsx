"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Billgist has completely transformed how we manage our AWS costs. The daily reports are a game-changer for our finance team.",
    author: "Sarah Johnson",
    title: "CTO at TechFlow",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The budget alarms have saved us thousands of dollars by alerting us to unexpected spikes before they become major issues.",
    author: "Michael Chang",
    title: "DevOps Lead at StartupX",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As someone new to AWS, Billgist's dashboard made our cloud costs understandable and actionable for the first time.",
    author: "Jessica Peters",
    title: "Engineering Manager at DataViz",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The rightsizing recommendations paid for our Billgist subscription within the first month. Incredible ROI.",
    author: "David Rodriguez",
    title: "Cloud Architect at EnterpriseNow",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The Slack integration means our entire team stays informed about our AWS spending without any extra effort.",
    author: "Linda Williams",
    title: "VP of Engineering at CloudScale",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted By You - The Community
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[0, 1, 2].map((i) => {
            const index = (currentIndex + i) % testimonials.length
            return (
              <Card key={index} className="h-full overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative h-40 w-full mb-6 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={`https://dummyimage.com/320x160/f97316/ffffff.gif&text=Testimonial+${index + 1}`}
                      alt="Testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[index].avatar || "/placeholder.svg"}
                        alt={testimonials[index].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{testimonials[index].author}</h3>
                      <p className="text-sm text-gray-500">{testimonials[index].title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 relative">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center mb-8">
              <Quote className="h-12 w-12 text-primary opacity-20" />
            </div>
            <div className="relative overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="flex-shrink-0 w-full px-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="text-xl text-gray-700">{testimonial.quote}</p>
                      <footer className="mt-4">
                        <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

