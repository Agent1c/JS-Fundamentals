/* 
Write a script that prints a message depending of the number of arguments passed:

If no arguments are passed to the script, print “No argument”
If only one argument is passed to the script, print “Argument found”
Otherwise, print “Arguments found”
You must use console.log(...) to print all output
You are not allowed to use var 
*/

// let argVar = 0;
// import process.argv

const { argv } = require('node:process');

// for (let i = 0; i < process.argv.lenght; i++){

// }

argv.forEach((val, index) => {
    console.log(`${index}, ${val}`)
});

if (argv == argv) {
    if (!argv) {
        console.log('No argument');
    } else if (argv) {
        console.log('Argument found')
    };
    console.log('Arguments found')
};