// create a variable called randomNumber with a random value between 0 and 1
//             - if the value is over 0.5 print out heads otherwise print out tails

//             - put this functionality into a function and have it run on the click of a button
//             - now have the result print in a p tag

// console.log(randomNumber);
// let randomNumber = Math.floor(Math.random() * 10);

function randomFlip() {
  //create a variable called randomNumber
  let randomNumber = Math.random().toFixed(1);
  if (randomNumber > 0.5) {
    //create p tag
    const pTag = document.createElement("p");
    //attach to body
    document.body.appendChild(pTag);
    //add heads
    const heads = document.createTextNode("heads");
    //
    pTag.appendChild(heads);
  } else {
    //create p tag
    const pTag = document.createElement("p");
    //attach to body
    document.body.appendChild(pTag);
    //add tails
    const tails = document.createTextNode("tails");
    //
    pTag.appendChild(tails);
  }
}
