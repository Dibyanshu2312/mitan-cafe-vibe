interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const MenuCard = ({ image, name, description, price }: MenuCardProps) => {
  return (
    <div className="cafe-card bg-card rounded-2xl overflow-hidden shadow-lg group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-primary">₹{price}</span>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
