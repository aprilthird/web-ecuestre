(function() {
  function changeDisplayProperty(name, num)    {
    const maxOffset = 5;
    let id =  num;
    console.log('Trigger by Component Id:' + id);
    if(id && id < maxOffset) {
      id = name + num;
      document.getElementById(id).style.display = 'block';
      console.log('property display changed to block: ' + id);
      for(let i = maxOffset - 1; i > 0 ; i--) {
        if(i !== num ) {
          id = name + i;
          document.getElementById(id).style.display = 'none';
          console.log('property display changed to none: ' + id);
        }
      }
    } else {
      console.log('greather than 5');
    }
  };

  function showInfo(html){
    const maxOffset = 5;
    let id = html.getAttribute('id');
    id = id ? id[id.length -1] : null;
    id = id ? parseInt(id, maxOffset) : null;
    changeDisplayProperty('info', id);
    let el = document.querySelector( ':focus' );
    if( el ) el.blur();
  };

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  window.cookieconsent.initialise({
    container: document.getElementById("content"),
    palette: {
      popup: { background: "#fff" },
      button: { background: "#aa0000" },
    },
    revokable: true,
    onStatusChange: function (status) {
      console.log(this.hasConsented() ?
        'enable cookies' : 'disable cookies');
    },
    layouts: {
      'basic': '{{messagelink}}{{allow}}&emsp;{{dismiss}}',
      'basic-close': '{{messagelink}}{{compliance}}{{close}}',
      'basic-header': '{{header}}{{message}}{{link}}{{compliance}}',
    },
    palette: {
      popup: { background: '#000000', text: '#fff', link: '#fff' },
      button: { background: 'transparent', border: '#f8e71c', text: '#f8e71c' },
      highlight: { background: '#f8e71c', border: '#f8e71c', text: '#000000' },
    },
    law: {
      regionalLaw: false,
    },
    location: true,
    content: {
      header: 'Cookies used on the website!',
      message: '<b>Utilizamos cookies en este sitio para mejorar su experiencia de usuario</b><br/>Para obten    er más información sobre nuestro uso de <i>cookies</i>, por favor vea nuestra <i>Política de privacidad</i><b    r/>Al hacer clic en cualquier enlace de esta página, está dando su consentimiento para que configuremos cooki    es',
      dismiss: 'No Acepto',
      allow: 'Acepto',
      deny: 'Decline',
      link: '',
      href: 'http://cookiesandyou.com',
      close: 'x',
      policy: 'Cookie Policy',
      target: '_blank',

      elements: {
        header: '<span class="cc-header">{{header}}</span>&nbsp;',
        message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
        messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more     about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span>',
        dismiss: '<a aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</    a>',
        allow: '<a aria-label="allow cookies" tabindex="0" class="cc-btn cc-allow">{{allow}}</a>',
        deny: '<a aria-label="deny cookies" tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
        link: '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="    _blank">{{link}}</a>',
        close: '<span class="btn btn-outline btn-white" aria-label="dismiss cookie message" tabindex="0">{{cl    ose}}</span>',
      }
    }
  });



  var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c     in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length;     l > e; e++)o.call(r, t[e], e, t) };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }

})();
