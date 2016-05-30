$.fn.imPopup = function() {
    var $this, id;
    $this = this;
    id = '';
    $this.on('click', function(e) {
        e.preventDefault();
        id = $(this).data('id');
        if ($(id).length) {
            $('body').css({
                overflow: 'hidden',
                paddingRight: (window.innerWidth - $(window).width()) + ($('body').outerWidth() - $('body').width()) / 2
            });
        };
        return $(".im-popups " + id).addClass('_visible');
    });
    $('.im-popup .b-popup__close').click(function(e) {
        return e.preventDefault();
    });
    return $('.im-popup').on('click', function(e) {
        if (!$(e.target).hasClass('im-popup-inside') && !$(e.target).parents('.im-popup-inside').length || $(e.target).hasClass('b-popup__close')) {
            $('body').css({
                overflow: '',
                paddingRight: ''
            });
            return $(".im-popups " + id).removeClass('_visible');
        }
    });
};
$('.im-popup-link').imPopup();

$('.b-select').each(function(index, el) {
    $(this).imSbox();
});

if (window.innerWidth > 768 && $('.b-washing__img').length > 5 || window.innerWidth > 768 && $('.b-washing__img').length > 3) {
    $('.b-washing__carousel').addClass('owl-carousel').owlCarousel({
        items: 3,
        nav: true,
        navText: ['', ''],
        margin: 10,
        loop: true,
        responsive: {
            768: {
                items: 5,
                margin: 22
            }
        }
    });
}

(function() {
    var closeBox = function(linkClass, boxClass) {
        var box = $('.' + boxClass);
        var link = $('.' + linkClass);
        link.click(function() {
            box.toggleClass(boxClass + '_visible');
        });
        $('.b-popup__close, .b-btn', box).click(function() {
            box.removeClass(boxClass + '_visible');
        });
        $('body').on('click', function(e) {
            if (!$(e.target).hasClass(boxClass) && !$(e.target).parents('.' + boxClass).length && !$(e.target).hasClass(linkClass)) {
                box.removeClass(boxClass + '_visible');
            }
        });
    };
    closeBox('b-more-serv', 'b-more-box');
    closeBox('b-sel-region__link', 'b-sel-region-wrap');
    $('.b-sel-region-box__item').click(function(e) {
        e.preventDefault();
        var wrap = $(this).parents('.b-sel-region-wrap');
        var text = $(this).text();
        var right = $(this).parents('.b-sel-region-box__right');
        $('.b-popup__bottom-text span', wrap).text(text);
        $('.b-sel-region-box__item', right).not($(this)).removeClass('b-sel-region-box__item_active');
        $(this).addClass('b-sel-region-box__item_active');
    });
})();

$('.-phone').mask("+375 (99)-999-99-99");
