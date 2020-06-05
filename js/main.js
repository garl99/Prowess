$(document).ready(function () {
    var dra = 0;
    var dog = 1;
    var key = 1;
    var skt = 1;
    var flag = 1;
    var flag2 = 1;
    var flag3 = 1;
    var flag4 = 1;
    ready = true;
    $('#down, #up2, #up3, #up4').css({
        'display': 'none'
    });

    $('#up, #down2,#down3, #down4').css({
        'display': 'block'
    });
    $('main .proyectos .uno').css('border-bottom', '3px solid #942a4d');
    
    $('main .proyectos .uno').css('border-bottom', '3px solid #942a4d');



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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


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

            $('main .proyectos .uno').css('border-bottom', '3px solid #777');

            $('#down').css({
                'display': 'block'
            });

            $('#up').css({
                'display': 'none'
            });

            dra = 1;
        }
        else {
            $('#div-dra').css({
                'display': 'block'
            });

            $('main .proyectos .uno').css('border-bottom', '3px solid #942a4d');


            $('#down').css({
                'display': 'none'
            });

            $('#up').css({
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

            $('main .proyectos .dos').css('border-bottom', '3px solid #777');

            $('#down2').css({
                'display': 'block'
            });

            $('#up2').css({
                'display': 'none'
            });
            dog = 1;
        }
        else {
            $('#div-dog').css({
                'display': 'block'
            });

            $('main .proyectos .dos').css('border-bottom', '3px solid #942a4d');

            $('#down2').css({
                'display': 'none'
            });

            $('#up2').css({
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

            $('main .proyectos .tres').css('border-bottom', '3px solid #777');

            $('#down3').css({
                'display': 'block'
            });

            $('#up3').css({
                'display': 'none'
            });
            key = 1;
        }
        else {
            $('#div-key').css({
                'display': 'block'
            });

            $('main .proyectos .tres').css('border-bottom', '3px solid #942a4d');

            $('#down3').css({
                'display': 'none'
            });

            $('#up3').css({
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

            $('main .proyectos .cuatro').css('border-bottom', '3px solid #777');

            $('#down4').css({
                'display': 'block'
            });

            $('#up4').css({
                'display': 'none'
            });
            skt = 1;
        }
        else {
            $('#div-skt').css({
                'display': 'block'
            });

            $('main .proyectos .cuatro').css('border-bottom', '3px solid #942a4d');

            $('#down4').css({
                'display': 'none'
            });

            $('#up4').css({
                'display': 'block'
            });
            skt = 0;
        }
    });

    //Scroll elementos menu


    var servicio = $('#s-servicios').offset().top;
    var contacto = $('#s-contacto').offset().top;


    $('#btn-servicios').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: servicio - 100
        }, 580);

    });



    $('#btn-contacto').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: contacto - 100
        }, 580);
    });

    //Estado incial
    var windowWidth = $(window).width();
    if (windowWidth > 800) {
        $('main >.quienes-somos >.container >.video ').css({
            opacity: 0
        });

        $('main .objetivos .contenedor-objetivos div').css({
            top: '-100px',
            opacity: 0
        });
        $('main .servicios .contenedor-servicios .card').css({
            opacity: 0
        });

        $('main .quienes-somos .contenedor-m-v .mision').css({
            opacity: 0,
            right:'100%'
        });

        $('main .quienes-somos .contenedor-m-v .vision').css({
            opacity: 0,
            left:'100%'
        });
    }

    //Parallax

    $(window).scroll(function () {
        var windowWidth = $(window).width();
        var scroll = $(window).scrollTop();

        if (windowWidth > 800) {
            if (scroll > 800 && flag) {
                $('main >.quienes-somos >.container >.video ').animate({
                    opacity: 1
                }, 2000);
                flag = 0;
            }
            if (scroll > 1200 && flag2) {
                $('main .objetivos .contenedor-objetivos div').each(function (index) {
                    $(this).animate({
                        top: '0px',
                        opacity: 1
                    }, 2000 + (index * 500));
                });
            }

            if (scroll > 2000 && flag3) {
                $('main .servicios .contenedor-servicios .card').each(function (index) {
                    $(this).animate({
                        opacity: 1
                    }, 2000 + (index * 100));
                });

            }
            if (scroll > 150 && flag4) {
                $('main .quienes-somos .contenedor-m-v .mision').animate({
                    opacity: 1,
                    right:'0px'
                }, 3000);

                $('main .quienes-somos .contenedor-m-v .vision').animate({
                    opacity: 1,
                    left:'0px'
                }, 3000);

                flag4 = 0;
            }
        }
        if (windowWidth < 800) {
            $('main >.quienes-somos >.container >.video').css({
                'marginTop': '20px'
            });
            $('main .quienes-somos .contenedor-m-v').css({
                'position': 'relative',
                'top': 0
            });
        }
    });


});