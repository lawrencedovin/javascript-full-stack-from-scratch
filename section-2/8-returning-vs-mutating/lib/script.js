
let pets = [
    {name: "Meowsalot", species: "cat", age: 2},
    {name: "Barksalot", species: "dog", age: 3},
    {name: "Purrsalot", species: "cat", age: 8}
];

console.log(pets.push({name: "Puppster", species: "dog", age: 1}));

// new array only contains values
let petNames = pets.map(nameOnly);

function nameOnly(pet) {
    return pet.name;
}

console.log(petNames);

let dogObject = pets.filter(dogOnly);
let babyObject = pets.filter(onlyBabies);
let babyDogNames = pets.filter(dogOnly).filter(onlyBabies).map(nameOnly);

function dogOnly(pet) {
    return pet.species == "dog";
}

function onlyBabies(pet){
    return pet.age < 3;
}

console.log(dogObject);
console.log(babyObject);
console.log(babyDogNames);



