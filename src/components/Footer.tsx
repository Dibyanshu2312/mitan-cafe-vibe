import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-3xl font-display font-black mb-4 text-accent">
              Mitan Cafe
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Experience the authentic taste of Chhattisgarh in a modern, funky atmosphere. Where tradition meets contemporary cafe culture.
            </p>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4">Visit Us</h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <p>Main Street, Raipur, Chhattisgarh 492001</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <p>+91 12345 67890</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                <p>hello@mitancafe.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-display font-bold mb-4">Follow Us</h4>
            <p className="text-secondary-foreground/80 mb-4">
              Stay updated with our latest dishes and special offers!
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-accent/20 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 cafe-card"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-accent/20 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 cafe-card"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-accent/20 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 cafe-card"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2025 Mitan Cafe. Made with ❤️ in Chhattisgarh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
