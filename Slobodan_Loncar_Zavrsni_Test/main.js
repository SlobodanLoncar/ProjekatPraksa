$(document).ready(function () {  

    autoPlayYouTubeModal();

    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    function autoPlayYouTubeModal() {
        var trigger = $("body").find('[data-toggle="modal"]');
        trigger.click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-theVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
            $('.modal').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }


   /** COLLAPSE IN REFERENCE */
    $('.panel-image img.panel-image-preview').on('click', function(e) {
        $(this).parent().siblings(".panel-body").toggle("fast");
        $(this).parent().siblings(".panel-body").css('min-height', '300px');
    });
//** CLASS FOR NAVIGATION BAR  */
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('nav.navbar').addClass('black');
        }else{
            $('nav.navbar').removeClass('black');
        }
    });
    //** CAROUSEL  */
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {
        $('#custom_carousel .controls li.active').removeClass('active');
        $('#custom_carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
    });

    //** SCROLL TO TOP DUGMEa */
    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    $('.scrolltop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

    //** SMOOTH SCROLL ZA AFFIX */
    $(function() {
        $('html').smoothScroll(500);
       });
});

