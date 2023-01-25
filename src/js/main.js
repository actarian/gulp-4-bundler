export default class Main {

  constructor() {
    this.init();
  }

  init() {
    const body = document.querySelector('body');
    body.classList.add('ready');

    const mainContainerNode = document.querySelector('main .container');

    const messageNode = document.createElement('div');
    messageNode.innerHTML = /* html */ `<p>
			I'm an ES6 module! <a class="btn--link" href="https://developer.mozilla.org/it/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla" target="_blank">ES6</a>
		</p>`;
    mainContainerNode.appendChild(messageNode);
  }

}

const main = new Main();
