$(document).ready(function () {
    var dra = 0;
    var dog = 1;
    var key = 1;
    var skt = 1;

    
    var swiper = new Swiper('.num1', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.p-num1',
        },
    });

    var swiper2 = new Swiper('.num2', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.p-num2',
        },
    });

    var swiper3 = new Swiper('.num3', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.p-num3',
        },
    });

    var swiper4 = new Swiper('.num4', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.p-num4',
        },
    });



    /*$('#div-dra').css({
        'display': 'none'
    });*/

    $('#div-dog').css({
        'display': 'none'
    });

    $('#div-key').css({
        'display': 'none'
    });

    $('#div-skt').css({
        'display': 'none'
    });

    $('#btn-dra').on('click', function (e) {
        e.preventDefault();

        if (!dra) {
            $('#div-dra').css({
                'display': 'none'
            });
            dra = 1;
        }
        else {
            $('#div-dra').css({
                'display': 'block'
            });
            dra = 0;
        }


    });

    $('#btn-dog').on('click', function (e) {
        e.preventDefault();

        if (!dog) {
            $('#div-dog').css({
                'display': 'none'
            });
            dog = 1;
        }
        else {
            $('#div-dog').css({
                'display': 'block'
            });
            dog = 0;
        }
    });


    $('#btn-key').on('click', function (e) {
        e.preventDefault();

        if (!key) {
            $('#div-key').css({
                'display': 'none'
            });
            key = 1;
        }
        else {
            $('#div-key').css({
                'display': 'block'
            });
            key = 0;
        }
    });

    $('#btn-skt').on('click', function (e) {
        e.preventDefault();

        if (!skt) {
            $('#div-skt').css({
                'display': 'none'
            });
            skt = 1;
        }
        else {
            $('#div-skt').css({
                'display': 'block'
            });
            skt = 0;
        }
    });

});