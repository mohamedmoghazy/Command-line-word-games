let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const inputMap = ['&#9994', '&#9995', '&#9996'];

const RookPaperScissors = ({
  rock: 0,
  paper: 1,
  scissors: 2
});

function getRandomHandSign()
{
  const values = Object.values(RookPaperScissors);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function playGame(playerChoice)
{
  const computerChoice = getRandomHandSign();
  document.getElementById('AIresult').textContent = inputMap[computerChoice];

  console.log(`Player choice: ${playerChoice} `);
  console.log(`Computer choice: ${computerChoice} `);

  if (playerChoice === computerChoice)
  {
    console.log('It\'s a tie!');
    score.ties += 1;
  }
  else if ((playerChoice === RookPaperScissors.rock && computerChoice === RookPaperScissors.scissors) ||
    (playerChoice === RookPaperScissors.paper && computerChoice === RookPaperScissors.rock) ||
    (playerChoice === RookPaperScissors.scissors && computerChoice === RookPaperScissors.paper))
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