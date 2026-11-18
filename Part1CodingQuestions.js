// Question 1: Convert "123" to a number and add 7
let x = "123";
var y = Number(x);
var y = y + 7;
console.log(y);

//------------------

// Question 2: Check if the given variable is falsy and return "Invalid" if it is

function CheckValue(variable)
 {
    if (variable === false) 
        {
           return "Invalid";
        } 
    else 
        {
        return "Valid";
        }
 }

//------------------

/* Question 3: 
Use for loop to
print all numbers between 1 and 10
skipping even numbers using continue
*/

for (let i = 1; i <= 10; i++) 
    {
    if (i % 2 == 0) 
    {
        continue;
    }
    console.log(i);
    }

//------------------

/* Question 4: 
Create an array of numbers 
and return only the even numbers
 using filter method
*/
const arr = [1,2,3,4,5,6,7,8,9,10];

const evennumbers = arr.filter(num => num % 2 === 0);

console.log(evennumbers);

//------------------

/* Question 5: 
Use the spread operator to merge two arrays
then return the merged array
*/

const arrx = [1, 2, 3];
const arr_y = [4, 5, 6];

const merged_array = [...arrx, ...arr_y];
console.log(merged_array);

//------------------

/* Question 6: 
Use a switch statement
to return the day of the week
given a number (1 = Sunday …., 7 = Saturday)
*/

const day_number = [1,2,3,4,5,6,7]; 
switch (day_number) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day number");
}

//------------------

/* Question 7: 
Create an array of strings and return their lengths using map method (0.5 Grade)
*/

const names = ["a","ab","abc"];
const length = names.map(function(name) {
    return name.length;
});

console.log(length);

//------------------

/* Question 8: 
Write a function that checks if a number is divisible by 3 and 5. 
*/

function check_divisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "divisible by both";
    } else if (num % 3 === 0) {
        return "divisible by 3";
    } else if (num % 5 === 0) {
        return "divisible by 5";
    } else {
        return "not divisible by 3 or 5";
    }
}
console.log(check_divisible(15));

//------------------

/* Question 9: 
Write a function using arrow syntax to return the square of a number 
*/

const square = (num) => num * num;
console.log(square(5));

//------------------

/* Question 10: 
Write a function that destructs an object to extract values and returns a formatted string. 
*/

function format_person({ name, age }) {
    return `${name} is ${age} years old`;
}
const person = { name: 'John', age: 25 };
console.log(format_person(person));

//------------------

/* Question 11: 
Write a function that accepts multiple parameters (two or more) and returns their sum. 
*/

function sum_all(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum_all(1,2,3,4,5));

//------------------

/* Question 12: 
Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. 
*/

//?????????????????

//------------------

/* Question 13: 
Write a function to find the largest number in an array. 
*/

const numbers = [1,2,3,4,5];

function get_max(arr) {
    return Math.max(...arr);
}

console.log(get_max(numbers));

//------------------

/* Question 14: 
Write a function that takes an object and returns an array containing only its keys. 
*/

function get_keys(obj) {
    return Object.keys(obj);
}
console.log(get_keys({ name: "John", age: 30 }));

//------------------

/* Question 15: 
Write a function that splits a string into an array of words based on spaces. 
*/

//?????????????????

