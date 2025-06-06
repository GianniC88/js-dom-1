/*Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)*/

console.log(`work it`);
/*costante image*/
const imageEl = document.querySelector("img");
console.log(imageEl);

const buttonEl = document.querySelector("button");
console.log(buttonEl);

buttonEl.addEventListener("click", function () {
  // SE Accendi
  if (buttonEl.textContent === "Accendi") {
    imageEl.src = "img/yellow_lamp.png";
    buttonEl.textContent = "Spegni";
  } else {
    imageEl.src = "img/white_lamp.png";
    buttonEl.textContent = "Accendi";
  }
  // console.log("button click");
});

// ButtonEl.addEventListener(`click`, () => {
//   console.log("premi il pulsante");
//   console.log(ButtonEl.scr);

//   ImageEl.src = "./assets/img/white_lamp.png";
// });
