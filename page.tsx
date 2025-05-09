import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </main>
  );
} 