let myQuestionArray = [
  {
    question: "1. EDM står för 'electro dance music'",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: "a",
    type: "radio",
  },
  {
    question:
      "2. Ursprunget till musicgenren 'Trance' spåras vanligtsvis till vilket land?",
    options: {
      a: "USA",
      b: "Tyskland",
      c: "Sverige",
      d: "Portugal",
    },
    correctAnswer: "b",
    type: "radio",
  },
  {
    question:
      "3. Armada Music är ett skivbolag som grundades av bland annat DJ:en Armin Van Buuren.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: "a",
    type: "radio",
  },
  {
    question: "4. Vilka/vilken av följande genres är sub-genres till Techno?",
    options: {
      a: "Minimal",
      b: "Acid",
      c: "Psytrance",
      d: "Ambient",
    },
    correctAnswer: ["a", "b", "d"],
    type: "checkbox",
  },
  {
    question:
      "5. Första episoden av Armin Van Buurens radioshow 'A State of Trance' sändes juni 2001.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    type: "radio",
  },
  {
    question:
      "6. Vilken är max BPM (beats per minute) för de flesta Trance-låtar?",
    options: {
      a: "110 BPM",
      b: "130 BPM",
      c: "140 BPM",
      d: "160 BPM",
    },
    correctAnswer: "c",
    type: "radio",
  },
  {
    question: "7. Vilka av dessa DJ:s gör Psytrance (Psychedelic trance)?",
    options: {
      a: "Astrix",
      b: "Swedish House Mafia",
      c: "Wilkinson",
      d: "Electric Universe",
    },
    correctAnswer: ["a", "d"],
    type: "checkbox",
  },
  {
    question:
      "8. Vilken av dessa är den största Psytrance-festivalen i världen?",
    options: {
      a: "Ozora, Ungern",
      b: "BOOM Festival, Portugal",
      c: "Universo Paralello, Brasilien",
      d: "Psy-Fi, Nederländerna",
    },
    correctAnswer: "b",
    type: "radio",
  },
  {
    question:
      "9. Vilka av dessa genres är en snabbare och mörkare genre av trance?",
    options: {
      a: "Forest",
      b: "Psydub",
      c: "Hi-tech",
      d: "Darkpsy",
    },
    correctAnswer: ["a", "c", "d"],
    type: "checkbox",
  },
  {
    question:
      "10. Musikgenren Techno kommer ursprungligen från Detroit, Michigan.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: "a",
    type: "radio",
  },
];

//Variabler för att peka på rätt HTML-element som de olika Div:sen eller buttons.
const questionDiv = document.querySelector(".questionDiv");
const correctBtn = document.querySelector("#correctMyQuiz");
const resultDiv = document.querySelector(".resultDiv");

createQuiz();

correctBtn.addEventListener("click", () => {
  correctMyQuiz();
});

function createQuiz() {
  const displayQuiz = []; //Variabel för att spara allt jag vill skriva ut i html

  myQuestionArray.forEach((question, index) => {
    const optionsArray = []; //variabel för att spara alla options

    //En if/else if eftersom radio-buttons och checkboxes behöver köras på olika sätt.
    if (question.type === "checkbox") {
      for (letter in question.options) {
        //pushar in namnet med indexet för annars fungerar inte radioknapparna. De deselectas annars direkt man väljer en ny
        optionsArray.push(
          `<label>
            <input type="checkbox" name="question${index}" value="${letter}">
            ${question.options[letter]}
          </label>`
        );
      }
    } else if (question.type === "radio") {
      for (letter in question.options) {
        optionsArray.push(
          `<label>
          <input type="radio" name="question${index}" value="${letter}">
            ${question.options[letter]}
          </label>`
        );
      }
    }

    displayQuiz.push(
      `<div class="question"><strong>${question.question}</strong></div>
      <div class="options"> ${optionsArray.join("")} </div>`
    );
  });
  questionDiv.innerHTML = displayQuiz.join("");
}

function correctMyQuiz(){
  
}

//Darkmode/Lightmode-knapp
let tooglemodeBtn = document.querySelector(".changeMode");
tooglemodeBtn.addEventListener("click", () => {
  let body = document.body;
  body.classList.toggle("darkmode");
});