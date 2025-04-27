<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 mx-auto text-center fade-in">
          <h1 class="display-3 fw-bold mb-4">Hello i'm <span class="text-accent">Pedro Afonso</span></h1>
          <h2 class="h3 mb-4">Full Stack Developer and Operator</h2>
          <p class="lead mb-5">Transforming ideas into results. <br>Making each today better than yesterday.</p>
        </div>
      </div>
    </div>
    <div class="hero-shape">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  position: relative;
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: var(--light);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero h1 {
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.hero h2 {
  font-weight: 400;
  margin-bottom: 2rem;
}

.text-accent {
  color: var(--accent);
}

.hero-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding-top: 100px;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero h2 {
    font-size: 1.5rem;
  }
}
</style>
