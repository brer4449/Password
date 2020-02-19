const lowChar = "abcdefghijklmnopqrstuvwxyz";
const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numChar = "1234567890";
const specialChar = "!#$%&()*+-/:;<=>?@[]^_{}|~";

//Array of different character types
let passwordArray = [lowChar, upChar, numChar, specialChar];
//Variable set as blank, so passwordArray can get added to it
let passwordCombination = "";
//Input value received from user, number entered (returns as string)

//Variable reaching the text area
let passwordEl = document.getElementById("password");
//Referencing each checkbox by Id
let checklow = document.getElementById("check-low");
let checkup = document.getElementById("check-up");
let checknum = document.getElementById("check-num");
let checkspec = document.getElementById("check-special");
//Button variable
let generateBtn = document.querySelector("#generate");
//Event listener calling the randomPass function
generateBtn.addEventListener("click", randomPass);

function getCheckedStateLow() {
  let input = document.getElementById("check-low");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += passwordArray[0];
  } else {
    if (passwordCombination.includes(passwordArray[0])) {
      passwordCombination = passwordCombination.replace(passwordArray[0], "");
    }
  }
}
function getCheckedStateUp() {
  let input = document.getElementById("check-up");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += passwordArray[1];
  } else {
    if (passwordCombination.includes(passwordArray[1])) {
      passwordCombination = passwordCombination.replace(passwordArray[1], "");
    }
  }
}
function getCheckedStateNum() {
  let input = document.getElementById("check-num");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += passwordArray[2];
  } else {
    if (passwordCombination.includes(passwordArray[2])) {
      passwordCombination = passwordCombination.replace(passwordArray[2], "");
    }
  }
}
function getCheckedStateSpecial() {
  let input = document.getElementById("check-special");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += passwordArray[3];
  } else {
    if (passwordCombination.includes(passwordArray[3])) {
      passwordCombination = passwordCombination.replace(passwordArray[3], "");
    }
  }
}

checklow.addEventListener("click", getCheckedStateLow);
checkup.addEventListener("click", getCheckedStateUp);
checknum.addEventListener("click", getCheckedStateNum);
checkspec.addEventListener("click", getCheckedStateSpecial);

function showError(error) {
  const errorDiv = document.createElement("div");
  const wrapper = document.querySelector(".wrapper");
  const header = document.querySelector("#heading");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  wrapper.insertBefore(errorDiv, header);
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

function randomPass(event) {
  event.preventDefault();
  passwordEl.textContent = "";
  let passwordLength = parseInt(
    document.getElementById("passwordLength").value
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (let i = 0; i < passwordLength; i++) {
      let randomNum = Math.floor(
        Math.random() * (passwordCombination.length - 1) + 1
      );
      passwordEl.textContent += passwordCombination[randomNum];
      // console.log(passwordCombination);
    }
    return passwordEl;
  } else {
    showError("Please check your password length and try again!");
    return;
  }
}
