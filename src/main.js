import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/main.css'
import './assets/css/animations.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';


// Adicionar Font Awesome
const script = document.createElement('script')
script.src = 'https://kit.fontawesome.com/a076d05399.js'
script.crossOrigin = 'anonymous'
document.head.appendChild(script)

// Inicializar a aplicação Vue
const app = createApp(App)
app.use(router)
app.mount('#app')

// Adicionar detector de scroll para animações
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal')
  
  function checkReveal() {
    const windowHeight = window.innerHeight
    const revealPoint = 150
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active')
      }
    })
  }
  
  window.addEventListener('scroll', checkReveal)
  checkReveal() // Verificar elementos visíveis no carregamento inicial
})
