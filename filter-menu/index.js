$(function () {
    $('.toggle-btn').click(function () {
        $('.filter-btn').toggleClass('open');
        $(this).toggleClass('ion-android-close');
        $(this).toggleClass('ion-android-menu');
    });

    $('.filter-btn a').click(function () {
        $('.filter-btn').removeClass('open');
    });

});
