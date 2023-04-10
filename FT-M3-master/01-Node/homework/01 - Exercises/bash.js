const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output){
   process.stdout.write(output)
   process.stdout.write('\nprompt > ')
}
function bash() {
   process.stdout.write('prompt > ')
   process.stdin.on("data",getData)
}

function getData(data){
   const args = data.split(' ');
   const cmd = args.shift();

   const commandExist = commands[cmd];

   if(commandExist){
      commandExist(print, args)
      return;
   }

   print(`command not found: ${cmd}`);
}

bash();
module.exports = {
   print,
   bash,
};
