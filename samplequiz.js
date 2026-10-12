const questions = [
    {
    q: "what lang run on browser?",
    options: ["java","c++","c","javascript"],
    answer: "javascript"
    },
     {
    q: "Which HTML tag is used to create a hyperlink",
    options: ["<link>","<a>"," <href>", "<button></button>"],
    answer: "<a>"
    },
     {
    q: "What is the correct CSS syntax to select an element with the id header?" ,
    options: [".header","#header","header","*header"],
    answer: "#header"
    },
     {
    q: "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["*","=","==","-"],
    answer: "="
     },
      {
    q: "Which CSS property controls the size of text?",
    options: ["text-style","font-size","text-size","font-style"],
    answer: "font-size"
    },
  
  {
    q: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Management Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    q: "Which HTML tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<paragraph>", "<text>"],
    answer: "<p>"
  },
  {
    q: "Which tag is used to create the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>"
  },
  {
    q: "Which HTML attribute specifies the URL of a link?",
    options: ["src", "href", "link", "url"],
    answer: "href"
  },
  {
    q: "Which tag is used to insert an image in HTML?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    answer: "<img>"
  },
  {
    q: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-bold", "font-style", "font-bold"],
    answer: "font-weight"
  },
  {
    q: "Which CSS property is used to add space inside an element?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "padding"
  },
  {
    q: "Which CSS property is used to add space outside an element?",
    options: ["padding", "margin", "spacing", "outside"],
    answer: "margin"
  },
  {
    q: "Which CSS layout system is commonly used to create flexible one-dimensional layouts?",
    options: ["Float", "Flexbox", "Position", "Table"],
    answer: "Flexbox"
  },
   {
    q: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
   {
    q: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "add()"],
    answer: "push()"
  },
  {
    q: "Which method removes the last element from an array?",
    options: ["remove()", "delete()", "pop()", "shift()"],
    answer: "pop()"
  },
  {
    q: "Which keyword is used to define a function?",
    options: ["function", "func", "define", "method"],
    answer: "function"
  },
  {
    q: "Which method is used to select an element by its ID?",
    options: ["document.query()", "document.getElementById()", "document.getId()", "document.selectId()"],
    answer: "document.getElementById()"
  },
  {
    q: "Which tag is used to create the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>"
  }
 
]
let index = 0;
let score =0;
let selected=false;

const questionE1 = document.getElementById('questions');
const optionsList = document.getElementById('optionsList');
const nextBtn = document.getElementById('nextBtn');
const resultE1 = document.getElementById('result');
const progressE1= document.getElementById('progress');

function loadQuestion(){
    selected = false;
    let current = questions[index];
    progressE1.textContent = `Question ${index+1} of ${questions.length}`;
    questionE1.textContent = current.q;
    optionsList.innerHTML='';
    current.options.forEach(option =>{
        let li = document.createElement('li');
        li.textContent = option;
        li.onclick=function (){
            if(selected) return;
            selected = true;
            if(option === current.answer){
                li.classList.add('correct');
                score++
            }else{
                li.classList.add('wrong')
            }
            }
            optionsList.appendChild(li)

        })
    }

    function nextQuestion(){
        index++;
        if(index < questions.length){
            loadQuestion();
        }else{
            showResult();
        }
    }
function showResult(){
    questionE1.textContent = 'Quiz finished';
    optionsList.innerHTML ='';
    progressE1.innerHTML ='';
    resultE1.textContent = `your Score: ${score}/${questions.length}`;
    nextBtn.style.display = 'none';
    let restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart quiz';
    resultE1.appendChild(document.createElement("br"))
    resultE1.appendChild(restartBtn);
    restartBtn.onclick = function(){
        index=0;
        score=0;
        nextBtn.style.display = 'block';
        resultE1.textContent = '';
        loadQuestion();      
    }
}
loadQuestion(); 