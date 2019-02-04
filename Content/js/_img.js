function $(el) {
  return document.querySelector(el);
}
function find(el) {
  return document.querySelectorAll(el);
}
(function() {
  find('.frame').forEach(function(frame) {
    let media  = frame.querySelector('img');
    media = !media 
      ? frame.querySelector('video') 
      : media;
    if(media) {
      let rule = (media.width/media.height) > 1 
        ? 'frame__wide'
        : 'frame__tall';
      media.classList.add(rule);
    }
  });
})();

