import PubSub from '../utils/PubSub';
import { STRINGS } from '../constants/index';

export default class Component {
  
  constructor(el, props) {
    this.el = el;
    this.props = props;
    this.pubsub = new PubSub();
  }

  /**
   * Checks if input is empty
   * @param  {Object} input reference to dom
   * @return {Boolean} is input empty
   */
  checkInput(input) {
    const valHasLength = input.value.replace(/\s+/g, '').length > 0 ? true : false;
    return valHasLength;
  }

  /**
   * Checks local storage for item
   * @return {Boolean} Tells you if word is set
   */
  checkStorage() {
    const storageWord = localStorage.getItem(STRINGS.SECRETWORD) === null ? true : false;
    return storageWord;
  }

  /**
   * Gets value from local storage
   * @return {string} Returns secret word
   */
  getStorage() {
  	return localStorage.getItem(STRINGS.SECRETWORD);
  }

  /**
   * Toggles error state on inputs
   * @param  {Object} input Dom element for input
   * @param  {Boolean} error If error is true or false
   */
  toggleErrorState(input, error) {
  	error ? input.classList.add(STRINGS.ERROR) : input.classList.remove(STRINGS.ERROR);
  }
}
