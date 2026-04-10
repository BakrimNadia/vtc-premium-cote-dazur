import Navbar from "./Components/Navbar";
import HeroPremium from "./Components/Hero";
import About from "./Components/About";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroPremium />
      <About />

      <section id="services" className="min-h-screen px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">Services</h2>
        </div>
      </section>

      <section id="zones" className="min-h-screen px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">Zones</h2>
        </div>
      </section>

      <section id="vehicule" className="min-h-screen px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">Véhicule</h2>
        </div>
      </section>

      <section id="contact" className="min-h-screen px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">Contact</h2>
        </div>
      </section>
    </main>
  );
}