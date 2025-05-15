import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I connect my AWS account to Billgist?",
    answer:
      "Connecting your AWS account is simple. We use AWS Organizations or a read-only IAM role that you create in your account. We provide step-by-step instructions and CloudFormation templates to make the process seamless.",
  },
  {
    question: "What permissions does Billgist require?",
    answer:
      "Billgist only requires read-only access to your billing and cost management data. We never request or need access to modify your AWS resources.",
  },
  {
    question: "How often is the cost data updated?",
    answer:
      "Cost data is updated every few hours to provide near real-time visibility into your AWS spending. Some metrics might have a slight delay as AWS processes their billing data.",
  },
  {
    question: "Can I set up custom alerts?",
    answer:
      "Yes, you can create custom alerts based on various metrics like total cost, service-specific costs, or cost increase percentages. Alerts can be delivered via email or Slack.",
  },
  {
    question: "How do I set up Slack integration?",
    answer:
      "You can set up Slack integration through our dashboard. We'll guide you through the process of adding our Slack app and selecting which channels should receive notifications.",
  },
  {
    question: "What types of reports can I generate?",
    answer:
      "You can generate various reports including daily/weekly/monthly summaries, service-specific costs, resource utilization, and savings opportunities. Reports can be customized and scheduled.",
  },
  {
    question: "How does the AI billing assistant work?",
    answer:
      "Our AI assistant uses natural language processing to answer your questions about AWS costs. It can explain bill changes, identify cost drivers, and suggest optimization opportunities.",
  },
  {
    question: "Can I track AWS credits and savings plans?",
    answer:
      "Yes, Billgist provides detailed tracking of AWS credits, savings plans, and reserved instances. We help you monitor usage and expiration dates.",
  },
  {
    question: "How secure is my billing data?",
    answer:
      "We take security seriously. All data is encrypted in transit and at rest, and we follow AWS security best practices. We never store your AWS credentials.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer email support for all plans, with priority support and dedicated account managers available for Professional and Enterprise plans.",
  },
  {
    question: "Can I export my cost data?",
    answer:
      "Yes, you can export cost data in various formats including CSV, Excel, and JSON. You can also use our API to integrate with your existing tools.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time through your account settings. We don't lock you into long-term contracts.",
  },
]

export default function HelpPage() {
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

              <h1 className="text-4xl font-bold mb-8">Help Center</h1>

              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

