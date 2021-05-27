// Step 1
// Take your variables from task 1 and represent them in one object with three keys.
const details = {
  name: "Maryam",
  age: 31,
  chocolate: true,
};
// - A string of your name
// - A Number of your age
// - A boolean representing whether you like chocolate

// Step 2
// Use conditional statements
// If the key representing whether you like chocolate is true
//  Print "I LOVE CHOCOLATE!"
// Else
//  Print "I'M A LIAR!"
function step2() {
  if (details.chocolate === true) {
    return "I LOVE CHOCOLATE";
  } else {
    return "I'M A LIAR!";
  }
}
console.log(step2());
