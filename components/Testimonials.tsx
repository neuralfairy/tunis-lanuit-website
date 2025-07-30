import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechCorp Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Contact Validator transformed our outbound campaigns. We reduced bounce rates by 87% and increased our response rates significantly. The ROI was immediate and substantial.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Growth Labs",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The integration with our CRM was seamless, and the real-time verification saves us hours of manual work. Our email deliverability has never been better.",
  },
  {
    name: "Emily Rodriguez",
    role: "Sales Operations Manager",
    company: "DataDriven Co",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "We process over 50,000 contacts monthly, and Contact Validator handles it effortlessly. The accuracy is incredible, and the support team is outstanding.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what sales professionals say about Contact Validator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-teal-200" size={24} />
                <p className="text-gray-700 leading-relaxed pl-6">"{testimonial.text}"</p>
              </div>

              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-teal-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-teal-50 rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
