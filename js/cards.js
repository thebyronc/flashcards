export class Cards {
  constructor() {
    this.question = {
      1: "JavaScript",
      2: "let variable",
      3: "const variable",
      4: "Arrays",
      5: "Functions"
    };
    this.answer = {
      1: "the programming language of HTML and the Web",
      2: "declares a block scope local variable",
      3: "are block-scoped, much like variables defined using the let statement. The value cannot change through re-assignment, and it can't be redeclared.",
      4: "used to store multiple values in a single variable",
      5: "is a block of code designed to perform a particular task."
    };
    this.usedQuestions = [];
    this.count = 10;
  }

  getQuestion(value) {
    this.usedQuestions.push(value);
    return this.question[value];
  }

  getAnswer(value) {
    return this.answer[value];
  }
  getOtherAnswers(value){
    let incorrectAnswers = [];
    for(let i = 1; i <= Object.keys(this.answer).length; i++) {
      if(value != i) {
        incorrectAnswers.push(i);
      }
    }
    incorrectAnswers.sort(function(a, b){return 0.5 - Math.random()});
    incorrectAnswers.splice(3, incorrectAnswers.length - 3);
    return incorrectAnswers;
  }

  getMatch(valueQ, valueA){
    if (valueQ === valueA){
      return "correct!";
    } else {
      return "incorrect";
    }
  }

  pickRandomQuestion() {
    let currentQuestions = this.question;
    let usedQuestions = this.usedQuestions;
    let availableQuestions = [];
    for(let i = 1; i <= Object.keys(currentQuestions).length; i++) {
      if(!availableQuestions.includes(i)) {
        availableQuestions.push(i);
      } else {
        console.log("Reached Else");
      }
    }

    var currentIndex = availableQuestions.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = availableQuestions[currentIndex];
      availableQuestions[currentIndex] = availableQuestions[randomIndex];
      availableQuestions[randomIndex] = temporaryValue;
    }
    return availableQuestions[0];
  }

  printQA() {
    let randomQuestion = this.pickRandomQuestion();
    $("#question").html(`${this.question[randomQuestion]}`);
    let allAnswers = this.getOtherAnswers(randomQuestion);
    allAnswers.push(randomQuestion);
    allAnswers.sort(function(a, b){return 0.5 - Math.random()});
    $("#answers").html('');
    for(let i = 0; i < allAnswers.length; i++) {
      $("#answers").append(`
          <div class="card blue-grey darken-1">
            <div class="card-content white-text" id="q${allAnswers[i]}">
              <p>
                <input name="group" type="radio" value="${allAnswers[i]}" id="a${allAnswers[i]}" />
                <label for="a${allAnswers[i]}">${this.answer[allAnswers[i]]}</label>
              </p>
            </div>
          </div>
        `);
    }
    return randomQuestion;
  }

}
