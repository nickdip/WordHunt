const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // This is the main thread
  const worker = new Worker('./my_worker.js');

  worker.on('message', (message) => {
    console.log('Received a message from the worker:', message);
  });

  // Send a message to the worker
  worker.postMessage('Hello from the main thread!');
} else {
  // This is the worker thread
  parentPort.on('message', (message) => {
    console.log('Received a message from the main thread:', message);
    // Perform some work here
    // Send a message back to the main thread
    parentPort.postMessage('Hello from the worker thread!');
  });
}