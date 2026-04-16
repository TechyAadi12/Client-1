import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { businessData } from './data/businessData';

function App() {
  return (
    <div className="bg-brand-cream text-amber-950">
      <Navbar business={businessData} />
      <main>
        <Hero business={businessData} />
        <About business={businessData} />
        <MenuSection business={businessData} />
        <WhyChooseUs business={businessData} />
        <Gallery business={businessData} />
        <Testimonials business={businessData} />
        <ContactSection business={businessData} />
      </main>
      <Footer business={businessData} />
      <FloatingActions business={businessData} />
    </div>
  );
}

export default App;
