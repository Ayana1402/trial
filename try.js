const prompt = require("prompt-sync")({sigint:true});
let depo_str = prompt("Deposit")
let deposit = parseInt(depo_str)
if (deposit>=10000)
{
    console.log("wait for 3 days")
    console.log("Deposit : "+ deposit)
}
else
{
    console.log("Deposit : "+ deposit)
}