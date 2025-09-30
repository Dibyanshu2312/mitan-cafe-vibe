import Hero from "@/components/Hero";
import FoodMenu from "@/components/FoodMenu";
import SpecialDrinks from "@/components/SpecialDrinks";
import WhyMitanCafe from "@/components/WhyMitanCafe";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FoodMenu />
      <SpecialDrinks />
      <WhyMitanCafe />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
