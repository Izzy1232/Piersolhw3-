console.log("Piersol's Output from Tutorial 4 Example 1");
let inputA = Number(prompt("Please enter number of hour(s)"))
let inputB = Number(prompt("Please enter number of minute(s)"))
let inputC = Number(prompt("Please enter number of second(s)"))
if (isNaN(inputA) || isNaN(inputB) || isNaN(inputC) || inputA % 1 != 0 || inputB % 1 != 0 || inputC % 1 != 0 || inputA > 23 || inputA < 0 || inputB > 59 || inputB < 0 || inputC >59 || inputC<0) {
  console.log("Invalid Entry.")
}
  else {
    console.log(`Time input: ${inputA}h${inputB}m${inputC}s`)
  
inputC++
if (inputC === 60) {
  inputC = 0;
  inputB++;
}

if (inputB === 60) {
  inputB = 0;
  inputA++;
}

if (inputA === 24) {
  inputA = 0;
}
console.log(`One second later: ${inputA}h${inputB}m${inputC}s`);
}