console.log("Hello World!");
//game();

const container = document.querySelector('container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



const para = document.createElement('p');
para.classList.add('paragraph');
para.textContent = 'I am Red';
para.style.color = 'red';

content.appendChild(para);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});



function getComputerChoice(){
    chosenNumber = Math.floor(Math.random() * 3 + 1);

    switch (chosenNumber) {
        case 1:
            console.log("Rock");
            chosenNumber = "rock";
          break;
        case 2:
            console.log("Paper");
            chosenNumber = "paper";
          break;
        case 3:
            console.log("Scissor");
            chosenNumber = "scissor";
    }

    return chosenNumber;
}


// add proper validation
function getPlayerChoice(){
    let playerChoice = prompt("Do you choose Rock, Paper, or Scissor?");
    console.log("You chose " + playerChoice +  "!");
    return (playerChoice.toLowerCase());
}

function playRound(comChoice, playerChoice){
    if(comChoice === playerChoice){
        console.log("It's a tie! No one wins this round.");
        return;
    }

    if(comChoice === "rock"){
        if(playerChoice === "scissor"){
            console.log("Computer wins! End of round.");
        }
        else {
            console.log("You win! End of round.")
        }
    }
    else if(comChoice ===  "paper"){
        if(playerChoice === "rock"){
            console.log("Computer wins! End of round.");
        }
        else {
            console.log("You win! End of round.")
        }
    }
    else if(comChoice === "scissor"){
        if(playerChoice === "paper"){
            console.log("Computer wins! End of round.");
        }
        else {
            console.log("You win! End of round.")
        }
    }

}

function game(){
    for(i = 0; i < 5; i++){
        let comChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        playRound(comChoice, playerChoice);
    }
}