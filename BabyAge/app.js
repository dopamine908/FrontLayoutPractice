$(document).ready(function () {
    setBabyAge();
});


function setBabyAge() {
    setMonth();
    setDay();
}

function setMonth() {
    var offsetTime = getOffsetTime();
    var month = parseInt((((offsetTime / 60) / 60) / 24) / 30);
    $('#count-month').html(month);

}

function setDay() {
    var offsetTime = getOffsetTime();
    var day = parseInt((((offsetTime / 60) / 60) / 24) % 30);
    $('#count-day').html(day);

}

function getBabyBirthdayDateTime() {
    //2020.2.19生日，20開始才算是第一天
    return new Date(2020, 1, 20, 12, 0, 0, 0);
}

function getOffsetTime() {
    var Now = new Date();
    var WeddingDateTime = getBabyBirthdayDateTime();
    // ** 以秒為單位
    return (Now - WeddingDateTime) / 1000;
}
