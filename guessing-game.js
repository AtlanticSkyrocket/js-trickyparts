function guessingGame() {
  let guessCount = 0;
  let answer = Math.floor(Math.random() * 100);
  let solved = false;

  return function game(guess) {
    if(guess === undefined && !solved) return "Please guess a number between 0 and 100.";
    if(solved) return "The game is over, you already won!";
    
    guessCount++;

    if(guess === answer) {
      solved = true;
      return `You win! You found ${guess} in ${guessCount} guesses.`;
    } else if(guess < answer) {
      return `${guess} is too low!`;
    } else if(guess > answer) {
      return `${guess} is too high!`;
    }
  };
}

module.exports = { guessingGame };
