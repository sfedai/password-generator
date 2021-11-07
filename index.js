var generatePasswordIDBtn = document.getElementById("generate");
var generatePasswordQSBtn = document.querySelector("#generate");

var specialCharStr = "~`!@$%^&*()_+-=";
var upperCaseLetterStr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxy";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = upperCaseLetterStr.split("");
var lowerCaseCharArr = lowerCaseChars.split("");
var numbersArr = numbersStr.split("");

var userCharPool = [];

var aPassword = [];

  var userChoiceLength = prompt("Enter password length: ");
  console.log(userChoiceLength);

  var userChoiceSpecialChars = confirm("Special Characters?");
  console.log(userChoiceSpecialChars);

  var userChoiceUpperCase = confirm("Upper Case?");
  console.log(userChoiceUpperCase);

  var userChoiceLowerCase = confirm("Lover Case?");
  console.log(userChoiceLowerCase);

  var userChoiceNumbers = confirm("Numbers?");
  console.log(userChoiceNumbers);

   function copyArrayToPool(arr) {
    for (var i = 0; i < arr.length; i++) {
      userCharPool.push(arr[i]);
    }
    console.log(userCharPool);
    return;
  }

  if (userChoiceSpecialChars) {
    copyArrayToPool(specialCharArr);

  }

  if (userChoiceUpperCase) {
    copyArrayToPool(upperCaseCharArr);
    console.log(userCharPool);

  }

  if (userChoiceLowerCase) {
    copyArrayToPool(lowerCaseCharArr);


  }

  if (userChoiceNumbers) {
    copyArrayToPool(userChoiceNumbers)
    console.log(userCharPool);

   

  };
function generatePassword() {
    aPassword = []
    for (var i = 0; i < userChoiceLength; i++) {
      var index = Math.floor(Math.random() * userCharPool.length);
  
      console.log(userCharPool[index]);
  
      aPassword.push(userCharPool[index]);
  
    }
    console.log(aPassword);
}

  console.log(aPassword.join(""));


function writePassword() {
  generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = aPassword.join("");

  return;

}

generatePasswordIDBtn.addEventListener("click", writePassword);

