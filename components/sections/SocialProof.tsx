import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"
import { Badge } from "@/components/atoms/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card"
import { Container } from "@/components/atoms/container"

export function SocialProofSection() {
  const testimonials = [
    {
      quote:
        "This platform has been a game-changer for my creator business! I've connected with amazing brands and streamlined my workflow.",
      name: "Alex Rivera",
      handle: "@alexcreates",
      avatar: "/avatars/alex.jpg",
      platform: "Instagram",
    },
    {
      quote:
        "I've doubled my income since joining. The AI matching with brands that align with my content has saved me so much time!",
      name: "Jamie Lee",
      handle: "@jamielee.content",
      avatar: "/avatars/jamie.jpg",
      platform: "TikTok",
    },
    {
      quote:
        "As a niche creator, I struggled to find the right brand partnerships. This platform solved that problem completely.",
      name: "Sam Johnson",
      handle: "@techsam",
      avatar: "/avatars/sam.jpg",
      platform: "YouTube",
    },
  ]

  return (
    <section className="bg-background py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Loved by Creators</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Join thousands of content creators who are growing their careers with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-muted-foreground text-sm">{testimonial.handle}</span>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.platform}
                      </Badge>
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
          <h3 className="mb-8 text-center text-xl font-semibold">Trusted by Creators Across Platforms</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {/* Brand logos would go here */}
            {["Instagram", "TikTok", "YouTube", "Twitter", "Twitch"].map((platform) => (
              <div key={platform} className="text-muted-foreground text-2xl font-bold">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
