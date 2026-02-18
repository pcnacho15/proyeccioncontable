"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const HeroSection = dynamic(() => import("@/components/hero-section").then((mod) => mod.HeroSection), {
  ssr: false,
})
const ServicesSection = dynamic(() => import("@/components/services-section").then((mod) => mod.ServicesSection), {
  ssr: false,
})
const AboutSection = dynamic(() => import("@/components/about-section").then((mod) => mod.AboutSection), {
  ssr: false,
})
const TeamSection = dynamic(() => import("@/components/team-section").then((mod) => mod.TeamSection), {
  ssr: false,
})
const ReviewsSection = dynamic(() => import("@/components/reviews-section").then((mod) => mod.ReviewsSection), {
  ssr: false,
})
const LogosSection = dynamic(() => import("@/components/logos-section").then((mod) => mod.LogosSection), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <ReviewsSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
