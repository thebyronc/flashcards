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



});
