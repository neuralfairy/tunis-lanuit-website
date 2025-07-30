import Hero from "@/components/Hero"
import FeaturesOverview from "@/components/FeaturesOverview"
import IntegrationsOverview from "@/components/IntegrationsOverview"
import ROICalculatorPreview from "@/components/ROICalculatorPreview"
import SocialProof from "@/components/SocialProof"
import Testimonials from "@/components/Testimonials"
import CTASection from "@/components/CTASection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturesOverview />
      <IntegrationsOverview />
      <ROICalculatorPreview />
      <SocialProof />
      <Testimonials />
      <CTASection />
    </div>
  )
}
