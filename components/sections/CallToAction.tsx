import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";

export function CallToActionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Elevate Your Creator Career?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of creators who are growing their audience, connecting with brands, and 
            monetizing their content on our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="text-base">
              Create Your Creator Profile
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No hidden fees. Free to join and explore. Your data is secure and private.
          </p>
        </div>
      </Container>
    </section>
  );
} 