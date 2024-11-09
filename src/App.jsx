import Hero from './components/Hero';
import { Highlights } from './components/HighlightSection';
import Navbar from './components/Navbar';

import { Model3D, WhatsNew } from './features';

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model3D />
      <WhatsNew />
    </main>
  );
}
