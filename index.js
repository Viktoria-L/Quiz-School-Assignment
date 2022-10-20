let myQuestionArray = [
  {
    question: "1. EDM står för 'Electro dance music'",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["Falskt"],
    type: "radio",
    info: "EDM står för Electronic Dance Music.",
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
    correctAnswer: ["Tyskland"],
    type: "radio",
    info: "Trance utvecklades under tidigt 90-tal och härstammar från Tyskland där den influerades av techno och house-scenen.",
  },
  {
    question:
      "3. Armada Music är ett skivbolag som grundades av bland annat DJ:en Armin Van Buuren.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["Sant"],
    type: "radio",
    info: "Armada Music grundades 2003 av bl.a. Armin Van Buuren.",
  },
  {
    question: "4. Vilka/vilken av följande genres är sub-genres till Techno?",
    options: {
      a: "Minimal",
      b: "Acid",
      c: "Psytrance",
      d: "Ambient",
    },
    correctAnswer: ["Minimal", "Acid", "Ambient"],
    type: "checkbox",
    info: "Psytrance är en egen genre som inte räknas in att höra till Techno.",
  },
  {
    question:
      "5. Första episoden av Armin Van Buurens radioshow 'A State of Trance' sändes juni 2001.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["Sant"],
    type: "radio",
    info: "Fram till idag har det sänts 1091 avsnitt av A state of Trance.",
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
    correctAnswer: ["140 BPM"],
    type: "radio",
    info: "Trance ligger oftast på mellan 130-140 BPM.",
  },
  {
    question:
      "7. Vilka av dessa producenter gör Psytrance (Psychedelic trance)?",
    options: {
      a: "Astrix",
      b: "Swedish House Mafia",
      c: "Wilkinson",
      d: "Electric Universe",
    },
    correctAnswer: ["Astrix", "Electric Universe"],
    type: "checkbox",
    info: "Astrix och Electric Universe är kända psytrance-producenter.",
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
    correctAnswer: ["BOOM Festival, Portugal"],
    type: "radio",
    info: "BOOM festival tar emot ca 50 000 besökare.",
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
    correctAnswer: ["Forest", "Hi-tech", "Darkpsy"],
    type: "checkbox",
    info: "Psydub är en genre av psychedelic trance och dub-music, som har en lugnare vibe.",
  },
  {
    question:
      "10. Musikgenren Techno kommer ursprungligen från Detroit, Michigan.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["Sant"],
    type: "radio",
    info: "Techno uppstod i mitten av 80-talet i Detroit.",
  },
];
//Variabler för att peka på rätt HTML-element som de olika Div:sen eller buttons.
const questionDiv = document.querySelector(".questionDiv");
const correctBtn = document.querySelector("#correctMyQuiz");
const resultDiv = document.querySelector(".resultDiv");
let questionFour; //  Deklarerar variabler för checkbox-frågorna. De heter frågans rätta plats i quizet , index är -1.
let questionSeven;
let questionNine;
let allCheckedBoxes;
let isCorrected = false;

createQuiz();
const allRadioButtons = document.querySelectorAll("input[type='radio']"); //??
const allCheckboxes = document.querySelectorAll("input[type='checkbox']"); // Hämta alla checkboxes inför filtrering, finns 12 st checkbox-alternativ

//Filtrerings-funktion för att få ut icheckade checkbox-frågorna i arrays
let checkboxFilter = () => {
  resultDiv.innerHTML = ""; // Rensa tidigare sökresultat
  questionFour = [];
  questionSeven = [];
  questionNine = [];

  allCheckedBoxes = document.querySelectorAll(
    //hämtar icheckade boxes
    "input[type='checkbox']:checked"
  );

  allCheckedBoxes.forEach((box) => {
    if (box.name === "question3") {
      questionFour.push(box.value);
    } else if (box.name === "question6") {
      questionSeven.push(box.value);
    } else if (box.name === "question8") {
      questionNine.push(box.value);
    }
  });
};

allCheckboxes.forEach((box) => {
  box.addEventListener("change", checkboxFilter);
});

correctBtn.addEventListener("click", () => {
  if (!isCorrected) {
    correctMyQuiz();
  } else {
 myAlert();
  };
  });


//Funktion för att skapa quizet
function createQuiz() {
  const displayQuiz = []; //Variabel för att spara allt jag vill skriva ut i html

  myQuestionArray.forEach((question, index) => {
    const optionsArray = []; //variabel för att spara alla options

    //Loopar igenom alla options och sätter dess label/text
    if (question.type === "checkbox") {
      for (letter in question.options) {
        optionsArray.push(
          `<label>
          <input type="${question.type}" name="question${index}" value="${question.options[letter]}">
           <small>${question.options[letter]}</small>
          </label>`
        );
      }
    } else if (question.type === "radio") {
      for (letter in question.options) {
        optionsArray.push(
          `<label>
          <input type="${question.type}" name="question${index}" value="${question.options[letter]}">
           <small>${question.options[letter]}</small>
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

//Funktion för att rätta quizet
function correctMyQuiz() {
  let score = 0;
  let allOptions = document.querySelectorAll(".options"); //Variabel som hämtar in alla options

  checkboxFilter();

  //Loopa igenom alla frågor för att kolla vad användaren svarat och ge poäng om svaret överensstämmer med correctAnswer
  myQuestionArray.forEach((question, index) => {
    let para = document.createElement("para");
    const questionOption = allOptions[index];
    let isOptionChecked = `input[name=question${index}]:checked`;
    let userAnswers = (questionOption.querySelector(isOptionChecked) || {})
      .value;

    if (question.type === "radio") {
      incorrectAnswer(userAnswers === question.correctAnswer[0]);
    }
    if (question.type === "checkbox") {
      incorrectAnswer(
        compareArrays(questionFour, question.correctAnswer) ||
          compareArrays(questionSeven, question.correctAnswer) ||
          compareArrays(questionNine, question.correctAnswer)
      );
    }

    function incorrectAnswer(condition) {
      if (condition) {
        score++;
        allOptions[index].style.color = "green";
        para.innerText = `Du har svarat rätt!\n ${question.info}`;
        para.style.display = "inline";
        para.style.color = "black";
        para.style.fontSize = "12px";
        allOptions[index].append(para);
      } else {
        allOptions[index].style.color = "red";
        para.innerText = `Du har svarat fel!\n Rätt svar är: ${question.correctAnswer}. ${question.info}`;
        para.style.display = "inline";
        para.style.color = "black";
        para.style.fontSize = "12px";
        allOptions[index].append(para);
      }
    }
  });

  let scoreP = document.createElement("p");
  if (score > 10 * 0.75) {
    scoreP.innerText = `Grattis! Du fick mycket väl godkänt!\nDu fick ${score} poäng av 10. `;
    scoreP.style.color = "green";
  } else if (score >= 10 * 0.5) {
    scoreP.innerText = `Grattis! Du fick godkänt!\nDu fick ${score} poäng av 10. `;
    scoreP.style.color = "orange";
  } else if (score < 10 * 0.5) {
    scoreP.innerText = `Buhu! Det där gick inte så bra, det blev underkänt.\nDu fick ${score} poäng av 10. `;
    scoreP.style.color = "red";
  }

  let resultatH = document.createElement("h2");
  resultatH.innerText = "Resultat";
  resultatH.style.color = "rebeccapurple";
  resultatH.style.fontSize = "18px";
  resultDiv.append(resultatH, scoreP);

  isCorrected = true;
}
//Darkmode/Lightmode-knapp
let tooglemodeBtn = document.querySelector(".changeMode");
tooglemodeBtn.addEventListener("click", () => {
  let body = document.body;
  body.classList.toggle("darkmode");
});

function compareArrays(a, b) {
  //Funktion för att jämföra arrayer
  return a.toString() === b.toString();
}

function myAlert() {
  let text = "Du har redan rättat ditt quiz!\nTryck OK för att nollställa.";
  if (confirm(text) == true) {
    window.location.reload();
  }}
