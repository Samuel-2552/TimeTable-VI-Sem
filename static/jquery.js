$(document).ready(function() {
  var json = [{
    "2":[
        "<p style='color:yellow'>08.00 - 09.00</p><p>AI19644</p><p><b>IOT Architecture and its Protocols</b></p><p>Mrs. S. Mahalakshmi</p>",
        "<p style='color:yellow'>09.00 - 09.50</p><p>AI19641</p> <p><b>Computer Vision and its Applications</b></p><p>Mr. K. Gopinath</p>",
        "<p style='color:yellow'>09.50 - 10.10</p><p><b>Break</b></p>",
        "<p style='color:yellow'>10.10 - 11.00</p><p>AI19643</p> <p><b>Foundations of Natural Language Processing</b></p><p>Mrs. K. Sangeetha</p>",
        "<p style='color:yellow'>11.00 - 11.50</p><p>AI19642</p> <p><b>Time Series Analysis and Forecasting</b></p><p>Mrs. I. Eugene Berna</p>",
        "<p style='color:yellow'>11.50 - 12.40</p><p><p><b>Library</b></p>",
        "<p style='color:yellow'>12.40 - 01.20</p><p><p><b>Lunch</b></p>",
        "<p style='color:yellow'>01.20 - 03.00</p><p>AI19644/AI19642</p><p><b>(IoT Lab)</b>/<b>(TSAF Lab)</b></p><p>Mrs. S. Mahalakshmi / Mrs. I. Eugene Berna</p>"
    ],
    "3":[
        "<p style='color:yellow'>08.00 - 09.00</p><p>AI19642</p><p> <b>Time Series Analysis and Forecasting</b></p><p>Mrs. I. Eugene Berna</p>",
        "<p style='color:yellow'>09.00 - 09.50</p><p>BA19602</p><p> <b>Fundamentals of Accounting</b></p><p>Ms. K. P. Sajana</p>",
        "<p style='color:yellow'>09.50 - 10.10</p><p><b>Break</b></p>",
        "<p style='color:yellow'>10.10 - 11.50</p><p>AI19641/AI19611</p><p><b>(CV Lab)</b>/<b>(Mini Project)</b></p><p>Mr. K. Gopinath / Dr. S. Subbiah</p>",
        "<p style='color:yellow'>11.50 - 12.40</p><p>AI19P62</p><p> <b>Data Analysis & Data Mining</b></p><p>Mrs. M. Sindhuja</p>",
        "<p style='color:yellow'>12:40 - 01.20</p><p><b>Lunch</b></p>",
        "<p style='color:yellow'>01.20 - 02.10</p><p>AI19641</p><p> <b>Computer Vision and its Applications</b></p>",
        "<p style='color:yellow'>02.10 - 03.00</p><p>AI19643</p><p> <b>Foundations of Natural Language Processing</b></p><p>Mrs. K. Sangeetha</p>"
    ],
    "4":[
        "<p style='color:yellow'>08.00 - 09.50</p><p>AI19643/AI19P62</p><p><b>(NLP Lab)</b>/<b>(DADM Lab)</b></p><p>Mrs. K. Sangeetha / Mrs. M. Sindhuja</p>",
        "<p style='color:yellow'>09.50 - 10.10</p><p><b>Break</b></p>",
        "<p style='color:yellow'>10.10 - 11.00</p><p>AI19643</p><p> <b>Foundations of Natural Language Processing</b></p><p>Mrs. K. Sangeetha</p>",
        "<p style='color:yellow'>11.00 - 11.40</p><p><b>Lunch</b></p>",
        "<p style='color:yellow'>11.40 - 01.20</p><p>AI19641/AI19611</p><p><b>(CV Lab)</b>/<b>(Mini Project)</b></p><p>Mr. K. Gopinath / Dr. S. Subbiah</p>",
        "<p style='color:yellow'>01.20 - 02.10</p><p>AI19644</p><p> <b>IOT Architecture and its Protocols</b></p><p>Mrs. S. Mahalakshmi</p>",
        "<p style='color:yellow'>02.10 - 03.00</p><p>AI19P62</p><p> <b>Data Analysis & Data Mining</b></p><p>Mrs. M. Sindhuja</p>"
    ],
    "5":[
        "<p style='color:yellow'>08.00 - 09.00</p><p>AI19641</p><p> <b>Computer Vision and its Applications</b></p><p>Mr. K. Gopinath</p>",
        "<p style='color:yellow'>09.00 - 09.50</p><p>AI19644</p><p> <b>IOT Architecture and its Protocols</b></p><p>Mrs. S. Mahalakshmi</p>",
        "<p style='color:yellow'>09.50 - 10.10</p><p><b>Break</b></p>",
        "<p style='color:yellow'>10.10 - 11.50</p><p>AI19644/AI19642</p><p><b>(IoT Lab)</b>/<b>(TSAF Lab)</b></p><p>Mrs. S. Mahalakshmi / Mrs. I. Eugene Berna</b></p>",
        "<p style='color:yellow'>11.50 - 12.30</p><p><b>Lunch</b></p>",
        "<p style='color:yellow'>12.30 - 01.20</p><p>BA19602</p><p> <b>Fundamentals of Accounting</b></p><p>Ms. K. P. Sajana</p>",
        "<p style='color:yellow'>01.20 - 02.10</p><p>AI19P62</p><p> <b>Data Analysis & Data Mining</b></p><p>Mrs. M. Sindhuja</p>",
        "<p style='color:yellow'>02.10 - 03.00</p><p>AI19642</p><p> <b>Time Series Analysis and Forecasting</b></p><p>Mrs. I. Eugene Berna</p>"
    ],
    "6":[
        "<p style='color:yellow'>08.00 - 09.00</p><p>AI19643</p><p> <b>Foundations of Natural Language Processing</b></p><p>Mrs. K. Sangeetha</p>",
        "<p style='color:yellow'>09.00 - 09.50</p><p>AI19642</p><p> <b>Time Series Analysis and Forecasting</b></p><p>Mrs. I. Eugene Berna</p>",
        "<p style='color:yellow'>09.50 - 10.10</p><p><b>Break</b></p>",
        "<p style='color:yellow'>10.10 - 11.50</p><p>AI19643/AI19P62</p><p><b>(NLP Lab)</b>/<b>(DADM Lab)</b></p><p>Mrs. K. Sangeetha / Mrs. M. Sindhuja</p>",
        "<p style='color:yellow'>11.50 - 12.30</p><p><b>Lunch</b></p>",
        "<p style='color:yellow'>12.30 - 01.20</p><p>AI19641</p><p> <b>Computer Vision and its Applications</b></p><p>Mr. K. Gopinath</p>",
        "<p style='color:yellow'>01.20 - 02.10</p><p><b>Counseling</b></p>",
        "<p style='color:yellow'>02.10 - 03.00</p><p>BA19602</p><p> <b>Fundamentals of Accounting</b></p><p>Ms. K. P. Sajana</p>"
    ]
  }]
  // var subject = ["<button>back</button>", "<a><button>Computer Vision and its Application</button></a>", "<a><button>Data Analysis and Data Mining</button></a>", "<a><button>Foundations of Natural Language Processing</button></a>", "<a><button>Fundamentals of Accounting</button></a>", "<a><button>IOT Architecture and its Protocols</button></a>", "<a><button>Mini-Project</button></a>", "<a><button>Problem Solving Techniques</button></a>", "<a><button>Time Series Analysis and Forecasting</a></button>"]
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
      $cards.eq(currentCard).fadeIn(5000);
      currentCard++;
      /*if (currentCard >= $cards.length) {
        currentCard = 0;
      }*/
    }
    setInterval(showCard, 1);

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

    if($('#syllabus-options').is(":visible")){
      $("#syllabus-options").hide();
    }

    function period(id, i){
      var c = document.getElementById("container");
      var card = document.createElement("div");
      card.className = "new-card"
      var card_content = document.createElement("div");
      card_content.className = "new-card-content"
      card_content.innerHTML = json[0][id][i];
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
      $('.new-card-container').show(800);
    })

    $('.new-card-container').click(function() {
      $('.new-card-container').hide(1500);
      $('.card').show(800,function(){
        const myNode = document.getElementById("container");
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
      }
      });
    })
  
    $("#syllabus").click(function(){
      // $("#books").hide(1000);
      // $("#syllabus").hide(1000);
      $("#options").hide(1000);
      $("#syllabus-options").show(2000);
    })
    $("#back").click(function(){
      // $("#books").hide(1000);
      // $("#syllabus").hide(1000);
      $("#options").show(1000);
      $("#syllabus-options").hide(2000);
    })

  });