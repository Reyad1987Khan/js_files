// Link : https://www.youtube.com/watch?v=COn9x4NbOBY&t=104s
// time:24

// ENCAPSULATION
// INHERITANCE
// ABSTRACTION
// POLYMORPHISM




// ENCAPSULATION Discuation 

// let name = "Reyad Hossain Khan";
// let birthDay = "1987-03-01";
// let monthlySalary = 40000;
// let noOfMonth = 12;


// function calculate_age (dob) {
//     const diff_ms = Date.now() - new Date(dob).getTime();
//     const age_dt = new Date(diff_ms);

//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }


// function getSalary(monthlySalary, noOfMonth) {
//     return (monthlySalary * noOfMonth).toLocaleString();
// }

// console.log(calculate_age(birthDay));
// console.log(getSalary(monthlySalary, noOfMonth));



// Normal JavaScript
// const reyad = {
//     name : "Reyad Hossain Khan",
//     birthDay : "1987-03-01",
//     monthlySalary : 40000,
//     noOfMonth : 12,

//     calculate_age () {
//         const diff_ms = Date.now() - new Date(this.birthDay).getTime();
//         const age_dt = new Date(diff_ms);
    
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     },

//     getSalary() {
//         return (this.monthlySalary * this.noOfMonth).toLocaleString();
//     },
//     };

// console.log(reyad.calculate_age());
// console.log(reyad.getSalary());



// OPP Normal JavaScript
// This is a class
// class Player {
//     constructor(name, birthDay, monthlySalary, noOfMonth) {
//         this.name = name;
//         this.birthDay = birthDay;
//         this.monthlySalary = monthlySalary;
//         this.noOfMonth = noOfMonth;
//     } 
//     calculate_age () {
//         const diff_ms = Date.now() - new Date(this.birthDay).getTime();
//         const age_dt = new Date(diff_ms);
    
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     }
//     getSalary() {
//         return (this.monthlySalary * this.noOfMonth).toLocaleString();
//     }

// }
// // this is an Object with value
// const sakib = new Player ("Sakib","1987-03-01" , 40000, 12); 
// console.log(sakib.getSalary ());


// OPP Normal JavaScript with privet Property
// This is a class
// class Player {
//     #name;
//     #birthDay;
//     #monthlySalary;
//     #noOfMonth;
//     constructor(name, birthDay, monthlySalary, noOfMonth) {
//         this.#name = name;
//         this.#birthDay = birthDay;
//         this.#monthlySalary = monthlySalary;
//         this.#noOfMonth = noOfMonth;
//     } 
//     calculate_age () {
//         const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
//         const age_dt = new Date(diff_ms);
    
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     }
//     getSalary() {
//         return (this.#monthlySalary * this.#noOfMonth).toLocaleString();
//     }

// }
// // this is an Object with value
// const sakib = new Player ("Sakib","1987-03-01" , 40000, 12); 
// console.log(sakib.getSalary ());




// INHERITANCE


// Basaid Code 
// class Cricketer {
//     #name;
//     #age;
//     #centuries;

//     constructor(name, age, centuries) {
//             this.#name = name;
//             this.#age = age;
//             this.#ncenturiesame = centuries;
//         }
//         getPlayerDetails() {
//             return `${this.#name} is ${this.#age} years old`;
//     }
// }


// class Foorballer {
//     #name;
//     #age;
//     #goals;

//     constructor(name, age, goals) {
//             this.#name = name;
//             this.#age = age;
//             this.#goals = goals;
//         }
//         getPlayerDetails() {
//             return `${this.#name} is ${this.#age} years old`;
//     }
// }

// Implementation of Inheritence 

// class Player {
//     #name;
//     #age;
   
//     constructor(name, age) {
//             this.#name = name;
//             this.#age = age;
//         }
//         getPlayerDetails() {
//             return `${this.#name} is ${this.#age} years old`;
//     }
// }


// class Cricketer extends Player {
//     #centuries;

//     constructor(name, age, centuries) {
//             super(name, age);
//             this.#centuries = centuries;
//         }
// }


// class Footballer extends Player {
//     #goals;

//     constructor(name, age, goals) {
//             super(name, age)
//             this.#goals = goals;
//         }
// }

// const sakib = new Cricketer("Sakib", 36, 15);

// const ronaldo = new Footballer("Ronaldo",45,200);

// console.log(sakib.getPlayerDetails());
// console.log(ronaldo.getPlayerDetails());


class BetterArray {
    #items
    constructor() {
        this.#items = [];
    }
}

getItems() {
    return [...this.#items];
}

addItems(item) {
    this.#items.push(item);
}

removeItem(itemToDelete) {
    this.#items = this.#items.filter((item) => item !== itemToDelete);

}

modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
        this.#items[index] = newValue;
    }
}