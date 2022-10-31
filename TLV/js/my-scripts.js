
$(document).ready(function () {

    // person
    $('.persons__btn').click(function (event) {
        // $(this).toggleClass('active').parent().next().slideToggle(200);
        $(this).toggleClass('active');
        $('.persons__items').toggleClass('active');
    });

    // faq
    $('.fag-item__question').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(200);
    });

    // плавный скролл
    $("a.scroll").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


});



