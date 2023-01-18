$(document).ready(function() {
    var $cards = $('.card');
    var currentCard = 0;
    
    function showCard() {
      $cards.eq(currentCard).fadeIn(1000);
      currentCard++;
      if (currentCard >= $cards.length) {
        currentCard = 0;
      }
    }
    
    setInterval(showCard, 1000);
  });