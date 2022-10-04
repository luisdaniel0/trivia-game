/* grid with question on top and 4 answers, there should be a next/submit button and it should throw your score at the end ) */

let pos = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC, chD;
let restart = document.getElementsByClassName("restart");

//array of objects containing questions and answers
let questions = [
  {
    question: "Illmatic (1994)",
    a: "Biggie",
    b: "Jay Z",
    c: "Drake",
    d: "Nas",
    answer: "d"
  },

  {
    question: "My Beautiful Dark Twisted Fantasy (2010)",
    a: "Drake",
    b: "Frank Ocean",
    c: "Andre 3000",
    d: "Kanye West",
    answer: "b"
  },

  {
    question: "Get Rich or Die Tryin (2003)",
    a: "50 cent",
    b: "Jadakiss",
    c: "DMX",
    d: "Lloyd Banks",
    answer: "a",
  },

  {
    question: "Come Home with Me (2002)",
    a: "Juelz Santana",
    b: "Lil wayne",
    c: "Camron",
    d: "Eminem",
    answer: "c"
  },

  {
    question: "Tha Carter III (2008)",
    a: "50 Cent",
    b: "Eminem",
    c: "Lil Wayne",
    d: "Drake",
    answer: "c"
    
  },

  {
    question: "Blonde (2016)",
    a: "The Weeknd",
    b: "Frank Ocean",
    c: "Steve Lacy",
    d: "Tyler, The Creator",
    answer: "b"
    
  },

  {
    question: "Trilogy (2012)",
    a: "Frank Ocean",
    b: "Chris Brown",
    c: "The Weeknd",
    d: "Drake",
    answer: "c"
    
  },

  {
    question: "17 (2017)",
    a: "XXXTENTACION",
    b: "Kendrick lamar",
    c: "J.Cole",
    d: "Future",
    answer: "a"
    
  },

  {
    question: "The Life of Pablo (2016)",
    a: "Kid Cudi",
    b: "Travis Scott",
    c: "Kanye West",
    d: "Pablo Escobar",
    answer: "c"
    
  },

  {
    question: "Ready to Die (1994)",
    a: "2pac",
    b: "Biggie",
    c: "Big L",
    d: "Mase",
    answer: "b"
    
  }


];

function get(x) {
  return document.getElementById(x);
}

//render questions on page
function renderQuestion() {
  test = get("test");
  if (pos >= questions.length) {
    test.innerHTML = "<h2>You got " + correct + " out of " + questions.length + " questions correct </h2>";
    
    get("test_status").innerHTML = "Test completed";

    //resets the variable to allow to restart 
    pos = 0;
    correct = 0;

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
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chB + "</label><br>"
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chC + "</label><br>"
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chD + "</label><br><br>"
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}

function checkAnswer() {
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == questions[correct].answer) {
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

window.addEventListener("load", renderQuestion);

