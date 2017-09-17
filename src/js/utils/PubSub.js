let instance = null;

export default class PubSub {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.handlers = [];

    return instance;
  }

  subscribe(event, handler, context) {
    if (typeof context === 'undefined') {
      context = handler;
    }
    
    this.handlers.push({event: event, handler: handler.bind(context)});
  }

  publish(event) {
    for (let i = 0; i < this.handlers.length; i++) {
      if (this.handlers[i].event === event) {
        this.handlers[i].handler.call();
      }
    }
  }
}