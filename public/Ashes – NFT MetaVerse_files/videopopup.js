/*----------------
Video Popup
---------------------*/
(function ($) {
    "use strict";
    $(document).ready(function () {
        callVideoPopup();
    });
})(jQuery);
function callVideoPopup() {
    if (jQuery('.popup-youtube').length > 0) {
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
}
