const app = Vue.createApp({
  // template: `
  //   <h1>Hola Mundo</h1>
  //   <p>Desde app.js</p>
  // `
  // methods: {},
  // watch: {},
  // setup() {}
  data() {
    return {
      message: 'Hola Mundo',
      quote: "I'm Batman",
      author: 'Bruce Wayne'
    }
  }
})

app.mount('#myApp')
