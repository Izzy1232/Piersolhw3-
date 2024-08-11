console.log("Piersol's Output from Tutorial 4 Example 1");

let userWeekday = String(prompt("Please enter a day of the week")).toLowerCase();
let followingDay;
switch (userWeekday) {
  case "sun":
    followingDay = "mon";
  break;
  case "mon":
    followingDay = "tue";
  break;
  case "tue":
    followingDay = "wed";
  break;
  case "wed":
    followingDay = "thu";
  break;
  case "thu":
    followingDay = "fri";
  break;
  case "fri":
    followingDay = "sat";
  break;
  case "sat":
    followingDay = "sun";
  break;
  default: 
    console.log("Invalid input.")
    followingDay = null;
}

if (followingDay != null) {
  console.log(`You entered ${userWeekday}\nThe following day is ${followingDay}`)
}

    
