(function() {
    function execute() {
        let pictures = new Pictures({
            figures: $('.picture'),
            mediaClass: '.picture_media'
        }).init(); 
    }

    let options = { once:true };
    document.addEventListener('DOMContentLoaded', execute, options);
})();
