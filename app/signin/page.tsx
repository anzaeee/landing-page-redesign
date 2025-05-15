import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignInPage() {
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
                <h1 className="text-2xl font-bold">Sign in to your account</h1>
                <p className="text-gray-600 mt-2">Welcome back! Please enter your details.</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Sign in</Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Don't have an account?</span>{" "}
                  <Link href="/signup" className="text-primary hover:underline font-medium">
                    Sign up
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

