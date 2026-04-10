import Navbar from "./Components/Navbar";
import HeroPremium from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Zone from "./Components/Zone";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroPremium />
      <About />
      <Zone />
      <Services />
     <Contact />
    </main>
  );
}