/**
 * @license gulp-4-bundler v1.0.0
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

var main = (function () {
	'use strict';

	var Main = function () {
	  function Main() {
	    this.init();
	  }

	  var _proto = Main.prototype;

	  _proto.init = function init() {
	    var mainContainerNode = document.querySelector('main .container');
	    var messageNode = document.createElement('div');
	    messageNode.innerHTML = "<p>\n\t\t\tI'm a typescript module! <a class=\"btn--link\" href=\"https://www.typescriptlang.org/\" target=\"_blank\">Typescript</a>\n\t\t</p>";
	    mainContainerNode.appendChild(messageNode);
	  };

	  return Main;
	}();
	var main = new Main();

	return Main;

}());
