import { Coffee, UtensilsCrossed } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Coffee className="absolute top-20 left-10 w-16 h-16 text-primary/30 animate-float" />
        <UtensilsCrossed className="absolute top-40 right-20 w-20 h-20 text-accent/30 animate-float-slow" />
        <Coffee className="absolute bottom-32 left-1/4 w-12 h-12 text-secondary/30 animate-float" />
        <UtensilsCrossed className="absolute bottom-20 right-1/3 w-16 h-16 text-primary/30 animate-float-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-in">
          <h1 className="text-7xl md:text-9xl font-display font-black mb-6 text-gradient animate-tilt">
            Mitan Cafe
          </h1>
          <p className="text-xl md:text-3xl text-secondary font-medium mb-4 max-w-3xl mx-auto">
            Where Chhattisgarh's Traditional Flavors Meet Modern Cafe Culture
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience authentic Chhattisgarhi cuisine in a funky, cozy atmosphere
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 cafe-card">
              <Coffee className="mr-2" />
              View Menu
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 cafe-card border-2">
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
