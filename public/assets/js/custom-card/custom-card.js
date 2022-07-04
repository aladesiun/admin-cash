var customcard = {
    init: function () {
        $(".card-header-right .close-card").on('click', function () {
            var $this = $(this);
            $this.parents('.card').animate({
                'opacity': '0',
                '-webkit-transform': 'scale3d(.3, .3, .3)',
                'transform': 'scale3d(.3, .3, .3)'
            });
            setTimeout(function () {
                $this.parents('.card').remove();
            }, 800);
        }), $(".card-header-right .reload-card").on('click', function () {
            var $this = $(this);
            $this.parents('.card').addClass("card-load");
            $this.parents('.card').append('<div className="loader-box card-loader"><div className="loader card-load"><div className="whirly-loader"></div></div></div>');
            setTimeout(function () {
                $this.parents('.card').children(".card-loader").remove();
                $this.parents('.card').removeClass("card-load");
            }, 3000);
        }), $(".card-header-right .card-option .icofont-simple-left").on('click', function () {
            var $this = $(this);
            if ($this.hasClass('icofont-simple-right')) {
                $this.parents('.card-option').animate({
                    'width': '35px',
                });
            } else {
                $this.parents('.card-option').animate({
                    'width': '230px',
                });
            }
            $(this).toggleClass("icofont-simple-right").fadeIn('slow');
        }), $(".card-header-right .minimize-card").on('click', function () {
            var $this = $(this);
            var port = $($this.parents('.card'));
            var card = $(port).children('.card-body').slideToggle();
            $(this).toggleClass("icofont-plus").fadeIn('slow');
        }), $(".card-header-right .full-card").on('click', function () {
            var $this = $(this);
            var port = $($this.parents('.card'));
            port.toggleClass("full-card");
            $(this).toggleClass("icofont-resize");
        }), $(".view-html").on('click', function () {
            var html_source = $(this).parents(".card");
            var html_chield = html_source.find(".card-body");
            html_chield.toggleClass("show-source");
            $(this).toggleClass("fa-eye");
        }), $(document).ready(function () {
            var clipboard = new ClipboardJS('.btn-clipboard');
            clipboard.on('success', function (e) {
                e.querySelector();
                e.clearSelection();
            });
            clipboard.on('error', function (e) {});
        });
        $(".rtl .card-header-left .close-card").on('click', function () {
            var $this = $(this);
            $this.parents('.card').animate({
                'opacity': '0',
                '-webkit-transform': 'scale3d(.3, .3, .3)',
                'transform': 'scale3d(.3, .3, .3)'
            });
            setTimeout(function () {
                $this.parents('.card').remove();
            }, 800);
        }), $(".rtl .card-header-right .card-option .icofont-simple-right").on('click', function () {
            var $this = $(this);
            if ($this.hasClass('icofont-simple-left')) {
                $this.parents('.card-option').animate({
                    'width': '35px',
                });
            } else {
                $this.parents('.card-option').animate({
                    'width': '230px',
                });
            }
            $(this).toggleClass("icofont-simple-left").fadeIn('slow');
        });


    }
};

(function ($) {
    "use strict";
    customcard.init()
})(jQuery);