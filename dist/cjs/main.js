"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = (function () {
    function Main() {
        this.init();
    }
    Main.prototype.init = function () {
        var mainContainerNode = document.querySelector('main .container');
        var messageNode = document.createElement('div');
        messageNode.innerHTML = "<p>\n\t\t\tI'm a typescript module! <a class=\"btn--link\" href=\"https://www.typescriptlang.org/\" target=\"_blank\">Typescript</a>\n\t\t</p>";
        mainContainerNode.appendChild(messageNode);
    };
    return Main;
}());
exports.default = Main;
var main = new Main();
