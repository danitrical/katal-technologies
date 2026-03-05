import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
