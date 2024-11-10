import Layouts from './layouts/Layouts';
import { Model3D, WhatsNew, Hero, Highlights, HowItWorks } from './features';

export default function App() {
  return (
    <Layouts>
      <Hero />
      <Highlights />
      <Model3D />
      <WhatsNew />
      <HowItWorks />
    </Layouts>
  );
}
