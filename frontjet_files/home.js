$(function() {

    var $carouselCount = $(".home-img-slider .item").length;
    var $rand = getRandomInt(0, $carouselCount);
    $(".home-img-slider .item:eq("+ $rand  +")").addClass("active");
    console.log()

    $('.scroll-to-projects-btn').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".our-skills-container").offset().top
        }, 600);
    });
    // var scrolled = false;

    itemHeight();
    projectsOff();

    $(window).resize(function() {
        itemHeight();
        projectsOff();
    });

    $(document).on('scroll', function() {
        var scrolled = $(window).scrollTop();

        if (scrolled + 300 >= $(".our-skills-container").offset().top) {
            $('.central-circle').addClass('in');
        } else if (scrolled + 300 <= $(".our-skills-container").offset().top) {
            $('.central-circle').removeClass('in');
        }
        if (scrolled + 300 >= $(".our-skills-container").offset().top) {
            setTimeout(function() {
                var counter = 0;
                var interval = setInterval(function() {
                    $('.skills-tags-container .skils .skill-arrow').eq(counter).addClass('in').parent().addClass('open');
                    counter++;
                }, 150);
            }, 200);
        } else if (scrolled + 300 <= $(".our-skills-container").offset().top) {
            var counter = 0;
            var interval = setInterval(function() {
                $('.skills-tags-container .skils .skill-arrow').eq(Math.abs(counter)).removeClass('in').parent().removeClass('open');
                counter--;
            }, 150);
        }
    });
    $('.home-pilosophy-sections li').hover(function(){
       
        $('.home-pilosophy-sections li').siblings('li').removeClass('active');
        $(this).addClass('active');
    })
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function itemHeight() {
    $('.projects-list .project-img').height($(window).height() / 3);
}

function projectsOff() {
    if ($(window).height() >= 700)
        $('.projects-section-top').css('margin-bottom', $(window).height());
}
