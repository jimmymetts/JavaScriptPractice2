// constructors
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
    Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;  // uses Template literals to write sentence
    };

    //magazine constructor

    function Magazine(title, author, year, month) {
        Book.call(this, title, author, month);

        this.month = month;
    }

// Instantiate Magazine Object

const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'January');
const mag2 = new Magazine2('Mag Two')
console.log(mag1);