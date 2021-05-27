// Step 1
// Write an array of strings and fill it with your favourite types of chocolate
let favouriteChocolate = ["galaxy", "twirl", "snickers", "twix", "kitkat"];
// Step 2
// Write a loop that print out each of the items in your array

for (i = 0; i < favouriteChocolate.length; i++) {
  console.log(favouriteChocolate[i]);
}

// Step 3
// Write a function that takes in a string and adds that string to the end of the array.

function addArray(str) {
  //add element
  favouriteChocolate.push(str);
  //display array
  return favouriteChocolate;
}

// Step 4
// Invoke your function to add more chocolate to the array
console.log(addArray("smarties"));
