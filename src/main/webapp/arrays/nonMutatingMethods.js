console.log("non mut hello");

/////////////DOSTĘPOWE METODY///////////////
console.log("-----------------");
console.log("---arr.concat() – połącz dwie tablice--------------");
const array2 = [0,1,2,3,4];
const array3 = [4,5,6,7,8,9];
const array4= array2.concat(array3);
console.log(array2);
console.log(array3);
console.log(array4);

console.log("----arr.join() – połącz wszystkie elementy tablicy w ciąg znaków, użyj przekazanego argumentu jako separatora.-------------");
const join = array4.join("+++");
console.log(join);

console.log("---arr.slice() – zwróć kawałek tablicy--------------");
console.log(array2.slice(1,3));

console.log("---arr.indexOf() – pierwsza pozycja szukanego elementu--------------");
console.log(array3);
console.log(array3.indexOf(5));

console.log("---- arr.lastIndexOf() – ostatnia pozycja szukanego elementu-------------");
console.log(array4);
console.log(array4.lastIndexOf(4));

console.log("----arr.includes() - czy element znajduje się w tablicy (true/false)-------------");
console.log(array4.includes(10));