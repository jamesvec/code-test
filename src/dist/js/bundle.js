/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"server\""); }());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _componentsGuessForm = __webpack_require__(2);
	
	var _componentsGuessForm2 = _interopRequireDefault(_componentsGuessForm);
	
	var _componentsHangman = __webpack_require__(6);
	
	var _componentsHangman2 = _interopRequireDefault(_componentsHangman);
	
	var _componentsSecretWordForm = __webpack_require__(7);
	
	var _componentsSecretWordForm2 = _interopRequireDefault(_componentsSecretWordForm);
	
	// Component Registry
	__webpack_require__(8);
	
	var REGISTRY = {
	  GuessForm: _componentsGuessForm2['default'],
	  Hangman: _componentsHangman2['default'],
	  SecretWordForm: _componentsSecretWordForm2['default']
	};
	
	var COMPONENT_ATTR = 'data-comp';
	var PROPERTIES_ATTR = 'data-props';
	
	var instance = null;
	
	var Application = (function () {
	  function Application() {
	    var _this = this;
	
	    _classCallCheck(this, Application);
	
	    if (!instance) {
	      instance = this;
	    }
	
	    this.components = [];
	
	    this.scan().forEach(function (el) {
	      // Instantiate component dynamically
	      var Component = REGISTRY[el.getAttribute(COMPONENT_ATTR)];
	      var props = undefined;
	
	      try {
	        props = JSON.parse(el.getAttribute(PROPERTIES_ATTR));
	      } catch (Error) {
	        props = {};
	      }
	
	      _this.components.push(new Component(el, props));
	    });
	
	    return instance;
	  }
	
	  _createClass(Application, [{
	    key: 'scan',
	    value: function scan() {
	      var el = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];
	
	      return Array.from(el.querySelectorAll('[' + COMPONENT_ATTR + ']'));
	    }
	  }]);
	
	  return Application;
	})();
	
	exports['default'] = Application;
	
	document.addEventListener('DOMContentLoaded', function () {
	  var app = new Application();
	});
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _constantsIndex = __webpack_require__(5);
	
	var SELECTORS = {
	  BLANK: '.blank',
	  INPUT: '.guess-form__input',
	  LETTERS: '.game-block',
	  PARTS: '.hangman__man-part',
	  RESET: '.reset-button',
	  SUBMIT: '.guess-form__submit'
	};
	
	var GuessForm = (function (_Component) {
	  _inherits(GuessForm, _Component);
	
	  function GuessForm(el, props) {
	    _classCallCheck(this, GuessForm);
	
	    _get(Object.getPrototypeOf(GuessForm.prototype), 'constructor', this).call(this, el, props);
	    this.answers = {};
	    this.input = this.el.querySelector(SELECTORS.INPUT);
	    this.submit = this.el.querySelector(SELECTORS.SUBMIT);
	    this.parts = document.querySelectorAll(SELECTORS.PARTS);
	    this.resetButton = document.querySelector(SELECTORS.RESET);
	    this.init();
	  }
	
	  /**
	   * Initializes Guessfrom component
	   */
	
	  _createClass(GuessForm, [{
	    key: 'init',
	    value: function init() {
	      this.binds();
	    }
	
	    /**
	     * Sets up initial binds
	     */
	  }, {
	    key: 'binds',
	    value: function binds() {
	      var _this = this;
	
	      this.pubsub.subscribe(_constantsIndex.EVENTS.SECRET_SET, function (e) {
	        _this.setUpGame();
	      });
	      this.pubsub.subscribe(_constantsIndex.EVENTS.BOARD_READY, function (e) {
	        _this.gameboard = document.querySelectorAll(SELECTORS.LETTERS);
	        _this.blanks = document.querySelectorAll(SELECTORS.BLANK);
	        _this.answerLength = _this.gameboard.length - _this.blanks.length;
	        _this.reset();
	      });
	      this.pubsub.subscribe(_constantsIndex.EVENTS.RESET, function (e) {
	        _this.reset();
	      });
	      this.el.addEventListener(_constantsIndex.EVENTS.SUBMIT, function (e) {
	        return _this.submitHandler(e);
	      });
	      this.resetButton.addEventListener(_constantsIndex.EVENTS.CLICK, function (e) {
	        _this.pubsub.publish(_constantsIndex.EVENTS.RESET);
	      });
	    }
	
	    /**
	     * Handles form submit
	     * @param  {Object} e Event Object
	     */
	  }, {
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      e.preventDefault();
	      var isNotEmpty = _get(Object.getPrototypeOf(GuessForm.prototype), 'checkInput', this).call(this, this.input);
	
	      if (isNotEmpty) {
	        this.checkLetter();
	        this.refocusInput();
	      } else {
	        _get(Object.getPrototypeOf(GuessForm.prototype), 'toggleErrorState', this).call(this, this.input, true);
	      }
	    }
	
	    /**
	     * Sends focus back to input after submit
	     */
	  }, {
	    key: 'refocusInput',
	    value: function refocusInput() {
	      this.input.value = '';
	      this.input.focus();
	    }
	
	    /**
	     * Sets some vars needed for tracking guesses
	     */
	  }, {
	    key: 'setUpGame',
	    value: function setUpGame() {
	      this.answer = _get(Object.getPrototypeOf(GuessForm.prototype), 'getStorage', this).call(this).split('');
	      this.guesses = [];
	    }
	
	    /**
	     * Checks if letter is in answer
	     */
	  }, {
	    key: 'checkLetter',
	    value: function checkLetter() {
	      var guess = this.input.value;
	
	      if (this.addToGuesses(guess)) {
	        var ind = this.checkArray(guess);
	
	        if (ind.length > 0) {
	          this.showLetters(ind);
	        } else {
	          this.showHangman();
	          this.answers.incorrect += 1;
	        }
	      }
	      _get(Object.getPrototypeOf(GuessForm.prototype), 'toggleErrorState', this).call(this, this.input, false);
	      this.checkAnswer();
	    }
	
	    /**
	     * Shows hangman parts
	     */
	  }, {
	    key: 'showHangman',
	    value: function showHangman() {
	      this.parts[this.answers.incorrect].classList.add(_constantsIndex.STRINGS.ACTIVE);
	    }
	
	    /**
	     * Checks Answer to see if you have won or lost
	     */
	  }, {
	    key: 'checkAnswer',
	    value: function checkAnswer() {
	      if (this.answers.correct === this.answerLength) {
	        // TODO: would listen for animation end but I timeboxed this so
	        // I didn't get to it
	        setTimeout(function () {
	          alert('you win');
	        }, 1000);
	        this.showReset();
	      } else if (this.answers.incorrect === 6) {
	        // TODO: would listen for animation end but I timeboxed this so
	        // I didn't get to it
	        setTimeout(function () {
	          alert('you lose');
	        }, 1000);
	        this.showReset();
	      }
	    }
	
	    /**
	     * Shows Letters that you have guessed
	     * @param  {Array} ind Array if indexes where letter appears
	     */
	  }, {
	    key: 'showLetters',
	    value: function showLetters(ind) {
	      for (var i = 0; i < ind.length; i++) {
	        this.gameboard[ind[i]].classList.add(_constantsIndex.STRINGS.ACTIVE);
	        this.answers.correct += 1;
	      }
	    }
	
	    /**
	     * Adds letters to already guessed array
	     * @param {String} guess the letter guessed
	     */
	  }, {
	    key: 'addToGuesses',
	    value: function addToGuesses(guess) {
	      if (this.guesses.indexOf(guess) !== -1) {
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
	  }, {
	    key: 'checkArray',
	    value: function checkArray(guess) {
	      var ind = [];
	      for (var i = 0; i < this.answer.length; i++) {
	        if (this.answer[i] === guess) {
	          ind.push(i);
	        }
	      }
	      return ind;
	    }
	
	    /**
	     * Shows reset button
	     */
	  }, {
	    key: 'showReset',
	    value: function showReset() {
	      this.resetButton.classList.add(_constantsIndex.STRINGS.ACTIVE);
	    }
	
	    /**
	     * Resets Component
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.resetButton.classList.remove(_constantsIndex.STRINGS.ACTIVE);
	      this.answers.incorrect = 0;
	      this.answers.correct = 0;
	      this.guesses = [];
	    }
	  }]);
	
	  return GuessForm;
	})(_Component3['default']);
	
	exports['default'] = GuessForm;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsPubSub = __webpack_require__(4);
	
	var _utilsPubSub2 = _interopRequireDefault(_utilsPubSub);
	
	var _constantsIndex = __webpack_require__(5);
	
	var Component = (function () {
	  function Component(el, props) {
	    _classCallCheck(this, Component);
	
	    this.el = el;
	    this.props = props;
	    this.pubsub = new _utilsPubSub2['default']();
	  }
	
	  /**
	   * Checks if input is empty
	   * @param  {Object} input reference to dom
	   * @return {Boolean} is input empty
	   */
	
	  _createClass(Component, [{
	    key: 'checkInput',
	    value: function checkInput(input) {
	      var valHasLength = input.value.replace(/\s+/g, '').length > 0 ? true : false;
	      return valHasLength;
	    }
	
	    /**
	     * Checks local storage for item
	     * @return {Boolean} Tells you if word is set
	     */
	  }, {
	    key: 'checkStorage',
	    value: function checkStorage() {
	      var storageWord = localStorage.getItem(_constantsIndex.STRINGS.SECRETWORD) === null ? true : false;
	      return storageWord;
	    }
	
	    /**
	     * Gets value from local storage
	     * @return {string} Returns secret word
	     */
	  }, {
	    key: 'getStorage',
	    value: function getStorage() {
	      return localStorage.getItem(_constantsIndex.STRINGS.SECRETWORD);
	    }
	
	    /**
	     * Toggles error state on inputs
	     * @param  {Object} input Dom element for input
	     * @param  {Boolean} error If error is true or false
	     */
	  }, {
	    key: 'toggleErrorState',
	    value: function toggleErrorState(input, error) {
	      error ? input.classList.add(_constantsIndex.STRINGS.ERROR) : input.classList.remove(_constantsIndex.STRINGS.ERROR);
	    }
	  }]);
	
	  return Component;
	})();
	
	exports['default'] = Component;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var instance = null;
	
	var PubSub = (function () {
	  function PubSub() {
	    _classCallCheck(this, PubSub);
	
	    if (!instance) {
	      instance = this;
	    }
	
	    this.handlers = [];
	
	    return instance;
	  }
	
	  _createClass(PubSub, [{
	    key: 'subscribe',
	    value: function subscribe(event, handler, context) {
	      if (typeof context === 'undefined') {
	        context = handler;
	      }
	
	      this.handlers.push({ event: event, handler: handler.bind(context) });
	    }
	  }, {
	    key: 'publish',
	    value: function publish(event) {
	      for (var i = 0; i < this.handlers.length; i++) {
	        if (this.handlers[i].event === event) {
	          this.handlers[i].handler.call();
	        }
	      }
	    }
	  }]);
	
	  return PubSub;
	})();
	
	exports['default'] = PubSub;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var EVENTS = {
	  BOARD_READY: 'boardReady',
	  CLICK: 'click',
	  RESET: 'reset',
	  SECRET_SET: 'secretSet',
	  SUBMIT: 'submit'
	};
	
	var STRINGS = {
	  ACTIVE: '_active',
	  ERROR: '_error',
	  INACTIVE: '_inactive',
	  SECRET_WORD: 'secretWord'
	};
	
	exports['default'] = { EVENTS: EVENTS, STRINGS: STRINGS };
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _constantsIndex = __webpack_require__(5);
	
	var SELECTORS = {
	  BOARD: '.hangman__board'
	};
	
	var Hangman = (function (_Component) {
	  _inherits(Hangman, _Component);
	
	  function Hangman(el, props) {
	    _classCallCheck(this, Hangman);
	
	    _get(Object.getPrototypeOf(Hangman.prototype), 'constructor', this).call(this, el, props);
	
	    this.board = this.el.querySelector(SELECTORS.BOARD);
	    this.init();
	  }
	
	  /**
	   * Initializes Hangman Component
	   */
	
	  _createClass(Hangman, [{
	    key: 'init',
	    value: function init() {
	      this.binds();
	    }
	
	    /**
	     * Sets up initial binds
	     */
	  }, {
	    key: 'binds',
	    value: function binds() {
	      var _this = this;
	
	      this.pubsub.subscribe(_constantsIndex.EVENTS.SECRET_SET, function (e) {
	        _this.setupBoard();
	      });
	      this.pubsub.subscribe(_constantsIndex.EVENTS.RESET, function (e) {
	        _this.reset();
	      });
	    }
	
	    /**
	     * Sets up tasks for gameboard
	     */
	  }, {
	    key: 'setupBoard',
	    value: function setupBoard() {
	      var word = localStorage.getItem(_constantsIndex.STRINGS.SECRETWORD);
	
	      this.answer = word.split('');
	      this.createDom();
	      this.pubsub.publish(_constantsIndex.EVENTS.BOARD_READY);
	    }
	
	    /**
	     * Creates Dom for letters
	     */
	  }, {
	    key: 'createDom',
	    value: function createDom() {
	      var newDom = '';
	      for (var i = 0; i < this.answer.length; i++) {
	        if (this.answer[i] === ' ') {
	          newDom += '<div class="blank game-block"></div>';
	        } else {
	          newDom += '<div class="letter-wrapper"><p class="letter game-block">' + this.answer[i] + '</p></div>';
	        }
	      }
	
	      this.board.innerHTML = newDom;
	    }
	
	    /**
	     * Resets this component
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.board.innerHTML = '';
	    }
	  }]);
	
	  return Hangman;
	})(_Component3['default']);
	
	exports['default'] = Hangman;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _constantsIndex = __webpack_require__(5);
	
	var SELECTORS = {
	  GAME: '.hangman-wrapper',
	  INPUT: '.secret-word-form__input',
	  SUBMIT: '.secret-word-form__submit'
	};
	
	var SecretWordForm = (function (_Component) {
	  _inherits(SecretWordForm, _Component);
	
	  function SecretWordForm(el, props) {
	    _classCallCheck(this, SecretWordForm);
	
	    _get(Object.getPrototypeOf(SecretWordForm.prototype), 'constructor', this).call(this, el, props);
	
	    this.input = this.el.querySelector(SELECTORS.INPUT);
	    this.submit = this.el.querySelector(SELECTORS.SUBMIT);
	    this.game = document.querySelector(SELECTORS.GAME);
	
	    this.init();
	  }
	
	  /**
	   * Initializes Secret Word form
	   */
	
	  _createClass(SecretWordForm, [{
	    key: 'init',
	    value: function init() {
	      this.binds();
	    }
	
	    /**
	     * Sets up binds for this component
	     */
	  }, {
	    key: 'binds',
	    value: function binds() {
	      var _this = this;
	
	      this.el.addEventListener(_constantsIndex.EVENTS.SUBMIT, function (e) {
	        return _this.submitHandler(e);
	      });
	      this.pubsub.subscribe(_constantsIndex.EVENTS.RESET, function (e) {
	        _this.reset();
	      });
	    }
	
	    /**
	     * Handles form submit
	     * @param  {Object} e Event object.
	     */
	  }, {
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      e.preventDefault();
	      var isNotEmpty = _get(Object.getPrototypeOf(SecretWordForm.prototype), 'checkInput', this).call(this, this.input);
	
	      if (isNotEmpty) {
	        this.setSecretWord();
	        this.changeView();
	        this.pubsub.publish(_constantsIndex.EVENTS.SECRET_SET);
	      } else {
	        _get(Object.getPrototypeOf(SecretWordForm.prototype), 'toggleErrorState', this).call(this, this.input, true);
	      }
	    }
	
	    /**
	     * Hide ans show states of app
	     */
	  }, {
	    key: 'changeView',
	    value: function changeView() {
	      this.el.classList.add(_constantsIndex.STRINGS.INACTIVE);
	      this.game.classList.add(_constantsIndex.STRINGS.ACTIVE);
	    }
	
	    /**
	     * Sets the secret work into local storage
	     */
	  }, {
	    key: 'setSecretWord',
	    value: function setSecretWord() {
	      var val = this.input.value;
	      localStorage.setItem(_constantsIndex.STRINGS.SECRETWORD, val);
	      _get(Object.getPrototypeOf(SecretWordForm.prototype), 'toggleErrorState', this).call(this, this.input, false);
	    }
	
	    /**
	     * Resets component
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.el.classList.remove(_constantsIndex.STRINGS.INACTIVE);
	      this.game.classList.remove(_constantsIndex.STRINGS.ACTIVE);
	    }
	  }]);
	
	  return SecretWordForm;
	})(_Component3['default']);
	
	exports['default'] = SecretWordForm;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map