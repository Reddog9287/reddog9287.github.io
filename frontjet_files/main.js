$(function() {
    var scene = document.querySelector('.parallax');
    var parallax = new Parallax(scene);

    $.fn.scrollEnd = function(callback, timeout) {
        $(this).scroll(function() {
            var $this = $(this);
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, timeout));
        });
    };

    // page loding animation shows a progress of images being loaded in the background
    imgLoad = imagesLoaded('body'),
        progressBar = $('.progress-bar'),
        loadingMsg = $('.loading-message'),
        count = imgLoad.images.length,
        counter = 0;

    imgLoad.on('progress', function(instance, image) {
        updateProgressBar();
    });

    imgLoad.on('always', function(instance) {
        // resetting scroll position on page load
        window.scrollTo(0, 0);

        // hiding the loader layout after images are loaded
        setTimeout(function() {
            $('.loader-overlay').fadeOut(600);
        }, 1000)
    });

    function updateProgressBar() {
        var percentVal = Math.round((++counter) / count * 100);
        var percentToDisplay = (percentVal + '%');

        progressBar.css('width', percentToDisplay);
        // loadingMsg.text(percentToDisplay);
    }

    $('.social-toggle-btn').click(function(e) {
        e.preventDefault();
        var counter = 0;
        var interval = setInterval(function() {
            $('.social-btns ul li').eq(counter).toggleClass('open');
            counter++;
        }, 100);
    })
    var logoHeight = $('.header-logo-wrapper h1').height(),
        scrolled = $(window).scrollTop(),
        vh = $(window).height(),
        ww = $(window).width(),
        dh = $(document).height(),
        hHeads = $(".home-heads-section").height(),
        offHeads = $(".home-heads-section").offset().top,
        offAbouts = $('.about-us-section').offset().top,
        offFeedback = $('.feedbacks-section').offset().top,
        hAbouts = $('.about-us-section').height(),
        offSkills = $('.our-skills-container').offset().top,
        skillItems = $('.skills-tags-container .skils .skill-arrow'),
        aboutImg = $('.about-us-section .img'),
        offaboutImg = $('.about-us-section .img').offset().top;


    $(document).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (ww >= 768) {
            if (scrolled + vh >= offAbouts + 250) {
                var counter = 0;
                var interval = setInterval(function() {
                    $('.about-us-section .img').eq(counter).addClass('in');
                    counter++;
                }, 100);
            } else {
                var counter = 0;
                var interval = setInterval(function() {
                    $('.about-us-section .img').eq(Math.abs(counter)).removeClass('in');
                    counter--;
                }, 100);
            }
            if (scrolled + vh - 250 >= offSkills) {
                $('.content-layer h2').fadeIn(400);
            } else {
                $('.content-layer h2').fadeOut(400);
            }
            if (scrolled + vh - 350 >= offSkills) {
                $('.content-layer h3').fadeIn(400);
            } else {
                $('.content-layer h3').fadeOut(400);
            }
        } else {
            $.each(aboutImg, function(i, el) {
                if (scrolled + vh + 210 >= $(el).offset().top + $(el).height()) {
                    $(el).addClass('in');
                } else {
                    $(el).removeClass('in');
                }
            });
            $('.content-layer h2').fadeIn(400);
            $('.content-layer h3').fadeIn(400);
        }
    });
    $('.to-about').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: offAbouts
        }, 600)
    });
    $('.to-work').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: hHeads + offHeads
        }, 600)
    });
    $('.to-skills').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: offSkills
        }, 600)
    })


    $('.scroll-jet-btn').click(function(e) {
        vh = $(window).height();
        ww = $(window).width();
        dh = $(document).height();
        hHeads = $(".home-heads-section").height();
        offHeads = $(".home-heads-section").offset().top;
        offAbouts = $('.about-us-section').offset().top;
        offFeedback = $('.feedbacks-section').offset().top;
        hAbouts = $('.about-us-section').height();
        offSkills = $('.our-skills-container').offset().top;
        offFooter = $('footer').offset().top;


        e.preventDefault();
        $(this).addClass('scroll');
        var scrolled = $(window).scrollTop();


        if (scrolled <= hHeads) {
            if (ww < 768) {
                $('html, body').animate({
                    scrollTop: hHeads + offHeads
                }, 600, function() {
                    $('.scroll-jet-btn').removeClass('scroll')
                });
            } else {
                $('html, body').animate({
                    scrollTop: hHeads + offHeads
                }, 600, function() {
                    $('.scroll-jet-btn').removeClass('scroll')
                });
            }
        } else if (hHeads + offHeads <= scrolled && scrolled < offAbouts) {
            $('html, body').animate({
                scrollTop: offAbouts
            }, 600, function() {
                $('.scroll-jet-btn').removeClass('scroll')
            });
        } else if (offAbouts <= scrolled && scrolled < offSkills) {
            $('html, body').animate({
                scrollTop: offSkills + 50
            }, 600, function() {
                $('.scroll-jet-btn').removeClass('scroll');
            })
        } else if (offSkills <= scrolled && scrolled < offFeedback) {
            $('html, body').animate({
                scrollTop: offFeedback
            }, 600, function() {
                $('.scroll-jet-btn').removeClass('scroll');
            });
        } else if (offFeedback <= scrolled && scrolled < offFooter) {
            $('html, body').animate({
                scrollTop: dh
            }, 600, function() {
                $('.scroll-jet-btn').removeClass('scroll');
            });
        }

        if (scrolled >= dh - vh - 100) {

            $('html, body').animate({
                scrollTop: 0
            }, 600, function() {
                $('.scroll-jet-btn').removeClass('scroll')
            });
        }
    })

    $(window).scrollEnd(function() {
        var vh = $(window).height();
        var ww = $(window).width();
        var dh = $(document).height();
        var scrolled = $(window).scrollTop();

        if (scrolled >= dh - vh - 100) {
            $('.scroll-jet-btn').addClass('rotate');

        } else {
            $('.scroll-jet-btn').removeClass('rotate')
        }
    }, 250)

    var mobileCounter = 1,
        tabletCounter = 1;

    $('#tablet-projects-slider').on('slide.bs.carousel', function(ev) {
        if (ev.direction == 'left') tabletCounter++;
        else tabletCounter--;
        if (tabletCounter >= 4) tabletCounter = 1;
        if (tabletCounter == 0) tabletCounter = 3
        $(".tablet-panel").removeClass('current-1 current-3 current-2').addClass('current-' + tabletCounter);
    });

    $('#mobile-projects-slider').on('slide.bs.carousel', function(ev) {
        if (ev.direction == 'left') mobileCounter++;
        else mobileCounter--;
        if (mobileCounter >= 5) mobileCounter = 1;
        if (mobileCounter == 0) mobileCounter = 4
        $(".mobile-panel").removeClass('current-1 current-3 current-4 current-2').addClass('current-' + mobileCounter);
    });

    // $('[id$=-projects-slider] .item').click(function() {
    //     var $carousel = $(this).closest('.carousel-inner.mobile');
    //     var index = $(this).attr('data-go-to');
    //     var indexInt = parseInt(index, 10);
    //     $carousel.carousel(index);
    //     console.log($(this));
    //     console.log(index);
    //     console.log(indexInt);
    //     console.log($(this).closest('[class$=-panel]'));
    //     $(this).closest('[class$=-panel]').removeClass('current-1 current-3 current-4 current-2').addClass('current-' + (indexInt+1));
    // });

    $('#projectsModal').on('shown.bs.modal', function(e) {
        $('body.modal-open').bind('mousewheel dommousescroll', function(e) {
            e.preventDefault();
        })
    });
    $('#projectsModal').on('hidden.bs.modal', function(e) {
        $('body.modal-open').unbind('mousewheel dommousescroll');
    });
});
