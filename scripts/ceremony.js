(function ($) {
    // konami code - up up down down left right left right b a
    var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var position = 0;
    $(document).keyup(function (e) {
        if (code[position] == e.which) {
            position++;
            if (position >= code.length) {
                $("body").ceremony();
                position = 0;
            }
        } else {
            position = 0;
        }
    });
})(jQuery);

(function ($) {
    $.fn.ceremony = function (options) {
        var url = "images/ceremony.png";

        return this.each(function () {

            var _this = $(this);

            $("#ceremony").remove();
            //Raptor Vars
            var markup = '<img id="ceremony" style="display: none;z-index:30000" src="' + url + '" />';
            var locked = false;

            //Append Raptor and Style
            var ceremony = $(markup);
            $('body').append(ceremony);
            ceremony.css({
                "position": "fixed",
                "bottom": "-310px",
                "right": "0",
                "display": "block"
            })

            init();

            function init() {
                var image = new Image();
                image.onload = function () { initAfterImageLoad() };
                image.src = url;
            }

            // Animating Code
            function initAfterImageLoad() {
                locked = true;

                // Movement Hilarity
                ceremony.animate({
                    "bottom": "0"
                }, function () {

                    $(this).animate({
                        "bottom": "-20px"
                    }, 100, function () {
                        var offset = (($(this).position().left) + 400);
                        $(this).delay(300).animate({
                            "right": offset
                        }, 2200, function () {
                            ceremony.remove();
                            locked = false;
                        })
                    });
                });
            }
        }); //each call
    } //orbit plugin call
})(jQuery);
