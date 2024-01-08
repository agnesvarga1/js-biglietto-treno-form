const namePassengerHtml = document.querySelector("#namePassenger");
const bigliettoKm = document.querySelector("#kmJourney");
const ageHtml = document.querySelector("#agePassenger");
const btnGenBigletto = document.querySelector("#genera");

const prezzoKm = 0.21;
let prezzoBiglietto, namePassenger, kmViaggio, etaPassenger;

btnGenBigletto.addEventListener("click", function () {
  namePassenger = namePassengerHtml.value;
  kmViaggio = bigliettoKm.value;
  etaPassenger = ageHtml.value;
  console.log(namePassenger);
  generaBiglettoPrezzo(kmViaggio, etaPassenger);
  console.log(prezzoBiglietto);
});

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
