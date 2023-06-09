$(document).ready(function(){
    var Scrollbar = window.Scrollbar;
    Scrollbar.init(document.querySelector("#scroll-container"), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
        alwaysShowTracks: true
    });


    var swiper1 = new Swiper(".web", {
        slidesPerView:3,
        spaceBetween:20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    $('.swiper-button-next').removeClass('swiper-button-lock');
    $('.swiper-button-prev').removeClass('swiper-button-lock');


    $('.design-wrap .port-list .port .port-btn').click(function(){
        $(this).parent().siblings('div').addClass('block');
        $('.overlay').addClass('show');
        $('.design-wrap .port-list .port .pop-img .close-btn').click(function(){
            $(this).parent().removeClass('block');
            $('.overlay').removeClass('show');
        });
    });

    $('.design-wrap .port-list .port').hover(function(){
        $(this).children('div').addClass('up');
        }, function(){
            $(this).children('div').removeClass('up');
    });

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
    
});




    


const colors = ["#a30000", "#dc2f02", "#00296b", "#ffcb05"];
const backgroundColor = "#e0b000";
const width = window.innerWidth;
const height = window.innerHeight;
const totalFrames = 1000;
let frameCount = 0;
let recording = false;
let recordingStarted = false;
let frameDelta = 0;

let s;

function setup() {
  canvas = createCanvas(width, height, WEBGL);
  noiseSeed(20);
  rectMode(CENTER);
  noStroke();
  
  let vert = document.getElementById('vertShader').innerText;
  let frag = document.getElementById('fragShader').innerText;
  s = createShader(vert, frag);
}

function draw() {
  frameCount += 1;
  frameDelta = (2 * Math.PI * (frameCount % totalFrames)) / totalFrames;

  background(backgroundColor);
  shader(s);
  
	s.setUniform('uResolution',[width,height]);
	s.setUniform('uTime',millis()/100);
  s.setUniform('uLowGpu',false);
  s.setUniform('uVeryLowGpu',false);

  s.setUniform('uSpeedColor',20.0);

    s.setUniform('uColor1',hex2rgb(colors[0]));
    s.setUniform('uColor2',hex2rgb(colors[1]));
    s.setUniform('uColor3',hex2rgb(colors[2]));
    s.setUniform('uColor4',hex2rgb(colors[3]));

  rect(0,0,width,height);
}

const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    
    return [ r / 255, g / 252, b / 255 ];
}

