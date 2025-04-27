<template>
  <section id="recommendations" class="recommendations py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-title text-center">Testimonials</h2>
          <p class="lead">What other developers say about my work </p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(recommendation, index) in recommendations" :key="index">
          <div class="recommendation-card fade-in" :style="{ animationDelay: index * 0.2 + 's' }">
            <div class="recommendation-content">
              <div class="quote-icon">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="recommendation-text">{{ recommendation.text }}</p>
              <div class="recommendation-rating">
                <i class="fas fa-star" v-for="star in 5" :key="star"></i>
              </div>
            </div>
            <div class="recommendation-author">
              <div class="author-avatar">
                <img :src="recommendation.avatar" :alt="recommendation.name">
              </div>
              <div class="author-info">
                <h5>{{ recommendation.name }}</h5>
                <p>{{ recommendation.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecommendationsSection',
  data() {
    return {
      recommendations: [
        {
          text: "Um profissional excecional que combina criatividade com habilidades técnicas sólidas. O seu trabalho superou todas as nossas expectativas e trouxe resultados impressionantes para o nosso negócio.",
          name: "Ana Silva",
          role: "Diretora de Marketing, TechSolutions",
          avatar: "https://via.placeholder.com/100"
        },
        {
          text: "Trabalhar com este desenvolvedor foi uma experiência incrível. A sua capacidade de transformar conceitos em soluções digitais funcionais e esteticamente agradáveis é notável.",
          name: "Pedro Santos",
          role: "CEO, Inovação Digital",
          avatar: "https://via.placeholder.com/100"
        },
        {
          text: "Um talento raro que entende tanto o aspeto técnico quanto o criativo do desenvolvimento web. Recomendo fortemente para qualquer projeto que exija qualidade e inovação.",
          name: "Mariana Costa",
          role: "UX Designer, CreativeMinds",
          avatar: "https://via.placeholder.com/100"
        }
      ]
    }
  }
}
</script>

<style scoped>
.recommendations {
  background-color: var(--light);
  padding: 6rem 0;
}

.section-title.text-center::after {
  left: 50%;
  transform: translateX(-50%);
}

.recommendation-card {
  background-color: var(--light);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.recommendation-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.recommendation-content {
  padding: 2rem;
  background-color: var(--light);
  flex-grow: 1;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--primary);
  opacity: 0.2;
  font-size: 2rem;
}

.recommendation-text {
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.recommendation-rating {
  color: #FFD700;
  margin-bottom: 1rem;
}

.recommendation-author {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background-color: rgba(106, 27, 154, 0.05);
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 3px solid var(--primary-light);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h5 {
  color: var(--primary);
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.author-info p {
  margin-bottom: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.fade-in {
  opacity: 0;
  animation: fadeIn ease 1s forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .recommendation-card {
    margin-bottom: 2rem;
  }
}
</style>
