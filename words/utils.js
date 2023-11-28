
`The frequency letters occur in the English language, 
used for generating random letters `
const letterFrequencies = {
    'A': 8.167,
    'B': 1.492,
    'C': 2.782,
    'D': 4.253,
    'E': 12.702,
    'F': 2.228,
    'G': 2.015,
    'H': 6.094,
    'I': 6.966,
    'J': 0.153,
    'K': 0.772,
    'L': 4.025,
    'M': 2.406,
    'N': 6.749,
    'O': 7.507,
    'P': 1.929,
    'Q': 0.095,
    'R': 5.987,
    'S': 6.327,
    'T': 9.056,
    'U': 2.758,
    'V': 0.978,
    'W': 2.360,
    'X': 0.150,
    'Y': 1.974,
    'Z': 0.074,
  };

  `The score each letter is worth (Scrabble scoring used)`

  const wordScores = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

function keysStartingWith(obj, letter) {
    return Object.keys(obj).filter(key => key.startsWith(letter));
  }

function randomArrayElement(arr, checked) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

`Calculates the score of a word `
function wordScore(word) {
    return word.toUpperCase().split("").reduce((score, letter) => score + wordScores[letter], 0);
  }
module.exports = { letterFrequencies, randomArrayElement, keysStartingWith, wordScore }