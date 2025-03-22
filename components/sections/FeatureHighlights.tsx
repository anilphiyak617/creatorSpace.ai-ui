import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms/tabs";
import { Container } from "@/components/atoms/container";

export function FeatureHighlightsSection() {
  const features = [
    {
      id: "discovery",
      title: "AI-Powered Creator Discovery",
      description: "Businesses use our intelligent search to find creators based on niche, audience, demographics, and content style, ensuring you get discovered by the right brands.",
      image: "/placeholder-feature-1.jpg",
    },
    {
      id: "collaboration",
      title: "Seamless Collaboration Management",
      description: "Manage all your collaborations in one central dashboard, from proposal submissions to content approvals and feedback.",
      image: "/placeholder-feature-2.jpg",
    },
    {
      id: "messaging",
      title: "Integrated Messaging & Communication",
      description: "Communicate directly with brands within the platform, keeping all your important conversations organized and accessible.",
      image: "/placeholder-feature-3.jpg",
    },
    {
      id: "payments",
      title: "Secure Payment Processing",
      description: "Get paid securely and on time through our integrated payment system, eliminating payment hassles.",
      image: "/placeholder-feature-4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Powerful Tools for Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is packed with features to help you succeed.
          </p>
        </div>
        
        <Tabs defaultValue={features[0].id} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id}>
                {feature.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="rounded-xl overflow-hidden aspect-video relative">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
} 