<template>
  <section id="contact" class="contact py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-title text-center">Contact-me</h2>
          <p class="lead">Let's work together and have a small talk</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="contact-info">
            <h3>Contact info</h3>
            <p>I'm open to freelance projects and casual conversations. You can contact me by sending an email through the form or reaching out directly via one of the channels below:</p>

            <div class="contact-method">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>ppma.txt@gmail.com</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">
                <i class="fab fa-whatsapp"></i>
              </div>
              <div class="contact-details">
                <h4>WhatsApp</h4>
                <p>+55 35 9267 - 0389</p>
              </div>
            </div>
            <div class="contact-method">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Location</h4>
                <p>Alfenas, MG, Brazil</p>
              </div>
            </div>

              <div class="social-links mt-4">
                <a href="https://www.linkedin.com/in/ppmatxt/" class="social-link" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/pedro-php" class="social-link" aria-label="GitHub">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="contact-form-container">
              <form class="contact-form" @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" id="name" v-model="form.name" class="form-control" required
                        :class="{ 'is-invalid': errors.name }">
                      <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
                    </div>
                  </div>

                  <div class="col-md-6 mb-3">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" id="email" v-model="form.email" class="form-control" required
                        :class="{ 'is-invalid': errors.email }">
                      <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-3">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" v-model="form.subject" class="form-control" required
                    :class="{ 'is-invalid': errors.subject }">
                  <div class="invalid-feedback" v-if="errors.subject">{{ errors.subject }}</div>
                </div>

                <div class="form-group mb-3">
                  <label for="message">Message</label>
                  <textarea id="message" v-model="form.message" class="form-control" rows="5" required
                    :class="{ 'is-invalid': errors.message }"></textarea>
                  <div class="invalid-feedback" v-if="errors.message">{{ errors.message }}</div>
                </div>

                <div class="form-group mb-4">
                  <div class="form-check">
                    <input type="checkbox" id="preferWhatsapp" v-model="form.preferWhatsapp" class="form-check-input">
                    <label class="form-check-label" for="preferWhatsapp">
                      I prefer to be contacted via WhatsApp
                    </label>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
                    <span v-if="isSubmitting">
                      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending Message
                    </span>
                    <span v-else>Send Message</span>
                  </button>
                </div>

                <div class="form-message mt-3 text-center" v-if="formMessage">
                  <div :class="['alert', formMessage.type === 'success' ? 'alert-success' : 'alert-danger']">
                    {{ formMessage.text }}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        preferWhatsapp: false
      },
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      formMessage: null
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      if (!this.form.name.trim()) {
        this.errors.name = 'Por favor, insira o seu nome';
        isValid = false;
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Por favor, insira o seu email';
        isValid = false;
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Por favor, insira um email válido';
        isValid = false;
      }

      if (!this.form.subject.trim()) {
        this.errors.subject = 'Por favor, insira um assunto';
        isValid = false;
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'Por favor, insira a sua mensagem';
        isValid = false;
      }

      return isValid;
    },

    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    submitForm() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      // Simulação de envio de formulário
      setTimeout(() => {
        this.isSubmitting = false;
        this.formMessage = {
          type: 'success',
          text: 'Mensagem enviada com sucesso! Entrarei em contacto consigo em breve.'
        };

        // Limpar formulário após envio bem-sucedido
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
          preferWhatsapp: false
        };

        // Limpar mensagem após alguns segundos
        setTimeout(() => {
          this.formMessage = null;
        }, 5000);
      }, 1500);
    }
  }
}
</script>

<style scoped>
.contact {
  background-color: var(--light);
  padding: 6rem 0;
}

.section-title.text-center::after {
  left: 50%;
  transform: translateX(-50%);
}

.contact-info {
  background-color: var(--primary);
  color: var(--light);
  border-radius: 8px;
  padding: 2.5rem;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-info h3 {
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.contact-details h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.contact-details p {
  margin-bottom: 0;
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 1rem;
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
  color: var(--primary);
  transform: translateY(-3px);
}

.contact-form-container {
  background-color: var(--light);
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.form-control {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 0.25rem rgba(106, 27, 154, 0.25);
}

.btn-primary {
  padding: 0.75rem 2rem;
  font-weight: 500;
}

.form-check-input:checked {
  background-color: var(--primary);
  border-color: var(--primary);
}

.form-check-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 0.25rem rgba(106, 27, 154, 0.25);
}

@media (max-width: 992px) {
  .contact-info {
    margin-bottom: 2rem;
  }
}
</style>
