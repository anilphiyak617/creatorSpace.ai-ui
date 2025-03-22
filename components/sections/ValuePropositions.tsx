import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card";
import { Container } from "@/components/atoms/container";

export function ValuePropositionsSection() {
  const benefits = [
    {
      title: "Get Discovered by Top Brands",
      description: "Our AI-powered platform connects you with businesses actively seeking creators like you for collaborations and campaigns.",
      icon: "🔍",
    },
    {
      title: "Monetize Your Content Effectively",
      description: "Access diverse monetization opportunities, from sponsored posts to brand ambassadorships, and manage your rates in one place.",
      icon: "💰",
    },
    {
      title: "Streamline Your Workflow & Save Time",
      description: "Simplify collaboration management, content approvals, and payment tracking, freeing you up to focus on creating.",
      icon: "⚡",
    },
    {
      title: "Grow Your Creator Network",
      description: "Connect with fellow creators, share insights, and build a supportive community to accelerate your growth.",
      icon: "🌐",
    },
    {
      title: "Access Exclusive Resources & Tools",
      description: "Unlock valuable resources, guides, and tools designed to help you level up your content creation and business skills.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Creators Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the ultimate platform to help content creators thrive in today's digital economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="text-3xl mb-2">{benefit.icon}</div>
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
  );
} 