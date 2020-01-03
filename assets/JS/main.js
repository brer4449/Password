
const specialChar = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\'", "\"", "\\" ]
// console.log(specialChar[32]);
// console.log(specialChar[getRandomInt(0, 32)]);
const numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// console.log(numChar[9]);
// console.log(numChar[getRandomInt(0, 9)]);
const lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// console.log(lowChar[25]);
// console.log(lowChar[getRandomInt(0, 25)]);
const upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// console.log(upChar[25]);
// console.log(upChar[getRandomInt(0, 25)]);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}
console.log(getRandomInt(8, 128));

let checklow = document.getElementById("check-low");
let checkup = document.getElementById("check-up");
let checknum = document.getElementById("check-num");
let checkspec = document.getElementById("check-special");

// lowChar = checklow.value;
// upChar = checkup.value;
// numChar = checknum.value;
// checkspec = specialChar.value;

// let passwordContent = document.getElementById("password").textContent
// console.log(passwordContent);
let passwordText = document.querySelector("#password").textContent;

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", randomPass)


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

function randomPass(){
    // loop from 1 to number of characters in password
    // for each one, choose one of the types allowed
    // pick a value from that type and add it to the password string
    
    // let randomUp = upChar[getRandomInt(0, 25)];
    // let randomLow = lowChar[getRandomInt(0, 25)];
    // let randomNum = numChar[getRandomInt(0, 9)];
    // let randomSpec = specialChar[getRandomInt(0, 32)];

    let randoInt = getRandomInt(2, 32)

    for (let i = 0; i < randoInt; i++){
        randomUp = upChar[getRandomInt(0, 25)];
        // console.log(randomUp)
        let randomLow = lowChar[getRandomInt(0, 25)];
        // console.log(randomLow);
        let randomNum = numChar[getRandomInt(0, 9)];
        // console.log(randomNum);
        let randomSpec = specialChar[getRandomInt(0, 32)];
        // console.log(randomSpec);
        console.log(randoInt);
        // if (i != randoInt - 1 ) { continue; }
        // else {
            passwordText+= randomUp + randomLow + randomNum + randomSpec;
        // }
        console.log(passwordText);
        
    } 
    console.log(passwordText);
    // event.preventDefault();
    // console.log(event.target)
    return passwordText;
        
};
randomPass();

// function copyToClipboard() {
  // BONUS 
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
