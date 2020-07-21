/****************** Constants , Global variables and arrays of this app ******************/

//Encapsulating the html button element into a js constant
const actionBtn = document.getElementById("generate-password-btn");
//Creating an empty string variable for the generated password
let passwordString = "";
//Fixing a constant value of the maximun characters allow in the generator app
const passwordMaxChar = 128;
//Fixing a constant value of th minimun characters allow in the generator app
const passwordMinChar = 8;
//Declare Capital Letters Array length of 25
const capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(capitalLetter);
/*Declare Lower Case Letters Array taking the capitalLetter Array 
and changing to lowecase, length remain the same 25 */
let LowerCaseLetter = capitalLetter.toString().toLocaleLowerCase('en-US').split(",");
console.log(LowerCaseLetter);
//Declare Special Characters Array length is 19
let specialChar = ["!", "#", "$", "%", "*", "[", "]", "/", ".", ",", ";", ":", "-", "+", "?", "¿", "&", "@", "€"];
console.log(specialChar);
//Declare Numbers Array length is 10
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbersArray);

/********************Event Click of the button element on this app**************************/
//Adding event listener to the button element to execute our code on user's click
actionBtn.addEventListener("click", () => {
    //First storing user input how many characters long they want their password with a prompt
    let userInputChar = prompt("How long in characters would you like your new password?");
    //Evaluating user's input narrowing to a minimun of 8 chars and max of 128 characters
    if (userInputChar < passwordMinChar) {
        //in case of user's input os lower than the app minimun display this alert
        alert("Sorry your lenght in characters for the new password desired is not safe, to be secure your new password must be at least 8 characters long");
    } else if (userInputChar > passwordMaxChar) {
        //in case of user's input os greater than the app maximun display this alert
        alert("Sorry your lenght in characters for the new password desired is out of bound, to be secure your new password must have a maximun length of 128 characters");
    }
    //In the case of the user's input is correct acording to this app criteria, proceed here
    else {
        //Ask again for user's input let user decide wether or not they want to include special characters to the new password
        let special = confirm("Would you like to add special characters");
        //Evaluate users input of special characters
        if (special === true) {
            //In case user's response is positive do the following

            /*/First grab the user desired password lenght and divided into 4,
            Why 4? because we want equal parts of chracter 
            from our predifined arrays to populate the new password*/
            let specialCharCount = userInputChar / 4;
            /*Making a loop of specialCharCount to
            add a 1/4 fraction of special characters randomly taken from 
            the array of special characters to the passwordString*/
            for (let i = 0; i < specialCharCount; i++) {
                //take random chars from the Array of special Chars wich length is 19
                /*Note if -1 is not added to the max value in the getRandomIntInclusive
                 function parameter you are going to get values undefined on your new password*/
                let elementFromSpecialChars = getRandomIntInclusive(0, specialChar.length - 1);
                passwordString = passwordString + specialChar[elementFromSpecialChars];
            }
            //And Continue with the next question to the user
            let mayus = confirm("Would you like to add capital letters?");
            //Evaluate users input of capital letters
            if (mayus === true) {
                //In case user's response is positive do the following

                /*/First grab the user desired password lenght and divided into 4,
            Why 4? because we want equal parts of chracters 
            from our predifined arrays to populate the new password*/
                let mayusCharCount = userInputChar / 4;
                /*Making a loop of mayusCharCount to
                add a 1/4 fraction of capital letters randomly taken from 
                the array of capitalLetter to the passwordString*/
                for (let m = 0; m < mayusCharCount; m++) {
                    //take random chars from the Array of capital letters wich length is 25
                    /*Note if -1 is not added to the max value in the getRandomIntInclusive
                    function parameter you are going to get values undefined on your new password*/
                    let elementFromCapitalLetter = getRandomIntInclusive(0, capitalLetter.length - 1);
                    passwordString = passwordString + capitalLetter[elementFromCapitalLetter];
                }

            }

        }
        //Evaluate user's negative input of special characters 
        else {
            //Just Continue with the next question and don't add special characters to the new password

        }
    }

});

/*********** Get random numbers function taken from javascript MDN Documentation  ****************/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}