(function() {
    function findNavbarElements() {
        let base = $1('.navigation'),
            anchors = $('a', base),
            elements = {
                root: base,
                anchors: [],
                items: []
        };
        anchors.forEach(function(anchor) {
            if(anchor.nextElementSibling != null) {
                elements.anchors.push(anchor);
                elements.items.push(anchor.nextElementSibling);
            }
        });
        return elements;
    }

    function execute() {
        let anchorObj = $1('.navIcon-right'),
            nav = new LinkMenu({
            itemParent: $1('nav'),
            anchorParent: anchorObj, 
            itemChildren: $('nav'),
            anchorChildren: $('.navIcon_wrapper', anchorObj),
            activeClass: 'isActive',
            options: {
                childrenSubmited: true,
                singleToggled: false,
                isValidated: true
            }
        });

        let elements = findNavbarElements(),
            navbarDropdowns = new LinkMenu({
                itemParent: elements.root,
                anchorParent: elements.root, 
                itemChildren: elements.items,
                anchorChildren: elements.anchors,
                activeClass: 'isActive',
                options: {
                    childrenSubmited: true,
                    singleToggled: false,
                    isValidated: true
                }
            });
    }

    let options = { once: true };
    document.addEventListener('DOMContentLoaded', execute, options);
})();
