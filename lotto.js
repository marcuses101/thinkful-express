function lotto(sixNumberArray) {
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
    console.log(Array.from(winningNumbers).sort((a,b)=>a-b))
    console.log(numberOfMatches)
    if (numberOfMatches < 4) return "Sorry, you lose";
    if (numberOfMatches === 4) return "Congratulations! You win a free ticket";
    if (numberOfMatches === 5) return "Congratulations! You win $100";
    if (numberOfMatches === 6) return "Wow! Unbelievable! You could have won the mega millions!"
}
console.log(lotto([1,2,3,4,5,6]));
