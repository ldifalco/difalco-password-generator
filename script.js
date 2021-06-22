// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var characters = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be between 8 and 128 characters.");
    
        if (passwordLength<8){
          alert("Password length must be a number between 8-128 characters");
          generatePassword();
        }else if (passwordLength>128){
          alert("Password length must be a number between 8-128 characters");
          generatePassword();
        }

  var numbersConfirm = confirm("Do you want numbers in your password?");

  var lowerCasesConfirm = confirm("Do you want lowercases in your password?");

  var upperCasesConfirm = confirm("Do you want uppercases in your password?");

  var specialConfirm = confirm("Do you want special characters in your password?");

  var optionSet = ""

  if(numbersConfirm) {
    optionSet += numbers
  }
  if(lowerCasesConfirm){
    optionSet += lowerCases
  }
  if(upperCasesConfirm){
    optionSet += upperCases
  }  
  if(specialConfirm){
    optionSet += characters
  }

  console.log(optionSet)

  var passwordContainer = ""

  for(i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * optionSet.length)
    var randomChar = optionSet[randomNumber]
    console.log(randomNumber, randomChar)
    passwordContainer += randomChar
  }

  return passwordContainer
}
