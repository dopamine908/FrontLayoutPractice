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
        console.log('fade in first  story');
        // $('.story:nth-child(1) *').addClass('fade-in');
        $('.first-story-lower-photo-fade-out').removeClass('first-story-lower-photo-fade-out');
        $('.first-story-top-photo-fade-out').removeClass('first-story-top-photo-fade-out');
        $('.first-story-content-fade-out').removeClass('first-story-content-fade-out');
    }
    var second_story_height_distance = $('.story:nth-child(2) *').offset().top - 600;
    if (scrollVal >= second_story_height_distance) {
        // $('.story:nth-child(2) *').addClass('fade-in');
    }
    var third_story_height_distance = $('.story:nth-child(3) *').offset().top - 600;

    if (scrollVal >= third_story_height_distance) {
        // $('.story:nth-child(3) *').addClass('fade-in');
    }
    var fourth_story_height_distance = $('.story:nth-child(4) *').offset().top - 600;

    if (scrollVal >= fourth_story_height_distance) {
        // $('.story:nth-child(4) *').addClass('fade-in');
    }
}

function fadein() {
    $('.first-story-lower-photo-fade-out').removeClass('first-story-lower-photo-fade-out');
    $('.first-story-top-photo-fade-out').removeClass('first-story-top-photo-fade-out');
    $('.first-story-content-fade-out').removeClass('first-story-content-fade-out');
}

function fadeout() {
    $('.first-story-lower-layer-photo').addClass('first-story-lower-photo-fade-out');
    $('.first-story-top-layer-photo').addClass('first-story-top-photo-fade-out');
    $('.first-story-content').addClass('first-story-content-fade-out');
}
