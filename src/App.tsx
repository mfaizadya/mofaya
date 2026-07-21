import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { Grainient } from './components/Grainient';

export function App() {
  return (
    <div className="portfolio-shell min-h-screen text-[#CBCBCB] selection:bg-[#6D8196] selection:text-[#FFFFE3]">
      <div className="portfolio-grainient">
        <Grainient
          color1="#FFFFE3"
          color2="#6D8196"
          color3="#4A4A4A"
          timeSpeed={0.12}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={1.5}
          warpAmplitude={45.0}
          blendAngle={30.0}
          blendSoftness={0.06}
          rotationAmount={350.0}
          noiseScale={1.8}
          grainAmount={0.06}
          grainScale={1.5}
          grainAnimated={true}
          contrast={1.4}
          gamma={1.1}
          saturation={1.2}
          centerX={0.0}
          centerY={0.0}
          zoom={0.8}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <SkillsSection />
          <Certifications />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
