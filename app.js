var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
console.log(txtinput)

function clickHandler() {
    console.log("Cliked!");
    console.log("inout", txtinput.value);

};

btntranslate.addEventListener("click", clickHandler)