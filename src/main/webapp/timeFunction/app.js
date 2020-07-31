console.log("Hi");

const timeoutID = setTimeout(function () {
        console.log("in 5 seconds");
    }, 5000
);

clearTimeout(timeoutID);

const timeoutID2 = setTimeout(function () {
console.log("in 10 seconds");
}, 10000);

const intervalID = setInterval(function () {
console.log("every second");
}, 1000);

clearInterval(intervalID);

function countHello(number) {
    let count=0;
const intervalID=setInterval(function () {
console.log("Hello");
count++;
if (count===number){
    clearInterval(intervalID);
}
},1000)
};

countHello(5);