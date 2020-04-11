

const name = 'John';

const age = 30;


// Concatenation

console.log('My name is '+ name + ' and I am ' + age +'.')

// Template String - use back ticks ${}

console.log(`My name is ${name} and I am ${age}.`)


const s = 'Hello World';

console.log(s.length);

// use () with method / call function
console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0, 5));

// tack on other methods - toUpperCase()
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''));


// to search data base etc
const r = 'technology, computers, it, code';

console.log(r.split(', '));

//Arrays
/* multi comments */

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);

console.log(fruits[1]); /*will log 2nd in array */

fruits.push('grapes');  /*will add grapes to end of array */
console.log(fruits);

fruits.unshift('strawberries'); // will add strawberries to beginning of array
console.log(fruits);

fruits.pop();// will take off last one in array
console.log(fruits);

console.log(Array.isArray(fruits)); // to see if fruits is an array

console.log(Array.isArray('Hello')); // to see if Hello is an array

console.log(fruits.indexOf('oranges')); // to see what index oranges has (0,1,2)

console.log(fruits);

//Bracket notation

let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation - person.name = 'John';
// Dot notation - person.name = 'John';

person['name'] = 'Mary';

console.log(person.name);

person['age'] = 30
console.log(person.age);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

function greet() {
    console.log('Hello ' + name);
}
greet('John');
greet('Mary'); 
greet('Hunter');

// Traversy

const book1 = {
    title: 'Book 1',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;  // uses Template literals to write sentence
    }
};
console.log(book1.getSummary());
