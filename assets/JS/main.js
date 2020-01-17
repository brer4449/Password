const lowChar = "abcdefghijklmnopqrstuvwxyz"
const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numChar = "1234567890"
const specialChar = "!#$%&()*+-/:;<=>?@[]^_{}|~"

//Array of different character types
let passwordContent = [lowChar, upChar, numChar, specialChar];
//Variable set as blank, so passwordContent can get added to it
let passwordCombination = "";
//Input value received from user, number entered (returns as string)

//Variable reaching the text area
let passwordText = document.getElementById("password");
//Referencing each checkbox by Id
let checklow = document.getElementById("check-low");
let checkup = document.getElementById("check-up");
let checknum = document.getElementById("check-num");
let checkspec = document.getElementById("check-special");
//Button variable
var generateBtn = document.querySelector("#generate");
//Event listener calling the randomPass function
generateBtn.addEventListener("click", randomPass);

function getCheckedStateLow() {
    let input = document.getElementById("check-low");
    let isChecked = input.checked;
    if (isChecked === true) {
        passwordCombination += passwordContent[0];
    } else {
        if (passwordCombination.includes(passwordContent[0])) {
            passwordCombination = passwordCombination.replace(passwordContent[0], "");

        }
    }
};
function getCheckedStateUp() {
    let input = document.getElementById("check-up");
    let isChecked = input.checked;
    if (isChecked === true) {
        passwordCombination += passwordContent[1];
    } else {
        if (passwordCombination.includes(passwordContent[1])) {
            passwordCombination = passwordCombination.replace(passwordContent[1], "");
        };
    }
};
function getCheckedStateNum() {
    let input = document.getElementById("check-num");
    let isChecked = input.checked;
    if (isChecked === true) {
        passwordCombination += passwordContent[2];
    } else {
        if (passwordCombination.includes(passwordContent[2])) {
            passwordCombination = passwordCombination.replace(passwordContent[2], "");

        }
    }
};
function getCheckedStateSpecial() {
    let input = document.getElementById("check-special");
    let isChecked = input.checked;
    if (isChecked === true) {
        passwordCombination += passwordContent[3];
    } else {
        if (passwordCombination.includes(passwordContent[3])) {
            passwordCombination = passwordCombination.replace(passwordContent[3], "");

        }
    }
    console.log(passwordCombination);
};

checklow.addEventListener("click", getCheckedStateLow);
checkup.addEventListener("click", getCheckedStateUp);
checknum.addEventListener("click", getCheckedStateNum);
checkspec.addEventListener("click", getCheckedStateSpecial);

function randomPass(event) {
    event.preventDefault();
    passwordText.textContent = "";
    let passwordLength = parseInt(document.getElementById("passwordLength").value);

    for (let i = 0; i < passwordLength; i++) {

        let randomNum = Math.floor(Math.random() * (passwordCombination.length - 1) + 1);
        passwordText.textContent += passwordCombination[randomNum];
        console.log(passwordCombination);
    }
    return passwordText;
};