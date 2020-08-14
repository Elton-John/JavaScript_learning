// ## Zadanie 1 - rozwiązywane z wykładowcą
//
// * Stwórz funkcję `getDatasInfo(elements)`, do której przekaż jako argument zmienną `links`
// (pamiętaj o tym, że jest to pseudotablica)
// * stwórz w funkcji nową tablicę i wypełnij ją wartościami
// pobranymi z atrybutu **data** każdego elementu li
// * zwróć tą tablicę.

const links = document.querySelector(".links").querySelectorAll("li");

let arrayOfDatasetValues = [];

function getDataInfo(elements) {
   elements.forEach(function (element) {
arrayOfDatasetValues.push(element.dataset.color);
   });
    return arrayOfDatasetValues;
}

console.log(getDataInfo(links));