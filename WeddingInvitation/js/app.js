$(document).ready(function () {
    $(window).scroll(function () {
        showScroll();
    });
    countDown();
});

function showScroll() {
    var scrollVal = $(this).scrollTop();

    firstStoryAnimation(scrollVal);
    secondStoryAnimation(scrollVal);
    thirdStoryAnimation(scrollVal);
}

function firstStoryAnimation(scrollVal) {
    var first_story_height_distance = $('.story:nth-child(1) *').offset().top - 600;
    if (scrollVal >= first_story_height_distance) {
        $('.first-story-lower-photo-fade-out').removeClass('first-story-lower-photo-fade-out');
        $('.first-story-top-photo-fade-out').removeClass('first-story-top-photo-fade-out');
        $('.first-story-content-fade-out').removeClass('first-story-content-fade-out');
    }
}

function secondStoryAnimation(scrollVal) {
    var second_story_height_distance = $('.story:nth-child(2) *').offset().top - 600;
    if (scrollVal >= second_story_height_distance) {
        $('.second-story-lower-photo-fade-out').removeClass('second-story-lower-photo-fade-out');
        $('.second-story-top-photo-fade-out').removeClass('second-story-top-photo-fade-out');
        $('.second-story-content-fade-out').removeClass('second-story-content-fade-out');
    }
}

function thirdStoryAnimation(scrollVal) {
    var third_story_height_distance = $('.third-story-photo-left').offset().top - 600;
    if (scrollVal >= third_story_height_distance) {
        $('.third-story-photo-left-fade-out').removeClass('third-story-photo-left-fade-out');
        $('.third-story-photo-center-fade-out').removeClass('third-story-photo-center-fade-out');
        $('.third-story-photo-right-fade-out').removeClass('third-story-photo-right-fade-out');
    }
}

function fadein() {
    //first
    $('.first-story-lower-photo-fade-out').removeClass('first-story-lower-photo-fade-out');
    $('.first-story-top-photo-fade-out').removeClass('first-story-top-photo-fade-out');
    $('.first-story-content-fade-out').removeClass('first-story-content-fade-out');

    //second
    $('.second-story-lower-photo-fade-out').removeClass('second-story-lower-photo-fade-out');
    $('.second-story-top-photo-fade-out').removeClass('second-story-top-photo-fade-out');
    $('.second-story-content-fade-out').removeClass('second-story-content-fade-out');

    //third
    $('.third-story-photo-left-fade-out').removeClass('third-story-photo-left-fade-out');
    $('.third-story-photo-center-fade-out').removeClass('third-story-photo-center-fade-out');
    $('.third-story-photo-right-fade-out').removeClass('third-story-photo-right-fade-out');

    //fourth
    $('.fourth-story-content-fade-out').removeClass('fourth-story-content-fade-out');
}

function fadeout() {
    //first
    $('.first-story-lower-layer-photo').addClass('first-story-lower-photo-fade-out');
    $('.first-story-top-layer-photo').addClass('first-story-top-photo-fade-out');
    $('.first-story-content').addClass('first-story-content-fade-out');

    //second
    $('.second-story-lower-layer-photo').addClass('second-story-lower-photo-fade-out');
    $('.second-story-top-layer-photo').addClass('second-story-top-photo-fade-out');
    $('.second-story-content').addClass('second-story-content-fade-out');

    //third
    $('.third-story-photo-left').addClass('third-story-photo-left-fade-out');
    $('.third-story-photo-center').addClass('third-story-photo-center-fade-out');
    $('.third-story-photo-right').addClass('third-story-photo-right-fade-out');

    //fourth
    $('.fourth-story-content').addClass('fourth-story-content-fade-out');
}

function getWeddingDateTime() {
    return new Date(2020, 9, 18, 12, 0, 0, 0);
}

function countDown() {
    setInterval(function () {
        setCountDownTimer();
    }, 1000)
}

function setCountDownTimer() {
    setLastDay();
    setLastHour();
    setLastMinute();
    setLastSecond();
}

function setLastDay() {
    var offsetTime = getOffsetTime();
    var day = parseInt(((offsetTime / 60) / 60) / 24); // 天
    $('#countdown-day').html(day);

}

function setLastHour() {
    var offsetTime = getOffsetTime();
    var hr = parseInt((offsetTime / 60 / 60) % 24); // 時
    $('#countdown-hour').html(hr);
}

function setLastMinute() {
    var offsetTime = getOffsetTime();
    var min = parseInt((offsetTime / 60) % 60); // 分
    $('#countdown-min').html(min);
}

function setLastSecond() {
    var offsetTime = getOffsetTime();
    var sec = parseInt(offsetTime % 60); // 秒
    $('#countdown-sec').html(sec);
}

function getOffsetTime() {
    var Now = new Date();
    var WeddingDateTime = getWeddingDateTime();
    // ** 以秒為單位
    return (WeddingDateTime - Now) / 1000;
}
