import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Contact Data?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join 10,000+ sales professionals who trust Contact Validator to improve their outbound success rates.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {["Start free 7-day trial", "No credit card required", "Setup in under 5 minutes"].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <CheckCircle size={20} className="text-teal-200" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Book a Demo
            </Link>
          </div>

          {/* Strategic Link */}
          <div className="border-t border-teal-400 pt-8">
            <p className="text-teal-100 mb-4">Want to supercharge your entire sales process?</p>
            <Link
              href="https://salescentri.com/?utm_source=tunislanuit.com&utm_medium=cta&utm_campaign=partner_network"
              className="text-white hover:text-teal-200 font-medium underline hover:no-underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the Complete Sales Intelligence Platform →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
