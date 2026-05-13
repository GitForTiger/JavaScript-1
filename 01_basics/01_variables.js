const accountId=22806
let accountEmail="apratim@google.com"
var accountPasswd="uigfe"
accountCity="Lucknow"
let accountState
console.table([accountId,accountEmail,accountPasswd,accountCity,accountState])
// accountId=12321 (INVALID)
accountEmail="wow@gmail.com"
accountPasswd="fewff"
accountCity="Kanpur"
console.table([accountId,accountEmail,accountPasswd,accountCity])
/*
Prefer let over var due to the block and functional scope issues with var.
*/