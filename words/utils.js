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

function keysStartingWith(obj, letter) {
    return Object.keys(obj).filter(key => key.startsWith(letter));
  }

function randomArrayElement(arr, checked) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

module.exports = { letterFrequencies, randomArrayElement, keysStartingWith }