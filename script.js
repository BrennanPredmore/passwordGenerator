// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseCharactersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCaseCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numbersArray = '0123456789'.split('');
var specialCharactersArray = '!@#$%^&*()_-+=][{}><`~'.split('');
var allCharacters = [];
var passwordLength = 0;
var specialCharacters = false;
var lowerCase = false;

function promptPassword() {
  var passwordPrompt = prompt("Your password can be from 8-128 characters. What is your password length?");

  function validateLength(password) {
    if (password > 7 && password < 128) {
      passwordLength = password
      promptSpecialCharacters()
    } else {
      alert('You need a different password length!')
    }
  }
  validateLength(passwordPrompt)
}
//this function can be
function promptSpecialCharacters() {
  var specialCharactersPref = confirm("Including special characters? Click 'OK' to confirm or 'Cancel' to decline.");

  function checkSpecialCharacters(preference) {
    if (specialCharactersPref) {
      specialCharacters = true
    }
    //function call to next confirm
    promptLowerCase()
  }
  checkSpecialCharacters(specialCharactersPref)
}

function promptLowerCase() {
  //this variable belongs to this function :)
  var lowerCasePref = confirm("Including lower case letters? Click 'OK' to confirm or 'Cancel' to decline.");

  function checkLowerCasePref(preference) {
    if (lowerCasePref) {
      lowerCase = true
    }
    //function call to next confirm
  }
  checkLowerCasePref(lowerCasePref)
  var randomPasswordValue = generateRandomPassword(passwordLength)
  var passwordArea = document.getElementById('password')
  passwordArea.innerHTML = randomPasswordValue
}

function generateRandomPassword(passwordLength) {
  var result = ''
  if (!lowerCase && specialCharacters) {
    allCharacters = [...upperCaseCharactersArray, ...numbersArray, ...specialCharactersArray]
  } else if (!lowerCase && !specialCharacters) {
    allCharacters = [...upperCaseCharactersArray, ...numbersArray]
  } else if (lowerCase && !specialCharacters) {
    allCharacters = [...upperCaseCharactersArray, ...numbersArray, ...lowerCaseCharactersArray]
  } else {
    allCharacters = [...upperCaseCharactersArray, ...numbersArray, ...lowerCaseCharactersArray, ...specialCharactersArray]
  }
  for (var i = 0; i < passwordLength; i++) {
    var allCharsString = allCharacters.join('')
    result += allCharsString.charAt(Math.floor(Math.random() * allCharacters.length));
  }
  return result
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
}
// When generate button is pressed, I want the prompt to show up to ask user how many characters they want//
// Add event listener to generate button
document.addEventListener("click", event => {
  if (!event.target.matches('#generate')) {
    return;
  }
  if (event.target.matches('#generate')) {
    promptPassword()
  }
})