/*
    Purpose:
    This code is where a member, Rose, checks out a book.
*/

import libraryMembers from "./libraryMembers.js"

let booksRose = libraryMembers.getCheckedOutBooks("Rose","Thorne");
console.log("Rose's Books: ", booksRose);

libraryMembers.memberCheckOutBook("Rose","Thorne", "The Little Prince");
console.log("Rose's Books: ", booksRose);