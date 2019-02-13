let SwiperPlugin = (function() {

    class swiper {

        constructor(addons) {
            let _ = this;
            _.def = {
                container: document.querySelector('main'),
                dragable: document.querySelector('div'),
                options: {
                    abscissa: true,
                    ordinate: true,
                    limitless: false
                },
                variables: {
                    className: 'translate',
                    currentX: '--ix',
                    currentY: '--ix',
                    translateX: '--tx',
                    translateY: '--ty',
                }
            }
        }

        init() {
            let _ = this;
            let locked = false,
                currentX = null, 
                currentY = null,
                x0 = null, 
                y0 = null, 
                tx = 0, 
                ty = 0;

            function unify(e) { 
                return e.changedTouches ? e.changedTouches[0] : e 
            };

            function lock(e) {
                let aux = unify(e);
                x0 = aux.clientX;
                y0 = aux.clientX;
                _.def.dragable.classList.toggle(_.def.variables.className, (locked = true));
            };

            function drag(e) {
                e.preventDefault();
                if(locked) {
                    if(_.def.options.abscissa) {
                        tx = Math.round((unify(e).clientX - x0));
                        _.def.dragable.style.setProperty(_.def.variables.translateX, `${tx}px`);
                    }
                    if(_.def.options.ordinate) {
                        ty = Math.round((unify(e).clientY - y0));
                        _.def.dragable.style.setProperty(_.def.variables.translateY, `${ty}px`);
                    }
                }
            };

            function move(e) {
                if(locked) {
                    currentX += tx;
                    currentY += ty;
                    if(!_.def.options.limitless) {

                    }
                    if(_.def.options.abscissa) {
                        _.def.dragable.style.setProperty(_.def.variables.currentX, `${currentX}px`);
                        _.def.dragable.style.setProperty(_.def.variables.translateX, "0px");
                    }
                    if(_.def.options.ordinate) {
                        _.def.dragable.style.setProperty(_.def.variables.currentY, `${currentY}px`);
                        _.def.dragable.style.setProperty(_.def.variables.translateY, "0px");
                    }
                    _.def.dragable.classList.toggle(_.def.variables.className, !(locked = false));
                    x0 = null;
                    tx = null;
                }
            }

            _.def.container.addEventListener("mousedown", lock, false);
            _.def.container.addEventListener("touchstart", lock, false);

            _.def.container.addEventListener("mouseup", move, false);
            _.def.container.addEventListener("touchend", move, false);

            _.def.container.addEventListener("mousemove", drag, false);
            _.def.container.addEventListener("touchmove", drag, false);
            return _;
        }
    } 
    return swiper;
})();
