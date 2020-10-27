const readline = require('readline');
//import ElevatorShaft from './classes/ElevatorShaft.js'
var ElevatorShaft = require('./classes/ElevatorShaft.js');
var shaft = new ElevatorShaft(10);

function replDemo() {
  return new Promise(function(resolve, reject) {
    let rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('elevator> ');
    rl.prompt();
    rl.on('line', function(line) {
      if (line === "exit" || line === "quit" || line == 'q') {
        rl.close();
        return; // bail here, so rl.prompt() isn't called again
      }

      if (line === "help" || line === '?') {
        console.log(`commands:\n  woof\n  exit|quit\n`)
      } else if (line.startsWith("call")) {
        lines = line.split(" ");
        if(lines.length != 2 || isNaN(parseInt(lines[1]))){ //If the command is invalid
          console.log("Unknown stair");
        }else{
          var result = shaft.call(parseInt(lines[1]));
          result > 0 ? console.log("Elevator is here") : console.log("Unknown stair number");
        }
      } else {
        console.log(`unknown command: "${line}"`);
      }
      rl.prompt()

    }).on('close',function(){
      console.log('bye');
      resolve(42); // this is the final result of the function
    });
  })
}

async function run() {
  try {
    let replResult = await replDemo();
    console.log('repl result:', replResult);

  } catch(e) {
    console.log('failed:', e);
  }
}

run();
