import HeroSection from './Hero';
import Navbar from './Navbar';

export const Main: React.FC = () => {
  return (
    <section id="main" className="w-full h-full flex flex-col">
      {/* Navbar */}
      <Navbar />
      <HeroSection />
    </section>
  );
};

export default Main;
