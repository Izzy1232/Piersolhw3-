console.log("Piersol's Output from Tutorial 4 Example 1");
let userName = String(prompt("Please enter your name"))
let specialCharacters = /[~*!@#$%^&*()_+\-={}|[\]\\:;'<>?,.]/;
if (!isNaN(userName) || userName ==="" || specialCharacters.test(userName)) {
console.log("Not a valid entry. Please try again.")
}
else {let units = Number(prompt("Please enter number of units completed"))
if (isNaN(units) || !Number.isInteger(units) || units<0) {
console.log("Not a valid entry. Please try again.")
}
else {let gradeStanding = ""
if (units>=0 && units<=30) { 
  gradeStanding = "Freshman"
}
else if (units>=31 && units<=60) {
  gradeStanding = "Sophomore"
}
else if(units>=61 && units<=90){
  gradeStanding = "Junior"
}
else if(units>=91) {
  gradeStanding = "Senior"
}
console.log(`Hello ${userName} \nYour grade standing is ${gradeStanding}`);}}