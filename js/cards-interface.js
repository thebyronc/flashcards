import { Cards } from './../js/cards.js';

$(document).ready(function() {
  $("#start").click(function() {
    let cards = new Cards();
    $("#question").html(`${cards.question[1]}`);
    for(let index = 1; index <= 4; index++) {
      $("#answers").append(`
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <p>
                <input name="group" type="radio" value="${index}" id="a${index}" />
                <label for="a${index}">${cards.answer[index]}</label>
              </p>
            </div>
          </div>
        `);
    }


    $('input[name=group]').change(function() {
      $("#answers").submit(function(event) {
        event.preventDefault();
        clearInterval(countDown);
        let response = $("input:radio[name=group]:checked").val();
        if(response == 1) {
          $(".countDown").html(`<h1>CORRECT</h1>`);
        } else {
          $(".countDown").html(`<h1>WRONG!!</h1>`);
        }
      });
    });



    let countDown = setInterval(function(){
      if (cards.count > 0){
          cards.count--;
      } else {
        clearInterval(countDown);
      }
      console.log(cards.count);
      $(".countDown").html(`<h1>${cards.count}</h1>`);
    }, 1000);
  });

});
