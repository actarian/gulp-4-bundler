/**
 * @license gulp-4-bundler v0.1.1
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.main = factory());
}(this, (function () { 'use strict';

	var Main =
	/*#__PURE__*/
	function () {
	  function Main() {
	    this.init();
	  }

	  var _proto = Main.prototype;

	  _proto.init = function init() {
	    var body = document.querySelector('body');
	    body.classList.add('ready');
	    var mainContainerNode = document.querySelector('main .container');
	    var messageNode = document.createElement('div');
	    messageNode.innerHTML =
	    /* html */
	    "<p>\n\t\t\tI'm an ES6 module! <a class=\"btn--link\" href=\"https://developer.mozilla.org/it/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla\" target=\"_blank\">ES6</a>\n\t\t</p>";
	    mainContainerNode.appendChild(messageNode);
	  };

	  return Main;
	}();
	var main = new Main();

	return Main;

})));
