/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/


function numberOfVowels(data) {
  let vowelCounts = 0
    // Put your solution here(
    // let vowelCounts = 0;
    for(let i = 0; i < data.length; i++){
    if(data[i] === "o" ) {
      vowelCounts++
    }
     else if(data[i] === "a" ) {
      vowelCounts++
    }
     else if(data[i] === "e" ) {
      vowelCounts++
    }
     else if(data[i] === "i" ) {
      vowelCounts++
    }
    else if(data[i] === "u" ) {
      vowelCounts++
    }
}
return vowelCounts;
  
  

}

  
  console.log(numberOfVowels("orange")); // 3
  console.log(numberOfVowels("cornerstone college")); // 7
  console.log(numberOfVowels("aeiou")); // 5