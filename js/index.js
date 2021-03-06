// VUE MAGIC 8 BALL

const app = new Vue({
  el: "#app",

  // Data to be displayed
  data: {
    showModal: false,
    msg: "Look into my depths and you shall find your answer...",

    // Array of 8-Ball Answers
    answers: [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ],
    selectedAnswer: ""
  },

  // app methods
  methods: {
    // randomly selected 8-bal Answer
    shake: function() {
      const index = Math.floor(Math.random() * this.answers.length);
      this.selectedAnswer = this.answers[index];
    },
    typeWriter: function(n) {
      n;
      getDefaultData();

      let index = Math.floor(Math.random() * this.answers.length);
      t = this.answers[index];

      // typewriter effect
      if (n < t.length) {
        this.intervalid1 = setInterval(
          function() {
            this.selectedAnswer = t.substring(0, n + 1);
            n++;
            console.log(n, t.length);
            if (n > t.length - 1) {
              clearInterval(this.intervalid1);
            }
          }.bind(this),
          200
        );
      }
    }
  }
});

// resets data

function getDefaultData() {
  return {
    data: {
      msg: "Look into my depths and you shall find your answer...",

      // Array of 8-Ball Answers
      answers: [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ],
      selectedAnswer: ""
    }
  };
}




// modal 
Vue.component('modal', {
  template: '#modal-template',
  props: ['show'],
  methods: {
    savePost: function () {
      // Some save logic goes here...
      
      this.$emit('close');
    }
  }
});