"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Play, ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden gradient-bg min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                🚀 Trusted by 10,000+ Sales Teams
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Verify Contacts.
              <span className="hero-gradient bg-clip-text text-transparent"> Boost Sales.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop wasting time on invalid contacts. Our enterprise-grade Contact Validator ensures 99.5% accuracy,
              reduces bounce rates by 85%, and increases your outbound success rates.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Real-time email verification",
                "Reduce bounce rates by 85%",
                "GDPR & SOC2 compliant",
                "Seamless CRM integration",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Start Free 7-Day Trial
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <button className="btn-secondary inline-flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Watch Demo (2 min)
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>✓ No credit card required</span>
              <span>✓ Setup in 5 minutes</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between text-white">
                    <h3 className="font-semibold">Contact Validator Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">john.doe@company.com</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">✓ Valid</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">invalid@fake-domain.xyz</span>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">✗ Invalid</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm text-gray-700">risky@tempmail.com</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">⚠ Risky</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Verification Stats</div>
                  <div className="flex justify-between text-xs">
                    <span>Valid: 85%</span>
                    <span>Invalid: 10%</span>
                    <span>Risky: 5%</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-float">
                <div className="text-2xl font-bold text-teal-600">99.5%</div>
                <div className="text-xs text-gray-500">Accuracy Rate</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float animation-delay-1000">
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-xs text-gray-500">Bounce Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
