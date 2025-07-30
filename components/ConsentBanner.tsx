"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0">
          <p className="text-sm">
            We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you
            consent to our use of cookies.
            <a href="/privacy" className="underline hover:no-underline ml-1">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={declineCookies}
            className="text-gray-300 hover:text-white text-sm underline hover:no-underline"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Accept
          </button>
          <button onClick={declineCookies} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
