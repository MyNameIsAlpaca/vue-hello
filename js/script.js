const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Benvenuti su Vue!',
      }
    },
    
    methods: {
        imgSource(){
            return "../img/Logo.png"
        }
    },
  }).mount('#app')