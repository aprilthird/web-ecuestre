'use strict';
function $(selector, context) {
  return (context || document).querySelectorAll(selector);
}
function $1(selector, context) {
  return (context || document).querySelector(selector);
}
(function(slider, caption) {
  let inputs  = $('input', $1(slider));
  let caps    = $('.slider3d-caption__text',$1(caption));
  if (inputs.length < 1 || caps.length < 1)
    return;

  let id;
  for(let i = 0; i < inputs.length; i++) {
    id = caps[i].id;
    if(!id) 
      return;
     
    inputs[i].setAttribute('data-tooltip',`#${id}`);
  }
  $1('.slider3d-caption .is-active').style.display = "block";
  inputs.forEach(function(input) {
    input.addEventListener('change', function() {
      $1('.slider3d-caption .is-active').style.display = "none";
      $1('.slider3d-caption .is-active').classList.remove("is-active");
      $1(this.dataset.tooltip).classList.add('is-active');
      $1(this.dataset.tooltip).style.display = "block";
    });
  });

})('#slider','.slider3d-caption');
