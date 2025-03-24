import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/atoms/button"
import { Container } from "@/components/atoms/container"
import { CallToActionSection } from "@/components/sections/CallToAction"
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlights"
import { Footer } from "@/components/sections/Footer"
import { Header } from "@/components/sections/Header"
import { SocialProofSection } from "@/components/sections/SocialProof"
import { ValuePropositionsSection } from "@/components/sections/ValuePropositions"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionsSection />
        <FeatureHighlightsSection />
        <SocialProofSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <section className="from-background to-muted bg-gradient-to-b py-24">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">Unlock Your Creator Potential</h1>
          <p className="text-muted-foreground text-xl">
            Connect with brands, monetize your content, and grow your influence - all in one powerful platform.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base">
              Get Started - It's Free
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[500px]">
          <Image
            src="/landing-page/hero-section.jpeg"
            alt="Content creators working together"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  )
}
