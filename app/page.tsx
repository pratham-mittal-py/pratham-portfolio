"use client"

import Particles from "@/components/Particles"
import TargetCursor from "@/components/TargetCursor"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutMeSection from "@/components/AboutMeSection"
import WorkExperience from "@/components/WorkExperience"
import SkillsProjects from "@/components/SkillsProjects"
import GetInTouch from "@/components/GetInTouch"

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Advanced Target Cursor */}
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />

      {/* Particles Background - Fixed behind all content */}
      <div className="particles-background">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          particleHoverFactor={3}
          sizeRandomness={1.5}
          cameraDistance={25}
          className="hover-particles"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <AboutMeSection />
          <WorkExperience />
          <SkillsProjects />
          <GetInTouch />
        </main>
      </div>
    </div>
  )
}
