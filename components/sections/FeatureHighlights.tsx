import Image from "next/image"
import { Container } from "@/components/atoms/container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms/tabs"

export function FeatureHighlightsSection() {
  const features = [
    {
      id: "discovery",
      title: "AI-Powered Creator Discovery",
      description:
        "Businesses use our intelligent search to find creators based on niche, audience, demographics, and content style, ensuring you get discovered by the right brands.",
      image: "/landing-page/ai-powered-creator-discovery.jpeg",
    },
    {
      id: "collaboration",
      title: "Seamless Collaboration Management",
      description:
        "Manage all your collaborations in one central dashboard, from proposal submissions to content approvals and feedback.",
      image: "/landing-page/seemless-collaboration.jpeg",
    },
    {
      id: "messaging",
      title: "Integrated Messaging & Communication",
      description:
        "Communicate directly with brands within the platform, keeping all your important conversations organized and accessible.",
      image: "/landing-page/integrated-message-communication.jpeg",
    },
    {
      id: "payments",
      title: "Secure Payment Processing",
      description: "Get paid securely and on time through our integrated payment system, eliminating payment hassles.",
      image: "/landing-page/payment-secure.jpeg",
    },
  ]

  return (
    <section className="bg-muted py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Powerful Tools for Creators</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Our platform is packed with features to help you succeed.
          </p>
        </div>

        <Tabs defaultValue={features[0]?.id} className="w-full">
          <TabsList className="mb-8 grid grid-cols-2 md:grid-cols-4">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id}>
                {feature.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  )
}
