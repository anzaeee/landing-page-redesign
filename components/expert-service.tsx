import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ExpertService() {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Expert Cost Reduction Service 🚀
          </h2>
          <p className="mt-4 text-xl text-gray-600">Let our experts help reduce your enterprise-level AWS costs</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Our 3-Month Guarantee 💯</h3>
          <p className="text-lg mb-4">
            We guarantee to reduce your company's AWS bill by at least 10% within 3 months, or our service is free.
          </p>
          <p className="text-lg mb-6">
            Our pricing is tailored to what you can afford, based on your startup or business size.
          </p>
          <Button asChild>
            <Link href="mailto:contact@billgist.com">Contact Us To Help You Save Money NOW!!! 💰</Link>
          </Button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src="/placeholder.svg?height=200&width=200"
                alt="Traindex logo"
                width={200}
                height={200}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case Study 📊</div>
              <h3 className="mt-1 text-2xl font-bold leading-tight">Traindex Slashes AWS Costs by 15% 📉</h3>
              <p className="mt-2 text-gray-600">
                Traindex, a fast-growing fintech startup, partnered with Billgist to optimize their AWS spending. Within
                just 2 months, our experts identified and implemented cost-saving measures that resulted in a 15%
                reduction in their monthly AWS bill, without compromising on performance or scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

