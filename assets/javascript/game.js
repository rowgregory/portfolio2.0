

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

  
       

for (var i = 0; i < 600; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*2) + 2)+'s linear '+((Math.random()*5) + .1)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('body').append(star);
  }

