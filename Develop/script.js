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

    //first question for the user, that uses the prompt function to let them input a number that represents the amount of characters in the password
    var input = prompt("How long do you want your password to be, select a number within the range of 8 to 128 characters.");
    //prompt returns the value null if the user presses cancel instead of ok, this leads to an error message to tell them how to start the process again
    if (input === null) {
      alert("You have cancelled the operation, press the button to try again!")
      return;
    }
    //created another variable called length, that takes the input from the prompt, and translates it into a number using the Number built in function, as it is a string by default
    var length = Number(input);
    if (typeof length !== "number" || length < 8 || length > 128) {
      alert("Invalid input. The password length must be a number and within the range of 8 to 128 characters.")
      return generatePassword();
    }

    //Here we ask the user which characters they want included in their password using the confirm function, if they press okay, that character set is added to the characterset that will be used to generate the code
    var lowerCaseQuestion = confirm("Do you want to include lowercase letters in your password?");
    if(lowerCaseQuestion) charset += lowerCase;

    var upperCaseQuestion = confirm("Do you want to include uppercase letters in your password?");
    if(upperCaseQuestion) charset += upperCase;
    
    var numbersQuestion = confirm("Do you want to include numbers in your password?");
    if(numbersQuestion) charset += numbers;

    var specialCharQuestion = confirm("Do you want to include special characters in your password?");
    if(specialCharQuestion) charset += specialChar;

    //this code adds an error message if the user said no to all prompts, resulting in the password having no available characters to use to generate the code, and then loops back to the beginning of the function, so they can try again.
    if (charset === "") {
      alert("You must select atleast one character type, please try again.")
      return generatePassword;
    }

    //This part of the code generates the random password, the for loop repeats an amount of times dictated by the length that the user initially inputs, so that we have the amount of characters that was decided by the user, and then using the Math.random function
    //we add a random index value of the charset, to the password variable (string values are indexed in a similar way to arrays, allowing us to simply use string values for our initial variables)
    for (let i = 0; i < length; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }

    //This line of code both creates an alert on the page that provides you the password, and returns it to the code, so it will get displayed in the box
    alert("Your password is: " + password);
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
