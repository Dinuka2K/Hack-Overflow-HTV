const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (count) => {
  //console.log(`Hello, ${count}!`);

  for(let i = 0; i<count;i++){
    console.log("Hello World");
  }

  rl.close();
});
