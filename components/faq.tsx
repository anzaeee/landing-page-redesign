"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "How does Billgist access my AWS billing data?",
    answer:
      "Billgist securely connects to your AWS account using a read-only IAM role that only has permissions to view billing information. We never store your AWS credentials and use industry-standard encryption for all data transfers.",
  },
  {
    question: "Can I use Billgist with multiple AWS accounts?",
    answer:
      "Billgist is designed to work with multiple AWS accounts. Our Professional plan supports up to 10 accounts, and our Enterprise plan offers unlimited account connections. You can easily view aggregated costs or drill down into individual accounts.",
  },
  {
    question: "How is Billgist different from AWS Cost Explorer?",
    answer:
      "While AWS Cost Explorer provides basic cost analysis, Billgist goes beyond by helping you track otherwise 'hidden' or hard-to-find costs such as data transfer and taxes. Our AI-powered insights and customizable alerts provide a more comprehensive and proactive approach to cost management.",
  },
  {
    question: "Can I customize the budget alerts?",
    answer:
      "Yes, you can customize budget alerts to suit your specific needs. Set thresholds as percentages or fixed amounts, choose notification frequencies, and integrate with email or Slack. You can also create different alerts for different services or accounts.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "No, all our plans are available on a month-to-month basis with no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time. We also offer discounts for annual billing if you prefer.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">Get answers to the most common questions about Billgist.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Find more information in our Help Section.</p>
            <Button asChild>
              <Link href="/help">Visit Help Center</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

