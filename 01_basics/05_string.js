const name = "Rahim"
const result = "Passed"

// console.log(name + result + "A grade"); Bad Practice (old way)

//(modern way) Good Practice is :-
// console.log(`my name is ${name} & i am ${result}.`);



// more definition of string in javascript
const myName = new String ('rahim-ali')

// javascript methods
// console.log(myName[2]);             Prints the string on 2nd position
// console.log(myName.__proto__);      Prints the prototype of string (hidden values)   
// console.log(myName.length);         Prints the actual length of strings (word counts)
// console.log(myName.toUpperCase());  Print the string values in uppercase
// console.log(myName.charAt(0));      Prints the character of given index number 
// console.log(myName.indexOf('r'));   Prints the index number of given character


const newString = myName.substring(0,5)
// console.log(newString);

const anotherString = myName.slice(-8,4)
// console.log(anotherString);


const newStringOne = "       space     "
// console.log(newStringOne);
// console.log(newStringOne.trim());  Trim removes spaces for password or email



const url = "https://rahim.com/rahim%20portfolio"

// console.log(url.replace('%20', '-'));  
// replaces the auto generated %20 space by your given "-" in url

// console.log(url.includes('rahim')); 
// checks if there is given keyword exist in url or not

console.log(myName.split('-'));
// ongoing search















