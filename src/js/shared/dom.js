/* jshint esversion: 6 */

import Utils from './utils';

export default class Dom {

	static detect(node) {
		const userAgent = navigator.userAgent.toLowerCase();
		const explorer = userAgent.indexOf('msie') > -1;
		const firefox = userAgent.indexOf('firefox') > -1;
		const opera = userAgent.toLowerCase().indexOf('op') > -1;
		let chrome = userAgent.indexOf('chrome') > -1;
		let safari = userAgent.indexOf('safari') > -1;
		if ((chrome) && (safari)) {
			safari = false;
		}
		if ((chrome) && (opera)) {
			chrome = false;
		}

		const android = userAgent.match(/android/i);
		const blackberry = userAgent.match(/blackberry/i);
		const ios = userAgent.match(/iphone|ipad|ipod/i);
		const operamini = userAgent.match(/opera mini/i);
		const iemobile = userAgent.match(/iemobile/i) || navigator.userAgent.match(/wpdesktop/i);
		const mobile = android || blackberry || ios || operamini || iemobile;

		const overscroll = navigator.platform === 'MacIntel' && typeof navigator.getBattery === 'function';
		const classList = {
			chrome,
			explorer,
			firefox,
			safari,
			opera,
			android,
			blackberry,
			ios,
			operamini,
			iemobile,
			mobile,
			overscroll,
		};
		Object.assign(Dom, classList);
		Object.keys(classList).forEach(x => {
			if (classList[x]) {
				node.classList.add(x);
			}
		});
		const onTouchStart = () => {
			document.removeEventListener('touchstart', onTouchStart);
			Dom.touch = true;
			node.classList.add('touch');
		};
		document.addEventListener('touchstart', onTouchStart);
		const onMouseDown = () => {
			document.removeEventListener('mousedown', onMouseDown);
			Dom.mouse = true;
			node.classList.add('mouse');
		};
		document.addEventListener('mousedown', onMouseDown);
		const onScroll = () => {
			let now = Utils.now();
			if (Dom.lastScrollTime) {
				const diff = now - Dom.lastScrollTime;
				if (diff < 5) {
					document.removeEventListener('scroll', onScroll);
					Dom.fastscroll = true;
					node.classList.add('fastscroll');
					console.log('scroll', diff);
				}
			}
			Dom.lastScrollTime = now;
		};
		document.addEventListener('scroll', onScroll);
	}

	static fragmentFirstElement(fragment) {
		return Array.prototype.slice.call(fragment.children).find((x) => x.nodeType === Node.ELEMENT_NODE);
	}

	static fragmentFromHTML(html) {
		return document.createRange().createContextualFragment(html);
	}

	static scrollTop() {
		return document && document.defaultView ? document.defaultView.pageYOffset : 0;
	}

}
