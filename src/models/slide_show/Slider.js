
import React from 'react';
import $ from 'jquery';

import "./slider.css";






class Slider extends React.Component {
    render() {


// eslint-disable-next-line no-lone-blocks
{
  

  
    var i=0;
    var mask;
  $(document).ready(function() {
    var canvas = document.getElementById('in-canvas');
    var bgCanvas = document.getElementById('bg-canvas');
    var ctx = canvas.getContext('2d');
    var bgCtx = bgCanvas.getContext('2d');
  
    var w = canvas.width = bgCanvas.width = $(window).width();
    var h = canvas.height = bgCanvas.height = $(window).outerHeight();
 
    $(window).on('resize', function() {
      w = canvas.width = bgCanvas.width = $(window).width();
      h = canvas.height = bgCanvas.height = $(window).height();
    });
    var halfW = w / 2;
    var halfH = h / 2;
    var slider;
    var masks = [];
    var stars = [];
    var starsNum = 600;
    var isAnimated = false;
    var maskSettings = {
      x: 0,
      y: h / 7,
      mWidth: w / 4,
      mHeight: h / 3,
      mStroke: 40,
      speed: 4,
      opacity: 0,
      offset: w / 10
    };
  


    var colors = ['217', '358', '177', '29'];
    var color = colors[0];
  
    var img = new Image();
    var imagesources = [];
    $('.slide').each(function(i) {
      imagesources[i] = $(this).find('img').attr('src');
    });
    var imgagesource = imagesources[0];
  
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    function distance(x, y) {
      var hypotenuse = Math.round(Math.sqrt(x * x + y * y));
      return hypotenuse;
    }
  
    function CreateStars() {
      this.r = random(10, 20);
      this.x = random(0, distance(halfW, halfH));
      this.y = 0;
      this.rotation = random(0, 360) * Math.PI / 180;
      this.speed = random(0, .5) * Math.PI / 40;
  
      this.draw = function() {
        var grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        grd.addColorStop(0, '#fff');
        grd.addColorStop(0.1, 'hsl(' + color + ', 61%, 33%)');
        grd.addColorStop(0.25, 'hsl(' + color + ', 64%, 6%)');
        grd.addColorStop(1, 'transparent');
        bgCtx.save();
        bgCtx.translate(halfW, halfH);
        bgCtx.rotate(this.rotation);
        bgCtx.beginPath();
        bgCtx.fillStyle = grd;
        bgCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        bgCtx.fill();
        bgCtx.restore();
  
        this.rotation += this.speed / 50;
      };
    }
  
    function CreateMask() {
      img.src = imgagesource;
  
      this.cx = maskSettings.x;
      this.cy = maskSettings.y;
      this.mWidth = maskSettings.mWidth;
      this.mHeight = maskSettings.mHeight;
      this.mStroke = maskSettings.mStroke;
      this.speed = maskSettings.speed;
      this.op = maskSettings.opacity;
      this.offset = maskSettings.offset;
      this.destination = this.cx + this.offset;
      this.draw = function() {
        ctx.save();
        ctx.globalAlpha = this.op;
        ctx.beginPath();
        ctx.rect(this.cx, this.cy, this.mWidth, this.mStroke);
        ctx.rect(this.cx, this.cy, this.mStroke, this.mHeight);
        ctx.rect(this.cx + this.mWidth, this.cy, this.mStroke, this.mHeight);
        ctx.rect(this.cx, this.cy + (this.mHeight - this.mStroke), this.mWidth, this.mStroke);
        ctx.clip();
        ctx.drawImage(img, 0, 0, img.width, img.height);
        ctx.restore();
  
        ctx.save();
        ctx.globalAlpha = this.op;
        ctx.beginPath();
        ctx.rect(w - this.cx - this.mWidth, h - this.cy - this.mHeight, this.mWidth, this.mHeight);
        ctx.clip();
        ctx.drawImage(img, w - img.width, h - img.height, img.width, img.height);
        ctx.restore();
      };
    }
        
    function CreateSlider() {

   

      this.view = $('.container');
      this.slide = $('.slide');
      this.controls = $('.cont-list').find('li');
      this.slidesLength = $('.slider').find('.slide').length;
      this.prev = $('.prev');
      this.next = $('.next');
      this.bg = $('.bg');
      this.duration = 800;
      this.current = 0;



      this.timer = setInterval(()=>{
            
        if (self.view.is(':animated') || isAnimated === true) {
          return;
        }
        if(self.current === self.slidesLength - 1){
          self.current = 0;
        }else
        self.current++;

        self.slidequeue(self.current);
        
        
      },5000);
 
      this.easing = 'linear';
      this.changeSlide = function(pos) {
        this.controls.removeClass('activeSlideButton').eq(pos).addClass('activeSlideButton');
        this.view.animate({
          view: (100 * pos)
        }, {
          step: function(now) {
            $(this).css('transform', 'translate(-' + now + '%, 0%)');
          },
          duration: this.duration
        }, this.easing);
      };
      this.constraction = function() {
        $.each(this.bg, function() {
          var item = $(this);
          var image = item.find('img').attr('src');
          if (typeof image !== 'undefined') {
            item.css({
              'background-image': 'url( ' + image + ' )'
            });
            item.find('img').hide();
          }
        });
      };
      this.slidequeue = function(current) {
        animateMask.out();
        masks.splice(0, 1);
        this.changeSlide(current);
        setTimeout(function() {
          color = colors[current];
          imgagesource = imagesources[current];
         
        mask = new CreateMask();
          masks.push(mask);
          animateMask.in();
        }, this.duration);
      };
      var self = this;
      this.next.on('click', function(e) {
        e.preventDefault();
        if (self.current >= self.slidesLength - 1 || self.view.is(':animated') || isAnimated === true) {
          return;
        }
        self.current++;
        self.slidequeue(self.current);
      });
      this.prev.on('click', function(e) {
        e.preventDefault();
        if (self.current <= 0 || self.view.is(':animated') || isAnimated === true) {
          return;
        }
        self.current--;
        self.slidequeue(self.current);
      });
      this.controls.on('click', function(e) {
        e.preventDefault();
        if (self.view.is(':animated') || isAnimated === true) {
          return;
        }
        self.current = $(this).index();
        self.slidequeue(self.current);
      });
    }
    var animateMask = { in: function() {
        ctx.clearRect(0, 0, w, h);
        var request = requestAnimationFrame(animateMask.in);
        isAnimated = true;
        mask.op = mask.op + .1;
        mask.cx = mask.cx + mask.speed;
  
        if (mask.op >= 1) {
          mask.op = 1;
        }
        if (mask.cx >= mask.destination) {
          cancelAnimationFrame(request);
          isAnimated = false;
        }
        mask.draw();
      },
      out: function() {
        ctx.clearRect(0, 0, w, h);
        var request = requestAnimationFrame(animateMask.out);
        mask.op = mask.op - .1;
        mask.cx = mask.cx - mask.speed;
        if (mask.op <= 0) {
          mask.op = 0;
        }
        if (mask.cx <= 0) {
          cancelAnimationFrame(request);
        }
        mask.draw();
      }
    };
    var animateStars = function() {
      bgCtx.clearRect(0, 0, w, h);
      for ( i = 0; i < stars.length; i++) {
        stars[i].draw();
      };
      requestAnimationFrame(animateStars);
    };
  
    function init() {
      slider = new CreateSlider();
      mask = new CreateMask();
      masks.push(mask);
      for (i = 0; i < starsNum; i++) {
        var star = new CreateStars();
        stars.push(star);
      }
      slider.constraction();
      animateMask.in();
      animateStars();
    }
  
    window.addEventListener('load', function() {
      $('.loader').hide();
      init();
    });
    window.addEventListener('resize', function() {
      mask.draw();
    });
  });
}

        return(<>

<div class="loader"></div>
<canvas id="bg-canvas"></canvas>


<div class="slider">
  <canvas id="in-canvas"></canvas>
  <div class="container">
    <div class="slide">
      <div class="bg">
        <img src="https://cdna.artstation.com/p/assets/images/images/008/865/978/large/kevin-le-dragon-dog-fight-finish-1.jpg?1515769676"   alt="hjb"/>
      </div>
    </div>
    <div class="slide">
      <div class="bg">
        <img src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1604683416727-JC0T67V27EOIBT6Z8KP1/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w"/>
      </div>
    </div>
    <div class="slide">
      <div class="bg">
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Death-Castlevania.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"/>
      </div>
    </div>
    <div class="slide">
      <div class="bg">
        <img src="https://www.indiewire.com/wp-content/uploads/2017/07/csv0_101_master-01_10_55_14-still018.png?w=780"/>
      </div>
    </div>
  </div>
  <div class="controls">
    <div class="prev">
      </div>
        <ul class="cont-list">
          <li class="activeSlideButton"><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
        </ul>
        <div class="next"></div>
    </div>
  </div>

        </>)
        ;
  }
}
export default Slider;