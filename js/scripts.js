    
$(document).ready(function() {

    $('.form-contact__input').on('change', function() {
        if ($(this).val().length > 0) {
            $(this).addClass('filled');
        }
    })

    $('.slider').slick({
        arrows: false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        fade: true
    });
})