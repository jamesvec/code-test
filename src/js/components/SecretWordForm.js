import Component from './Component';

const SELECTORS = {
  INPUT: '.secret-word-form__input',
  SUBMIT: '.secret-word-form__submit',

};

export default class SecretWordForm extends Component {

  constructor(el, props) {
    super(el, props);

    this.input = this.el.querySelector(SELECTORS.INPUT);
    this.submit =  this.el.querySelector(SELECTORS.SUBMIT);
    
    this.init();
  }

  init() {
    this.binds();
  }

  binds() {
    this.el.addEventListener('submit', e => this.submitHandler(e));
  }

  submitHandler(e) {
    e.preventDefault();
    let isNotEmpty = this.checkInput();
    if(isNotEmpty) {
      this.checkStorage();
    }
  }

  checkInput() {
   const valHasLength = this.input.value.replace(/\s+/g, '').length > 0 ? true : false;
   return valHasLength;
  }

  checkStorage() {

  }

}
