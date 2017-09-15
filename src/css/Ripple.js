import CONSTANTS from '../lib/constants/index';
import Component from './Component';
import { MDCRipple, MDCRippleFoundation } from '@material/ripple';

const CLASSES = {
  RIPPLE_IMAGE: '.js-ripple-image'
};

/**
 * Adds a material "ink ripple" interaction effect to an element.
 */
export default class Ripple extends Component {
  /**
   * @constructor
   * @param {Element} el DOM element for which the component was initialized.
   * @param {Object} props Name/value pair of properties with which to
   * initialize the component.
   */
  constructor(el, props) {
    super(el, props);

    this.rippleImage = this.el.querySelector(CLASSES.RIPPLE_IMAGE);

    this.init();
  }

  /**
   * Initializes the Ripple component.
   */
  init() {
    this.bindEvents();
  }

  /**
   * Waits to add MDCRipple to elements with child images (needs height value
   * for proper rendering). Otherwise, instantiates MDCRipple immediately.
   */
  bindEvents() {
    if (this.rippleImage) {
      const img = new Image();

      img.addEventListener(CONSTANTS.EVENTS.LOAD, () => new MDCRipple(this.el));
      img.src = this.rippleImage.src;
    } else {
      new MDCRipple(this.el);
    }
  }
}
