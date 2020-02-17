export default class Main {
    constructor() {
        this.init();
    }
    init() {
        const mainContainerNode = document.querySelector('main .container');
        const messageNode = document.createElement('div');
        messageNode.innerHTML = `<p>
			I'm a typescript module! <a class="btn--link" href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
		</p>`;
        mainContainerNode.appendChild(messageNode);
    }
}
const main = new Main();
