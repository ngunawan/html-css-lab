//keeps track of 'lazy' image not loaded yet
let lazy = [];

window.onload = function() {
    setLazy();
    lazyLoad();
}

window.onscroll = function() {
    lazyLoad();
}

//gets all images in DOM with 'lazy' class
function setLazy() {
    lazy = document.getElementsByClassName('lazy');
}

//iterate through lazy[] to check if they're in view
function lazyLoad() {
    for (let i = 0; i < lazy.length; i++) {
        if (isInViewport(lazy[i])) {
            if (lazy[i].getAttribute('data-src')) {
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].style.opacity = 1;
                lazy[i].removeAttribute('data-src');
            }
        }
    }

    cleanLazy();
}

//iterate through lazy[] to remove images already loaded
function cleanLazy() {
    lazy = Array.prototype.filter.call(lazy, function (l) {
        return l.getAttribute('data-src')
    })
}

//check if element is in viewport
function isInViewport(el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= window.innerHeight &&
        rect.left <= window.innerWidth
    );
}
