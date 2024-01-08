const namePassengerHtml = document.querySelector("#namePassenger");
const bigliettoKm = document.querySelector("#kmJourney");
const ageHtml = document.querySelector("#agePassenger");
const btnGenBigletto = document.querySelector("#genera");

const prezzoKm = 0.21;
let prezzoBiglietto, namePassenger, kmViaggio, eta;

btnGenBigletto.addEventListener("click", function () {
  namePassenger = namePassengerHtml.value;
  kmViaggio = bigliettoKm.value;
  eta = ageHtml.value;
  console.log(namePassenger);
  console.log(kmViaggio);
  console.log(eta);
});

// function generaBiglettoPrezzo(kms, eta) {
//   prezzoBiglietto = kms * prezzoKm;
//   const minDiscount = prezzoBiglietto * 0.2;
//   const pensDiscount = prezzoBiglietto * 0.4;
//   if (eta === "minorenne") {
//     prezzoBiglietto = prezzoBiglietto - minDiscount;
//     return prezzoBiglietto;
//   } else if (eta === "pensionato") {
//     prezzoBiglietto = prezzoBiglietto - pensDiscount;
//     return prezzoBiglietto;
//   } else {
//     return prezzoBiglietto;
//   }
// }
