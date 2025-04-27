<template>
  <section id="projects" class="projects py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-title text-center">My Projects</h2>
          <p class="lead">Take a look at some of my most relevant projects.</p>
        </div>
      </div>

      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-slides" :style="{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }">
            <div v-for="project in projects" :key="project.id" class="carousel-slide">
              <div class="project-card">
                <div class="project-image">
                  <img :src="project.image" :alt="project.title" class="img-fluid">
                </div>
                <div class="project-content">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                  </div>
                  <div class="project-links">
                    <a :href="project.demoLink" class="btn btn-primary btn-sm" target="_blank">Ver Demo</a>
                    <a :href="project.codeLink" class="btn btn-outline-primary btn-sm" target="_blank">Ver Código</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button @click="prevSlide" class="carousel-control prev" aria-label="Projeto anterior">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="nextSlide" class="carousel-control next" aria-label="Próximo projeto">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      currentIndex: 0,
      slidesToShow: 3,
      projects: [
        {
          id: 1,
          title: 'E-commerce Moderno',
          description: 'Plataforma de e-commerce completa com sistema de pagamento integrado, gestão de produtos e painel de administração.',
          image: 'https://via.placeholder.com/800x600',
          tags: ['Vue.js', 'Node.js', 'MongoDB'],
          demoLink: '#',
          codeLink: '#'
        },
        {
          id: 2,
          title: 'App de Gestão Financeira',
          description: 'Aplicação web para gestão de finanças pessoais com visualização de dados, orçamentos e relatórios personalizados.',
          image: 'https://via.placeholder.com/800x600',
          tags: ['React', 'Firebase', 'Chart.js'],
          demoLink: '#',
          codeLink: '#'
        },
        {
          id: 3,
          title: 'Plataforma Educacional',
          description: 'Sistema de gestão de cursos online com vídeo-aulas, fóruns de discussão e avaliações automáticas.',
          image: 'https://via.placeholder.com/800x600',
          tags: ['Vue.js', 'Express', 'PostgreSQL'],
          demoLink: '#',
          codeLink: '#'
        },
        {
          id: 4,
          title: 'Rede Social',
          description: 'Plataforma para networking profissional com perfis, vagas de emprego e sistema de mensagens.',
          image: 'https://via.placeholder.com/800x600',
          tags: ['React', 'GraphQL', 'MongoDB'],
          demoLink: '#',
          codeLink: '#'
        },
        {
          id: 5,
          title: 'Dashboard Analítico',
          description: 'Painel de controle interativo para visualização de métricas de negócio em tempo real.',
          image: 'https://via.placeholder.com/800x600',
          tags: ['Vue.js', 'D3.js', 'Node.js'],
          demoLink: '#',
          codeLink: '#'
        }
      ]
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.slidesToShow = 1;
      } else if (window.innerWidth < 992) {
        this.slidesToShow = 2;
      } else {
        this.slidesToShow = 3;
      }
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % (this.projects.length + 1 - this.slidesToShow);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % (this.projects.length + 1 - this.slidesToShow);
    }
  }
};
</script>

<style scoped>
.projects {
  background-color: var(--secondary);
  padding: 6rem 0;
}

.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-wrapper {
  overflow: hidden;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 calc(100% / 3);
  padding: 1rem;
}

.project-card {
  background-color: var(--light);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.project-tag {
  background-color: rgba(106, 27, 154, 0.1);
  color: var(--primary);
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-control {
  background-color: var(--primary);
  color: var(--light);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.carousel-control:hover {
  background-color: var(--primary-dark);
  transform: scale(1.1);
}

/* .carousel-control.prev {
  margin-left: -20px;
}

.carousel-control.next {
  margin-right: -20px;
} */

@media (max-width: 992px) {
  .carousel-slide {
    flex: 0 0 calc(100% / 2);
  }
}

@media (max-width: 768px) {
  .carousel-slide {
    flex: 0 0 100%;
  }
}
</style>
