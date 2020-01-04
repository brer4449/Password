//eventhandler for form submission

//determine what they entered into the form(number of characters and which other options)
    //make sure password length is a number 
    //make sure at least one of the options is selected
//make a new variable the contains all the characters allowed in the password ✓
//loop through how many characters the password should be
    //for each time through the loop
    //get a random character from the desired characters
    //then add that to the new password string
//when done, display new password

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}
console.log(getRandomInt(8, 128));

const lowChar = "abcdefghijklmnopqrstuvwxyz"
const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// console.log(upChar[25]);
const numChar = "1234567890"
const specialChar = "!#$%&()*+-/:;<=>?@[]^_{}|~"
// console.log(specialChar[25]);

let passwordContent;

passwordContent = [lowChar, upChar, numChar, specialChar];
console.log(passwordContent);

let passwordCombination;


let passwordLength = document.getElementById("#passwordLength");
let passwordText = document.querySelector("#password").textContent;


//attempt at making sure something got entered, and that it was a number
// if (passwordLength === null) {
//     alert("Try again!");
// } else if (passwordText.toString() !== numChar){
//     alert("Try again!");
// } else {
//     passwordText = passwordLength;
// };


let checklow = document.getElementById("check-low");
let checkup = document.getElementById("check-up");
let checknum = document.getElementById("check-num");
let checkspec = document.getElementById("check-special");

function getCheckedState(event) {
    event.preventDefault();
    let input = document.querySelectorAll("form-check-input");
    let isChecked = input.checked;
    if(isChecked !== false){
        alert("The checkbox is clicked");
    } else {
        alert("The checkbox is not clicked");
    };
}

checklow.addEventListener("click", getCheckedState)

// if (document.getElementsByClassName("form-check-input").checked == true){
//     if (checklow.checked == true){
//         passwordCombination += passwordContent[0];
//     } else if (checkup.checked == true){
//         passwordCombination += passwordContent[1];
//     } else if (checknum.checked == true){
//         passwordCombination += passwordContent[2];
//     } else{
//         passwordCombination += passwordContent[3];
//     }; console.log(passwordCombination);
// } else {
//     alert ("At least one box must be checked!")
// };



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
        // console.log(randoInt);
        // if (i != randoInt - 1 ) { continue; }
        // else {
            passwordText+= randomUp + randomLow + randomNum + randomSpec;
        // }
        // console.log(passwordText);
        
    } 
    // console.log(passwordText);
    // event.preventDefault();
    // console.log(event.target)
    return passwordText;
        
};
randomPass();

// function copyToClipboard() {
  // BONUS 
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
