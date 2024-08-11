console.log("Piersol's Output from Tutorial 4 Example 1");
let number= Number(prompt("Please enter a number between 1 and 100"))

if (Number.isInteger(number) && number>=1 && number<=100) {
  console.log(`Thank you! You entered ${number}, a valid number.`)
}
else {
  console.log(`Sorry, ${number} is not a valid entry.`)
}