let regform = document.forms["reg-form"];
let masg = document.querySelector('#notification');
regform.onsubmit = function (event) {
    event.preventDefault();
    console.log(regform['name'].value);
    console.log(regform['email'].value);
    console.log(regform['password'].value);
    if ( regform['password'].value !== regform['conf-password'].value) {
        masg.innerHTML = "Password Does\'t match!";
    } else if ( regform['password'].value.length < 8) {
        masg.innerHTML = "Password length must should be 8 carecters";
    } else {
        masg.innerHTML = "Submited successfull!";
    }
};
regform['password'].onkeyup = function(event) {
    // console.log(regform['password'].value);
    console.log(event.target.value);
}


// Hublo Programmer Registration start   INCOMPLEAT
// https://www.youtube.com/watch?v=tVv9A6mSxbE&t=766s


// let userName = document.querySelector("#username");
// let email               = document.querySelector('#email');
// let password            = document.querySelector('#password');
// let confarmPassword    = document.querySelector('#confarm-password');
// let Form = document.querySelector("#Form");

// function ShowError (input, message) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control error";
//     const small = formControl.querySelector("small")
//     small.innerText = message;
// }

// function ShowSuccess (input) {
//     const formControl = input.parentElement
//     formControl.className = "form-control success";
// }

// function checkMail (input) {
//     const RegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (RegEx.test(input.value)) {
//         ShowSuccess (input)
//     } else {
//         ShowError (input, "Email is not valid!")
//     }
// }

// function CheckInputLength (input,min,max) {
//     if (input.value.length < min) {
//         ShowError(input, `${GetFieldName(InputDeviceInfo)} You must at least ${min}
//         Characters`);
//     } else if (input.value.length < max) {
//         ShowError(input, `${GetFieldName(InputDeviceInfo)} You must less then ${min}
//         Characters`);
//     } else {
//         ShowSuccess(input);
//     }
// }

// function GetFieldName (input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// function CheckPasswordMatch (input, input2) {
//     if (input.value !== input2.value) {
//         ShowError (input2, "Password invalid")
//     }
// }

// Form.addEventListener("submit", (e)=> {
//     e.preventDefault(userName, 3, 20)
//     CheckInputLength (password, 6, 30)
//     checkMail (email)
//     CheckPasswordMatch (password,confarmPassword)
// })
