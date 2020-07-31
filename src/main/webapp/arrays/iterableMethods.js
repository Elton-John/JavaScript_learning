console.log("iterable hi");


/////////////////ITERACYJNE////////////////
// Są to funkcje wyższego rzędu (Higher order functions), czyli przyjmujące inną funkcję jako argument.
//
console.log("------------------");
const arrayIterable = ["kot", "pies", "żółw"];

console.log("--arr.forEach() – wywołaj funkcję dla każdego z elementów----------------");
arrayIterable.forEach(function (element,index,array) {
    console.log(element.toUpperCase());
    console.log(index);
    console.log(array.length);
});

console.log("----arr.reduce() --------------");
// arr.reduce() – wywołaj funkcję dla każdego z elementów w taki sposób,
//     żeby mieć dostęp do wartości otrzymanej w wyniku wykonania funkcji dla poprzedniego elementu
// (przydatne przy sumowaniu)
const arrayOfNumber = [0,1,2,3,4,5];
const sum = arrayOfNumber.reduce(function (total,item) {
  return total+item;
  });
console.log(sum);

console.log("---arr.some() – sprawdź, czy jakikolwiek element spełnia dany warunek---------------");
const isMoreThan2 = arrayOfNumber.some(function (element,index,array) {
return element>2;
});
console.log(isMoreThan2);

console.log("----arr.every() – sprawdź, czy wszystkie elementy spełniają dany warunek--------------");
const isMoreThanZero = arrayOfNumber.every(function (element,index,array) {
return element>0;
});
console.log(isMoreThanZero);

console.log("----arr.filter()--------------");
// arr.filter() – wywołaj funkcję dla każdego z elementów tablicy,
//     zwróć nową tablicę zawierającą tylko te elementy, które spełniły ten warunek
const arrayOfNumbersMoreThanZero = arrayOfNumber.filter(function (element,index,array) {
return element>0;
});
console.log(arrayOfNumbersMoreThanZero);

console.log("----arr.map()--------------");
// arr.map() – wywołaj funkcję dla każdego z elementów, zwróć nową tablicę ze zmodyfikowanymi elementami
const arrayModify = arrayOfNumber.map(function (element,index,array) {
return element+10;
});
console.log(arrayModify);