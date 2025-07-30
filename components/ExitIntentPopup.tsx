"use client"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import Link from "next/link"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="text-white" size={32} />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! Don't Miss Out</h3>

          <p className="text-gray-600 mb-6">
            Get your <strong>7-day free trial</strong> plus our exclusive "Email Deliverability Guide" (worth $97)
            absolutely free!
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              No credit card required
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              Setup in under 5 minutes
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              Cancel anytime
            </div>
          </div>

          <Link
            href="https://salescentri.com/?utm_source=tunislanuit.com&utm_medium=popup&utm_campaign=partner_network"
            className="btn-primary w-full mb-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsVisible(false)}
          >
            Claim Your Free Trial + Bonus Guide
          </Link>

          <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600 text-sm underline">
            No thanks, I'll pay full price later
          </button>
        </div>
      </div>
    </div>
  )
}
