import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "../data/content";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop" 
                alt="Indian Sweets" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl glass-effect">
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">10+</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Years of<br/>Trust</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              A Trusted Local Food Spot in Varanasi
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At Shyam Darbar, we believe in serving joy through food. Located in the heart of Varanasi, we bring you traditional recipes passed down through generations. Our hygienic preparation and commitment to pure vegetarian dishes make us a favorite among locals and tourists alike.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
