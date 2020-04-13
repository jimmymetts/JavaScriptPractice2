// reverse string test

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    }

Book.prototype.revise = function(newAuthor) {
    this.Author = newAuthor;
    this.revise = true;
}

// Instantiate an Object

const book1 = new Book('Book 1', 'John Doe', '2013');
const book2 = new Book('Book 2', 'Jane Doe', '2016');

console.log(book2);
book2.revise('enaj');
console.log(book2);