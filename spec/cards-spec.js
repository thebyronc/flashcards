import { Cards } from './../js/cards.js';

describe('Cards', function() {
  let cards;
  beforeEach(function() {
    cards = new Cards();
  });

  it('grabs question from array list', function() {
    expect("JavaScript").toEqual(cards.getQuestion(1));
  });

  it('grabs answer from array list', function() {
    expect("the programming language of HTML and the Web").toEqual(cards.getAnswer(1));
  });

  it('checks to see if answer matches key from question', function() {
    expect("correct!").toEqual(cards.getMatch(2, 2));
  });

  it('picks random question', function() {
    expect(true).toEqual(cards.pickRandomQuestion()<= Object.keys(cards.question).length);
  });
  // it('picks random question', function() {
  //   expect(true).toEqual(cards.pickRandomQuestion() <= Object.keys(cards.question).length);
  // });

  // it('check return value', function() {
  //   expect("correct!").toEqual(cards.answer);
  // });
});
