// ## Zadanie 1 - rozwiązywane z wykładowcą
//
// Zmodyfikuj listę w sekcji `.exercise` w następujący sposób:
//
//     1. Nastaw kolor tła co drugiego elementu listy na szary (`#9e9e9e`),
//     2. Nastaw piątemu elementowi listy **klasę** ```big```,
//     3. Nastaw co trzeciemu elementowi podkreślenie.

const elements = document.querySelectorAll(".exercise ul li");
console.log(elements);

const elementsForEdition = Array.from(elements);
elements.forEach(function (element,index) {
if (index%2===0){
    element.style.backgroundColor = `#9e9e9e`;
}
if (index===5){
    element.classList.add("big");
}
if (index%3===0){
    element.style.textDecoration = "underline";
}
});