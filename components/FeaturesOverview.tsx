import { Shield, Zap, BarChart3, Globe, Database, Clock } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "Real-Time Verification",
    description:
      "Instant email validation with 99.5% accuracy using advanced algorithms and multiple verification layers.",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR compliant, SOC2 certified, and enterprise-grade security to protect your sensitive data.",
    color: "text-green-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and insights to track verification performance and data quality metrics.",
    color: "text-blue-500",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Verify contacts worldwide with support for international domains and regional compliance.",
    color: "text-purple-500",
  },
  {
    icon: Database,
    title: "Bulk Processing",
    description: "Process thousands of contacts simultaneously with our high-performance bulk verification engine.",
    color: "text-teal-500",
  },
  {
    icon: Clock,
    title: "API Integration",
    description: "Seamless integration with your existing tools via REST API, webhooks, and native integrations.",
    color: "text-orange-500",
  },
]

export default function FeaturesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to ensure data quality, improve deliverability, and boost your outbound success rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 mb-4`}>
                <feature.icon className={`${feature.color}`} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/features" className="btn-primary">
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  )
}
