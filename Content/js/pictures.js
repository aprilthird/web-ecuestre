'use strict';
let Pictures = (function loadPictures() {
    function calculateAspectRatioFit( srcWidth, 
        srcHeight, 
        maxWidth, 
        maxHeight ) {
        let ratio = Math.max(maxWidth / srcWidth, maxHeight / srcHeight );
        return { 
            width: Math.floor(srcWidth*ratio), 
            height: Math.floor(srcHeight*ratio) 
        };
    }

    class loader { 
        constructor(userSettings) {
            let _ = this;
            _.def = {
                figures: $('figure'),
                mediaClass: '.media',
                force: true,
            }
            $extendObj(_.def, userSettings);
        }
        init() {
            let _ = this;
            let options = { once: true },
                active = false;

            function resize(media, wrapper) {
                let ratio = calculateAspectRatioFit (
                    media.offsetWidth, 
                    media.offsetHeight,
                    wrapper.offsetWidth, 
                    wrapper.offsetHeight);
                wrapper.style .setProperty('--w', ratio.width + "px");
                wrapper.style .setProperty('--h', ratio.height + "px");
            }

            function resizeAllMedias() {
                if(active) {
                    window.removeEventListener('resize', resize);
                    active = false;
                }
                _.def.figures.forEach(function(wrapper) {
                    let media = $1(_.def.mediaClass, wrapper); 
                    if(media.complete) {
                        resize(media, wrapper);
                    } else {
                        media.addEventListener('load', function() {
                            resize(media, wrapper);
                        }, options);
                    }
                });
                window.addEventListener('resize', resizeAllMedias);
                active = true;
            }
            resizeAllMedias();
            return _;
        };
    }

    return loader;
})();
