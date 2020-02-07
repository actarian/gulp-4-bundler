import { Component, getContext } from 'rxcomp';

export default class AppComponent extends Component {

	onInit() {
		const { node } = getContext(this);
		node.classList.remove('hidden');

		const containerNode = node.querySelector('.container');

		const messageNode = document.createElement('div');
		messageNode.innerHTML = /* html */ `<p>
			I'm a rxcomp module! <a class="btn--link" href="https://github.com/actarian/rxcomp" target="_blank">RxComp</a>
		</p>`;
		containerNode.appendChild(messageNode);
	}

	// onView() { const context = getContext(this); }

	// onChanges() {}

	// onDestroy() {}
}

AppComponent.meta = {
	selector: '[app-component]',
};
