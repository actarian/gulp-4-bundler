System.register("main", [], function (exports_1, context_1) {
    "use strict";
    var Main, main;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Main = /** @class */ (function () {
                function Main() {
                    this.init();
                }
                Main.prototype.init = function () {
                    var mainContainerNode = document.querySelector('main .container');
                    var messageNode = document.createElement('div');
                    messageNode.innerHTML = /* html */ "<p>\n\t\t\tI'm a typescript module! <a class=\"btn--link\" href=\"https://www.typescriptlang.org/\" target=\"_blank\">Typescript</a>\n\t\t</p>";
                    mainContainerNode.appendChild(messageNode);
                };
                return Main;
            }());
            exports_1("default", Main);
            main = new Main();
        }
    };
});
//# sourceMappingURL=main.js.map