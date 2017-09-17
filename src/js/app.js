'use strict';
require('../css/main.scss');

import GuessForm from './components/GuessForm';
import Hangman from './components/Hangman';
import SecretWordForm from './components/SecretWordForm';

// Component Registry
const REGISTRY = {
  GuessForm,
  Hangman,
  SecretWordForm
};

const COMPONENT_ATTR = 'data-comp';
const PROPERTIES_ATTR = 'data-props';

let instance = null;

export default class Application {
  
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.components = [];

    this.scan().forEach( el => {
      // Instantiate component dynamically
      const Component = REGISTRY[el.getAttribute(COMPONENT_ATTR)];
      let props;

      try {
        props = JSON.parse(el.getAttribute(PROPERTIES_ATTR));
      } catch (Error) {
        props = {};
      }

      this.components.push(new Component(el, props));
    });


    return instance;
  }

  scan(el=document) {
    return Array.from(el.querySelectorAll(`[${COMPONENT_ATTR}]`));
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
});

