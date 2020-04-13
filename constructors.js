// constructors
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;  // uses Template literals to write sentence
    }
    

};

// Instantiate an Object

const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'Jane Doe', '2016');

console.log(book1);