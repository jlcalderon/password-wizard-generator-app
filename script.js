const actionBtn = document.getElementById("generate-password-btn");
let passwordString = "";
const passwordMaxChar = 128;
const passwordMinChar = 8;

//Declare Capital Letters Array
//Declare Lower Case Letters Array
//Declare Special Characters Array

actionBtn.addEventListener("click", () => {
    let userInputChar = prompt("How long in characters would you like your new password?");
    if (userInputChar < passwordMinChar) {
        alert("Sorry your lenght in characters for the new password desired is not safe, to be secure your new password must be at least 8 characters long");
    } else if (userInputChar > passwordMaxChar) {
        alert("Sorry your lenght in characters for the new password desired is out of bound, to be secure your new password must have a maximun length of 128 characters");
    } else {
        let next = confirm("Would you like to add special characters");
        if (next === true) {
            //add 3 special characters random from the array special characters to the passwordString
            passwordString = passwordString + "#testing";
            console.log(passwordString);
            //Continue with the next confirm
        } else {
            //Continue with the next confirm
            console.log("No special char");
        }
    }

});