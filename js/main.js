const nome = document.getElementById("input-nome");
const eta = document.getElementById("select-eta");
const km = document.getElementById("input-kilometri");
// per prendere direttamente la value da input-kilometri (object destructuring)
// let {value:kmValue}=document.getElementById("input-kilometri")
const tariffa = 0.21;
const scontoOver65 = 0.6;
const scontoMinorenni = 0.8;

const outputBiglietto = document.getElementById("output-biglietto")


const bottone = document.getElementById("button");
const bottoneBack = document.getElementById("button-back");
bottone.addEventListener("click", function () {
  let prezzoBiglietto;
  let tipoBiglietto;
  if (eta.value === "minorenne") {
    prezzoBiglietto = tariffa * Number(km.value) * scontoMinorenni;
    tipoBiglietto = "Biglietto Minorenni";
  } else if (eta.value === "over65") {
    prezzoBiglietto = tariffa * Number(km.value) * scontoOver65;
    tipoBiglietto = "Biglietto over 65";
  } else {
    prezzoBiglietto = tariffa * Number(km.value);
    tipoBiglietto = "Biglietto Standard";
  }

  document.getElementById("nome-passeggero").innerHTML=nome.value
  document.getElementById("tipo-biglietto").innerHTML=tipoBiglietto
  document.getElementById("prezzo-biglietto").innerHTML=prezzoBiglietto.toFixed(2)
  document.getElementById("num-carrozza").innerHTML=Math.floor(Math.random() * 10)
  document.getElementById("codice-cp").innerHTML=Math.floor(Math.random() * 100000)
  console.log("Nominativo: ", nome.value)
  console.log("Prezzo: ", prezzoBiglietto);
  console.log("Tipologia biglietto: ", tipoBiglietto);
  console.log("codice cp: ", Math.floor(Math.random() * 100000));
  console.log("N° carrozza: ", Math.floor(Math.random() * 10));
  outputBiglietto.className = "container rounded bgSecondary p-2"
});

bottoneBack.addEventListener("click", function () {
  outputBiglietto.className = "container rounded bgSecondary p-2 d-none"
  nome.value=""
  eta.value=""
  km.value=""
});
