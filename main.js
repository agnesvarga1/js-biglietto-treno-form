//selected html elements
const form = document.querySelector("form");
const namePassengerHtml = document.querySelector("#namePassenger");
const bigliettoKm = document.querySelector("#kmJourney");
const ageHtml = document.querySelector("#agePassenger");
const btnGenBigletto = document.querySelector("#genera");
const btnAnnulla = document.querySelector("#delete");
const containerBiglietto = document.querySelector(".biglietto-container");
const nameDisplay = document.querySelector("#pass-nome");
const bigliettoType = document.querySelector("#ticket-type-display");
const carrDisplay = document.querySelector("#carr-display");
const codeDisplay = document.querySelector("#code-display");
const prezzoDisplay = document.querySelector("#prezzo-display");
const prezzoKm = 0.21;
//variables
let prezzoBiglietto,
  namePassenger,
  kmViaggio,
  etaPassenger,
  randomCarr,
  randomcodeCP;
//event listener on form on submit
form.addEventListener("submit", function (e) {
  //function on event form does not reload as default
  e.preventDefault();
  //make ticket appear when form got submited
  containerBiglietto.classList.remove("noshow");
  //save values from input fields into vars
  namePassenger = namePassengerHtml.value;
  kmViaggio = bigliettoKm.value;
  etaPassenger = ageHtml.value;
  console.log(namePassenger);
  //fn for generate price of ticket
  //saved input vals passed as params
  generaBiglettoPrezzo(kmViaggio, etaPassenger);
  console.log(prezzoBiglietto);
  //css style for name
  nameDisplay.style.textTransform = "capitalize";

  nameDisplay.innerHTML = namePassenger;
  //generate random numbers for code and carriage
  randomCarr = generaRandomNumber(1, 15);
  randomcodeCP = generaRandomNumber(0, 99999);
  //display calculated values in html
  carrDisplay.innerHTML = randomCarr;
  codeDisplay.innerHTML = randomcodeCP;
  prezzoDisplay.innerHTML = prezzoBiglietto;
});
//annulla btn reloads the page on click
btnAnnulla.addEventListener("click", deleteAll);
///fn for compute ticket price apply discount based on age

function generaBiglettoPrezzo(kms, eta) {
  prezzoBiglietto = (kms * prezzoKm).toFixed(2);
  //constants for discount price
  const minDiscount = prezzoBiglietto * 0.2;
  const pensDiscount = prezzoBiglietto * 0.4;
  //display ticeket type based on age group selected
  eta === "minorenne" || eta === "pensionato"
    ? (bigliettoType.innerHTML = `Bigletto Ridotto`)
    : 0;
  //calc exact ticket price based on age group returns price of the ticket
  if (eta === "minorenne") {
    prezzoBiglietto = (prezzoBiglietto - minDiscount).toFixed(2);

    return prezzoBiglietto;
  } else if (eta === "pensionato") {
    prezzoBiglietto = (prezzoBiglietto - pensDiscount).toFixed(2);
    return prezzoBiglietto;
  } else {
    return prezzoBiglietto;
  }
}
//fn to reload page
function deleteAll() {
  location.reload();
}
//random number generator in a range custom
function generaRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
