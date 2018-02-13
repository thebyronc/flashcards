import { Cards } from './../js/cards.js';

$(document).ready(function() {
  let cards = new Cards();
  let round = 0;
  let score = 0;
  $("#start").click(function() {


    runGame();
  });

  let runGame = function() {
    if(round < 10) {
      round++;

      console.log("Current round: " + round);
      console.log("Current score: " + score);
      let qID = cards.printQA();
      $('input[type=radio]').click(function(event) {
          event.preventDefault();
          let response = $("input:radio[name=group]:checked").val();
          if(response == qID) {
            // $(".countDown").html(`<h1>CORRECT</h1>`);
            $("#q" + qID).html(`<h3>CORRECT</h3>`);

            score++;
          } else {
            $(".countDown").html(`<h1>WRONG!!</h1>`);
          }
      });

      let countDown = setInterval(function(){
        if(cards.count > 0){
            cards.count--;
            $(".countDown").html(`<h1>${cards.count}</h1>`);
        } else {
          $(".countDown").html(`<h1>MISSED!!</h1>`);
          clearInterval(countDown);
          cards.count = 10;
          setTimeout(runGame(), 3000);
        }

      }, 1000);

    } else {
      console.log("Game Over");
    }

  }
});
