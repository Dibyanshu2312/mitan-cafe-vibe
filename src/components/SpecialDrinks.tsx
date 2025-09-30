import { Coffee, Sparkles } from "lucide-react";
import coffeeSpecial from "@/assets/coffee-special.jpg";
import mocktail from "@/assets/mocktail.jpg";

const drinks = [
  {
    image: coffeeSpecial,
    name: "Mitan Special Coffee",
    description: "Rich, aromatic coffee with a hint of cardamom and jaggery - a fusion masterpiece",
    icon: Coffee
  },
  {
    image: mocktail,
    name: "Tropical Fusion Mocktail",
    description: "Refreshing blend of seasonal fruits with a touch of mint and lime",
    icon: Sparkles
  }
];

const SpecialDrinks = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-secondary/5">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 text-gradient">
            Special Drinks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafted with love, served with style
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {drinks.map((drink, index) => {
            const Icon = drink.icon;
            return (
              <div 
                key={index} 
                className="cafe-card bg-card rounded-3xl overflow-hidden shadow-2xl group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={drink.image} 
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground p-3 rounded-full animate-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {drink.name}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {drink.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialDrinks;
