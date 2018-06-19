$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('large'); 
        document.getElementById("logoblanc").src = "/Users/maximilianvigier/Desktop/slab-main-files/html/image-bg/images/logo flat dark.001.png";

    } else {
        $('.main_h').removeClass('large');$('nav a').removeClass('large');
        document.getElementById("logoblanc").src = "/Users/maximilianvigier/Desktop/slab-main-files/html/image-bg/images/Logo flat.001 copie.png";

    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }

});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('large')
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('div a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});