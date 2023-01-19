$(document).ready(function() {
  var json = [{
    "2":[
        "AI19644 IOT Architecture and its Protocols",
        "AI19641 Computer Vision and its Applications",
        "Break",
        "AI19643 Foundations of Natural Language Processing",
        "AI19642 Time Series Analysis and Forecasting",
        "Library",
        "Lunch",
        "AI19644 (IoT Lab) / AI19642 (TSAF Lab)"
    ],
    "3":[
        "AI19642 Time Series Analysis and Forecasting",
        "BA19602 Fundamentals of Accounting",
        "Break",
        "AI19641 (CV Lab) / AI19611 (Mini Project)",
        "AI19P62 Data Analysis & Data Mining",
        "Lunch",
        "AI19641 Computer Vision and its Applications",
        "AI19643 Foundations of Natural Language Processing"
    ],
    "4":[
        "AI19643 (NLP Lab) / AI19P62 (DADM Lab)",
        "Break",
        "AI19643 Foundations of Natural Language Processing",
        "Lunch",
        "AI19641 (CV Lab) / AI19611 (Mini Project)",
        "AI19644 IOT Architecture and its Protocols",
        "AI19P62 Data Analysis & Data Mining"
    ],
    "5":[
        "AI19641 Computer Vision and its Applications",
        "AI19644 IOT Architecture and its Protocols",
        "Break",
        "AI19644 (IoT Lab) / AI19642 (TSAF Lab)",
        "Lunch",
        "BA19602 Fundamentals of Accounting",
        "AI19P62 Data Analysis & Data Mining",
        "AI19642 Time Series Analysis and Forecasting"
    ],
    "6":[
        "AI19643 Foundations of Natural Language Processing",
        "AI19642 Time Series Analysis and Forecasting",
        "Break",
        "AI19643 (NLP Lab) / AI19P62 (DADM Lab)",
        "Lunch",
        "AI19641 Computer Vision and its Applications",
        "Counseling",
        "BA19602 Fundamentals of Accounting"
    ]
  }]
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

    function period(id, i){
      var c = document.getElementById("container");
      var card = document.createElement("div");
      card.className = "new-card"
      var card_content = document.createElement("div");
      card_content.className = "new-card-content"
      // card_content.addClass("new-card-content");
      var p = document.createElement("p");
      var text = document.createTextNode(json[0][id][i]);
      // console.log(json[0][id][i])
      p.appendChild(text);
      card_content.appendChild(p);
      card.appendChild(card_content);
      c.appendChild(card);
      i = i + 1;
      if(i < json[0][id].length){
        setInterval(period(id, i),10);
      }
    }
    $('.card').click(function() {
      period(this.id, 0);
      $('.card').hide(1500);
      $('.new-card-container').show(3000);
    })

    $('.new-card-container').click(function() {
      $('.new-card-container').hide(1500);
      $('.card').show(3000,function(){
        const myNode = document.getElementById("container");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
      }
      });
    })

  });