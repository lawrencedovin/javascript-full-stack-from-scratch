
function amazingFunction() {
    let myName = "Brad";
}

amazingFunction();
console.log(myName);
// Doesn't work because the variable with the keyword of let is only accessible
// within the function block not outside of it. Block-scope

let myName1 = "Braddy";
function amazingFunction1() {
    let myName1 = "Braddy JR."
    if(2 * 2 == 4) {
        let myName1 = "Braddy III"
        console.log("inside the if statement", myName1);
    }
    console.log("inside our function", myName1);
} 

amazingFunction1();
console.log("in the global scope", myName1);
// Scope starts from inside and goes outward that's why this function is valid.
// If it doesn't find a myName1 variable in the local scope then it will go
// Outside the scope to check if myName1 exists in 1 outer scope layer at a time
// until reaching the global scope.
// Each myName1 isn't being overwritten they are 3 separate variables.

let myName2 = "Braddy";
function amazingFunction1() {
    if(2 * 2 == 4) {
        myName2 = "Braddy III"
        console.log("inside the if statement", myName2);
    }
} 

amazingFunction1();
console.log("in the global scope", myName2);
// outside code can't reach inside for variables
// inside code can reach outside for variables


var myName3 = "Braddy";

function amazingFunction3() {
    if(2 * 2 == 4) {
        var myName3 = "Braddy III";
    }
} 

// myName3 can be accessed outside the if statement.
// 99% of the reason why developers use let instead of var
// is because almost all other programming languages use
// block scope which is a paradigm programmers are used to.

