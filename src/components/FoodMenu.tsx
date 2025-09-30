import MenuCard from "./MenuCard";
import chanaSamosa from "@/assets/chana-samosa.jpg";
import faraa from "@/assets/faraa.jpg";
import chousela from "@/assets/chousela.jpg";
import dehrori from "@/assets/dehrori.jpg";
import tilgurLadoo from "@/assets/tilgur-ladoo.jpg";
import bafauri from "@/assets/bafauri.jpg";

const menuItems = [
  {
    image: chanaSamosa,
    name: "Chana Samosa",
    description: "Crispy golden samosas filled with spiced chickpeas, a perfect fusion of tradition and taste",
    price: "40"
  },
  {
    image: faraa,
    name: "Faraa",
    description: "Steamed rice dumplings with a delicate texture, served with authentic Chhattisgarhi chutney",
    price: "60"
  },
  {
    image: chousela,
    name: "Chousela",
    description: "Traditional rice pancakes with a modern twist, crispy on the outside, soft inside",
    price: "50"
  },
  {
    image: dehrori,
    name: "Dehrori",
    description: "Sweet and creamy rice pudding with milk, cardamom, and nuts - pure comfort in a bowl",
    price: "70"
  },
  {
    image: tilgurLadoo,
    name: "Tilgur Ladoo",
    description: "Handmade sesame and jaggery sweet balls, a traditional winter treat full of warmth",
    price: "45"
  },
  {
    image: bafauri,
    name: "Bafauri",
    description: "Steamed lentil dumplings in rich curry, a hearty and wholesome traditional favorite",
    price: "80"
  }
];

const FoodMenu = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 text-gradient">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Chhattisgarh dishes reimagined for the modern cafe experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
