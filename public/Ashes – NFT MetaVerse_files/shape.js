(function ($) {
    "use strict";
    $(document).ready(function () {
        /* For shape shortcode */
        if ($('.nicol-shape').length > 0) {
            $('.nicol-shape').each(function () {
                var scene = $(this).find('.parallax-shape');
                var style = $(this).find('.box-parent').data('style');
                if (style == 'style-one') {
                    parellexEffect(scene[0]);
                }
            });
        }
        /* For title box */
        if ($('.nicol-title-box').length > 0) {
            $('.nicol-title-box').each(function () {
                var scene = $('.nicol-title-box').find('.box-parent');
                var parellex = $(this).find('.box-parent').data('parellex');
                if (parellex == 'yes') {
                    parellexEffect(scene[0]);
                }
            });
        }
        /* For Button  */
        if ($('.nicol-button-container').length > 0) {
            $('.nicol-button-container').each(function () {
                var scene = $(this).find('.box-parent');
                var parellex = $(this).find('.box-parent').data('parellex');
                if (parellex == 'yes') {
                    parellexEffect(scene[0]);
                }
            });
        }

    });
})(jQuery);

function parellexEffect(scene) {
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: true
    });
}