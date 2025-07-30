import type { Metadata } from "next"
import { Check, X, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing - Contact Validator | Tunislanuit Solutions",
  description:
    "Choose the perfect Contact Validator plan for your business. Starter, Professional, and Enterprise plans with transparent pricing and no hidden fees.",
  keywords: "contact validator pricing, email verification pricing, data validation cost, B2B sales tools pricing",
}

const plans = [
  {
    name: "Starter",
    price: 49,
    period: "month",
    description: "Perfect for small teams getting started with contact verification",
    features: [
      { name: "5,000 verifications/month", included: true },
      { name: "Real-time API access", included: true },
      { name: "Basic integrations", included: true },
      { name: "Email support", included: true },
      { name: "Data export (CSV)", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: 149,
    period: "month",
    description: "Ideal for growing sales teams with higher volume needs",
    features: [
      { name: "25,000 verifications/month", included: true },
      { name: "Real-time API access", included: true },
      { name: "All integrations", included: true },
      { name: "Priority email support", included: true },
      { name: "Data export (CSV, JSON)", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Bulk processing", included: true },
      { name: "Webhook notifications", included: true },
      { name: "Dedicated account manager", included: false },
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom requirements",
    features: [
      { name: "Unlimited verifications", included: true },
      { name: "Real-time API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "24/7 phone & email support", included: true },
      { name: "All export formats", included: true },
      { name: "Advanced analytics & reporting", included: true },
      { name: "White-label options", included: true },
      { name: "SLA guarantees", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

const faqs = [
  {
    question: "What counts as a verification?",
    answer:
      "Each email address you verify counts as one verification, regardless of the result (valid, invalid, or risky).",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
  },
  {
    question: "Do unused verifications roll over?",
    answer:
      "Unused verifications do not roll over to the next month. Each month starts with a fresh allocation based on your plan.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees or hidden costs. You only pay for your monthly subscription.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and can arrange invoicing for Enterprise customers.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="hero-gradient bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees or
              long-term contracts.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Check className="text-green-500 mr-1" size={16} />
                7-day free trial
              </span>
              <span className="flex items-center">
                <Check className="text-green-500 mr-1" size={16} />
                No setup fees
              </span>
              <span className="flex items-center">
                <Check className="text-green-500 mr-1" size={16} />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${plan.popular ? "border-teal-500 scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="mr-1" size={16} />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {typeof plan.price === "number" ? (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        ) : (
                          <X className="text-gray-300 mr-3 flex-shrink-0" size={20} />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600">See exactly what's included in each plan</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center p-6 font-semibold text-gray-900 bg-teal-50">Professional</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Monthly verifications",
                    starter: "5,000",
                    professional: "25,000",
                    enterprise: "Unlimited",
                  },
                  { feature: "Real-time API", starter: true, professional: true, enterprise: true },
                  { feature: "Bulk processing", starter: false, professional: true, enterprise: true },
                  { feature: "Advanced analytics", starter: false, professional: true, enterprise: true },
                  { feature: "Custom integrations", starter: false, professional: false, enterprise: true },
                  { feature: "Priority support", starter: false, professional: true, enterprise: true },
                  { feature: "SLA guarantee", starter: false, professional: false, enterprise: true },
                  { feature: "Dedicated account manager", starter: false, professional: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-gray-300 mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-gray-700">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-6 text-center bg-teal-50">
                      {typeof row.professional === "boolean" ? (
                        row.professional ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-gray-300 mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-gray-700">{row.professional}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-gray-300 mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-gray-700">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Plan?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have unique requirements or need higher volumes? Let's discuss a custom solution that fits your needs
              perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Talk to Sales
              </Link>
              <Link
                href="https://salescentri.com/?utm_source=tunislanuit.com&utm_medium=pricing&utm_campaign=partner_network"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
