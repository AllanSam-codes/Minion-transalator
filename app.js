var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output")



function clickHandler() {
    outputdiv.innerText = "adjandjkfenfji" + txtInput.value;
};

btntranslate.addEventListener("click", clickHandler)