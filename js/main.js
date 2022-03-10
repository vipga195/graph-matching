(function ($) {
    'use strict';

    // ================================== Preloader ==================================


    let interval
    let i = 1;
    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();

        let doc = document.getElementsByClassName("round")[0];
        doc.addEventListener("animationend", function () {
            $(".round-number").addClass("show");
            interval = setInterval(() => {
                if (i > 70) {
                    clearInterval(interval)
                    $(".round-text").addClass("show");
                } else {
                    $(".round-number")[0].innerText = (i > 9 ? i : "0" + i)
                    i++
                }
            }, 100);
        })
        // $(".round")
        //     .animate({/*options*/ }, 7000, function () {
        //         // Callback function
        //         console.log(this)
        //     })
    })


    // ================================== Button Back Top ==================================

    $(function () {

        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-top').addClass('active');
            if (scrolled < 300) $('.back-top').removeClass('active');
        });


        $('.back-top').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
    });

    $('.n1').click(function () {
        $('html,body').animate({ scrollTop: $('#sanpham').offset().top }, 2000);
        $('.block-menu-mobile').removeClass('show-block-menu-mobile');
        $('.overlay-black').removeClass('show-overlay-black');
        return false;
    });




    $('.n2').click(function () {
        $('html,body').animate({ scrollTop: $('#target2').offset().top }, 2000);
        $('.block-menu-mobile').removeClass('show-block-menu-mobile');
        $('.overlay-black').removeClass('show-overlay-black');
        return false;
    });


    $('.n3').click(function () {
        $('html,body').animate({ scrollTop: $('#target3').offset().top }, 2000);
        $('.block-menu-mobile').removeClass('show-block-menu-mobile');
        $('.overlay-black').removeClass('show-overlay-black');
        return false;
    });


    $('.n4').click(function () {
        $('html,body').animate({ scrollTop: $('#target4').offset().top }, 2000);
        $('.block-menu-mobile').removeClass('show-block-menu-mobile');
        $('.overlay-black').removeClass('show-overlay-black');
        return false;
    });


    /*$(function(){
        console.log('tada ! ');
        // ham click 
        $('.n1').click(function(){
           $('html,body').animate({scrollTop:$('#sanpham').offset().top},2000);
           return false; 
        });
   $('.n2').click(function(){
           $('html,body').animate({scrollTop:$('#gioithieu').offset().top},2000,"easeInOutExpo");
           return false; 
        });
   
   
   $('.n3').click(function(){
           $('html,body').animate({scrollTop:$('#lienhe').offset().top},2000,"easeInOutExpo");
           return false; 
        });*/









    // ================================== Header ==================================
    // add class fixed for menu when scroll
    if ($('.header').hasClass('header')) {
        var header_height = $('header'),
            offset = header_height.offset();

        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".header").addClass('header-fixed');
            } else {
                $(".header").removeClass('header-fixed');
            }
        });
    };

    // show menu when scroll up, hide menu when scroll down
    var lastScroll = 200;
    $(window).on('scroll load', function (event) {
        var st = $(this).scrollTop();
        if (st > lastScroll && st > 300) {
            $('.header').addClass('hide-menu');

        }
        else if (st < lastScroll) {
            $('.header').removeClass('hide-menu');
        }
        if ($(window).scrollTop() == 0) {
            $('.header').removeClass('.header-fixed').removeClass('hide-menu');
        };
        lastScroll = st;

    });



    $(document).ready(function () {
        $(window).scroll(function () {
            $('.block-video-intro').css("opacity", 0.1 + $(window).scrollTop() / 450)

        })
    })


    $(document).ready(function () {
        $(window).scroll(function () {
            $('.block-icon-play').css("opacity", 1 - $(window).scrollTop() / 450)

        })
    })

    // ================================== Menu Responsive JS ==================================
    $(function () {
        $('.menu-mobile').click(function () {
            $('.block-menu-mobile').addClass('show-block-menu-mobile');
            $('.overlay-black').addClass('show-overlay-black');

            return false;
        })
        $('.close-mobile').click(function () {
            $('.block-menu-mobile').removeClass('show-block-menu-mobile');
            $('.overlay-black').removeClass('show-overlay-black');
            return false;
        })
        $('.overlay-black').click(function () {
            $('.block-menu-mobile').removeClass('show-block-menu-mobile');
            $(this).removeClass('show-overlay-black');
            return false;
        })
    })


    // ================================== Navigation Dashboard Responsive JS ==================================
    $(function () {
        $('.icon-nav-sidebar-dashboard-for-mobile').click(function () {
            $('.block-side-bar-dashboard').addClass('show-block-side-bar-dashboard');
            $('.overlay-black-for-sidebar-dashboard').addClass('show-overlay-black-for-sidebar-dashboard');

            return false;
        })
        $('.close-overlay-black-for-sidebar-dashboard').click(function () {
            $('.block-side-bar-dashboard').removeClass('show-block-side-bar-dashboard');
            $('.overlay-black-for-sidebar-dashboard').removeClass('show-overlay-black-for-sidebar-dashboard');
            return false;
        })
        $('.overlay-black-for-sidebar-dashboard').click(function () {
            $('.block-side-bar-dashboard').removeClass('show-block-side-bar-dashboard');
            $(this).removeClass('show-overlay-black-for-sidebar-dashboard');
            return false;
        })
    })



    // ================================== All Carousel Custom JS ==================================



    $(function () {
        $('#logo-top-companies').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 6
                },
                1200: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 12
                }
            }
        })
    })



    $(function () {
        $('#logo-top-companies-2').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 6
                },
                1200: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 40
                }
            }
        })
    })


    $(function () {
        $('#logo-top-companies-3').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false,
                    margin: 6
                },
                1200: {
                    items: 4,
                    nav: true,
                    loop: true,
                    margin: 30
                }
            }
        })
    })


    $(function () {
        $('#block-card-team-for-mobile').owlCarousel({
            loop: true,
            margin: 10,

            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 30

                }
            }
        })
    })


    $(function () {
        $('#block-card-advisior-for-mobile').owlCarousel({
            loop: true,
            margin: 10,

            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 30

                }
            }
        })
    })



    $(function () {
        $('#card-services-gianty').owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 30
                },
                1170: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 30

                }
            }
        })
    })


    var swiper = new Swiper(".swiper-container1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 6,
            initialSlide: 4,
            slideShadows: true
        },
        breakpoints: {
            500: {
                slidesPerView: 1
            },
            700: {
                slidesPerView: 1.5
            }
        }

    });








    // ================================== Animate JS ==================================

    $(function () {
        $('[class *= "animated"]').addClass('wow').attr('data-wow-duration', '1.5s');
        $('[class *= "animated-1"]').addClass('wow').attr('data-wow-duration', '4s');
        $('.animated-Fade-In-Left').addClass('fadeInLeft').attr('data-wow-delay', '0.5s');
        $('.animated-Fade-In-Right').addClass('fadeInRight').attr('data-wow-delay', '0.5s');
        $('.animated-Slide-In-Down').addClass('slideInDown').attr('data-wow-delay', '0.5s');
        $('.animated-1-Slide-In-Left').addClass('slideInLeft').attr('data-wow-delay', '0.5s');
        /*Fade In Up and Other Delay*/
        $('.animated-Fade-In-Up-1').addClass('fadeInUp').attr('data-wow-delay', '0.2s');
        $('.animated-Fade-In-Up-2').addClass('fadeInUp').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-Up-3').addClass('fadeInUp').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-Up-4').addClass('fadeInUp').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-Up-5').addClass('fadeInUp').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-Up-6').addClass('fadeInUp').attr('data-wow-delay', '1.2s');
        $('.animated-Fade-In-Up-7').addClass('fadeInUp').attr('data-wow-delay', '1.4s');
        /*Fade In and Other Delay*/
        $('.animated-Fade-In-1').addClass('fadeIn').attr('data-wow-delay', '0.4s');
        $('.animated-Fade-In-2').addClass('fadeIn').attr('data-wow-delay', '0.6s');
        $('.animated-Fade-In-3').addClass('fadeIn').attr('data-wow-delay', '0.8s');
        $('.animated-Fade-In-4').addClass('fadeIn').attr('data-wow-delay', '1s');
        $('.animated-Fade-In-5').addClass('fadeIn').attr('data-wow-delay', '1.2s');
        $('.animated-Fade-In-6').addClass('fadeIn').attr('data-wow-delay', '1.4s');
        $('.animated-Fade-In-7').addClass('fadeIn').attr('data-wow-delay', '1.6s');
        $('.animated-Fade-In-8').addClass('fadeIn').attr('data-wow-delay', '1.8s');
    });
    $(function () {
        new WOW().init();
    });

    // ================================== Counter JS ==================================

    $('.counter').countUp({

    });



    // ================================== Typed JS ==================================
    $(function () {
        $(".typed").typed({
            strings: ["future.", "creative"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 100,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () { },
            // starting callback function before each string
            preStringTyped: function () { },
            //callback for every typed string
            onStringTyped: function () { },
            // callback for reset
            resetCallback: function () { }
        });
    });

    $(function () {
        $(".typed-home-2").typed({
            strings: ["future", "startup"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 100,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () { },
            // starting callback function before each string
            preStringTyped: function () { },
            //callback for every typed string
            onStringTyped: function () { },
            // callback for reset
            resetCallback: function () { }
        });
    });


    // ==================================  Form Select - Search ==================================

    function create_custom_dropdowns() {
        $('select').each(function (i, select) {
            if (!$(this).next().hasClass('dropdown-select')) {
                $(this).after('<div class="dropdown-select wide ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
                var dropdown = $(this).next();
                var options = $(select).find('option');
                var selected = $(this).find('option:selected');
                dropdown.find('.current').html(selected.data('display-text') || selected.text());
                options.each(function (j, o) {
                    var display = $(o).data('display-text') || '';
                    dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
                });
            }
        });


    }

    // Event listeners

    // Open/close
    $(document).on('click', '.dropdown-select', function (event) {
        if ($(event.target).hasClass('dd-searchbox')) {
            return;
        }
        $('.dropdown-select').not($(this)).removeClass('open');
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).find('.option').attr('tabindex', 0);
            $(this).find('.selected').focus();
        } else {
            $(this).find('.option').removeAttr('tabindex');
            $(this).focus();
        }
    });

    // Close when clicking outside
    $(document).on('click', function (event) {
        if ($(event.target).closest('.dropdown-select').length === 0) {
            $('.dropdown-select').removeClass('open');
            $('.dropdown-select .option').removeAttr('tabindex');
        }
        event.stopPropagation();
    });

    function filter() {
        var valThis = $('#txtSearchValue').val();
        $('.dropdown-select ul > li').each(function () {
            var text = $(this).text();
            (text.toLowerCase().indexOf(valThis.toLowerCase()) > -1) ? $(this).show() : $(this).hide();
        });
    };
    // Search

    // Option click
    $(document).on('click', '.dropdown-select .option', function (event) {
        $(this).closest('.list').find('.selected').removeClass('selected');
        $(this).addClass('selected');
        var text = $(this).data('display-text') || $(this).text();
        $(this).closest('.dropdown-select').find('.current').text(text);
        $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown', '.dropdown-select', function (event) {
        var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
        // Space or Enter
        //if (event.keyCode == 32 || event.keyCode == 13) {
        if (event.keyCode == 13) {
            if ($(this).hasClass('open')) {
                focused_option.trigger('click');
            } else {
                $(this).trigger('click');
            }
            return false;
            // Down
        } else if (event.keyCode == 40) {
            if (!$(this).hasClass('open')) {
                $(this).trigger('click');
            } else {
                focused_option.next().focus();
            }
            return false;
            // Up
        } else if (event.keyCode == 38) {
            if (!$(this).hasClass('open')) {
                $(this).trigger('click');
            } else {
                var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
                focused_option.prev().focus();
            }
            return false;
            // Esc
        } else if (event.keyCode == 27) {
            if ($(this).hasClass('open')) {
                $(this).trigger('click');
            }
            return false;
        }
    });

    $(document).ready(function () {
        create_custom_dropdowns();


    });




})(jQuery);