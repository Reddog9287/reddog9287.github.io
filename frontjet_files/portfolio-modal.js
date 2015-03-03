$(function() {
    $('.projects-list a').click(function() {
        var name = $(this).context.id,
            title = $(this).context.title,
            desktop = $('#projectsModal .desktop-item'),
            iPad = $('#projectsModal .tablet-item'),
            iPhone = $('#projectsModal .mobile-item'),
            tabDisabled = $(".devices-tab a[aria-controls=tablet], .devices-tab a[aria-controls=mobile]"),
        	attrResponsive = $(this).attr('data-responsive');

        $('.desktop-tabs li span').text(title);

        $.each(desktop, function(i, el) {
            $(el).css('backgroundImage', 'url(img/projects/' + name + '/' + name + '-desktop-' + (i + 1) + '.png)');
        });


        if (typeof attrResponsive !== typeof undefined && attrResponsive !== false) {
            $.each(iPad, function(i, el) {
                $(el).css('backgroundImage', 'url(img/projects/' + name + '/' + name + '-iPad-' + (i + 1) + '.png)');
            });
            $.each(iPhone, function(i, el) {
                $(el).css('backgroundImage', 'url(img/projects/' + name + '/' + name + '-iPhone-' + (i + 1) + '.png)');
            });

            tabDisabled.removeAttr('data-disabled');
            tabDisabled.show();
        } else {
            tabDisabled.attr('data-disabled', 'disabled');
            tabDisabled.hide();
        }

    });

    $('#projectsModal').on('show.bs.modal', function(e) {
        $(".devices-tab li").removeClass('active');
        $(".devices-tab li:first-child").addClass('active');
        $(".tab-content .tab-pane").removeClass("in active");
        $(".tab-content .tab-pane:first-child").addClass("in active");
    })

    $(".devices-tab a[data-toggle=tab]").on("click", function(e) {
        var DisabledAttr = $(this).attr('data-disabled');
        if (typeof DisabledAttr !== typeof undefined && DisabledAttr !== false) {
            e.preventDefault();
            return false;
        }
    });
});
