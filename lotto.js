

function lotto(sixNumberArray) {
  if (new Set(sixNumberArray).size !== 6) return "Invalid ticket";
  if (
    !sixNumberArray.every((num) => {
      const number = parseInt(num);
      return number >= 1 && number <= 20;
    })
  ) {
    return "Invalid Number";
  }
  let winningNumbers = new Set();
  while (winningNumbers.size < 6) {
    winningNumbers.add(Math.ceil(Math.random() * 20));
  }
  const numberOfMatches = sixNumberArray.reduce(
    (numberOfMatches, currentNumberToMatch) => {
      return Array.from(winningNumbers).includes(currentNumberToMatch)
        ? numberOfMatches + 1
        : numberOfMatches;
    },
    0
  );
  if (numberOfMatches < 4) return "Sorry, you lose";
  if (numberOfMatches === 4) return "Congratulations! You win a free ticket";
  if (numberOfMatches === 5) return "Congratulations! You win $100";
  if (numberOfMatches === 6)
    return "Wow! Unbelievable! You could have won the mega millions!";
}

module.exports = { lotto };
