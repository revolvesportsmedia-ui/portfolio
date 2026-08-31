import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Debate } from "@/components/Debate";
import { Community } from "@/components/Community"; // Import new component
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Debate />
        <Community /> {/* Add new component here */}
        <Skills />
        <Footer />
      </main>
    </>
  );
}
