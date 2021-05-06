const app = new Vue({
  
  el: '#app',
  data:{

    counterPhoto: 0,
    photo:[
      'assets/img/foto-natura1.jpg',
      'assets/img/foto-natura2.jpg',
      'assets/img/foto-natura3.jpg',
      'assets/img/foto-natura4.jpg'
    ],
    timero: 0,
  },

  methods:{

    rightPhoto(){
      this.counterPhoto++;
      if(this.counterPhoto === this.photo.length) this.counterPhoto = 0;
    },
    leftPhoto(){
      this.counterPhoto--;
      if(this.counterPhoto < 0) this.counterPhoto = this.photo.length - 1;
    }

  }




});