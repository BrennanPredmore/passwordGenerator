var uppercaseLetters = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z']
var lowercaseLetters = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z']
var specialCharacters = ['`,~,!,@,#,$,%,^,&,*,(,)']
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9']

alert("Your password must be between 8-128 characters!");
prompt("How long will your password be?");
alert("You must choose atleast one of the following: upper case, lower case, special, and or numeric characters.");
alert("We highly recommend chosing as many as possible to increase your password strengh!")


confirm("Would you like to use upper case characters?");
confirm("Would you like to use lower case characters?");
confirm("Would you like to use special characters?");
confirm("Would you like to use numeric characters?")


// Assignment Code
var generateBtn = document.querySelector("#generate");


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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER