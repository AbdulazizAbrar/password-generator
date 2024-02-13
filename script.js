// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt("How many characters would you like your password to contain?"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
    return;
  }

  let includeSpecialCharacters = confirm("Click OK to include special characters." );
  let includeNumericCharacters = confirm("Click OK to include numeric characters.");
  let includeLowercaseCharacters = confirm("Click OK to include lowercase characters.");
  let includeUppercaseCharacters = confirm("Click OK to include uppercase characters.");

  if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowercaseCharacters && !includeUppercaseCharacters) {
    alert("You must select at least one character type.");
    return;
  }

  let passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowercaseCharacters: includeLowercaseCharacters,
    includeUppercaseCharacters: includeUppercaseCharacters,
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr = []) {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let allCharacters = [];
  let result = "";

  if (options.includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  if (options.includeNumericCharacters) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  if (options.includeLowercaseCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }

  if (options.includeUppercaseCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  for (let i = 0; i < options.length; i++) {
    result += getRandom(allCharacters);
  }

  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
