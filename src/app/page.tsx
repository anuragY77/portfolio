import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import RevealSection from "@/components/sections/RevealSection";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RevealSection id="work" label="Work section — coming soon" />
        <About />
        <Contact />
      </main>
    </>
  );
}