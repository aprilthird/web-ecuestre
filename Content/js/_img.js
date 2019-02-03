function $(el) {
  return document.querySelector(el);
}
function find(el) {
  return document.querySelectorAll(el);
}
(function() {
  find('.frame').forEach(function(frame) {
    let img  = frame.querySelector('img'); 
    let rule = (img.width/img.height) > 1 
      ? 'img-wide'
      : 'img-tall';
   img.classList.add(rule);
  })
})();

