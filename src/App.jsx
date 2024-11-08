import Hero from "./components/Hero";
import { Highlights } from "./components/HighlightSection";
import Navbar from "./components/Navbar";
import Model3D from "./features/3DModel/Model3D";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model3D />
    </main>
  );
}
