const { parentPort } = require('worker_threads')

parentPort.on("message", (message) => {
  console.log("IN HERE")
  console.log(message, " <<< message")
  console.log("HELLLLLLLO")
  console.log(typeof message)
  let possibleWords = message.generateWords()
  parentPort.postMessage(possibleWords);
});