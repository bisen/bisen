import Vue from 'vue/dist/vue.esm'
import VueP5 from 'vue-p5'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#p5-container',
    components: { VueP5 },
    data: {
      clicks: []
    },
    methods: {
      setup(sk) {
        sk.createCanvas(screen.width, screen.height);
      },
      mouseclicked(sk) {
        this.clicks.push({ x: sk.mouseX, y: sk.mouseY });
      },
      draw(sk) { 
        // draw a circle around each clicked position
        this.clicks.forEach(({ x, y }) => {
          sk.ellipse(x, y, 10, 10);
        });
      }
    }
  })
})
