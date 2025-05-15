"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const plans = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "Perfect for individuals exploring AWS cost management.",
    features: [
      "Basic cost dashboard",
      "Daily email reports",
      "Single AWS account",
      "7-day data retention",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: "$30",
    yearlyPrice: "$331", // $30 * 12 months with 8% discount: $30 * 12 * 0.92 = $331.2 rounded to $331
    description: "For growing teams who need more insights and integrations.",
    features: [
      "Everything in Free",
      "Real-time budget alerts",
      "Slack integration",
      "Rightsizing recommendations",
      "30-day data retention",
      "Priority email support",
      "Up to 10 AWS accounts",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$50",
    yearlyPrice: "$552", // $50 * 12 months with 8% discount: $50 * 12 * 0.92 = $552
    description: "For organizations with complex AWS infrastructure.",
    features: [
      "Everything in Professional",
      "Custom reporting",
      "API access",
      "Unlimited data retention",
      "Dedicated account manager",
      "Phone support",
      "Unlimited AWS accounts",
      "SSO integration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-16 bg-gray-50 sm:py-24" id="pricing">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>

          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Label
                htmlFor="billing-toggle"
                className={`text-sm font-medium ${!isYearly ? "text-primary" : "text-gray-500"}`}
              >
                Monthly
              </Label>
              <Switch id="billing-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
              <div className="flex flex-col items-start">
                <Label
                  htmlFor="billing-toggle"
                  className={`text-sm font-medium ${isYearly ? "text-primary" : "text-gray-500"}`}
                >
                  Yearly
                </Label>
                {isYearly && <span className="text-xs text-green-600 font-medium">Save 8%</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="grid max-w-5xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary ${
                plan.popular ? "shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 uppercase rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-gray-500">{isYearly ? "/year" : "/month"}</span>
                </div>
                {isYearly && plan.name !== "Free" && (
                  <p className="text-sm text-green-600 mt-1">
                    {`$${Math.round(Number.parseInt(plan.monthlyPrice.replace("$", "")) * 12 - Number.parseInt(plan.yearlyPrice.replace("$", "")))} savings`}
                  </p>
                )}
                <CardDescription className="mt-2">
                  {plan.description}
                  {plan.name === "Enterprise" && (
                    <span className="block mt-1 text-sm text-gray-500">Contact us for better rates</span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

