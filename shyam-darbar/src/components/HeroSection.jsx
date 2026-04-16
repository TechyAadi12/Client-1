import { motion } from "framer-motion";
import { BUSINESS_DETAILS } from "../data/content";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100 rounded-l-[100px] opacity-50 -z-10 transform translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-primary rounded-full font-medium text-sm">
              <Star size={16} className="fill-primary" /> 
              {BUSINESS_DETAILS.rating} Rating ({BUSINESS_DETAILS.totalReviews} Reviews)
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-gray-900 leading-tight">
              Authentic Taste of <span className="text-primary">Varanasi</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience the rich, traditional flavors of India at Shyam Darbar. From our Special Banarasi Thali to mouth-watering sweets.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#menu" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-orange-500/40 flex items-center gap-2 group">
                View Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${BUSINESS_DETAILS.phone.replace(/[^0-9+]/g, '')}`} className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-colors shadow-sm">
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              {/* Using a placeholder food image that fits the theme */}
              <img 
                src="https://images.unsplash.com/photo-1626776876729-bab43b746315?q=80&w=1000&auto=format&fit=crop" 
                alt="Delicious Indian Thali" 
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
              />
              {/* Floating badge */}
              <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <span className="text-xl">🌿</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">100% Pure</p>
                  <p className="text-sm font-bold text-gray-900">Vegetarian</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
