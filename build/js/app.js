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
    this.usedQuestions = [1];
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

      // for(let i = 1; i <= Object.keys(this.answer).length); i++) {
      //   if(value != this.answer(i))
      // }
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
      console.log(availableQuestions);

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
      // let random = Object.entries(availableQuestions)[0];
      return availableQuestions[0];
    }
  }]);

  return Cards;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _cards = require("./../js/cards.js");

$(document).ready(function () {
  $("#start").click(function () {
    var cards = new _cards.Cards();
    $("#question").html("" + cards.question[1]);
    for (var index = 1; index <= 4; index++) {
      $("#answers").append("\n          <div class=\"card blue-grey darken-1\">\n            <div class=\"card-content white-text\">\n              <p>\n                <input name=\"group\" type=\"radio\" value=\"" + index + "\" id=\"a" + index + "\" />\n                <label for=\"a" + index + "\">" + cards.answer[index] + "</label>\n              </p>\n            </div>\n          </div>\n        ");
    }

    $('input[name=group]').change(function () {
      $("#answers").submit(function (event) {
        event.preventDefault();
        clearInterval(countDown);
        var response = $("input:radio[name=group]:checked").val();
        if (response == 1) {
          $(".countDown").html("<h1>CORRECT</h1>");
        } else {
          $(".countDown").html("<h1>WRONG!!</h1>");
        }
      });
    });

    var countDown = setInterval(function () {
      if (cards.count > 0) {
        cards.count--;
      } else {
        clearInterval(countDown);
      }
      console.log(cards.count);
      $(".countDown").html("<h1>" + cards.count + "</h1>");
    }, 1000);
  });
});

},{"./../js/cards.js":1}]},{},[2]);
