$(document).ready(
    function () {
        $('.show-menu').on('click', function (e) {
            e.preventDefault();
            $('.nav ul').toggleClass('nav-show')
        })
    }
);