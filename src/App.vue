<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
}

/* Estilos responsivos globais */
@media (max-width: 1200px) {
  section {
    padding: 4rem 0;
  }
}

@media (max-width: 992px) {
  section {
    padding: 3.5rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 576px) {
  section {
    padding: 2.5rem 0;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
}

/* Ajustes para dispositivos muito pequenos */
@media (max-width: 320px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
}
</style>
