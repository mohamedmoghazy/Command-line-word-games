const readline = require("readline");

class RockPaperScissors
{
  constructor()
  {
    this.choices = ["rock", "paper", "scissors"];
    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  getComputerChoice()
  {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  determineWinner(userChoice, computerChoice)
  {
    if (userChoice === computerChoice)
    {
      return "It's a tie!";
    }
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    )
    {
      return "You win!";
    }
    return "You lose!";
  }

  promptUserChoice(callback)
  {
    this.input.question(
      "Choose rock, paper, or scissors: ",
      function (userChoice)
      {
        userChoice = userChoice.toLowerCase();
        callback(userChoice);
      }
    );
  }

  promptPlayAgain(callback)
  {
    this.input.question(
      "Do you want to play again? (yes/no): ",
      function (answer)
      {
        callback(answer.toLowerCase());
      }
    );
  }

  validateUserChoice(userChoice)
  {
    return this.choices.includes(userChoice);
  }

  startGame()
  {
    this.promptUserChoice((userChoice) =>
    {
      if (!this.validateUserChoice(userChoice))
      {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
        this.startGame();
      } else
      {
        const computerChoice = this.getComputerChoice();
        console.log("You chose: " + userChoice);
        console.log("The computer chose: " + computerChoice);
        const result = this.determineWinner(userChoice, computerChoice);
        console.log(result);
        this.promptPlayAgain((answer) =>
        {
          if (answer === "yes")
          {
            this.startGame();
          } else
          {
            this.input.close();
          }
        });
      }
    });
  }
}

const game = new RockPaperScissors();
game.startGame();
