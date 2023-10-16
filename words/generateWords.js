const { Worker, isMainThread, parentPort } = require('worker_threads');

function generateWordsFn(findWordObj) {
    console.log("HELLO")
    console.log(findWordObj.board)
    console.log("HELLO")
    if 
    const worker = new Worker("./words/generateWordsWorker.js")

    worker.postMessage(findWordObj)
    console.log("AM I HERE")

    worker.on('message', (message) => {

        console.log('Received a message from the worker:', message);
    })


    // worker.on("message", (message) => message)
    }
    module.exports = { generateWordsFn }