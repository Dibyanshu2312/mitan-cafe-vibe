import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Mitan Cafe brings back memories of my grandmother's kitchen! The Faraa is absolutely divine, and the ambiance is so cozy and funky at the same time.",
    location: "Raipur"
  },
  {
    name: "Rajesh Verma",
    text: "Finally, a place where I can enjoy authentic Chhattisgarhi food with a modern twist! The Chana Samosa is my go-to. Best cafe in town!",
    location: "Bilaspur"
  },
  {
    name: "Anjali Patel",
    text: "The perfect spot for hanging out with friends! Great food, amazing coffee, and such a vibrant atmosphere. The Tilgur Ladoo is to die for!",
    location: "Durg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 text-gradient">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>

        <div className="relative bg-card rounded-3xl shadow-2xl p-12 cafe-card">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
          
          <div className="text-center animate-slide-in" key={current}>
            <p className="text-2xl text-foreground mb-8 leading-relaxed italic">
              "{testimonials[current].text}"
            </p>
            <div className="space-y-2">
              <p className="text-xl font-display font-bold text-primary">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[current].location}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full cafe-card"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-primary w-8" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full cafe-card"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
