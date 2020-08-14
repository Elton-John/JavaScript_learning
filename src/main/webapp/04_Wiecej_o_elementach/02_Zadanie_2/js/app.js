/*
  Poniżej napisz kod rozwiązujący zadania
 */
// Napisz kod JavaScript, który wprowadzi następujące zmiany:
//
//     Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo
// (obrazek jest nastawiany za pomocą background-image).
// Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
//     Poprawi szerokość elementu o klasie chrome (powinno być 100px).


let divElements = document.querySelectorAll(".card-body");
//console.log(divElements);
divElements = Array.from(divElements);

const chromeTree = divElements[0];
console.log(chromeTree);

let chromeHeadingElement = chromeTree.querySelector("h3");
chromeHeadingElement.innerText = "Chrome";
let chromeImgDivElement = chromeTree.querySelector(".chrome");
chromeImgDivElement.style.backgroundImage = "url(./img/chrome.png)";
chromeImgDivElement.style.width = "100px";
let chromeAnchorElement = chromeTree.querySelector("a");
chromeAnchorElement.setAttribute("href", "#");
chromeAnchorElement.innerText = "Chrome";

const edgeTree = divElements[1];
console.log(edgeTree);
let edgeHeadingElement = edgeTree.querySelector("h3");
edgeHeadingElement.innerText = "Microsoft edge";
let edgeImgDivElement = edgeTree.querySelector(".edge");
edgeImgDivElement.style.backgroundImage = "url(\"./img/edge.jpg\")";
edgeImgDivElement.style.width = "100px";
let edgeAnchorElement = edgeTree.querySelector("a");
edgeAnchorElement.setAttribute("href", "#");
edgeAnchorElement.innerText = "Edge";

const firefoxTree = divElements[2];
console.log(firefoxTree);
let firefoxHeadingElement = firefoxTree.querySelector("h3");
firefoxHeadingElement.innerText = "Firefox";
let firefoxImgDivElement = firefoxTree.querySelector(".firefox");
firefoxImgDivElement.style.backgroundImage = "url(\"./img/firefox.jpg\")";
firefoxImgDivElement.style.width = "100px";
let firefoxAnchorElement = firefoxTree.querySelector("a");
firefoxAnchorElement.setAttribute("href", "#");
firefoxAnchorElement.innerText = "Firefox";