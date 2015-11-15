$(document).ready(function() {
    var target = new Date("2016-04-02T14:00:00").getTime();
    function countdown() {
        var milliseconds = target - $.now();
        $('#countdown').text(Math.round(milliseconds / 1209.6));
    };

    window.setInterval(countdown, 1209.6);
});
