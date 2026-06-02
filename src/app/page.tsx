import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  About,
  TechStack,
  Projects,
  Timeline,
  Contact,
} from "@/components/sections";
import { ScrollProgress } from "@/components/ui";

export default function Home() {
  return (
    <main className="bg-background min-h-screen transition-colors">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
