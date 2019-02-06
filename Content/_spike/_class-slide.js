'use strict';
// select all matches, context is optional
function $(selector, context) {
  return (context || document).querySelectorAll(selector);
}
// select the first match only, context is optional
function $1(selector, context) {
  return (context || document).querySelector(selector);
}
function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) 
    : new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}
function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className .replace(new RegExp('(^|\\b)' 
        + className.split(' ').join('    |') + '(\\b|$)', 'gi'), ' ');
  }
}
function $extend(_def, addons) {
  if (typeof addons !== "undefined") {
    for (var prop in _def) {
      if (addons[prop] != undefined) {
        _def[prop] = addons[prop];
      }
    }
  }
}

var slider_plugin = (function() {
  class slider {
    constructor(userSettings) {
      let _ = this;
      _.set = {
        target: $1('.slider'),
        dotsWrapper: $1('.dots-wrapper'),
        arrowLeft: $1('.arrow-left'),
        arrowRight: $1('.arrow-right'),
        transition: {
          speed: 300,
          easing: ''
        },
        swipe: true,
        autoHeight: true,
        afterChangeSlide: function afterChangeSlide() {}
      }
      $extend(_.set, userSettings);
    }
    init() {
      let _ = this;
      function on_resize(callback, time) {
        onresize = function() {
          clearTimeout(time);
          time = setTimeout(callback, 100);
        }
        return onresize;
      }
      function loadedImg(el) {
        let loaded = false;
        function loadHandler() {
          if(loaded) {
            return;
          }
          loaded = true;
          _.loadedCount++;
          if(_.loadedCount >= _.totalSlides + 2) {
            _.updateSliderDimension();
          }
        }
        var img = el.querySelector('img');
        if(img) {
          img.onload = loadHandler;
          img.src = img.getAttribute('data-src');
          img.style.display = 'block';
          if (img.complete) {
            loadHandler();
          }
        } else {
          _.updateSliderDimension();
        }
      }
      window.addEventListener("resize", on_resize(function() {
        _.updateSliderDimension();
      }), false);
      // wrap slider-inner
      let wrapper = document.createElement('div');
      addClass(wrapper, 'slider-inner');
      _.set.target.parentNode.insertBefore(wrapper, _.set.target);
      wrapper.appendChild(_.set.target);
      _.allSlides = 0;
      _.curSlide = 0;
      _.curLeft = 0;
      _.totalSlides = _.set.target.querySelectorAll('.slide').length;
      _.sliderInner = wrapper;
      _.loadedCount = 0;
      // append clones
      let cloneFirst = _.set.target
        .querySelectorAll('.slide')[0].cloneNode(true);
      _.sliderInner.appendChild(cloneFirst);
      let cloneLast = _.set.target
        .querySelectorAll('.slide')[_.totalSlides -1].cloneNode(true);
      _.sliderInner.insertBefore(cloneLast, _.sliderInner.firstChild);
      _.curSlide++;
      _.allSlides = _.set.target.querySelectorAll('.slide');
      _.sliderInner.style.width = (_.totalSlides + 2) * 100 + "%";
      for(var i = 0; i < _.totalSlides + 2;  i++) {
        _.allSlides[i].style.width = 100 / (_.totalSlides + 2) + "%";
        loadedImg(_.allSlides[i]);
      }
      function addListenerMulti(el, str, fn) {
        str.split(' ').forEach(function(e) {
          return el.addEventListener(e, fn, false);
        });
      }
      function removeListenerMulti(el, str, fn) {
        str.split(' ').forEach(function(e) {
          return el.removeEventListener(e, fn, false);
        });
      }
    }
    buildDots
    updateSliderDimension() {
      let _ = this;
      _.slideW = parseInt($('slide', _.set.target)[0].offsetWidth);
      _.sliderInner.style.left = -_.slideW * _.curSlide + "px";
      if(_.set.autoHeight) {
        _.set.target.style.height = _.allSlides[_.curSlide].offsetHeight + "px";
      } else {
        for(let i = 0; i < _.totalSlides + 2; i++) {
          if(_.allSlides[i].offsetHeight > _.set.target.offsetHeight) {
            _.set.target.style.height = _.allSlides[i].offsetHeight + "px";
          }
        }
      }
      _.set.afterChangeSlide(_);
    }

  }
  return slider;
})();
