<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <h3 class="footer-logo">Portfolio</h3>
          <p class="footer-tagline">Transformando ideias em experiências digitais memoráveis</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="row">
        <div class="col-12 text-center">
          <p class="copyright">&copy; {{ new Date().getFullYear() }} | Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  background-color: var(--primary-dark);
  color: var(--light);
  padding: 3rem 0 1.5rem;
}

.footer-logo {
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--light);
  color: var(--primary-dark);
  transform: translateY(-3px);
}

.footer-divider {
  margin: 2rem 0;
  border-color: rgba(255, 255, 255, 0.1);
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer-social {
    justify-content: center;
    margin-top: 1.5rem;
  }
}
</style>
