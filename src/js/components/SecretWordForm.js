import Component from './Component';
import { EVENTS, STRINGS } from '../constants/index';

const SELECTORS = {
  GAME: '.hangman-wrapper',
  INPUT: '.secret-word-form__input',
  SUBMIT: '.secret-word-form__submit'
};

export default class SecretWordForm extends Component {

  constructor(el, props) {
    super(el, props);

    this.input = this.el.querySelector(SELECTORS.INPUT);
    this.submit =  this.el.querySelector(SELECTORS.SUBMIT);
    this.game = document.querySelector(SELECTORS.GAME);

    this.init();
  }

  /**
   * Initializes Secret Word form
   */
  init() {
    this.binds();
  }

  /**
   * Sets up binds for this component
   */
  binds() {
    this.el.addEventListener(EVENTS.SUBMIT, e => this.submitHandler(e));
    this.pubsub.subscribe(EVENTS.RESET, e => {
      this.reset();
    });
  }

  /**
   * Handles form submit
   * @param  {Object} e Event object.
   */
  submitHandler(e) {
    e.preventDefault();
    const isNotEmpty = super.checkInput(this.input);

    if(isNotEmpty) {
      this.setSecretWord();
      this.changeView();
      this.pubsub.publish(EVENTS.SECRET_SET);
    } else {
      super.toggleErrorState(this.input, true);
    }
  }

  /**
   * Hide ans show states of app
   */
  changeView() {
    this.el.classList.add(STRINGS.INACTIVE);
    this.game.classList.add(STRINGS.ACTIVE);
  }

  /**
   * Sets the secret work into local storage
   */
  setSecretWord() {
    let val =  this.input.value;
    localStorage.setItem(STRINGS.SECRETWORD, val);
    super.toggleErrorState(this.input, false);
  }

  /**
   * Resets component
   */
  reset() {
    this.el.classList.remove(STRINGS.INACTIVE);
    this.game.classList.remove(STRINGS.ACTIVE);
  }
}
