const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Benvenuti su Vue!',
        imgSource: "img/Logo",
      }
    }
  }).mount('#app')