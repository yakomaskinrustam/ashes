(function ($) {
    "use strict";
    if ($(window).width() > 1025) {

        if ($('.cursor-drag').length > 0) {
            var $ball = $("#ball");
            var $ballWidth = 2.125; // Ball default width
            var $ballHeight = 2.125; // Ball default height
            var $ballOpacity = 0.5; // Ball default opacity
            $(".cursor-drag[data-simulate-touch=true]").on("mouseenter", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                    duration: 0.3,
                    width: 3.75 + "em",
                    height: 3.75 + "em",
                    opacity: 1
                });
            }).on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                    duration: 0.3,
                    width: $ballWidth + "em",
                    height: $ballHeight + "em",
                    opacity: $ballOpacity
                });
            });

            // Ignore "data-cursor" on hover.
            $(".cursor-drag[data-simulate-touch=true]").find("[data-cursor]").on("mouseleave", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                    duration: 0.3,
                    width: 3.75 + "em",
                    height: 3.75 + "em",
                    opacity: 1
                });
            });

            $(".cursor-drag[data-simulate-touch=true]").find(".no-drag-ball").on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                    duration: 0.3,
                    width: $ballWidth + "em",
                    height: $ballHeight + "em",
                    opacity: 1
                });
                return false;
            }).on("mouseleave", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                    duration: 0.3,
                    width: 3.75 + "em",
                    height: 3.75 + "em",
                    opacity: 1
                });
            });
        }

    }
}(jQuery));