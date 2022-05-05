(function ($) {
    "use strict";
    $(window).ready(function () {
        PortBoxHover();
        if ($('.widget-portfolio-load-btn').length > 0) {
            $('.widget-portfolio-load-btn').click(function () {
                let button = $(this),
                    buttonTxt = button.text(),
                    buttonLoadingTxt = button.data('loading'),
                    blogPerPage = button.closest('.portfolio-widget').find('.widget-data .portfolio-per-page').val(),
                    blogPerLoad = button.closest('.portfolio-widget').find('.widget-data .portfolio-per-load').val(),
                    totalPublishPost = button.closest('.portfolio-widget').find('.widget-data .total-publish-post').val(),
                    currentPage = button.closest('.portfolio-widget').find('.widget-data .current-page').val(),
                    increment = button.closest('.portfolio-widget').find('.widget-data .incremnt-value').val(),
                    ajaxURL = button.closest('.portfolio-widget').find('.widget-data .ajax-url').val(),
                    data = {
                        'action': 'iqonic_portfolio_action',
                        'page': currentPage, //iqonic_loadmore_params.current_page,
                        'col': button.closest('.portfolio-widget').find('.widget-data .portfolio-col').val(),
                        'settings': button.closest('.portfolio-widget').find('.widget-data .portfolio-settigs').val(),
                        'blog_per_page': blogPerPage,
                        'increment': increment,
                    };

                $.ajax({
                    url: ajaxURL, //iqonic_loadmore_params.ajaxurl, // AJAX handler
                    data: data,
                    type: 'POST',
                    beforeSend: function (xhr) {
                        button.find('.btn__text').text(buttonLoadingTxt); // change the button text, you can also add a preloader image
                    },
                    success: function (data) {
                        if (data) {
                            button.closest('.portfolio-widget').find('.load-with-ajax').append(data);
                            PortBoxHover();
                            cursorView();
                            Page_AjaxLoad();
                            button.closest('.portfolio-widget').find('.current-page').val(parseInt(currentPage) + 1);
                            button.find('.btn__text').html(buttonTxt);
                            button.closest('.portfolio-widget').find('.portfolio-per-page').val(parseInt(blogPerPage) + parseInt(blogPerLoad))
                            let incVal = button.closest('.portfolio-widget').find('.temp-incremnt-value');
                            button.closest('.portfolio-widget').find('.widget-data .incremnt-value').val(incVal.val());
                            incVal.remove();
                            if (button.closest('.portfolio-widget').find('.portfolio-per-page').val() >= totalPublishPost)
                                button.remove(); // if last page, remove the button
                        } else {
                            button.remove(); // if no data, remove the button as well
                        }
                    }
                });
            });
        }
        if ($('.infinite-portfolio.widget-infinite-loader').length > 0) {
            let canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
                bottomOffset = 1200;
            $(window).scroll(function () {
                let widgetParent = $('.portfolio-widget'),
                    blogPerPage = widgetParent.find('.widget-data .portfolio-per-page').val(),
                    blogPerLoad = widgetParent.find('.widget-data .portfolio-per-load').val(),
                    totalPublishPost = widgetParent.find('.widget-data .total-publish-post').val(),
                    currentPage = widgetParent.find('.widget-data .current-page').val(),
                    increment = widgetParent.find('.widget-data .incremnt-value').val(),
                    ajaxURL = widgetParent.find('.widget-data .ajax-url').val(),
                    data = {
                        'action': 'iqonic_portfolio_action',
                        'page': currentPage, //iqonic_loadmore_params.current_page,
                        'col': widgetParent.find('.widget-data .portfolio-col').val(),
                        'settings': widgetParent.find('.widget-data .portfolio-settigs').val(),
                        'blog_per_page': blogPerPage,
                        'increment': increment
                    };
                if ($(document).scrollTop() > ($(document).height() - bottomOffset) && canBeLoaded == true) {
                    $.ajax({
                        url: ajaxURL, //iqonic_loadmore_params.ajaxurl, //AJAX handler
                        data: data,
                        type: 'POST',
                        beforeSend: function (xhr) {
                            canBeLoaded = false;
                            $('.infinite-portfolio.widget-infinite-loader').slideToggle(); // change the button text, you can also add a preloader image
                        },
                        success: function (data) {
                            if (data) {
                                widgetParent.find('.load-with-ajax').append(data);
                                PortBoxHover();
                                cursorView();
                                Page_AjaxLoad();
                                canBeLoaded = true; // the ajax is completed, now we can run it again
                                widgetParent.find('.current-page').val(parseInt(currentPage) + 1);
                                widgetParent.find('.portfolio-per-page').val(parseInt(blogPerPage) + parseInt(blogPerLoad))
                                let incVal = widgetParent.find('.temp-incremnt-value');
                                widgetParent.find('.widget-data .incremnt-value').val(incVal.val());
                                incVal.remove();
                                if (widgetParent.find('.portfolio-per-page').val() >= totalPublishPost)
                                    $('.infinite-portfolio.widget-infinite-loader').remove(); // if last page, remove the button
                            } else {
                                $('.infinite-portfolio.widget-infinite-loader').remove(); // if no data, remove the button as well
                            }
                        }
                    });
                }
            });
        }
    });
})(jQuery);

function PortBoxHover() {
    var classCheck = jQuery('.box').length;
    if (classCheck > 0) {
        jQuery(function () {
            jQuery('.box').hoverDirection();
        });
    }
}