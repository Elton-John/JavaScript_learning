console.log("hi object");
//
// ## Zadanie 2 -

// Stwórz obiekt `timeMachine`. Dopisz do niego następujące właściwości:
//
//     * `shape` - string,
// * `model` - string,
// * `run(date, place)` - metoda, dzięki której można się przenieść w czasie. Argument `date` to data,
// do jakiej chcemy się przenieść, a `place` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi.
//
//     Wypisz w konsoli wszystkie właściwości i uruchom metodę `run`.

const timeMachine = {
    shape: "avo",
    model: "2020",
    run: function (data, place) {
        console.log(`Przeniosiono do daty:${data}, do miejsca: ${place}`);
    }
};

console.log(timeMachine.model);
console.log(timeMachine.shape);
console.log(timeMachine.run(2030, "New York"));

//  ## Zadanie 3
//
//  Stwórz obiekt `stairs`.
//
//      Niech obiekt posiada pole `step`, które na początku ustaw na 0.
//
//  Dodaj do obiektu również następujące metody:
//      * `up()`, która zwiększa schodek o 1 (modyfikuj pole step)
//  * `down()`, która zmniejsza schodek o 1 (modyfikuj pole step)
//  * `printStep()`, która pokazuje, na którym schodku jesteśmy.
//
//      Przykład wywołania:
//      ```JavaScript

const stairs = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    printStep: function () {
        console.log(this.step);
    }
};


stairs.up();
stairs.down();
stairs.down();
stairs.down();
stairs.printStep() // 2