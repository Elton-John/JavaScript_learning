const blocks = document.querySelectorAll(".block");

//
// Wypisz w konsoli wartość innerText dla elementów zmiennej blocks.
//     Następnie ustaw wartość innerText na "Nowa wartość diva o klasie blocks".

blocks.forEach(function (element) {
    console.log(element.innerText);
});

blocks.forEach(function (element) {
element.innerText = "Nowa wartość diva o klasie blocks";
});

blocks.forEach(function (element) {
    console.log(element.innerText);
});