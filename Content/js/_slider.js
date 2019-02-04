function $(root, el) {
  if(!root)
    return [];
  return root.querySelector(el);
}
function find(root, el) {
  if(!root)
    return [];
  return root.querySelectorAll(el); 
}

(function(slider, caption) {
  let inputs = find($(document, slider), 'input');
  let caps = find($(document, caption), '.slider3d-caption__text');
  if (inputs.length < 1 || caps.length < 1)
    return;
  
  let id;
  for(let i = 0; i < inputs.length; i++) {
    id = caps[i].id;
    if(!id) 
      return;
     
    inputs[i].setAttribute('data-tooltip',`#${id}`);
  }
  inputs.forEach(function(input) {
    input.addEventListener('change', function() {
      let cap = $(document, '.slider3d-caption .is-active');
      if(cap) {
        cap.classList.toggle('is-active');
      }
      $(document, this.dataset.tooltip).classList.add('is-active');
    });
  });

})('#slider','.slider3d-caption');
