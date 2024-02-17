function scuberGreetingForFeet(value){
  // Write your code here!
  if (value <= 400){
    return "This one is on me!"
  }
  else if (value >= 400 && value <= 2000){
    return "That will be twenty bucks."
  }
  else if (value >= 2000 && value <= 2500){
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}
function ternaryCheckCity(city) {
  return (city === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
      case "generous":
          return "Thank you so much.";
      case "not as generous":
          return "Thank you.";
      default:
          return "Bye.";
  }
}