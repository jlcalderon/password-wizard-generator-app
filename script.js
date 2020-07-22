/****************** Constants , Global variables and arrays of this app ******************/
//Encapsulating the html button element into a js constant
const actionBtn = document.getElementById("generate-password-btn");
//Creating an empty string variable for the generated password
let passwordString = " ";
//Fixing a constant value of the maximun characters allow in the generator app
const passwordMaxChar = 128;
//Fixing a constant value of th minimun characters allow in the generator app
const passwordMinChar = 8;
//Declare Capital Letters Array length of 25
const capitalLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(capitalLetterArray);
/*Declare Lower Case Letters Array taking the capitalLetter Array 
and changing to lowecase, length remain the same 25 */
const LowerCaseLetterArray = capitalLetterArray.toString().toLocaleLowerCase('en-US').split(",");
console.log(LowerCaseLetterArray);
//Declare Special Characters Array length is 19
const specialCharArray = ["!", "#", "$", "%", "*", "[", "]", "/", ".", ",", ";", ":", "-", "+", "?", "¿", "&", "@", "€"];
console.log(specialCharArray);
//Declare Numbers Array length is 10
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbersArray);
//Declaration of variables to store user settings from confirms and prompts
// lenghtChar config the lenght in characters of the new password string this has a value of 0 by default
let lenghtChar = 0;
// specialChars config wether or not the user wants to add special characters to the password string this has a value of false by default
let specialChars = false;
// mayus config wether or not the user wants to add capital letters to the password string this has a value of false by default
let mayus = false;
// lowercase config wether or not the user wants to add lower case letters to the password string this has a value of false by default
let lowercase = false;
// numberChars config wether or not the user wants to add numbers to the password string this has a value of false by default
let numberChars = false;
/* countEvenCharacters config and even percentage of characters set up by the user to
make the 100% of the password string populated with even percentages of:
specialChars, mayus, lowercase, numbers
this variable value is set to 0 by default
*/
let countEvenCharacters = 0;

/********************Event Click of the button element on this app**************************/
//Adding event listener to the button element to execute our code on user's click
actionBtn.addEventListener("click", () => {
    //Clean up and set the variables to the default value
    setVariablesToDefault();

    //Seting up how many characters long the password is going to be
    setLenghtOfNewPassword();

    //Ask the user to add special characters to the new password string
    specialChars = confirm("Would you like to add special characters?");
    //Evaluate users input of special characters
    if (specialChars === true) {
        //Add 1 to the counter of even percentages
        countEvenCharacters++;
    }

    //Ask the user to add capital letters to the new password string
    mayus = confirm("Would you like to add capital letters?");
    //Evaluate users input of capital letters
    if (mayus === true) {
        //Add 1 to the counter of even percentages
        countEvenCharacters++;
    }

    //Ask the user to add lower case letters to the new password string
    lowercase = confirm("Would you like to add lower case letters?");
    //Evaluate users input of lower case letters
    if (lowercase === true) {
        //Add 1 to the counter of even percentages
        countEvenCharacters++;
    }

    //Ask the user to add numbers to the new password string
    numberChars = confirm("Would you like to add numbers to the new password?");
    //Evaluate users input of numbers
    if (numberChars === true) {
        //Add 1 to the counter of even percentages
        countEvenCharacters++;
    }

    console.log(countEvenCharacters);

    // Call out the function to add special characters to new password string
    if (specialChars === true) {
        addSpecialCharacter();
    }


    //Call out the function to add Uppercase characters to the new password string
    if (mayus === true) {
        addCapitalLetters();
    }

    //Call out the function to add Lowercase characters to the new password string
    if (lowercase === true) {
        addLowerCaseLetters();
    }

    //Call out the function to add Numbers to the new password string
    if (numberChars === true) {
        addNumbersCharacters();
    }

    //Output the new password string in the textarea element
    document.getElementById("txtarea-password").textContent = passwordString;

});

/*********** Get random numbers function taken from javascript MDN Documentation  ****************/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

/***************************** Functions and methods of this app ***************************/
function setLenghtOfNewPassword() {
    lenghtChar = prompt("How long in characters would you like your new password?");
    //Evaluating user's input narrowing to a minimun of 8 chars and max of 128 characters
    if (lenghtChar < passwordMinChar) {
        //in case of user's input os lower than the app minimun display this alert
        alert("Sorry your lenght in characters for the new password desired is not safe, to be secure your new password must be at least 8 characters long");
    } else if (lenghtChar > passwordMaxChar) {
        //in case of user's input os greater than the app maximun display this alert
        alert("Sorry your lenght in characters for the new password desired is out of bound, to be secure your new password must have a maximun length of 128 characters");
    } else {
        alert("Great! Your desired character length meet the expectation of a secure password. Please proceed to select next option");
    }

}

function addSpecialCharacter() {
    /*/First grab the user desired password lenght and divided into countEvenCharacters,
    Why? because we want equal parts of chracter 
    from our predifined arrays to populate the new password*/
    let specialCharCount = lenghtChar / countEvenCharacters;
    /*Making a loop of specialCharCount to
    add a fraction of special characters randomly taken from 
    the array of special characters to the passwordString*/
    for (let i = 0; i < specialCharCount; i++) {
        //takes random chars from the Array of special Chars wich length is 19
        /*Note if -1 is not added to the max value in the getRandomIntInclusive
         function parameter you are going to get values undefined on your new password*/
        let elementFromSpecialChars = getRandomIntInclusive(0, specialCharArray.length - 1);
        passwordString = passwordString + specialCharArray[elementFromSpecialChars];
    }
}

function addCapitalLetters() {
    /*/First grab the user desired password lenght and divided into countEvenCharacters,
    Why? because we want equal parts of chracter 
    from our predifined arrays to populate the new password*/
    let capitalL = lenghtChar / countEvenCharacters;
    /*Making a loop of capitalL to
    add a fraction of capital letters randomly taken from 
    the array of capital letters to the passwordString*/
    for (let m = 0; m < capitalL; m++) {
        //takes random chars from the Array of capital letters wich length is 25
        /*Note if -1 is not added to the max value in the getRandomIntInclusive
         function parameter you are going to get values undefined on your new password*/
        let elementFromCapitalLetter = getRandomIntInclusive(0, capitalLetterArray.length - 1);
        passwordString = passwordString + capitalLetterArray[elementFromCapitalLetter];
    }
}

function addLowerCaseLetters() {
    /*/First grab the user desired password lenght and divided into countEvenCharacters,
    Why? because we want equal parts of chracter 
    from our predifined arrays to populate the new password*/
    let lowerCaseL = lenghtChar / countEvenCharacters;
    /*Making a loop of capitalL to
    add a fraction of capital letters randomly taken from 
    the array of capital letters to the passwordString*/
    for (let l = 0; l < lowerCaseL; l++) {
        //takes random chars from the Array of capital letters wich length is 25
        /*Note if -1 is not added to the max value in the getRandomIntInclusive
         function parameter you are going to get values undefined on your new password*/
        let elementFromLowerCase = getRandomIntInclusive(0, LowerCaseLetterArray.length - 1);
        passwordString = passwordString + LowerCaseLetterArray[elementFromLowerCase];
    }
}

function addNumbersCharacters() {
    /*/First grab the user desired password lenght and divided into countEvenCharacters,
    Why? because we want equal parts of chracter 
    from our predifined arrays to populate the new password*/
    let numberCh = lenghtChar / countEvenCharacters;
    /*Making a loop of capitalL to
    add a fraction of capital letters randomly taken from 
    the array of capital letters to the passwordString*/
    for (let n = 0; n < numberCh; n++) {
        //takes random chars from the Array of capital letters wich length is 25
        /*Note if -1 is not added to the max value in the getRandomIntInclusive
         function parameter you are going to get values undefined on your new password*/
        let elementFromNumbersArray = getRandomIntInclusive(0, numbersArray.length - 1);
        passwordString = passwordString + numbersArray[elementFromNumbersArray];
    }
}

function setVariablesToDefault() {
    countEvenCharacters = 0;
    passwordString = " ";
    lenghtChar = 0;
    mayus = false;
    lowercase = false;
    numberChars = false;
    specialChars = false;
}