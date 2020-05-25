const lowChar = "abcdefghijklmnopqrstuvwxyz";
const upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numChar = "1234567890";
const specialChar = "!#$%&()*+-/:;<=>?@[]^_{}|~";

//Array of different character types
let charTypeArray = [lowChar, upChar, numChar, specialChar];
//Variable set as blank, so charTypeArray can get added to it
let passwordCombination = "";
// Variable that grabs input value of password length
const passLength = document.getElementById("passwordLength");
//Variable reaching the text area
const passwordOutput = document.getElementById("password");
//Referencing each checkbox by Id
const checklow = document.getElementById("check-low");
const checkup = document.getElementById("check-up");
const checknum = document.getElementById("check-num");
const checkspec = document.getElementById("check-special");
//Button variable
const generateBtn = document.querySelector("#generate");
//Event listener calling the randomPass function
generateBtn.addEventListener("click", randomPass);

getCheckedStateLow = () => {
  let input = document.getElementById("check-low");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += charTypeArray[0];
  } else {
    if (passwordCombination.includes(charTypeArray[0])) {
      passwordCombination = passwordCombination.replace(charTypeArray[0], "");
    }
  }
};
getCheckedStateUp = () => {
  let input = document.getElementById("check-up");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += charTypeArray[1];
  } else {
    if (passwordCombination.includes(charTypeArray[1])) {
      passwordCombination = passwordCombination.replace(charTypeArray[1], "");
    }
  }
};
getCheckedStateNum = () => {
  let input = document.getElementById("check-num");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += charTypeArray[2];
  } else {
    if (passwordCombination.includes(charTypeArray[2])) {
      passwordCombination = passwordCombination.replace(charTypeArray[2], "");
    }
  }
};
getCheckedStateSpecial = () => {
  let input = document.getElementById("check-special");
  let isChecked = input.checked;
  if (isChecked) {
    passwordCombination += charTypeArray[3];
  } else {
    if (passwordCombination.includes(charTypeArray[3])) {
      passwordCombination = passwordCombination.replace(charTypeArray[3], "");
    }
  }
};

checklow.addEventListener("click", getCheckedStateLow);
checkup.addEventListener("click", getCheckedStateUp);
checknum.addEventListener("click", getCheckedStateNum);
checkspec.addEventListener("click", getCheckedStateSpecial);

showError = (error) => {
  const errorDiv = document.createElement("div");
  const cardBody = document.querySelector(".card-body");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  cardBody.insertBefore(errorDiv, passwordOutput);
  setTimeout(clearError, 3000);
};

clearError = () => {
  document.querySelector(".alert").remove();
};

function randomPass(event) {
  event.preventDefault();
  passwordOutput.textContent = "";
  let passwordLength = parseInt(passLength.value);
  if (
    !checklow.checked &&
    !checkup.checked &&
    !checknum.checked &&
    !checkspec.checked
  ) {
    passLength.value = "";
    passwordOutput.textContent = "";
    showError("Please check at least one field to generate password");
    return;
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (let i = 0; i < passwordLength; i++) {
      let randomNum = Math.floor(
        Math.random() * (passwordCombination.length - 1) + 1
      );
      passwordOutput.textContent += passwordCombination[randomNum];
      // console.log(passwordCombination);
    }
    return passwordOutput;
  } else {
    showError("Please check your password length and try again!");
    return;
  }
}
