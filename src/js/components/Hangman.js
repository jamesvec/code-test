import Component from './Component';
import { EVENTS, STRINGS } from '../constants/index'

const SELECTORS = {
  BOARD: '.hangman__board'
}

export default class Hangman extends Component {

  constructor(el, props) {
    super(el, props);

    this.board = this.el.querySelector(SELECTORS.BOARD);
    this.init();
  }

  /**
   * Initializes Hangman Component
   */
  init() {
    this.binds();
  }

  /**
   * Sets up initial binds
   */
  binds() {
    this.pubsub.subscribe(EVENTS.SECRET_SET, e => {
      this.setupBoard();
    });
    this.pubsub.subscribe(EVENTS.RESET, e => {
      this.reset();
    });
  }

  /**
   * Sets up tasks for gameboard
   */
  setupBoard() {
    const word = localStorage.getItem(STRINGS.SECRETWORD);

    this.answer = word.split('');
    this.createDom();
    this.pubsub.publish(EVENTS.BOARD_READY);
  }

  /**
   * Creates Dom for letters
   */
  createDom() {
    let newDom = '';
    for(let i = 0; i < this.answer.length; i++) {
      if(this.answer[i] === ' ') {
        newDom += `<div class="blank game-block"></div>`;
      } else {
        newDom += `<div class="letter-wrapper"><p class="letter game-block">${ this.answer[i] }</p></div>`;
      }
    }

    this.board.innerHTML = newDom;
  }

  /**
   * Resets this component
   */
  reset() {
    this.board.innerHTML = '';
  }
}

