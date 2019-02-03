function show(e) {
  function changeDisplayProperty(name, num) {
    const maxOffset = 5;
    let id = num;
    console.log('Trigger by Component Id:' + id);
    if (id && id < maxOffset) {
      id = name + num;
      document.getElementById(id).style.display = 'grid';
      console.log('property display changed to block: ' + id);
      for (let i = maxOffset - 1; i > 0; i--) {
        if (i !== num) {
          id = name + i;
          document.getElementById(id).style.display = 'none';
          console.log('property display changed to none: ' + id);
        }
      }
    }
    else {
      console.log('greather than 5');
    }
  };
  const maxOffset = 5;
  let id = e.getAttribute('id');
  id = id ? id[id.length - 1] : null;
  id = id ? parseInt(id, maxOffset) : null;
  changeDisplayProperty('info', id);
};

function showElementByAttribute(e) {
  let el = e.currentTarget;
  let id = el.classList[1];
  let ranks = document.querySelector('.rankings');
  ranks.querySelectorAll('.active')
    .forEach((slides) =>{
      slides.classList.remove('active');
  });
  ranks = ranks.querySelectorAll('.' + id);
  if(ranks) {
    ranks.forEach((slides) => {
      slides.classList.add('active');
    });
  }
}

(function(){
  var slide3d = slide3d('js-3d-init');
  function slide3d(className) {
    var slider = document.getElementsByClassName(className);
    if (slider.length > 0) {
      slider[0].checked = true;
      var input = show(slider[0]);
    }
  }

  let menu = document.querySelector('.js-rankings');
  if(menu) {
    menu.querySelectorAll('a').forEach(function(tag){
      tag.addEventListener('click', 
        showElementByAttribute, false); 
    });
  }



})();
