$(document).ready(function() {

  var typed1 = new Typed('#typed-text-1', {
    strings: ["Time Table VI Semester"],
    typeSpeed: 30
    //backSpeed: 20,
    //loop: true
  }, '#typed-text-2', {
  strings: ["Notifications: Dear Students, Tomorrow all should assemble indoor auditorium at 10 am for PEGA orientation program, program continues till 12 pm."],
  typeSpeed: 30
  //backSpeed: 20,
  //loop: true
  });


    var $cards = $('.card');
    var currentCard = 0;
    var today = new Date().getDay();
    
    function showCard() {
      $cards.eq(currentCard).fadeIn(1000);
      currentCard++;
      /*if (currentCard >= $cards.length) {
        currentCard = 0;
      }*/
    }
    
    setInterval(showCard, 1000);

    console.log("value of day: "+today);

    if(today==2){
      $cards.eq(0).addClass('highlight');
    }
    else if(today==3){
      $cards.eq(1).addClass('highlight');
    }
    else if(today==4){
      $cards.eq(2).addClass('highlight');
    }
    else if(today==5){
      $cards.eq(3).addClass('highlight');
    }
    else if(today==6){
      $cards.eq(4).addClass('highlight');
    }

    $('.card').click(function() {
      $('.card').hide(1500);
      $('.new-card-container').show(3000);
    })

    $('.new-card').click(function() {
      $('.new-card-container').hide(1500);
      $('.card').show(3000);
    })

  });