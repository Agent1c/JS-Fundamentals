const multi_languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// itarating through multi_languages array
// for(let lang = 0; lang < multi_languages.length; lang++){
//   console.log(multi_languages[lang])
// }

// while(multi_languages >= 3){
//   multi_languages--;
//   console.log(multi_languages)
// }

for (const lang in multi_languages){
  console.log(multi_languages[lang]);
}

// let n = 0;
// let x = 0;

// labelCancelLoops: while(true){
//   console.log("Outer loops: ", n);
//   n+=1;
//   x = 1;

//   while(true){
//     console.log('Inner loops: ', x);
//     x+=1;

//     if(n === 10 && x === 10){
//       break labelCancelLoops;

//     }else if(x === 10){
//       break;
//     }
//   }
// }

// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkJ: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }