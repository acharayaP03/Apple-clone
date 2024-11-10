import Hero from './components/Hero';
import { Highlights } from './components/HighlightSection';
import HowItWorks from '@/features/HowItWorks/HowItWorks.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Model3D, WhatsNew } from './features';

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model3D />
      <WhatsNew />
      <HowItWorks />
      <Footer />
    </main>
  );
}
