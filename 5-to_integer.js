// Accepting User argurment
const input = process.argv[2];

// converts string into number _ base 10
const number = parseInt(input, 10);

// checks if user arg is a String or Number
if(process.argv[2]){

    if(isNaN(number) == NaN){
        console.log(`Not number: ${number}`)
    }else{
        console.log(`My number: ${number}`)
    }
}