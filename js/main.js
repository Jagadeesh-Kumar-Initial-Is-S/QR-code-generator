//variables
const btnGenerateQRCode = document.querySelector("#btn-generate-qr");
const inputColor1 = document.querySelector("#color-bg-qr");
const inputColor2 = document.querySelector("#color-qr");
const inputText = document.querySelector("#content");
const imgQrCode = document.querySelector("img");
// const width = document.querySelector("#width");
// const height = document.querySelector("#height");


//event
btnGenerateQRCode.addEventListener("click", generateQRCode);

//functions
async function generateQRCode() {

    const color1 = getColor1();

    const color2 = getColor2();

    const content = getContent();

    const urlQrCode = await getQrCode(content, color1, color2);

    setImg(urlQrCode);

};

function getColor1() {

    return inputColor1.value.split("#")[1];

};

function getColor2() {

    return inputColor2.value.split("#")[1];

};

function getContent() {

    return inputText.value;

};



async function getQrCode(content, color1, color2 ) {

    const urlBase = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

    const url = urlBase + `${content}&color=${color2}&bgcolor=${color1}`;

    const response = await fetch(url);

    const urlImgQrCode = response.url
    
    return urlImgQrCode;

};

function setImg(url) {

    imgQrCode.setAttribute("src", url);

};