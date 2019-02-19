'use strict'
let LoadImage = (function() {
    class ImageLoader {
        constructor(addons) {
            let _ = this;
            _.def = {
                images: document.querySelectorAll('img'),
            };

            if (typeof addons !== "undefined") {
                for (var prop in _def) {
                    if (addons[prop] != undefined) {
                        _def[prop] = addons[prop];
                    }
                }
            }
        }
        initialize() {
            let _ = this;
            _.def.images.forEach(function(img) {
                if(img.hasAttribute("data-src")) {
                    img.src = img.getAttribute("data-src");
                    // Add the eventListener to call a callback func after
                    // setting the source
                } 
            });
            return _;
        }
    }
    return ImageLoader;
})();
