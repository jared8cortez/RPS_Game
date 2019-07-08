var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

rock.addEventListener("click", rockUser);
paper.addEventListener("click", paperUser);
scissors.addEventListener("click", scissorsUser);

function rockUser() {

  var computerChoice = Math.floor(Math.random() * 3);

  console.log("You chose Rock");
  // 0 === "rock"
  if (computerChoice === 0) {
    console.log("Computer chose Rock. Tie game");
    alert("Computer chose Rock. Tie game");
  } else if (rock && computerChoice === 1) {
    console.log('Computer chose Paper. You lose');
    alert('Computer chose Paper. You lose');
  } else {
    console.log('Computer chose Scissors. You win');
    alert('Computer chose Scissors. You win');
    // score++;
  }
}

function paperUser() {

  var computerChoice = Math.floor(Math.random() * 3);

  console.log("You chose Paper");
  // 1 === "paper"
  if (computerChoice === 1) {
    console.log("Computer chose Paper. Tie game");
    alert("Computer chose Paper. Tie game");
  } else if (computerChoice === 2) {
    console.log('Computer chose Scissors. You lose');
    alert('Computer chose Scissors. You lose');
  } else {
    console.log('Computer chose Rock. You win');
    alert('Computer chose Rock. You win');
    // score++;
  }
}

function scissorsUser() {

  var computerChoice = Math.floor(Math.random() * 3);

  console.log("You chose Scissors");
  // 2 === "scissors"
  if (computerChoice === 2) {
    console.log("Computer chose Scissors. Tie game");
    alert("Computer chose Scissors. Tie game");
  } else if (computerChoice === 0) {
    console.log('Computer chose Rock. You lose');
    alert('Computer chose Rock. You lose');
  } else {
    console.log('Computer chose Paper. You win');
    alert('Computer chose Paper. You win');
    // score++;
  }
}

