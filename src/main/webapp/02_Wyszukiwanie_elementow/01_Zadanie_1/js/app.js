//
// 1. Znajdź pierwszy element `h1` na stronie,
//     2. Znajdź element o **class** `title`,
//     3. Znajdź element z atrybutem `data-animation`

const firstH1 = document.querySelector("h1");
console.log(firstH1);

const classTitleElement = document.querySelector(".title");
console.log(classTitleElement);

const attributeDataAnimationElement = document.querySelector("[data-animation]");
console.log(attributeDataAnimationElement);