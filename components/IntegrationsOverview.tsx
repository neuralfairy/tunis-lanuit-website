import Image from "next/image"
import Link from "next/link"

const integrations = [
  { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
  { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pipedrive", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Zoho CRM", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Microsoft Dynamics", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Mailchimp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Zapier", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Outreach", logo: "/placeholder.svg?height=60&width=120" },
]

export default function IntegrationsOverview() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect Contact Validator with your favorite CRM, email marketing, and sales tools. Setup takes just minutes
            with our native integrations and powerful API.
          </p>
        </div>

        {/* Integration Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center card-hover"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={`${integration.name} integration`}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Setup</h3>
            <p className="text-gray-600">Connect your tools in under 5 minutes with our pre-built integrations.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Sync</h3>
            <p className="text-gray-600">Automatic data synchronization keeps your contact lists always up-to-date.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security with 99.9% uptime SLA guarantee.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/features" className="btn-primary mr-4">
            View All Integrations
          </Link>
          <Link
            href="https://salescentri.com/?utm_source=tunislanuit.com&utm_medium=integrations&utm_campaign=partner_network"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Sales Intelligence Platform
          </Link>
        </div>
      </div>
    </section>
  )
}
