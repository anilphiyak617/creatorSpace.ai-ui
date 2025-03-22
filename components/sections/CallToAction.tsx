import { Button } from "@/components/atoms/button"
import { Container } from "@/components/atoms/container"

export function CallToActionSection() {
  return (
    <section className="from-muted to-background bg-gradient-to-b py-24">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Elevate Your Creator Career?</h2>
          <p className="text-muted-foreground text-xl">
            Join thousands of creators who are growing their audience, connecting with brands, and monetizing their
            content on our platform.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Button size="lg" className="text-base">
              Create Your Creator Profile
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            No hidden fees. Free to join and explore. Your data is secure and private.
          </p>
        </div>
      </Container>
    </section>
  )
}
