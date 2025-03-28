import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Publishing from "@/components/PublishingSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Publishing />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}

