/*In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.

URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

Instruction
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

*/

const urlDecode = function(text) {
  // // Put your solution here
   let txt = text
    let str = txt.split("duck")
   let word = str
   for(let i = 0; i < txt.length; i++){
     let str = txt.split("=")
     if(txt[i] === {txt}){
        txt = {duck}

     } else  if (txt[i] === "&"){
       txt[i] = " , "

     } else if (txt[i] === String){
       txt[i] = ""
    
     }else if (txt[i] === "%"){
       txt[i] = " "
     }
     return {txt}    
 }
 
  let x = text.split("=")
   for(let i = 0; i < text.length; i++){
   if(txt[i] === "=" ){
       let x = text.split("=")
        console.log(x)
    }
  console.log(x)
  let obj = {x}
  console.log(obj)
   

     
   }

  
  

  
  
};

console.log(urlDecode("duck=rubber")); //{duck: "rubber"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // {city: "Vancouver", weather: "lots of rain"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // "lots of rain"
