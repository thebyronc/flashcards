(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cards = exports.Cards = function () {
  function Cards() {
    _classCallCheck(this, Cards);

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

  _createClass(Cards, [{
    key: "getQuestion",
    value: function getQuestion(value) {
      this.usedQuestions.push(value);
      return this.question[value];
    }
  }, {
    key: "getAnswer",
    value: function getAnswer(value) {
      return this.answer[value];
    }
  }, {
    key: "getOtherAnswers",
    value: function getOtherAnswers(value) {
      var incorrectAnswers = [];
      for (var i = 1; i <= Object.keys(this.answer).length; i++) {
        if (value != i) {
          incorrectAnswers.push(i);
        }
      }
      incorrectAnswers.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      incorrectAnswers.splice(3, incorrectAnswers.length - 3);
      return incorrectAnswers;
    }
  }, {
    key: "getMatch",
    value: function getMatch(valueQ, valueA) {
      if (valueQ === valueA) {
        return "correct!";
      } else {
        return "incorrect";
      }
    }
  }, {
    key: "pickRandomQuestion",
    value: function pickRandomQuestion() {
      var currentQuestions = this.question;
      var usedQuestions = this.usedQuestions;
      var availableQuestions = [];
      for (var i = 1; i <= Object.keys(currentQuestions).length; i++) {
        if (!availableQuestions.includes(i)) {
          availableQuestions.push(i);
        } else {
          console.log("Reached Else");
        }
      }

      var currentIndex = availableQuestions.length,
          temporaryValue,
          randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = availableQuestions[currentIndex];
        availableQuestions[currentIndex] = availableQuestions[randomIndex];
        availableQuestions[randomIndex] = temporaryValue;
      }
      return availableQuestions[0];
    }
  }, {
    key: "printQA",
    value: function printQA() {
      var randomQuestion = this.pickRandomQuestion();
      $("#question").html("" + this.question[randomQuestion]);
      var allAnswers = this.getOtherAnswers(randomQuestion);
      allAnswers.push(randomQuestion);
      allAnswers.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      $("#answers").html('');
      for (var i = 0; i < allAnswers.length; i++) {
        $("#answers").append("\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\" id=\"q" + allAnswers[i] + "\">\n              <p>\n                <input name=\"group\" type=\"radio\" value=\"" + allAnswers[i] + "\" id=\"a" + allAnswers[i] + "\" />\n                <label for=\"a" + allAnswers[i] + "\">" + this.answer[allAnswers[i]] + "</label>\n              </p>\n            </div>\n          </div>\n        ");
      }
      return randomQuestion;
    }
  }]);

  return Cards;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _cards = require("./../js/cards.js");

$(document).ready(function () {
  var cards = new _cards.Cards();
  var round = 0;
  var score = 0;
  $("#start").click(function () {

    runGame();
  });

  var runGame = function runGame() {
    if (round < 10) {
      round++;

      console.log("Current round: " + round);
      console.log("Current score: " + score);
      var qID = cards.printQA();
      $('input[type=radio]').click(function (event) {
        event.preventDefault();
        var response = $("input:radio[name=group]:checked").val();
        if (response == qID) {
          // $(".countDown").html(`<h1>CORRECT</h1>`);
          $("#q" + qID).html("<h3>CORRECT</h3>");

          score++;
        } else {
          $(".countDown").html("<h1>WRONG!!</h1>");
        }
      });

      var countDown = setInterval(function () {
        if (cards.count > 0) {
          cards.count--;
          $(".countDown").html("<h1>" + cards.count + "</h1>");
        } else {
          $(".countDown").html("<h1>MISSED!!</h1>");
          clearInterval(countDown);
          cards.count = 10;
          setTimeout(runGame(), 3000);
        }
      }, 1000);
    } else {
      console.log("Game Over");
    }
  };
});

},{"./../js/cards.js":1}]},{},[2]);
