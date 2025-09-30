import { Heart, Smile, Music, Coffee } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with authentic recipes passed down through generations"
  },
  {
    icon: Smile,
    title: "Warm Vibes",
    description: "A cozy atmosphere that feels like home with a modern, funky twist"
  },
  {
    icon: Music,
    title: "Great Ambiance",
    description: "Enjoy your meal with curated playlists that blend tradition and contemporary beats"
  },
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "We source the finest ingredients to bring you the best of Chhattisgarh"
  }
];

const WhyMitanCafe = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 text-gradient">
            Why Mitan Cafe?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just a cafe - it's an experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="cafe-card bg-card rounded-2xl p-8 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-primary animate-float" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMitanCafe;
