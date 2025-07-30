import Image from "next/image"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "SalesForce Inc", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DataDriven Co", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Growth Labs", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Enterprise Solutions", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Digital Dynamics", logo: "/placeholder.svg?height=60&width=120" },
]

const stats = [
  { number: "10,000+", label: "Active Users" },
  { number: "50M+", label: "Contacts Verified" },
  { number: "99.5%", label: "Accuracy Rate" },
  { number: "85%", label: "Bounce Reduction" },
]

export default function SocialProof() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Sales Teams Worldwide</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of companies that trust Contact Validator for their data verification needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-12">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full h-auto opacity-50 hover:opacity-75 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-bold">✓</span>
            </div>
            <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">🛡️</span>
            </div>
            <span className="text-sm font-medium text-gray-700">SOC2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 text-sm font-bold">🔒</span>
            </div>
            <span className="text-sm font-medium text-gray-700">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-sm font-bold">⭐</span>
            </div>
            <span className="text-sm font-medium text-gray-700">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
