"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90" onClick={() => setIsOpen(true)}>
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <h3 className="font-bold">Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">{/* Chat messages would go here */}</div>
          <div className="p-4 border-t">
            <input type="text" placeholder="Type your message..." className="w-full p-2 border rounded" />
          </div>
        </div>
      )}
    </div>
  )
}

