
// Mild Challenges 

/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;



// 1. If divided evenly, how much would each sibling get for the week?
let allowance = weeklyAllowance / 3;
let string1 = `Each sibling will get ${allowance} for the week.`;
console.log(string1);

// 2. How many games can Jordan buy with their cut?
let games1 = Math.floor(allowance / 15.99);
console.log("Jordan can buy " + games1 + " games.");

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game += 1;
shoes /= 2;

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let moneyQR = (allowance * 2);
console.log("In a month, Quinn and Ricardo can buy " + Math.floor((moneyQR*4)/shoes) +  " on sale shoes.");

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let gamesAll = Math.floor(weeklyAllowance / game);
let diff = gamesAll - (Math.floor(allowance / game));
console.log("They can buy " + diff + " more games if they put their money together.");

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
let string2 = `The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`;
console.log(string2);

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(sibling3.length);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase());

// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase());

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(sibling3.replace(/a/g,''));

// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(sibling3.substring(16, 27));

// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

// function getRandomNum() {
//     return Math.floor(Math.random() * 100);
// }
const getRandomNum = () => Math.floor(Math.random()*100);
console.log(getRandomNum());
console.log(getRandomNum());

//function greeting(name) {
    //return `Hello ${name}, I'm glad you can make it!`;
//}
const greeting = (name) => `Hello ${name}, I'm glad you can make it!`;
console.log(greeting("Jimena"));
console.log(greeting("Yarili"));


// function perfectRoot(x) {
//     let root = Math.sqrt(x);
//     if (Math.floor(root) === root) {
//         return root;
//     } else {
//         return "No perfect root";
//     }
// };
const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};

console.log(perfectRoot(9));

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    return sum = x + y;
};
// uncomment the line below, to call the function, and add one more function call
console.log(addNums(4, 6));
console.log(addNums(11, 4));

/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if( name === "Beyonce") { 
        return "Welcome Queen!";
    } else {
        return `Sorry ${name}, you're not Beyonce`;
    }
};

console.log(isBeyonce("Beyonce"));
console.log(isBeyonce("Jimena"));
// Test "Beyonce" and other names to ensure it works



/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if(x % 2 == 0){
        return x / 2;
    } else {
        return x;
    }
};
//Write your own function calls
console.log(reduceEvens(15));
console.log(reduceEvens(34));

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = (string) => {
    if (string.length > 10){
        return string.substring(0,10);
    } 
}

// Spicy Challenges
let burger = 5.99;
let fries = 3.99;
let soda = 1.99;
let meal = burger + fries + soda;
let amountMeals = 0;


// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
/// If no burgers can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
    if (budget/burger >= 1){
        return "You can buy " + Math.floor(budget/burger) + " burgers.";
    } else {
        return "Sorry, no burgers for you.";
    }
}
<<<<<<< HEAD
console.log(buyBurgers(30))
console.log(buyBurgers(4))
=======
console.log(buyBurgers(30));
console.log(buyBurgers(4));
>>>>>>> eb66c2b8809ec7eda469c44601981ce273cf472d

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
<<<<<<< HEAD
    if (budget/(burger + fries + soda) >= 1){
        return "You can buy " + Math.floor(budget/(burger + fries + soda)) + " meals. Your change will be ";
    } else {
        return "Sorry, no meals for you.";
    }
}
=======
    if (budget/meal > 1){
        amountMeals = Math.floor(budget/meal)
        return "You can buy " + amountMeals + " meals. Your change will be " + Math.ceil(budget - (amountMeals * meal)) + " dollars.";
    } else {
        return "Sorry, no meals for you.";
    }
};
console.log(buyMeals(45));
console.log(buyMeals(10));
>>>>>>> eb66c2b8809ec7eda469c44601981ce273cf472d


// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
/// The larger side should be the hypotenuse 
const missingLeg = (side1, side2) => {
    if (side1 > side2){
        return Math.sqrt((side1**2)-(side2**2));
    } else {
        return "Error";
    }
};
console.log(missingLeg(5, 4));
console.log(missingLeg(10, 8));

// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
<<<<<<< HEAD
/// Write a function factorial(x) that finds the factorial of any integer.
=======
/// Write a function factorial(x) that finds the factorial of any integer.
const factorial = (x) => {
    if (x > 0){
        
    }
}
>>>>>>> eb66c2b8809ec7eda469c44601981ce273cf472d
