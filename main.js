const namePassengerHtml = document.querySelector("#namePassenger");
const bigliettoKm = document.querySelector("#kmJourney");
const ageHtml = document.querySelector("#agePassenger");
const btnGenBigletto = document.querySelector("#genera");
const btnAnnulla = document.querySelector("#delete");

const prezzoKm = 0.21;
let prezzoBiglietto,
  namePassenger,
  kmViaggio,
  etaPassenger,
  randomCarr,
  randomcodeCP;

btnGenBigletto.addEventListener("click", function () {
  namePassenger = namePassengerHtml.value;
  kmViaggio = bigliettoKm.value;
  etaPassenger = ageHtml.value;
  console.log(namePassenger);
  generaBiglettoPrezzo(kmViaggio, etaPassenger);
  console.log(prezzoBiglietto);
  randomCarr = generaRandomNumber(1, 11);
  randomcodeCP = generaRandomNumber(0, 99999);
});

btnAnnulla.addEventListener("click", deleteAll);

function generaBiglettoPrezzo(kms, eta) {
  prezzoBiglietto = (kms * prezzoKm).toFixed(2);
  const minDiscount = prezzoBiglietto * 0.2;
  const pensDiscount = prezzoBiglietto * 0.4;
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
