import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20BILLGIST%20-%20light-yGxK7TpzBUef2PAqVyhbSRDMn3bbvc.png"
                  alt="Billgist Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-gray-600 mt-2">Start your 14-day free trial. No credit card required.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" />
                  <p className="text-xs text-gray-500">
                    Must be at least 8 characters with 1 number and 1 special character
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Create account</Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Already have an account?</span>{" "}
                  <Link href="/signin" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

