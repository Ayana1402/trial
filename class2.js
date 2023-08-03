const prompt = require("prompt-sync")({sigint:true});
let bal_str = prompt("Balance")
let Balance = parseInt(bal_str)
let withdrew_str = prompt("Withdarw amount")
let withdrew = parseInt(withdrew_str)
if (withdrew > Balance)
{
    console.log("Insifficent balance")
    console.log("Balance : "+ Balance)
}
else
{
    Balance = Balance-withdrew
    console.log("Thanksfor using")
    console.log("Balance:"+ Balance)
}