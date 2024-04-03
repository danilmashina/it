// var arrLang = {
//     'en': {
//         'services': 'services',
//         'courses': 'courses',
//     },
//     'ru': {
//         'services': 'Услуги тестирования ПО',
//         'courses': 'Курсы тестировщиков',
//     }
// }

// $(function () {
//     $('.translate').click(function () {
//         var lang = $(this).attr('id');

//         $('.lang').each(function (index, item) {
//             $(this).text(arrLang[lang][$(this).attr('key')]);
//         });
//     });
// });
// $('.en').click(function (event2) {
//     $('.en').addClass('invisible');
//     $('.ru').removeClass('invisible');
//     $('.ru').addClass('vis');
// });


// $('.ru').click(function (event1) {
//     $('.ru').addClass('invisible');
//     $('.en').removeClass('invisible');
//     $('.en').addClass('vis');

// });


// burger..........................................................................................................................


$('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').addClass('active');
    $('main').addClass('main__lock');
    $('footer').addClass('main__lock');
    $('.header__logo').addClass('logo__lock');
    $('body').addClass('body__lock');
});

$('.header__kros').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('main').removeClass('main__lock');
    $('footer').removeClass('main__lock');
    $('.header__logo').removeClass('logo__lock');
    $('body').removeClass('body__lock');
});
$('.page, .footer').click(function (event) {
    $('.header__burger, .header__menu').removeClass('active');
    $('main').removeClass('main__lock');
    $('footer').removeClass('main__lock');
    $('.header__logo').removeClass('logo__lock');
    $('body').removeClass('body__lock');
});


// ..............................................................................................


// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 2;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('_active');
//             }
//             else {
//                 if (!animItem.classList.contains('_anim-no-hide')) {
//                     animItem.classList.remove('_active');
//                 }
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }

//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }

////...................................................................................


$('.js-scroll-top').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
});

$('.footer__l_to').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
});


// ..........................................................................

$('.slider__items').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: true,
        waitForAnimate: false,

        appendArrows: '.comments__arrows',
    }
);

// .................................................

var height = $('.title').height();
var footer__height = $('.footer').height();
var page__height = $('.page').height();
var window__height = $(window).height();
console.log(window__height);
window__height = page__height - window__height;
console.log(window__height);
$(window).scroll(function () {
    var Changescroll = $(window).scrollTop();
    if (Changescroll >= height) {
        $(".header").addClass("header-scroll");
    } else {
        $(".header").removeClass("header-scroll");
    }
    // if (Changescroll >= 1.3 * height && Changescroll <= window__height ) {
    //     $('.js-scroll-top').addClass('is-show');
    //
    // } else {
    //     $('.js-scroll-top').removeClass('is-show');
    // }
    var scrollElem = $('.js-scroll-top');

    $(this).scrollTop() ? scrollElem.addClass('is-show') : scrollElem.removeClass('is-show');
});

// ...........................................................................

// var touchHover = function() {
//     $('[data-hover]').click(function(e){
//         e.preventDefault();
//         var $this = $(this);
//         var onHover = $this.attr('data-hover');
//         var linkHref = $this.attr('href');
//         if (linkHref && $this.hasClass(onHover)) {
//             location.href = linkHref;
//             return false;
//         }
//         $this.toggleClass(onHover);
//     });
// };

// $(document).ready(function() { touchHover(); });


$('.course__tab').click(function () {
    if (!$(this).hasClass('active__tab')) {
        $(this).siblings().removeClass('active__tab');
        $(this).addClass('active__tab');
        var tabId = $(this).attr('data-tab-id');
    }
    tabId = (tabId).substring(1);
    tabId = '.'.concat(tabId);
    $('.course__block').removeClass('active__block').removeClass('in');
    $(tabId).addClass('active__block');
});


// .........................title__button..........................


$(".title__button").click(function () {
    if ($(this).hasClass('title__button_1')) {
        var destination = jQuery(".main-info").offset().top;
        var height_header = $('.header1').height();
        destination = destination - height_header * 3;
        jQuery('html, body').animate({scrollTop: destination}, 800);
    } else {
        $('html, body').animate({
            scrollTop: $(".page__application").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    }
});


// .....................................................................


$('.types__item, .ventajas__item').click(function () {
    if (!$(this).hasClass('flip')) {
        $(".types__item, .ventajas__item").removeClass('flip');
        $(this).addClass('flip');
    } else {
        $(this).removeClass('flip');
    }
});

$('.types__item, .ventajas__item, .stage__item').click(function () {
    !$(this).children().removeClass("pulsate");
});

// ...................................................................

$('.tab').click(function () {
    if (!$(this).hasClass('open')) {
        $(".tab").removeClass('open');
        $(this).addClass('open');
    } else {
        $(this).removeClass('open');
    }
});

// ...........................................................................

$(window).ready(function () {
    var windowWidth = $('body').innerWidth();
    if (windowWidth < 769) {
        $(".how__item2, .how__item4").addClass("animate__fadeInRight animate__animated");
        $(".how__item1, .how__item3").addClass('animate__fadeInLeft animate__animated');
    } else {
        $(".how__item2, .how__item4").addClass("animate__fadeInUp animate__animated");
        $(".how__item1, .how__item3").addClass('animate__fadeInDown animate__animated');
    }
});

// ........................................................

$('.course-phone__tab, .for__item').click(function () {
    if (!$(this).hasClass('open')) {
        $(".course-phone__tab, .for__item").removeClass('open');
        $(this).addClass('open');
    } else {
        $(this).removeClass('open');
    }
});

// $(document).ready(function () {
//     $('ul.header__list a').each(function () {
//         console.log(this.href);
//         console.log(location.href);
//         if (this.href == location.href) $(this).parent().addClass('active');
//     });
// });

function showPopup(url, title, w, h) {
    w = w || screen.height;
    h = h || screen.height;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}