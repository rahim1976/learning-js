const accountId = 13242
let accountEmail = "rahim@google.com"
var accountPassword = "rahim123"
accountCity = "karachi"

// accountId = 2       Note:Overwritting not Not Allowed
// updating values
accountEmail = "hahd@google.com" //type: string
accountPassword = "232323" // type: string
accountCity = "faislabad" // type: any
let accountState; // undefined

/*       
prefer not to use var
because of the issue in block scope and functional scope      
*/

/*console.log(accountId);             
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
Note: when you want to print multiple values use "console.table" command 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);