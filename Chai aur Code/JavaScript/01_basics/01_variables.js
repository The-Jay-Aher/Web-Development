const accountId = 144553;
let accountEmail = 'jay@gmail.com';
var accountPassword = '12345';
accountCity = 'Mumbai';

let accountState;

// accountId = 2; // not allowed

accountEmail = 'hc@hc.com';
accountPassword = '212121212';
accountCity = 'Banglore';

// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer to never use var
because of issue in block scope and functional scope 
*/
