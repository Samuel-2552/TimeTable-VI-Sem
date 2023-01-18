$(document).ready(function() {
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

  });