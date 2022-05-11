/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    // Put your solution here
    let largest = data[0]
    let i = 0
    for ( i = 0; i < data.length; i++) {
        if (largest < data[i]) {
        largest = data[i]
        

        }
        

        
        
        
    }

    let secondLargest = data[0]
    for (let i = 0; i < data.length; i++){
        if (data[i] === largest) {
            data.splice(i, 1)
        }
        if(secondLargest < data[i]) {
            secondLargest = data[i]
        }
        
    }
    return largest + secondLargest


};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126