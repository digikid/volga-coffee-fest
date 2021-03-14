// DOM manipulations

// wrap table
// $('.wysiwyg table').wrap('<div class="table-wrapper"><div class="table-inner"></div></div>');

// forms
// $.fn.initFormListeners();

if (window._DETECT.mobile || window._DETECT.ios) {
    $('body').addClass('is-mobile');
};

// lazy loading
$('.js-lazy').initLazyLoading();

// swiper
$('.js-swiper').initSwiper({
    spaceBetween: 0,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1320: {
            slidesPerView: 3
        }
    }
});

// fancybox
$('a[href^="#modal"], .js-modal').fancybox();

$(document).on('click', '.js-close', function(e) {
    e.preventDefault();
    $.fancybox.close();
});

// tooltips
// $('[data-tooltip]').each(function() {
//     var text = $(this).attr('data-tooltip') || $(this).attr('aria-label');
//     new tippy(this, {
//         content: text,
//         theme: 'light'
//     });
// });

// scrollbar
// $('[data-scrollable]').each(function(i, item) {
//     new SimpleBar(item, {
//         timeout: 500
//     });
// });

// yandex map
$('.js-map').renderMap({
    data: [{
        id: 1,
        coords: [53.216427, 50.146376]
    }],
    zoom: 16,
    markers: {
        image: {
            path: window._MARKERS_PATH,
            size: [70, 70],
            offset: [-35, -70],
        }
    },
    onRendered: function(map) {
        map.map.controls.add('zoomControl', {
            size: 'small',
            position: {
                right: '15px',
                bottom: '35px'
            }
        });
    }
});

// rellax
const rellax = new Rellax('[data-rellax-speed]');

$(window).on({
    resize: function() {

    },
    scroll: function() {

    }
}).trigger('resize');

// page preloader
$('body').preloader();
