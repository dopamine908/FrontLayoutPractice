$(document).ready(function () {
    $(window).scroll(function () {
        showScroll();
    });
});

function showScroll() {
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal);
    var first_story_height_distance = $('.story:nth-child(1) *').offset().top - 600;
    if (scrollVal >= first_story_height_distance) {
        $('.story:nth-child(1) *').addClass('fade-in');
    }
    var second_story_height_distance = $('.story:nth-child(2) *').offset().top - 600;
    if (scrollVal >= second_story_height_distance) {
        $('.story:nth-child(2) *').addClass('fade-in');
    }
    var third_story_height_distance = $('.story:nth-child(3) *').offset().top - 600;

    if (scrollVal >= third_story_height_distance) {
        $('.story:nth-child(3) *').addClass('fade-in');
    }
    var fourth_story_height_distance = $('.story:nth-child(4) *').offset().top - 600;

    if (scrollVal >= fourth_story_height_distance) {
        $('.story:nth-child(4) *').addClass('fade-in');
    }
}
