<template>
  <section id="about" class="about py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="about-img-container">
            <div class="about-img-wrapper">
              <img src="/profile_picture.png" alt="Profile Picture" class="img-fluid rounded shadow-lg">
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h2 class="section-title">About Me</h2>
          <p class="lead mb-4">Hello! I'm a fullstack developer and operator who loves coding and strives to improve a little bit every day.</p>
          <p class="mb-4">
            With 3 years of experience in fullstack development, I've worked across a variety of technologies and frameworks build digital solutions that not only deliver what clients want, but what they truly need. I focus on delivering smooth, efficient systems, always aiming to apply best practices and find the most effective solutions.
          </p>
          <p class="mb-4">
            Technology is constantly evolving — and so should we. I'm passionate about continuous learning and staying up-to-date with the latest advancements in the tech world. I believe that ongoing growth is essential to enhancing the client experience and staying competitive in the market. I have end-to-end knowledge of software development, from backend to frontend, from planning to deployment.
          </p>  
          <div class="row mt-5">
            <div class="col-md-6 mb-3">
              <div class="about-info">
                <h5><i class="fas fa-graduation-cap me-2"></i> Education</h5>
                <p>Bachelor's Degree in Computer Science
                  <br>Universidade Federal de Alfenas</p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="about-info">
                <h5><i class="fas fa-briefcase me-2"></i> Experience</h5>
                <p>3+ years of Full Stack development<br>1+ Years of Systems Operation</p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="about-info">
                <h5><i class="fas fa-map-marker-alt me-2"></i> Location</h5>
                <p>Alfenas<br> Brazil</p>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="about-info">
                <h5><i class="fas fa-language me-2"></i> Languages</h5>
                <p>Portuguese (Native)<br>English (Intermediate – B1)</p>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <a href="#contact" class="btn btn-primary me-3">Contact-me</a>
            <a href="#" class="btn btn-outline-primary">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about {
  background-color: var(--light);
  padding: 6rem 0;
}

.about-img-container {
  position: relative;
  padding: 1rem;
}

.about-img-wrapper {
  position: relative;
  z-index: 2;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-img-wrapper img {
  transition: transform 0.5s ease;
}

.about-img-wrapper:hover img {
  transform: scale(1.05);
}

.about-info {
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(106, 27, 154, 0.05);
  transition: all 0.3s ease;
}

.about-info:hover {
  background-color: rgba(106, 27, 154, 0.1);
  transform: translateY(-5px);
}

.about-info h5 {
  color: var(--primary);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.btn-outline-primary {
  color: var(--primary);
  border-color: var(--primary);
}

.btn-outline-primary:hover {
  background-color: var(--primary);
  color: var(--light);
}

@media (max-width: 992px) {
  .about-img-container {
    margin-bottom: 3rem;
  }
}
</style>
