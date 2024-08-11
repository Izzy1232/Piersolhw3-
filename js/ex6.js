console.log("Piersol's Output from Tutorial 4 Example 1");
let userInput = Number(prompt("Please enter a number"))
if (isNaN(userInput)) {
  console.log ("Invalid input.")
}
  else {
    for (let i = 0; i <= 10; i++) {
      let output = userInput * i
    console.log (`${userInput} X ${i} = ${output}`)
    }
  }