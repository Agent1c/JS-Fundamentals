// Accepting User argurment
const input = process.argv[2];

// converts string into number _ base 10
const number = parseInt(input, 10);

// checks if user arg is a String or Number
if(process.argv[2]){
    console.log(`My number: ${number}`)
}else{
    console.log('Not a number')
}