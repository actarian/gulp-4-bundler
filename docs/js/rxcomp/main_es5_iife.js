/**
 * @license gulp-4-bundler v1.0.0
 * (c) 2023 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(rxcomp,rxcompForm){'use strict';function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}var AppComponent = function (_Component) {
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
    messageNode.innerHTML = "<p>\n\t\t\tI'm a rxcomp module! <a class=\"btn--link\" href=\"https://github.com/actarian/rxcomp\" target=\"_blank\">RxComp</a>\n\t\t</p>";
    containerNode.appendChild(messageNode);
  };
  return AppComponent;
}(rxcomp.Component);
AppComponent.meta = {
  selector: '[app-component]'
};var AppModule = function (_Module) {
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
};rxcomp.Browser.bootstrap(AppModule);})(rxcomp,rxcomp.form);