let SwiperEffect = (function() {
    class swiper {
        constructor(userSettings) {
            let _ = this;
            _.def = {
            }
            $extendObj(_.def, userSettings);
        }
        init() {
            let _ = this,
                x0 = 0;
            function unify(e) { 
                return e.changedTouches ? e.changedTouches[0] : e 
            };
            function lock(e) {
                x0 = unify(e).clientX          
            };

            function move(e) {
                if(x0 || x0 === 0) {
                    let dx = unify(e).clientX - x0, s = Math.sign(dx);

                    if((i > 0 || s < 0) && (i < N - 1 || s > 0))
                        _C.style.setProperty('--i', i -= s);

                    x0 = null
                }
            };

            _C.addEventListener('mousedown', lock, false);
            _C.addEventListener('touchstart', lock, false);

            _C.addEventListener('mouseup', move, false);
            _C.addEventListener('touchend', move, false);
        }
    }
    return swiper;
})();
