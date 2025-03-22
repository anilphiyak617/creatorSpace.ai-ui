import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card";
import { Container } from "@/components/atoms/container";
import { Badge } from "@/components/atoms/badge";

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "This platform has been a game-changer for my creator business! I've connected with amazing brands and streamlined my workflow.",
      name: "Alex Rivera",
      handle: "@alexcreates",
      avatar: "/avatars/alex.jpg",
      platform: "Instagram",
    },
    {
      quote: "I've doubled my income since joining. The AI matching with brands that align with my content has saved me so much time!",
      name: "Jamie Lee",
      handle: "@jamielee.content",
      avatar: "/avatars/jamie.jpg",
      platform: "TikTok",
    },
    {
      quote: "As a niche creator, I struggled to find the right brand partnerships. This platform solved that problem completely.",
      name: "Sam Johnson",
      handle: "@techsam",
      avatar: "/avatars/sam.jpg",
      platform: "YouTube",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of content creators who are growing their careers with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-medium">{testimonial.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{testimonial.handle}</span>
                      <Badge variant="secondary" className="text-xs">{testimonial.platform}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by Creators Across Platforms</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Brand logos would go here */}
            {['Instagram', 'TikTok', 'YouTube', 'Twitter', 'Twitch'].map((platform) => (
              <div key={platform} className="text-2xl font-bold text-muted-foreground">{platform}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 