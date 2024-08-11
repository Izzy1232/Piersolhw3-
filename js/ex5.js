console.log("Piersol's Output from Tutorial 4 Example 1");
let pass = "secret"
let maxAttempts = 3
let attempts = 0
let userPass;

while (attempts < maxAttempts) {
  let userPass = prompt("Please enter a password")

  if (userPass === pass) {
    console.log(`You entered the correct password after ${attempts+1} attempt(s).`)
    break;
  }
  attempts++;
  if (attempts === maxAttempts) {
    console.log(`Your account is locked. You failed to enter the correct password ${attempts} times.`)
  }
}