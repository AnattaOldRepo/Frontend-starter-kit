/*global window*/
// Execute function on window resize using javaScript
(function () {
    'use strict';
    var resizeEvt, winWidth, winHeight;
    window.addEventListener('resize', function () {
        clearTimeout(resizeEvt);
        resizeEvt = setTimeout(function () {
            winWidth = this.innerWidth;
            winHeight = this.winHeight;

            //write you code based on width or height
            if (winWidth < 460) {
                console.log('your screen resized to ' + winWidth);
            }
        }, 250);
    });
}());
