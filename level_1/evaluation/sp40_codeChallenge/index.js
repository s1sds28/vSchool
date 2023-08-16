
/**Create a constructor function called Book that takes in parameters for title, author, and year.
* The constructor function should have a method called getDetails that returns a string with the
* book's title, author, and year.  Instantiate two new Books using the below code to test your solution.
// */

//ES6
// class Book{
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getDetails() {
//         console.log("title: ", this.title)
//         console.log("author :", this.author)

//         // let keys = Object.keys(this)
//         // let values = Object.values(this)
//         // let e
//         // let keys = Object.keys(this)
//         // let values = Object.values(this)
//         // let entries = ""
//         // for(let i=0; i<Object.keys.length; i++){
//         //     entries += "Title: " + this.title + ","
//         //     entries += " Author: " + this.author + ","
//         //     entries += " Year: " + this.year
//         // }
//         // return entries
//     }
// }


//ES5
function Book(title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;
    this.getDetails = function(){
        console.log("title: ", this.title)
        console.log("author :", this.author)
}
}


const book1 = new Book("TheGreat Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To kill a Mockingbird", "Harper Lee", 1960);

book1.getDetails()


// console.log(book1.getDetails())
// console.log(book2.getDetails())

/**Write a function called **`removeDuplicates`** that takes an array of numbers as input and returns a new
*array with duplicate values removed.  Use the below code to test your solution.
*/

function removeDuplicates(listDuplicates) {
    let listNoDuplicates = []
    for (let i = 0; i< listDuplicates.length; i++) {
        if (!listNoDuplicates.includes(listDuplicates[i])) {
    
              listNoDuplicates.push(listDuplicates[i])
        }

    }
        // if(listNoDuplicates.includes(listDuplicates[i])){
        //     continue
        // } else {
        // }
    
    return listNoDuplicates;
}

myList1 = [1,2,2,3,4,4,5]
myList2 = [5,5,5,5,5,5,5]

console.log(removeDuplicates(myList1))
console.log(removeDuplicates(myList2))
