// Assignment Code
var generateBtn = document.querySelector('#generate');
var upperCaseCharactersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCaseCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numbersArray = '0123456789'.split('');
var specialCharactersArray = '!@#$%^&*()_-+=][{}><`~'.split('');
var allCharacters = [];
var passwordLength = 0;
var specialCharacters = false;
var lowerCase = false;


// VALIDATE PASSWORD LENGTH
function promptPassword() {
  var passwordPrompt = prompt(
    'Your password can be from 8-128 characters. What is your password length?'
  );

  function validateLength(password) {
    if (password > 7 && password < 129) {
      passwordLength = password;
      promptSpecialCharacters();
    } else {
      alert('You need a different password length!');
    }
  }
  validateLength(passwordPrompt);
}

// SPECIAL CHARACTERS FUNCTION
function promptSpecialCharacters() {
  var specialCharactersPref = confirm(
    "Including special characters? Click 'OK' to confirm or 'Cancel' to decline."
  );

  function checkSpecialCharacters() {
    if (specialCharactersPref) {
      specialCharacters = true;
    }
    promptLowerCase();
  }
  checkSpecialCharacters(specialCharactersPref);
}


// LOWER CASE FUNCTION
function promptLowerCase() {
  var lowerCasePref = confirm(
    "Including lower case letters? Click 'OK' to confirm or 'Cancel' to decline."
  );

  function checkLowerCasePref() {
    if (lowerCasePref) {
      lowerCase = true;
    }
  }

  promptUpperCase()

  checkLowerCasePref(lowerCasePref);
  var randomPasswordValue = generateRandomPassword(passwordLength);
  var passwordArea = document.getElementById('password');
  passwordArea.innerHTML = randomPasswordValue;
}


// UPPER CASE FUNCTION
function promptUpperCase() {
  var upperCasePref = confirm(
    "Including upper case letters? Click 'OK' to confirm or 'Cancel' to decline."
  );

  function checkUpperCasePref() {
    if (upperCasePref) {
      upperCase = true;
    }
  }

  promptNumber()
  
  checkUpperCasePref(upperCasePref);
  var randomPasswordValue = generateRandomPassword(passwordLength);
  var passwordArea = document.getElementById('password');
  passwordArea.innerHTML = randomPasswordValue;
}


// NUMBER FUNCTION
function promptNumber() {
  var numberPref = confirm(
    "Including numbers? Click 'OK' to confirm or 'Cancel' to decline."
  );

  function checkNumberPref() {
    if (numberPref) {
      number = true;
    }
  }
  checkNumberPref(numberPref);
  var randomPasswordValue = generateRandomPassword(passwordLength);
  var passwordArea = document.getElementById('password');
  passwordArea.innerHTML = randomPasswordValue;
}




function generateRandomPassword(passwordLength) {
  var result = '';
  if (!lowerCase && specialCharacters) {
    allCharacters = [
      ...upperCaseCharactersArray,
      ...numbersArray,
      ...specialCharactersArray,
    ];
  } else if (!lowerCase && !specialCharacters) {
    allCharacters = [...upperCaseCharactersArray, ...numbersArray];
  } else if (lowerCase && !specialCharacters) {
    allCharacters = [
      ...upperCaseCharactersArray,
      ...numbersArray,
      ...lowerCaseCharactersArray,
    ];
  } else {
    allCharacters = [
      ...upperCaseCharactersArray,
      ...numbersArray,
      ...lowerCaseCharactersArray,
      ...specialCharactersArray,
    ];
  }
  for (var i = 0; i < passwordLength; i++) {
    var allCharsString = allCharacters.join('');
    result += allCharsString.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
  return result;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  copyBtn.removeAttribute('disabled');
  copyBtn.focus();
}

document.addEventListener('click', (event) => {
  if (!event.target.matches('#generate')) {
    return;
  }
  if (event.target.matches('#generate')) {
    promptPassword();
  }
});
