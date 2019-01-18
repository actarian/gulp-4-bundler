/* jshint esversion: 6 */
/* global window, document, Swiper, TweenMax, TimelineMax */

import Dom from './shared/dom';

export default class App {

    constructor() {}

    init() {
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        Dom.detect(body);
        body.classList.add('ready');
    }

}

var app = new App();

window.onload = () => {
    app.init();
};