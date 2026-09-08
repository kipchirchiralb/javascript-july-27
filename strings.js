// write a function that logs the first charater of a given name e.g. Albert -> A

function printFirstLetter(name) {
  console.log(name[0]);
}

// call/invoke the function with a name as an argument {}
printFirstLetter("Albert");
printFirstLetter("Readon");
printFirstLetter("Simon");
printFirstLetter("JAmes");
printFirstLetter("Readon");

// Functions break applications into smaller, reusable pieces of code. 
// 
// They allow you to encapsulate logic and perform specific tasks without repeating code. Functions can take input parameters, perform operations, and return output values. They help improve code organization, readability, and maintainability.

// Every programming language has buit-in(comes with) functions that perform common tasks on data based on type of data
// string - split, chartAt, toUpperCase, toLowerCase, trim, replace, includes, indexOf, slice, substring, concat

console.log("      albert".trim())
console.log("albert".toUpperCase())


const postOne = "Hello world, welcome to the world of programming. The world is vast and full of opportunities.";
const postTwo = "There was a man of the Pharisees, named Nicodemus, a ruler of the Jews: the same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with"
const postThree = "yesu ni bwana"

// console.log(postOne.slice(0, 30) + "....");
// console.log(postTwo.slice(0, 30) + "....");
// console.log(postThree.slice(0, 30) + "....");

function shortenPost(post) {
    if(post.length > 30) {
        console.log(post.slice(5, 30) + "....");
    }else{
        console.log(post);
    }
}
shortenPost(postOne);
shortenPost(postTwo);
shortenPost(postThree);


console.log(postOne.replace("programming","joking"))

// Task

// Write a function that encodes a given string by replacing all vowels (a, e, i, o, u) with the corresponding numbers (1, 2, 3, 4, 5). For example, "hello" should be encoded as "h2ll4".

// Write a function maskPhone(phone) that takes a Kenyan phone number as a string like "0712345678" and returns "0712***678" — the first 4 characters, three stars, then the last 3 characters. If the number is not exactly 10 characters long, return "Invalid phone number". Hint: length, slice(0, 4), slice(-3), repeat(3)

//  Write a function initials(fullName) that takes a full name like " albert kipchirchir langat " and returns the initials in capitals separated by dots, e.g. "A.K.L". Split the name into an array of words, then loop through and take the first letter of each. Hint: trim(), split(" "), charAt(0), toUpperCase(), join(".").


// https://github.com/kipchirchiralb/javascript-may-26