// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

   function generatePassword() {
    var charset = "";

    var password = "";

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var numbers = "0123456789";

    var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var input = prompt("How long do you want your password to be, select a number within the range of 8 to 128 characters.");
    
    var length = Number(input);

    var lowerCaseQuestion = confirm("Do you want to include lowercase letters in your password?");
    if(lowerCaseQuestion) charset += lowerCase;

    var upperCaseQuestion = confirm("Do you want to include uppercase letters in your password?");
    if(upperCaseQuestion) charset += upperCase;
    
    var numbersQuestion = confirm("Do you want to include numbers in your password?");
    if(numbersQuestion) charset += numbers;

    var specialCharQuestion = confirm("Do you want to include special characters in your password?");
    if(specialCharQuestion) charset += specialChar;

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * charset.length);
      password += charset[index];
    }

    alert("Your password is: " + password);

    return password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
