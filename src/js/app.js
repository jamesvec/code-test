'use strict';
require('../css/main.scss');

import SecretWordForm from './components/SecretWordForm';

// Component Registry
const REGISTRY = {
  SecretWordForm
};

const COMPONENT_ATTR = 'data-comp';
const PROPERTIES_ATTR = 'data-props';

let instance = null;

export default class Application {
  /**
   * Constructor for Application
   * @return {Object} Singleton
   */
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

