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
let prezzoBiglietto,
  namePassenger,
  kmViaggio,
  etaPassenger,
  randomCarr,
  randomcodeCP;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  containerBiglietto.classList.remove("noshow");
  namePassenger = namePassengerHtml.value;
  kmViaggio = bigliettoKm.value;
  etaPassenger = ageHtml.value;
  console.log(namePassenger);
  generaBiglettoPrezzo(kmViaggio, etaPassenger);
  console.log(prezzoBiglietto);
  nameDisplay.innerHTML = namePassenger;
  randomCarr = generaRandomNumber(1, 15);
  randomcodeCP = generaRandomNumber(0, 99999);
  carrDisplay.innerHTML = randomCarr;
  codeDisplay.innerHTML = randomcodeCP;
  prezzoDisplay.innerHTML = prezzoBiglietto;
});

btnAnnulla.addEventListener("click", deleteAll);

function generaBiglettoPrezzo(kms, eta) {
  prezzoBiglietto = (kms * prezzoKm).toFixed(2);
  const minDiscount = prezzoBiglietto * 0.2;
  const pensDiscount = prezzoBiglietto * 0.4;
  eta === "minorenne" || eta === "pensionato"
    ? (bigliettoType.innerHTML = `Bigletto Ridotto`)
    : 0;
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

function deleteAll() {
  location.reload();
}

function generaRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
