// Primitive 

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userMail;

const id  = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3284623423472347326423n





// Reference (Non-Primitive)

// Array, Objects, Functions



const heros = ["Spiderman", "Superman", "batman"]
let myDetails = {
    name: "rahim",
    age: "18",
    country: "pakistan",
}

const myFunction  = function(){
    console.log("hello world");
    
}

console.log(typeof BigNumber);



// ==================================================

// Stack (Primitive) , Heap  (Non-Primitive)
// Stack (updated and original values will be different)
let myYoutubename = "XTM"
let anothername = myYoutubename

anothername = "extremer"

console.log(anothername);
console.log(myYoutubename);


// Heap (updated and original values will be same)
let userOne = {
    email: "user@google.com",
    password: "123"
}

let userTwo = userOne

userTwo.email = "rahim@google.com"

console.log(userTwo.email);
console.log(userOne.email);





















