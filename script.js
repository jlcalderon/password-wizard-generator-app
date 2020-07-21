//Encapsulating the html button element into a js constant
const actionBtn = document.getElementById("generate-password-btn");
//Creating an empty string variable for the generated password
let passwordString = "";
//Fixing a constant value of the maximun characters allow in the generator app
const passwordMaxChar = 128;
//Fixing a constant value of th minimun characters allow in the generator app
const passwordMinChar = 8;

//Declare Capital Letters Array
const capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(capitalLetter.toString());
//Declare Lower Case Letters Array
let LowerCaseLetter = capitalLetter.toString().toLocaleLowerCase('en-US');
console.log(LowerCaseLetter);
//Declare Special Characters Array
let specialChar = ["!", "#", "$", "%", "*", "[", "]", "/", ".", ",", ";", ":", "-", "+", "?", "¿", "&", "@", "€"];
console.log(specialChar);

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
        let next = confirm("Would you like to add special characters");
        //Evaluate users input of special characters
        if (next === true) {
            //In case user's response is positive do the following
            //add 3 special characters randomly from the array of special characters to the passwordString

            //And Continue with the next question to the user
        }
        //Evaluate user's negative input of special characters 
        else {
            //Just Continue with the next question and don't add special characters to the new password

        }
    }

});