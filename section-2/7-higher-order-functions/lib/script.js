document.addEventListener('click', () => {
    console.log('hello');
});

function createMultiplier(multiplier) {
    return (x) => {
        return x * multiplier;
    }
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let  quadrupleMe = createMultiplier(4);

console.log(doubleMe(20)); // 40

let myColors = ['red', 'orange', 'yellow'];

myColors.forEach((color) => {console.log("The color " + color + " is a great color.")})

myColors.map();
myColors.filter();

function saySomethingNice(color) {
    console.log("The color " + color + " is a great color.");
}

myColors.forEach(saySomethingNice);

