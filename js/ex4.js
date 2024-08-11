console.log("Piersol's Output from Tutorial 4 Example 1");

let num1 = Number(prompt("Please enter first integer number"));
if (!Number.isInteger(num1)) {
  console.log("Invalid input.")
}
  else {let num2 = Number(prompt("Please enter second integer number"))
    if (!Number.isInteger(num2)) {
      console.log("Invalid input")
    }
      else {let sum = num1 + num2
        let subtract = num1 - num2
        let multiply = num1 * num2
        let divide = num1/num2
        let modulo = num1%num2
        console.log (`${num1} + ${num2} = ${sum}`)
        console.log (`${num1} - ${num2} = ${subtract}`)
        console.log(`${num1} x ${num2} = ${multiply}`)
        console.log(`${num1} / ${num2} = ${divide}`)
        console.log(`${num1} % ${num2} = ${modulo}`)
      }
  }
  