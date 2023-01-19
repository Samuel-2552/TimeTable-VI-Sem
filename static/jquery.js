$(document).ready(function() {
  var json = {
    "2":[
        "period 1",
        "period 2",
        "period 3",
        "period 4",
        "period 5"
    ],
    "3":[
        "period 1",
        "period 2",
        "period 3"
    ],
    "4":[
        "period 1",
        "period 2",
        "period 3",
        "period 4"
    ],
    "5":[
        "period 1",
        "period 2",
        "period 3"
    ],
    "6":[
        "period 1",
        "period 2",
        "period 3",
        "period 4",
        "period 5"
    ]
  }
  var typed = new Typed('#typed-text', {
    strings: ["Time Table VI Semester", "Notification: Dear Students, All should assemble at indoor auditorium for PEGA orientation program from 10 am to 12 pm."],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true
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

    function periodContainer(){
      var card = document.createElement("div");
      var card_content = document.createElement("div");
      var para = document.createElement("p");

    }

    $('.card').click(function() {
      $('.card').hide(1500);
      $('.new-card-container').show(3000);
      setInterval(periodContainer, 10)
    })

    $('.new-card').click(function() {
      $('.new-card-container').hide(1500);
      $('.card').show(3000);
    })

  });