let myQuestionArray = [
  {
    question: "1. EDM står för 'electro dance music'",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["b"],
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
    correctAnswer: ["b"],
    type: "radio",
  },
  {
    question:
      "3. Armada Music är ett skivbolag som grundades av bland annat DJ:en Armin Van Buuren.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["a"],
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
    correctAnswer: ["Minimal", "Acid", "Ambient"],
    type: "checkbox",
  },
  {
    question:
      "5. Första episoden av Armin Van Buurens radioshow 'A State of Trance' sändes juni 2001.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["a"],
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
    correctAnswer: ["c"],
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
    correctAnswer: ["Astrix", "Electric Universe"],
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
    correctAnswer: ["b"],
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
    correctAnswer: ["Forest", "Hi-tech", "Darkpsy"],
    type: "checkbox",
  },
  {
    question:
      "10. Musikgenren Techno kommer ursprungligen från Detroit, Michigan.",
    options: {
      a: "Sant",
      b: "Falskt",
    },
    correctAnswer: ["a"],
    type: "radio",
  },
];
//Variabler för att peka på rätt HTML-element som de olika Div:sen eller buttons.
const questionDiv = document.querySelector(".questionDiv");
const correctBtn = document.querySelector("#correctMyQuiz");
const resultDiv = document.querySelector(".resultDiv");
let filteredArray = myQuestionArray.filter(filterCorrectAnswerArray); //FILTRERA CORRECTANSWER SÅ MAN FÅR UT DE SOM HAR FLERA RÄTTA SVAR
let checkboxArray; // Vi deklarerar en variabel för senare användning, en array där de valda svar ska läggas till.
let matchingAnswersArray; //Skapar variabel för kommande filtrerad array
let score = 0;

createQuiz();

const allCheckboxes = document.querySelectorAll("input[type='checkbox']"); // Hämta alla checkboxes inför filtrering, finns 12 st checkbox-alternativ

function mergeArrays(arr) {
  //Funktion för att slå ihop arrayer med varandra så det blir en array (inför jämförelse sen)

  const AnswerCollection = [];
  filteredArray.forEach((arr) => {
    AnswerCollection.push(...arr.correctAnswer);
  });
  return AnswerCollection;
}
const allCorrectAnswersInAnArray = mergeArrays(filteredArray); //Variabeln för alla rätta svar mergade i en enda array.
console.log(allCorrectAnswersInAnArray);

//----------- FILTRERINGSSTYCKET----------------------------------------------------

let checkboxFilter = () => {
  resultDiv.innerHTML = ""; // Rensa tidigare sökresultat
  checkboxArray = [];

  let allCheckedBoxes = document.querySelectorAll(
    //Hämtar endast ifyllda checkboxes
    "input[type='checkbox']:checked"
  );

  allCheckedBoxes.forEach((box) => {
    checkboxArray.push(box.value);
  });
  console.log(checkboxArray);

  matchingAnswersArray = checkboxArray.filter((element) =>
    allCorrectAnswersInAnArray.includes(element)
  );
  console.log(matchingAnswersArray);
};

allCheckboxes.forEach((box) => {
  box.addEventListener("change", checkboxFilter);
});
//---------------END OF CHECKBOXFILTER.STYCKE------------------------------------------------

correctBtn.addEventListener("click", () => {
  correctMyQuiz();
});

function createQuiz() {
  //Funktion för att skapa quizet
  const displayQuiz = []; //Variabel för att spara allt jag vill skriva ut i html

  myQuestionArray.forEach((question, index) => {
    const optionsArray = []; //variabel för att spara alla options

    //En if/else if eftersom radio-buttons och checkboxes behöver köras på olika sätt.
    if (question.type === "checkbox") {
      for (letter in question.options) {
        optionsArray.push(
          `<label>
            <input type="checkbox" name="question${index}" value="${question.options[letter]}">
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
function filterCorrectAnswerArray(arr) {
  //Funktion för att filtrera fram alla frågor med flera rätta svarsval
  return arr.correctAnswer.length > 1;
}
function correctMyQuiz() {
  //Funktion för att rätta quizet
  console.log("hej från rätta quiz");
  let allOptions = document.querySelectorAll(".options"); //sparar alla val

  checkboxFilter();
  matchingAnswersArray.forEach(addScore);
  function addScore() {
    score++;
    console.log(score);
  }
  //Loopa igenom alla frågor för att kolla vad användaren svarat och ge poäng om svaret överensstämmer med correctAnswer
  myQuestionArray.forEach((question, index) => {
    const questionOption = allOptions[index];
    let isOptionChecked = `input[name=question${index}]:checked`;
    let userAnswers = (questionOption.querySelector(isOptionChecked) || {})
      .value;
    if (question.type === "radio") {
      if (userAnswers === question.correctAnswer[0]) {
        score++;
        console.log("Din radioscore " + score);
      }
    }
  });
  console.log("Din fullständiga score när rättningen är klar: " + score);
}

//Darkmode/Lightmode-knapp
let tooglemodeBtn = document.querySelector(".changeMode");
tooglemodeBtn.addEventListener("click", () => {
  let body = document.body;
  body.classList.toggle("darkmode");
});
