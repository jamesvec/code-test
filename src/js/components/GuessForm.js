import Component from './Component';
import { EVENTS, STRINGS } from '../constants/index';

const SELECTORS = {
  BLANK: '.blank',
  INPUT: '.guess-form__input',
  LETTERS: '.game-block',
  PARTS: '.hangman__man-part',
  RESET: '.reset-button',
  SUBMIT: '.guess-form__submit'
};

export default class GuessForm extends Component {

  constructor(el, props) {
    super(el, props);
    this.answers = {};
    this.input = this.el.querySelector(SELECTORS.INPUT);
    this.submit =  this.el.querySelector(SELECTORS.SUBMIT);
    this.parts = document.querySelectorAll(SELECTORS.PARTS);
    this.resetButton = document.querySelector(SELECTORS.RESET);
    this.init();
  }

  /**
   * Initializes Guessfrom component
   */
  init() {
    this.binds();
  }

  /**
   * Sets up initial binds
   */
  binds() {
    this.pubsub.subscribe(EVENTS.SECRET_SET, e => {
      this.setUpGame();
    });
    this.pubsub.subscribe(EVENTS.BOARD_READY, e => {
      this.gameboard = document.querySelectorAll(SELECTORS.LETTERS);
      this.blanks = document.querySelectorAll(SELECTORS.BLANK)
      this.answerLength = this.gameboard.length - this.blanks.length;
      this.reset();
    });
    this.pubsub.subscribe(EVENTS.RESET, e => {
      this.reset();
    });
    this.el.addEventListener(EVENTS.SUBMIT, e => this.submitHandler(e));
    this.resetButton.addEventListener(EVENTS.CLICK, e =>{
      this.pubsub.publish(EVENTS.RESET);
    });
  }

  /**
   * Handles form submit
   * @param  {Object} e Event Object
   */
  submitHandler(e) {
    e.preventDefault();
    const isNotEmpty = super.checkInput(this.input);

    if(isNotEmpty) {
      this.checkLetter();
      this.refocusInput();
    } else {
      super.toggleErrorState(this.input, true);
    }
  }

  /**
   * Sends focus back to input after submit
   */
  refocusInput() {
    this.input.value = '';
    this.input.focus();
  }

  /**
   * Sets some vars needed for tracking guesses
   */
  setUpGame() {
    this.answer  = super.getStorage().split('');
    this.guesses = [];
  }

  /**
   * Checks if letter is in answer
   */
  checkLetter() {
    const guess = this.input.value;

    if(this.addToGuesses(guess)) {
      const ind = this.checkArray(guess);
      
      if(ind.length > 0) {
        this.showLetters(ind);  
      } else {
        this.showHangman();
        this.answers.incorrect += 1;
      }
    }
    super.toggleErrorState(this.input, false);
    this.checkAnswer();
  }

  /**
   * Shows hangman parts
   */
  showHangman() {
    this.parts[this.answers.incorrect].classList.add(STRINGS.ACTIVE)
  }

  /**
   * Checks Answer to see if you have won or lost
   */
  checkAnswer() {
    if(this.answers.correct === this.answerLength) {
      // TODO: would listen for animation end but I timeboxed this so
      // I didn't get to it
      setTimeout(() => { alert('you win'); }, 1000);
      this.showReset();
    } else if( this.answers.incorrect === 6) {
      // TODO: would listen for animation end but I timeboxed this so
      // I didn't get to it
      setTimeout(() => { alert('you lose'); }, 1000);
      this.showReset();
    }
  }

  /**
   * Shows Letters that you have guessed
   * @param  {Array} ind Array if indexes where letter appears
   */
  showLetters(ind) {
    for(let i = 0; i < ind.length; i++) {
      this.gameboard[ind[i]].classList.add(STRINGS.ACTIVE);
      this.answers.correct += 1;
    }
  }

  /**
   * Adds letters to already guessed array
   * @param {String} guess the letter guessed
   */
  addToGuesses(guess) {
    if(this.guesses.indexOf(guess) !== -1) {
      alert('you already guessed that');
      return false;
    } else {
      this.guesses.push(guess);
      return true;
    }
  }

  /**
   * Creates array of indexes for guessed letter
   * @param  {String} guess The guess
   * @return {Array}  Array if indexes for guessed letter
   */
  checkArray(guess) {
    let ind = [];
    for(let i = 0; i < this.answer.length; i++) {
      if(this.answer[i] === guess) {
        ind.push(i);
      }
    }
    return ind;
  }

  /**
   * Shows reset button
   */
  showReset() {
    this.resetButton.classList.add(STRINGS.ACTIVE);
  }

  /**
   * Resets Component
   */
  reset() {
    this.resetButton.classList.remove(STRINGS.ACTIVE);
    this.answers.incorrect = 0;
    this.answers.correct = 0;
    this.guesses = [];
  }
}
