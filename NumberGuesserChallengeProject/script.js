let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generates the number to be guessed
const generateTarget = () => Math.floor(Math.random() * 10);

// Gets the absolute distance from the guess to the target
const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);

// Compares the guesses from the human and the cpu
function compareGuesses(user, cpu, target) {
  const userDistance = getAbsoluteDistance(user, target);
  const cpuDistance = getAbsoluteDistance(cpu, target);
  if (user < 0 || user > 9 || cpuDistance < userDistance) {
    return false;
  } else if (userDistance <= cpuDistance) {
    return true
  }
}

// Updates the score of the winner
const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore +=1


// Advances the round forward by 1
const advanceRound = () => currentRoundNumber += 1;
