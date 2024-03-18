// at()
const text = 'W3Schools'
console.log(text.at(1));//accepts negative

//Property Access [ ]
console.log(text[3]);

// Length()
console.log(text.length);

// charAt()
console.log(text.charAt(3)); //doest not accespts negative

// charcodeat()
console.log(text.charCodeAt(5));

// slice()
const text2 = 'Aplle, Banana, Kiwi';
const txtSliced = text2.slice(7, 13) //get the text frm 7 to 13
const part = text2.slice(7);// start to finish
console.log(txtSliced); //Banana
console.log(part); //Banana, Kiwi
console.log(text2); //Aplle, Banana, Kiwi

//substring()
const txtsubs = text2.substring(7, 13);
console.log(txtsubs);//same as slice, but any value less  that 0 is treated as zero

//substr
const substrtxt = text2.substr(7, 6); // second parameter is the length of the extracted part.
console.log(substrtxt);

//toUpperCase()
const text3 = "Hello World !";
console.log(text3.toUpperCase());

//toLowerCase()
console.log(text3.toLowerCase());

//contact()
const text4 = "Hello";
const text5 = "World";
console.log(text4.concat(" ", text5, " ", text2));// joins two or more strings

//trim()
const spacedTxt = '     Hello World!     ';
console.log(spacedTxt.trim());// removes white space on both side

//trimstart()
console.log(spacedTxt.trimStart());// removes white space on start

//trimend()
console.log(spacedTxt.trimEnd())// removes white space in the end 

//padStart()
const text6 = "5"; // to pad a number .. convert the number to string : "0" "5"
console.log(text6.padStart(4, "0")); // pad with 0 until the length of 4
console.log(text6.padStart(4, "x")); // pad with x until the length of 4

//padEnd // pad with 0 to the lenth // reverse of pad start

//repeat()
console.log(text.repeat(3)); //repeats the string

//replace()
const  txttoreplace = "Please visit Microsoft!";
console.log(txttoreplace.replace(/MicrosofT/i, "W3schools"));//replace the first match it found// /i to make it case sensitive
//to replace all matches use a regular expresion with a /g like /text/g

//replaceAll()
const rep = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(rep.replaceAll("Cats", "Dogs"));
console.log(rep.replaceAll("cats", "dogs"));

//split() //converst string to array
const txtArray = "a,b,c,d,e,f";
console.log(txtArray.split('').join(''));