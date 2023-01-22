$(document).ready(function() {

  var typed = new Typed('#typed-text', {
    strings: ["Notification: Saturday is declared Holiday due to Alumini Reunion, therefore Monday will be working day following Saturday's Time Table."],
    typeSpeed: 30,
    backSpeed: 20,
    // loop: true
  });

    var $cards = $('.card');
    var currentCard = 0;
    var today = new Date().getDay();
    
    function showCard() {
      $cards.eq(currentCard).fadeIn(6000);
      currentCard++;
      /*if (currentCard >= $cards.length) {
        currentCard = 0;
      }*/
    }

    setInterval(showCard, 1);
    // showCard();
    // showCard();
    // showCard();
    // showCard();
    // showCard();

    function toast_card() 
    {
      const toast=document.createElement("div");
      toast.classList.add("toast");
      toast.innerHTML="Click any card to go back!";
      document.body.appendChild(toast);
      setTimeout(function(){
        document.body.removeChild(toast);
      },5000);
    }
    
    $('.card').click(function() {
      toast_card();
    })


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

    $('#2').click(function() {
      $('.card-container').hide(700);
      $('.tue-card-container').show(700);
    });

    $('.tue-card-container').click(function() {
      $('.tue-card-container').hide(700);
      $('.card-container').show(700);
    })

    $('#3').click(function() {
      $('.card-container').hide(700);
      $('.wed-card-container').show(700);
    });

    $('.wed-card-container').click(function() {
      $('.wed-card-container').hide(700);
      $('.card-container').show(700);
    })

    $('#4').click(function() {
      $('.card-container').hide(700);
      $('.thur-card-container').show(700);
    });

    $('.thur-card-container').click(function() {
      $('.thur-card-container').hide(700);
      $('.card-container').show(700);
    })

    $('#5').click(function() {
      $('.card-container').hide(700);
      $('.fri-card-container').show(700);
    });

    $('.fri-card-container').click(function() {
      $('.fri-card-container').hide(700);
      $('.card-container').show(700);
    })

    $('#6').click(function() {
      $('.card-container').hide(700);
      $('.sat-card-container').show(700);
    });

    $('.sat-card-container').click(function() {
      $('.sat-card-container').hide(700);
      $('.card-container').show(700);
    })

  });