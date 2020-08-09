$(document).ready(function () {
    setBabyAge();
});

var seconds_per_minute = 60;
var minutes_per_hour = 60;
var hours_per_day = 24;
var days_per_month = 30

function setBabyAge() {
    setMonth();
    setDay();
}

function setMonth() {
    var offsetTime = getOffsetTime();
    var month = parseInt((((offsetTime / seconds_per_minute) / minutes_per_hour) / hours_per_day) / days_per_month);
    $('#count-month').html(month);

}

function setDay() {
    var offsetTime = getOffsetTime();
    var day = parseInt((((offsetTime / seconds_per_minute) / minutes_per_hour) / hours_per_day) % days_per_month);
    $('#count-day').html(day);

}

function getBabyBirthdayDateTime() {
    //2020.2.19生日，20開始才算是第一天
    return new Date(2020, 1, 20, 0, 0, 0, 0);
}

function getOffsetTime() {
    var Now = new Date();
    var WeddingDateTime = getBabyBirthdayDateTime();
    // ** 以秒為單位
    return (Now - WeddingDateTime) / 1000;
}
