export class Cards {
  constructor() {
    this.question = {
      "1": "JavaScript",
      "2": "let variable",
      "3": "const variable",
      "4": "Arrays",
      "5": "Functions"
    };
    this.answer = {
      "1": "the programming language of HTML and the Web",
      "2": "declares a block scope local variable",
      "3": "are block-scoped, much like variables defined using the let statement. The value cannot change through re-assignment, and it can't be redeclared.",
      "4": "used to store multiple values in a single variable",
      "5": "is a block of code designed to perform a particular task."
    };
  }
  getQuestion(value) {
    return this.question[value];
  }

  getAnswer(value) {
    return this.answer[value];
  }
}
