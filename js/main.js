const nome = document.getElementById("input-nome");
const eta = document.getElementById("select-eta");
const km = document.getElementById("input-kilometri");
// per prendere direttamente la value da input-kilometri (object destructuring)
// let {value:kmValue}=document.getElementById("input-kilometri")
const tariffa = 0.21;
const scontoOver65 = 0.6;
const scontoMinorenni = 0.8;

const bottone = document.getElementById("button");
bottone.addEventListener("click", function () {
  let prezzoBiglietto;
  let tipoBiglietto;
  if (eta.value === "minorenne") {
    prezzoBiglietto = tariffa * parseInt(km.value) * scontoMinorenni;
    tipoBiglietto = "Biglietto Minorenni";
  } else if (eta.value === "over65") {
    prezzoBiglietto = tariffa * parseInt(km.value) * scontoOver65;
    tipoBiglietto = "Biglietto over 65";
  } else {
    prezzoBiglietto = tariffa * parseInt(km.value);
    tipoBiglietto = "Biglietto Standard";
  }
  console.log("Prezzo: ", prezzoBiglietto);
  console.log("Tipologia biglietto: ", tipoBiglietto);
  console.log("codice cp: ", Math.floor(Math.random() * 100000));
  console.log("N° carrozza: ", Math.floor(Math.random() * 10));
});
