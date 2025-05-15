"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20-%20BILLGIST%20-%20light-yGxK7TpzBUef2PAqVyhbSRDMn3bbvc.png"
            alt="Billgist Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={scrollToFeatures}
          >
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            About Us
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={scrollToPricing}
          >
            Pricing
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Privacy
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/help">Help</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/case-studies">Case Studies</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/offer" className="text-sm font-bold animate-rgb">
            OFFER!!!
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex md:items-center md:gap-x-4">
          <Button variant="outline" className="bg-gray-200 text-gray-800 hover:bg-gray-300" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button className="bg-[#f97316] hover:bg-[#f97316]/90 text-white">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden bg-white pt-16">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="#features"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                onClick={(e) => {
                  scrollToFeatures(e)
                  setIsMenuOpen(false)
                }}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#pricing"
                className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                onClick={(e) => {
                  scrollToPricing(e)
                  setIsMenuOpen(false)
                }}
              >
                Pricing
              </Link>
              <div className="px-3 py-2">
                <h3 className="text-sm font-medium text-gray-500">Resources</h3>
                <div className="mt-2 space-y-2">
                  <Link
                    href="/blog"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/help"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Help
                  </Link>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300" asChild>
                  <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full bg-[#f97316] hover:bg-[#f97316]/90 text-white" asChild>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
              <Link
                href="/offer"
                className="px-3 py-2 text-base font-bold animate-rgb"
                onClick={() => setIsMenuOpen(false)}
              >
                OFFER!!!
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

