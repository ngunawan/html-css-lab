var numOfSections = 4;

$('input').on("change keyup paste", function () {
    var iconButton = $(this).next().children('.icon-btn');

    if ($(this).val()) {
        iconButton.addClass('next');
    } else {
        iconButton.removeClass('next');
    }
});

$('.next-btn').click(function () {
    var thisInputSection = $(this).parent().parent();
    var nextInputSection = thisInputSection.next();

    thisInputSection.addClass("fold-up");
    nextInputSection.removeClass("folded");

   
    if(document.getElementsByClassName("fold-up").length == numOfSections) {
        $('.success-section').css({'transform': 'translateY(0)'});
    }
    
});
