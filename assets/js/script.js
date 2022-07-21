//Variable that contains the button generator
var generateBtn = document.querySelector("#generate");

//Array of 26 uppercase characters
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
'R','S','T','U','V','W','X','Y','Z'];

//An array of 26 lowercase characters
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//An array of 10 numeric characters
var numeric = ['0','1','2','3','4','5','6','7','8','9'];

//An array of 33 special characters
var specialCharacters = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

//returns a string of randomly generated characters
function generatePassword(){
  //Contains a numeric value of the user's desired password length.
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

  //If the user's password length is less than 8 or greater than 128, the function ends.
  if (passwordLength < 8 || passwordLength > 128){
    return;
  }

  //prompts for the user's desired characters. Saves the user's selection as a boolean.
  var uppercaseLetters = window.confirm("Click OK to confirm including uppercase characters.");
  var lowercaseLetters = window.confirm("Click OK to confirm including lowercase characters.");
  var specialSymbols = window.confirm("Click OK to confirm including special characters.");
  var numericCharacters = window.confirm("Click OK to confirm including numeric characters.");

  //An array that will hold all the character types that the user wants for their password.
  var selection = [];
  //An array that will hold randomly selected characters based on the user's choice of character types. The length of the array is based off the user's preference for password length.
  var selectedCharacters = [];
  //This variable will contain all the user's characters for their password and is returned as a string at the end of the function. 
  var myPassword= "";

  //If no character types were selected, the function ends.
  if(!uppercaseLetters  && !lowercaseLetters && !specialSymbols && !numericCharacters){
    return;
  }

  //Checks whether the user chose a specific character type. If true, the characters are added to an array.
  if(uppercaseLetters){
    selection = selection.concat(uppercase);
  }
  if(lowercaseLetters){
    selection = selection.concat(lowercase);
  }
  if(specialSymbols){
    selection = selection.concat(specialCharacters);
  }
  if(numericCharacters){
    selection = selection.concat(numeric);
  }

  //Adds random characters to an array and the loop stops when the array has the password length that the user specified.
  for(i=0; i<passwordLength; i++){
    selectedCharacters.push(selection[Math.floor(Math.random()*selection.length)]);
  }

  //Combines all the randomly selected characters into a string.
  for(i=0; i<selectedCharacters.length; i++){
    myPassword = myPassword + selectedCharacters[i];
  }

  //Returns a string of the user's password.
  return myPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

