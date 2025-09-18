// Accepting User argurment
const input = process.argv[2];

// converts string into number _ base 10
const number = parseInt(input, 10);

// check if the conversion failed
if(isNaN(number)){
    console.log(`Not a number`)
}else{
    console.log(`My number: ${number}`)
}
