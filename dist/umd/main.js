/**
 * @license gulp-4-bundler v1.0.0
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.main = factory());
}(this, (function () { 'use strict';

	var Main = /*#__PURE__*/function () {
	  function Main() {
	    this.init();
	  }

	  var _proto = Main.prototype;

	  _proto.init = function init() {
	    var mainContainerNode = document.querySelector('main .container');
	    var messageNode = document.createElement('div');
	    messageNode.innerHTML =
	    /* html */
	    "<p>\n\t\t\tI'm a typescript module! <a class=\"btn--link\" href=\"https://www.typescriptlang.org/\" target=\"_blank\">Typescript</a>\n\t\t</p>";
	    mainContainerNode.appendChild(messageNode);
	  };

	  return Main;
	}();
	var main = new Main();

	return Main;

})));
