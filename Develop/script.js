// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

   function generatePassword() {
    //defining the variables I will use to create/store the passwords, i set the charset and password variable to nothing, and will add the content later based on the users picks
    var charset = "";
    var password = "";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    var input = prompt("How long do you want your password to be, select a number within the range of 8 to 128 characters.");
    if (input === null) {
      alert("You have cancelled the operation, press the button to try again!")
      return;
    }
    var length = Number(input);
    if (typeof length !== "number" || length < 8 || length > 128) {
      alert("Invalid input. The password length must be a number and within the range of 8 to 128 characters.")
      return generatePassword();
    }

    var lowerCaseQuestion = confirm("Do you want to include lowercase letters in your password?");
    if(lowerCaseQuestion) charset += lowerCase;

    var upperCaseQuestion = confirm("Do you want to include uppercase letters in your password?");
    if(upperCaseQuestion) charset += upperCase;
    
    var numbersQuestion = confirm("Do you want to include numbers in your password?");
    if(numbersQuestion) charset += numbers;

    var specialCharQuestion = confirm("Do you want to include special characters in your password?");
    if(specialCharQuestion) charset += specialChar;

    if (charset === "") {
      alert("You must select atleast one character type, please try again.")
      return generatePassword;
    }

    for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }

    alert("Your password is: " + password);
    return password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
