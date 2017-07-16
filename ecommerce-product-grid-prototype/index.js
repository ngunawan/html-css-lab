// owlCarousel slider --------------------

$('.slider').owlCarousel({
    addClassActive: true,
    singleItem: true,
    navigation: true,
    navigationText: ['<button class="btn btn--primary btn--circle"><span class="fa fa-chevron-left"></span></button>', '<button class="btn btn--primary btn--circle"><span class="fa fa-chevron-right"></span></button>']
});

// duplicate listing ---------------------------

var list = $('ul.list'),
    listing = $('li.list__item'),
    numToDuplicate = 5;

for (let i = 0; i < numToDuplicate; i++) {
    listing.clone().appendTo(list);
}

// open item preview ----------------------

var buyBtn = $('.item').find('.btn'),
    overlayBg = $('.overlay-bg'),
    overlayContent = $('.overlay-wrap');

overlayBg.hide();
overlayContent.hide();

buyBtn.on('click', function (e) {
    e.preventDefault();
    overlayBg.show().addClass('active');
    overlayContent.show().addClass('active');
})

