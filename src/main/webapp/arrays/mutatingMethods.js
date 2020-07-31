console.log("hello");

///////////////////METODY MUTACYJNE//////////////////////

console.log("-----arr.pop() - usuń i zwróć ostatni element tablicy----------------");
const array1 = [0,1,2,3];
console.log(array1.pop());//3
console.log(array1.pop());//2
console.log(array1.pop());//1

console.log("---arr.push() – dodaj element do końca tablicy------------------");
array1.push(5,2);
console.log(array1);

console.log("----arr.reverse() – odwróć całą tablicę-----------------");
array1.reverse();
console.log(array1);

console.log("--arr.shift() – usuń i zwróć pierwszy element tablicy-------------------");
console.log(array1.shift());
console.log(array1);

console.log("------arr.unshift() – dodaj element na początek tablicy i zwraca nową długość---------------");
console.log(array1.unshift(10,9,8));
console.log(array1);

console.log("-----arr.splice() – usuń (ew. zamień) i zwróć kawałek tablicy----------------");
console.log(array1.splice(0,3,"kot", "pies", "łoś"));
console.log(array1);

console.log("----arr.sort() – posortuj elementy na podstawie przekazanej funkcji-----------------");
array1.push(22,56,11, "alpaka", "a");
console.log(array1.sort());
console.log(array1.sort(function (a,b) {
return a - b;
}));