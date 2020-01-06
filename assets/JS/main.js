//https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX
//https://www.w3schools.com/jsref/prop_checkbox_checked.asp
//https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
//http://help.dottoro.com/ljpiwrem.php
//https://app.slack.com/docs/TQV71RJJG/FS7CT6LF2?origin_team=TQV71RJJG&origin_channel=CQGSWN8KC

//WHAT'S WRONG:
//Need to make if statement onclick for checkboxes to get what values user wants in password
//Need to connect password generated from randomPass() to the textbox
//Need password length to be responsive. Currently whatever is put into input isn't going where it needs (ie passwordLength isn't receiving user input as expected)

const lowChar = "abcdefghijklmnopqrstuvwxyz"
const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numChar = "1234567890"
const specialChar = "!#$%&()*+-/:;<=>?@[]^_{}|~"

//Array of different character types
let passwordContent = [lowChar, upChar, numChar, specialChar];
//Variable set as blank, so passwordContent can get added to it
let passwordCombination="";
//Input value received from user, number entered (returns as string)

//Variable reaching the text area
let passwordText = document.getElementById("password");
// console.log(passwordText);
//Referencing each checkbox by Id
let checklow = document.getElementById("check-low");
let checkup = document.getElementById("check-up");
let checknum = document.getElementById("check-num");
let checkspec = document.getElementById("check-special");
//Button variable
var generateBtn = document.querySelector("#generate");
//Event listener calling the randomPass function
generateBtn.addEventListener("click", randomPass);



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


// function getRandomInt() {
//     return Math.floor(Math.random() * (passLength)) - 1; 
// }
// let randomNum = Math.floor(Math.random() * (passLength)) - 1
// console.log(randomNum);


function getCheckedStateLow() {
    let input = document.getElementById("check-low");
    let isChecked = input.checked;
    if(isChecked === true){
        passwordCombination += passwordContent[0];
    };
}
function getCheckedStateUp() {
    let input = document.getElementById("check-up");
    let isChecked = input.checked;
    if(isChecked === true){
        passwordCombination += passwordContent[1];
    };
}
function getCheckedStateNum() {
    let input = document.getElementById("check-num");
    let isChecked = input.checked;
    if(isChecked === true){
        passwordCombination += passwordContent[2];
    };
}
function getCheckedStateSpecial() {
    let input = document.getElementById("check-special");
    let isChecked = input.checked;
    if(isChecked === true){
        passwordCombination += passwordContent[3];
    }
}

checklow.addEventListener("click", getCheckedStateLow);
checkup.addEventListener("click", getCheckedStateUp);
checknum.addEventListener("click", getCheckedStateNum);
checkspec.addEventListener("click", getCheckedStateSpecial);



function randomPass(event){
    event.preventDefault();

    // console.log(event.target.value);
    // loop from 1 to number of characters in password
    // for each one, choose one of the types allowed
    // pick a value from that type and add it to the password string

    let passwordLength = parseInt(document.getElementById("passwordLength").value);

    console.log(passwordCombination.length);

    for (let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * (passwordCombination.length - 1) + 1);
        
        
        
        // Math.floor(Math.random() * (passwordCombination.length)) - 1;

        passwordText.textContent += passwordCombination[randomNum];

        console.log(passwordCombination)
        console.log(passwordText);
        
    } 
    // console.log(passwordText);
    // event.preventDefault();
    // console.log(event.target)
    return passwordText;
        
};
// console.log(randomPass());


// function copyToClipboard() {
  // BONUS 
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
