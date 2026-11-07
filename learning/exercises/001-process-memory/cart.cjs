// Run this file in two separate terminals to compare their working memory.
const readline = require('node:readline');

const cart = [];
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Process ID: ${process.pid}`);
console.log('Commands: add shoes | show | exit');

terminal.on('line', (line) => {
  const command = line.trim();

  if (command.startsWith('add ') && command.slice(4).trim()) {
    const item = command.slice(4).trim();
    cart.push(item);
    console.log(`Added: ${item}`);
  } else if (command === 'show') {
    console.log(JSON.stringify(cart));
  } else if (command === 'exit') {
    terminal.close();
  } else {
    console.log('Use: add <item>, show, or exit');
  }
});
