//Скріпт для роблення картинок в блоці фоновими
(function(){
    let ibgs = document.getElementsByClassName('ibg');
    if(ibgs){
        for (let item of ibgs) {
            let imgSrc = item.children[0].attributes[0].value;
            item.style = `background-image: url("${imgSrc}");`;
        }
    }

    const animItem = document.querySelectorAll('._anim-item');
    const animStart = 4;

    if (animItem.length > 0) {
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll (params) {
            for (let index = 0; index < animItem.length; index++) {
                let animItemOffset = offset(animItem[index]).top;
                let animItemPoint = window.innerHeight - (animItem[index].offsetHeight / animStart);
                
                if (animItem[index].offsetHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - (window.innerHeight / animStart);
                }
                console.log('pageYOffset = ' + pageYOffset);
                console.log('(animItemOffset - animItemPoint) = ' + (animItemOffset - animItemPoint));
                console.log('(animItemOffset + animItem[index].offsetHeight) = ' + (animItemOffset + animItem[index].offsetHeight));
                if ((pageYOffset > (animItemOffset - animItemPoint)) && (pageYOffset < (animItemOffset + animItem[index].offsetHeight))) {
                    animItem[index].classList.add('_anim-show')
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() => {
            animOnScroll ();
        }, 300);
     };
    //================================================================================

}());


$(document).ready(function(){
    if($('.slider__body').length > 0) {
        $('.slider__body').slick({
            //autoplay: true,
            //infinite: true,
            dots: true,
            arrows: false,
            accessibility: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 3000,
            nextArrow: 'button type="button" class="slick-next"></button>',
            prevArrow: 'button type="button" class="slick-prev"></button>',
            responsive: [{
                breakpoint: 967,
                settings: {
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }

    //Скріпт для кнопки бургер-меню
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.toolbar__body').toggleClass('active');
        $('.body').toggleClass('lock');
    })

    //Скріпт для кнопки спойлерів
    $('.links__title').click(function(event){
        if($('.links').hasClass("one")) {
            $('.links__title').not($(this)).removeClass('active');    
            $('.links__body').not($(this).next()).slideUp(300);
        }
        
        $(this).toggleClass('active').next().slideToggle(300);
    })        
});


$('.wrapper').addClass('loaded');







