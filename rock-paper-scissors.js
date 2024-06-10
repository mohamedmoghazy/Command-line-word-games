let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const inputMap = ['&#9994', '&#9995', '&#9996'];

const RockPaperScissors = ({
  rock: 0,
  paper: 1,
  scissors: 2
});

function getRandomHandSign()
{
  const values = Object.values(RockPaperScissors);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function playGame(playerChoice)
{
  const computerChoice = getRandomHandSign();
  document.getElementById('AIresult').innerHTML = "Cupter chose: " + inputMap[computerChoice] + "and you chose: " + inputMap[playerChoice];

  console.log(`Player choice: ${playerChoice} `);
  console.log(`Computer choice: ${computerChoice} `);

  if (playerChoice === computerChoice)
  {
    console.log('It\'s a tie!');
    score.ties += 1;
  }
  else if ((playerChoice === RockPaperScissors.rock && computerChoice === RockPaperScissors.scissors) ||
    (playerChoice === RockPaperScissors.paper && computerChoice === RockPaperScissors.rock) ||
    (playerChoice === RockPaperScissors.scissors && computerChoice === RockPaperScissors.paper))
  {
    console.log('You win!');
    document.getElementById('result').textContent = 'You win!';
    score.wins += 1;
  }
  else
  {
    console.log('You lose!');
    document.getElementById('result').textContent = 'You lose!';
    score.losses += 1;
  }

  // Save the updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));
  console.log('Current score:', score);

  // Display the current score
  document.getElementById('score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;
}