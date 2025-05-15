import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OrangeBanner() {
  return (
    <section className="bg-orange-500 py-16">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your AWS Costs? 💰</h2>
          <p className="text-xl mb-8">
            Join thousands of companies saving money with Billgist's intelligent cost management platform.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-orange-100" size="lg" asChild>
            <Link href="/signup">Start Your Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

