let nome=document.getElementById("input-nome")
let eta=document.getElementById("select-eta")
let km=document.getElementById("input-kilometri")


const bottone=document.getElementById("button")
bottone.addEventListener("click", function(){
    console.log(nome.value);
    console.log(eta.value);
    console.log(km.value);
});