const input = process.argv[2];
const number = parseInt(input, 10)

//This checks if the value stored in number is not a number
if (isNaN(number)){
    console.log("Missing number of occurrences")
}else{

    // Create a list of "C is fun" if the user inputs a number
    let result = ''
    for (let i = 0; i < number; i++){
        result += "C is fun\n";
    }
    console.log(result.trim())

    // let result = ''; //- empty string called result - -  will be used to collect all the "C is fun" lines in one place.


    // let i = 0;

    // while(i < number){
    //     result += "C is fun\n"; //appending string to results string.
    //     i++; // incrementing 
    // }
    // console.log(result)
}

