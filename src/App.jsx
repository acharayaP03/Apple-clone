import Hero from "./components/Hero";
import { Highlights } from "./components/HighlightSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}
