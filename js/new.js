



const scrollSection = document.querySelector('.horizontal-scroll__section');
const scrollContent = document.querySelector('.horizontal-scroll__content');

const scrollHeight = scrollSection.clientHeight;
const contentWidth = scrollContent.clientWidth;

document.addEventListener('scroll', e => {
    const scrolled = window.pageYOffset;
    const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
    const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));

    if (scrollSection.offsetTop <= scrolled && notReachedBottom) {

    gsap.to(scrollContent, {
        x: -sectionOffset });

    }
});



const heroTween = background => {
    const tl = gsap.timeline();

    tl.to(background, {
    height: '100%',
    ease: 'power3.easeOut' });



    return tl;
};

// const controller = new ScrollMagic.Controller();

// const heroScene = new ScrollMagic.Scene({
//   triggerElement: '.hero',
//   triggerHook: 0,
//   duration: '40%' }).

// setTween(heroTween('.hero__background')).
// addIndicators({ name: "1" });
//.addTo(controller);





$(document).ready(function(){


    $('.design_container .port-list .port .port-btn').click(function(){
        $(this).parent().siblings('div').addClass('block');
        $('.overlay').addClass('show');
        $('.design_container .port-list .port .pop-img .close-btn').click(function(){
            $(this).parent().removeClass('block');
            $('.overlay').removeClass('show');
        });
    });

    // $('.design_container .port-list .port').hover(function(){
    //     $(this).children('div').addClass('up');
    //     }, function(){
    //         $(this).children('div').removeClass('up');
    // });

    $(window).on('load', function () {
        load('#js-load', '6');
        $("#js-btn-wrap .button").on("click", function () {
            load('#js-load', '3', '#js-btn-wrap');
        })
    });

    function load(id, cnt, btn) {
        var port_list = id + " .js-load:not(.block)";
        var port_length = $(port_list).length;
        var port_total_cnt;
        if (cnt < port_length) {
            port_total_cnt = cnt;
        } else {
            port_total_cnt = port_length;
            $('.button').hide()
        }
        $(port_list + ":lt(" + port_total_cnt + ")").addClass("block");
    }

    $(function(){
        setTimeout(function(){
            $('.hidden_box').addClass('hidden');
            $('body').removeClass('scroll');
        }, 3500);
    })

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    })
    }
    //we need to recalculate width when the window is resized
    function handleWindowResize() {
    width = window.innerWidth;
    }

    window.onload = function(){
        $('html,body').animate({
            scrollTop : 0
         }, 400);
 
    }

});


$(window).scroll(function(){
    var height = $(document).scrollTop();

    if(height > 11000){
        $('.web_title').addClass('hide');
    }else{
        $('.web_title').removeClass('hide');
    }
});

// $(window).resize(function(){
//     var width = window.innerWidth;
//     if(width < 950){
//         $(window).scroll(function(){
//             var height =  $(document).scrollTop();
//             console.log(height);
//             if(height > 9600){
//                 $('.web_title').addClass('hide');
//             }else{
//                 $('.web_title').removeClass('hide');
//             }
//         });
//     }
// }).resize();


$(window).resize(function(){
    var width = window.innerWidth;
    if(width < 950){
        $(window).scroll(function(){
            var height =  $(document).scrollTop();
            console.log(height);
            if(height > 11000){
                $('.web_title').addClass('hide');
            }if(height > 9000){
                $('.web_title').addClass('hide');
            }if(height > 7000){
                $('.web_title').addClass('hide');
            }else{
                $('.web_title').removeClass('hide');
            }
        });
    }
}).resize();










    
