
function myFunction () {
    let inputValue = document.getElementById("inputAge").value;
    let capable = (inputValue > 18 ) ? "He can vot" : " He can't";
    document.getElementById("demo").innerHTML = capable;
}