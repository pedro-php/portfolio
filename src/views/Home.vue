<template>
  <div class="home">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <RecommendationsSection />
    <SkillsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import RecommendationsSection from '@/components/sections/RecommendationsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    ProjectsSection,
    RecommendationsSection,
    SkillsSection,
    ContactSection,
    FooterSection
  }
}
</script>
