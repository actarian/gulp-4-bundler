/**
 * @license gulp-4-bundler v0.1.1
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('rxcomp'), require('rxcomp-form')) :
  typeof define === 'function' && define.amd ? define('main', ['rxcomp', 'rxcomp-form'], factory) :
  (global = global || self, factory(global.rxcomp, global['rxcomp-form']));
}(this, (function (rxcomp, rxcompForm) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var AppComponent =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(AppComponent, _Component);

    function AppComponent() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = AppComponent.prototype;

    _proto.onInit = function onInit() {
      var _getContext = rxcomp.getContext(this),
          node = _getContext.node;

      node.classList.remove('hidden');
      var containerNode = node.querySelector('.container');
      var messageNode = document.createElement('div');
      messageNode.innerHTML =
      /* html */
      "<p>\n\t\t\tI'm a rxcomp module! <a class=\"btn--link\" href=\"https://github.com/actarian/rxcomp\" target=\"_blank\">RxComp</a>\n\t\t</p>";
      containerNode.appendChild(messageNode);
    } // onView() { const context = getContext(this); }
    // onChanges() {}
    // onDestroy() {}
    ;

    return AppComponent;
  }(rxcomp.Component);
  AppComponent.meta = {
    selector: '[app-component]'
  };

  var AppModule =
  /*#__PURE__*/
  function (_Module) {
    _inheritsLoose(AppModule, _Module);

    function AppModule() {
      return _Module.apply(this, arguments) || this;
    }

    return AppModule;
  }(rxcomp.Module);
  AppModule.meta = {
    imports: [rxcomp.CoreModule, rxcompForm.FormModule],
    declarations: [],
    bootstrap: AppComponent
  };

  rxcomp.Browser.bootstrap(AppModule);

})));
