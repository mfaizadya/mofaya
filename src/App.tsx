import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import { ClickSpark } from './components/ClickSpark';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleRefresh);
    const timer = setTimeout(handleRefresh, 500);
    return () => {
      window.removeEventListener('load', handleRefresh);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="portfolio-shell min-h-screen text-ink-silver selection:bg-ink-blue selection:text-ink-ivory">
      <div className="portfolio-grainient">
        <Grainient
          color1={theme === 'light' ? '#FCEFBA' : '#FFFFE3'}
          color2={theme === 'light' ? '#3D5A80' : '#8DA4BE'}
          color3={theme === 'light' ? '#BAC7D5' : '#4A4A4A'}
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
          grainAmount={theme === 'light' ? 0.08 : 0.06}
          grainScale={1.5}
          grainAnimated={true}
          contrast={theme === 'light' ? 1.6 : 1.4}
          gamma={1.1}
          saturation={theme === 'light' ? 1.4 : 1.2}
          centerX={0.0}
          centerY={0.0}
          zoom={0.8}
        />
      </div>
      <ClickSpark
        sparkColor={theme === 'light' ? '#2563EB' : '#FFFFE3'}
        sparkSize={12}
        sparkRadius={22}
        sparkCount={8}
        duration={450}
      >
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
      </ClickSpark>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
