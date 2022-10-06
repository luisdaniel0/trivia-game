/* grid with question on top and 4 answers, there should be a next/submit button and it should throw your score at the end ) */

let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC, chD;
let playNowBtn = document.querySelector(".playNow");
let restartBtn = document.querySelector(".restart");
let questionImg = document.querySelector(".questionImg");

//array of objects containing questions and answers
let questions = [
  {
    question: "Illmatic (1994)",
    img: "/img/IllmaticNas.jpeg",
    a: "Biggie",
    b: "Jay Z",
    c: "Drake",
    d: "Nas",
    answer: "D"
  },

  {
    question: "My Beautiful Dark Twisted Fantasy (2010)",
    img: "/img/MBDTF.jpeg",
    a: "Drake",
    b: "Frank Ocean",
    c: "Andre 3000",
    d: "Kanye West",
    answer: "D"
  },

  {
    question: "Get Rich or Die Tryin (2003)",
    img: "Get-rich-or-die-tryin.jpeg",
    a: "50 cent",
    b: "Jadakiss",
    c: "DMX",
    d: "Lloyd Banks",
    answer: "A",
  },

  {
    question: "Come Home with Me (2002)",
    img: "come-home-with-me.jpeg",
    a: "Juelz Santana",
    b: "Lil wayne",
    c: "Cam'ron",
    d: "Eminem",
    answer: "C"
  },

  {
    question: "Tha Carter III (2008)",
    a: "50 Cent",
    b: "Eminem",
    c: "Lil Wayne",
    d: "Drake",
    answer: "C"
    
  },

  {
    question: "Blond (2016)",
    a: "The Weeknd",
    b: "Frank Ocean",
    c: "Steve Lacy",
    d: "Tyler, The Creator",
    answer: "B"
    
  },

  {
    question: "Trilogy (2012)",
    a: "Frank Ocean",
    b: "Chris Brown",
    c: "The Weeknd",
    d: "Drake",
    answer: "C"
    
  },

  {
    question: "17 (2017)",
    a: "XXXTENTACION",
    b: "Kendrick lamar",
    c: "J.Cole",
    d: "Future",
    answer: "A"
    
  },

  {
    question: "The Life of Pablo (2016)",
    a: "Kid Cudi",
    b: "Travis Scott",
    c: "Kanye West",
    d: "Pablo Escobar",
    answer: "C"
    
  },

  {
    question: "Ready to Die (1994)",
    a: "2pac",
    b: "Biggie",
    c: "Big L",
    d: "Mase",
    answer: "B"
    
  }


];

function get(x) {
  return document.getElementById(x);
}

//render questions on page
function renderQuestion() {
  
    // document.querySelector('.questionImg').src = "img/IllmaticNas.jpeg"
  


  test = get("test");
  if (pos >= questions.length) {
    playNowBtn.classList.add("hidden");
    // questionImg.innerHTML="<src=" + 

    console.log('hello')
    test.innerHTML = "<h2>You got a score of " + correct + "/100 </h2>";

    
    get("test_status").innerHTML = "Test completed";

    //resets the variable to allow to restart 
    pos = 0;
    
    

    return false;

    

  }
  
   

  get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;

  //display the question
  test.innerHTML = "<h3>" + question + "</h3";

  //display the multiple choices

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><br>"
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><br>"
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br>"
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + chD + "</label><br><br>"
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";


}

function checkAnswer() {
  
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == questions[pos].answer) {
    //each time there is a correct answer this value increases
    correct = correct + 10;
  }

  
  
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();

  restartBtn.addEventListener("submit", (e) => {
    
  });

  

}




window.addEventListener("load", renderQuestion);



//button to  checkanswer


//refactor with function that checks answer as u go 


//make a comparison and add if else to add/subtract as u go 