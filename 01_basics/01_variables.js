const accountID = 144533
let accountEmail = "prince@google.com"
var accountPassword="12345"
accountCity = "Jaipur"

// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "45871212"
accountCity = "Bengaluru"
let accountState;
console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/