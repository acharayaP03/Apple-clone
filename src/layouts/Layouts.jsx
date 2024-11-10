import Navbar from './Navbar';
import Footer from './Footer';

export default function Layouts({ children }) {
  return (
    <div className="h-screen w-screen bg-black">
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </div>
  );
}
