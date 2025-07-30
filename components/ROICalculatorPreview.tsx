"use client"

import { useState } from "react"
import Link from "next/link"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export default function ROICalculatorPreview() {
  const [contacts, setContacts] = useState(10000)
  const [bounceRate, setBounceRate] = useState(15)
  const [avgDealValue, setAvgDealValue] = useState(5000)

  // ROI Calculations
  const invalidContacts = Math.round(contacts * (bounceRate / 100))
  const validContacts = contacts - invalidContacts
  const improvedValidContacts = Math.round(contacts * 0.995) // 99.5% accuracy
  const additionalValidContacts = improvedValidContacts - validContacts
  const conversionRate = 0.02 // 2% conversion rate
  const additionalDeals = Math.round(additionalValidContacts * conversionRate)
  const additionalRevenue = additionalDeals * avgDealValue
  const monthlyCost = 299 // Assuming Professional plan
  const annualROI = ((additionalRevenue * 12 - monthlyCost * 12) / (monthlyCost * 12)) * 100

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much revenue you could generate by improving your contact data quality with our Contact Validator.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Calculator Inputs */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Calculator className="text-teal-600 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Contacts per Month</label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={contacts}
                    onChange={(e) => setContacts(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1K</span>
                    <span className="font-semibold text-teal-600">{contacts.toLocaleString()}</span>
                    <span>100K</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Bounce Rate (%)</label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={bounceRate}
                    onChange={(e) => setBounceRate(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5%</span>
                    <span className="font-semibold text-teal-600">{bounceRate}%</span>
                    <span>30%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Average Deal Value ($)</label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$1K</span>
                    <span className="font-semibold text-teal-600">${avgDealValue.toLocaleString()}</span>
                    <span>$50K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-green-600 mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">Monthly Impact</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-green-600">+{additionalValidContacts.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Valid Contacts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">+{additionalDeals}</div>
                    <div className="text-sm text-gray-600">Additional Deals</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <DollarSign className="mr-3" size={24} />
                  <h4 className="text-lg font-semibold">Revenue Impact</h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-3xl font-bold">${additionalRevenue.toLocaleString()}</div>
                    <div className="text-teal-100">Additional Monthly Revenue</div>
                  </div>
                  <div className="border-t border-teal-400 pt-4">
                    <div className="text-2xl font-bold">{annualROI.toFixed(0)}%</div>
                    <div className="text-teal-100">Annual ROI</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="https://salescentri.com/?utm_source=tunislanuit.com&utm_medium=calculator&utm_campaign=partner_network"
                  className="btn-primary w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Full ROI Analysis
                </Link>
                <p className="text-sm text-gray-500 mt-2">Start your free trial and see real results in 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
