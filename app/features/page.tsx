import type { Metadata } from "next"
import { Shield, Zap, BarChart3, Globe, Database, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Features - Contact Validator | Tunislanuit Solutions",
  description:
    "Explore powerful features of Contact Validator: real-time email verification, bulk processing, API integration, and enterprise security. 99.5% accuracy guaranteed.",
  keywords:
    "email verification features, contact validation, bulk email verification, API integration, real-time verification",
}

const features = [
  {
    icon: Zap,
    title: "Real-Time Verification",
    description:
      "Instant email validation with 99.5% accuracy using advanced algorithms and multiple verification layers.",
    benefits: [
      "Sub-second response times",
      "Multiple verification checks",
      "Syntax and domain validation",
      "Mailbox existence verification",
    ],
    demo: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: Database,
    title: "Bulk Processing",
    description: "Process thousands of contacts simultaneously with our high-performance bulk verification engine.",
    benefits: [
      "Upload CSV files up to 1M contacts",
      "Parallel processing for speed",
      "Progress tracking and reporting",
      "Downloadable results",
    ],
    demo: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: Clock,
    title: "API Integration",
    description: "Seamless integration with your existing tools via REST API, webhooks, and native integrations.",
    benefits: [
      "RESTful API with comprehensive docs",
      "Webhook notifications for real-time updates",
      "Native CRM integrations",
      "Rate limiting and authentication",
    ],
    demo: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR compliant, SOC2 certified, and enterprise-grade security to protect your sensitive data.",
    benefits: ["SOC2 Type II certified", "GDPR and CCPA compliant", "End-to-end encryption", "99.9% uptime SLA"],
    demo: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and insights to track verification performance and data quality metrics.",
    benefits: [
      "Real-time verification statistics",
      "Data quality scoring",
      "Historical trend analysis",
      "Custom reporting dashboards",
    ],
    demo: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Verify contacts worldwide with support for international domains and regional compliance.",
    benefits: [
      "Support for 190+ countries",
      "International domain validation",
      "Regional compliance standards",
      "Multi-language support",
    ],
    demo: "/placeholder.svg?height=300&width=500",
  },
]

const integrations = [
  {
    name: "Salesforce",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Native Salesforce integration for seamless contact verification",
  },
  {
    name: "HubSpot",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Verify contacts directly in your HubSpot CRM",
  },
  {
    name: "Pipedrive",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Real-time verification in Pipedrive workflows",
  },
  {
    name: "Zoho CRM",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Automated contact validation for Zoho users",
  },
  { name: "Zapier", logo: "/placeholder.svg?height=60&width=120", description: "Connect with 3000+ apps via Zapier" },
  {
    name: "Mailchimp",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Clean your email lists before campaigns",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="hero-gradient bg-clip-text text-transparent"> Modern Sales Teams</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to ensure data quality, improve deliverability, and boost your outbound success rates
              with enterprise-grade contact verification.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="text-teal-600" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="text-teal-500 mr-3 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-secondary">
                    Try This Feature
                  </Link>
                </div>

                {/* Demo Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <Image
                      src={feature.demo || "/placeholder.svg"}
                      alt={`${feature.title} demo`}
                      width={500}
                      height={300}
                      className="rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Native Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Contact Validator with your favorite tools. Setup takes minutes with our pre-built integrations
              and powerful API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={integration.logo || "/placeholder.svg"}
                    alt={`${integration.name} integration`}
                    width={60}
                    height={30}
                    className="mr-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                </div>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://salescentri.com/?utm_source=tunislanuit.com&utm_medium=integrations&utm_campaign=partner_network"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore All Integrations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free 7-day trial and see how Contact Validator can transform your data quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
