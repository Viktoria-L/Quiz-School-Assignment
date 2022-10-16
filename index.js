//Darkmode/Lightmode-knapp
let tooglemodeBtn = document.querySelector(".changeMode");
tooglemodeBtn.addEventListener("click", () => {
  toogleDarkmode();
});

//Funktion för att ändra bakgrundsfärgen
function toogleDarkmode() {
  let body = document.body;
  body.classList.toggle("darkmode");
}