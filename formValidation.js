let regform = document.forms["reg-form"];
let masg = document.querySelector('#notification');
regform.onsubmit = function formHendaler (event) {
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