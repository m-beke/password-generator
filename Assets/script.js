// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];


function generatePassword(){

   //Array to store types of characters to include in password
   var possibleCharacters = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];

   //Array to contain one of each type of chosen character to ensure each will be used
   var guaranteedCharacters = [];
 
   //Array to store result
   var result = [];
 
   //Add possibleCharacters and guaranteedCharacters to result
   possibleCharacters.concat(guaranteedCharacters);
 
   //Add specialCharacters to possibleCharacters
   specialCharacters.concat(possibleCharacters); 

  //Starts with prompt to ask how many characters you want in the password
  do {
    characterCount = window.prompt("How many characters would you like to use? (Please enter a number between 8-128.");
    characterCount = parseInt(characterCount, 10);
  } while (isNaN(characterCount) || characterCount < 8 || characterCount > 129)
  if (characterCount >= 8 && characterCount <= 128) {
  }else {
    window.alert("ERROR: Your password must contain between 8-128 characters");
    return "";
  }
  var lowerInclude = window.confirm("Would you like your password to include lowercase letters?");
  if (lowerInclude === true) {
    result = lowerCasedCharacters.concat(result);
  }
  var upperInclude = window.confirm("Would you like your password to include uppercase letters?");
  if (upperInclude === true) {
    result = upperCasedCharacters.concat(result);
  }
  var numInclude = window.confirm("Would you like your password to include numeric characters?");
  if (numInclude === true) {
    result = numericCharacters.concat(result);
  }
  var specInclude = window.confirm("Would you like your password to include special characters?");
  if (specInclude === true) {
    result = specialCharacters.concat(result);
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
