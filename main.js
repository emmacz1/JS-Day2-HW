// Exercise #1
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log("Exercise #1 Output:");
for (let key in person3) {
    if (Array.isArray(person3[key])) {
        console.log(`${key}: ${person3[key].join(", ")}`);
    } else if (typeof person3[key] === 'object') {
        console.log(`${key}:`);
        for (let brand in person3[key][0]) {
            console.log(`  ${brand}: ${person3[key][0][brand]}`);
        }
    } else {
        console.log(`${key}: ${person3[key]}`);
    }
}

// Exercise #2
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        return `Name: ${this.name}, Age: ${this.age}\n`;
    };
    this.addAge = () => {
        this.age++;
    };
}

let person1 = new Person("John", 25);
let person2 = new Person("Alice", 30);

console.log("\nExercise #2 Output:");
console.log(person1.printInfo());
console.log(person2.printInfo());

person1.addAge();
person1.addAge();
person1.addAge();

console.log(person1.printInfo());

// Exercise #3
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small word");
        }
    });
}

console.log("\nExercise #3 Output:");
checkStringLength("Hello World!")
    .then(result => console.log(result))
    .catch(error => console.error(error));

checkStringLength("Hi")
    .then(result => console.log(result))
    .catch(error => console.error(error));