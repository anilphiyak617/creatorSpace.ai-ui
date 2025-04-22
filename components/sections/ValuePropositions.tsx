import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card"
import { Container } from "@/components/atoms/container"

export function ValuePropositionsSection() {
  const benefits = [
    {
      title: "Get Discovered by Top Brands",
      description:
        "Our AI-powered platform connects you with businesses actively seeking creators like you for collaborations and campaigns.",
      icon: "🔍",
    },
    {
      title: "Monetize Your Content Effectively",
      description:
        "Access diverse monetization opportunities, from sponsored posts to brand ambassadorships, and manage your rates in one place.",
      icon: "💰",
    },
    {
      title: "Streamline Your Workflow & Save Time",
      description:
        "Simplify collaboration management, content approvals, and payment tracking, freeing you up to focus on creating.",
      icon: "⚡",
    },
    {
      title: "Grow Your Creator Network",
      description:
        "Connect with fellow creators, share insights, and build a supportive community to accelerate your growth.",
      icon: "🌐",
    },
    {
      title: "Access Exclusive Resources & Tools",
      description:
        "Unlock valuable resources, guides, and tools designed to help you level up your content creation and business skills.",
      icon: "🛠️",
    },
  ]

  return (
    <section className="bg-background py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Creators Choose Us</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            We've built the ultimate platform to help content creators thrive in today's digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:border-primary/50 border-2 transition-all">
              <CardHeader>
                <div className="mb-2 text-3xl">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
