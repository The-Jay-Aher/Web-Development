var a = document.getElementById("name");
var b = document.getElementById("email");
var c = document.getElementById("dropdown");
var d = document.getElementById("features");
function validation() {
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
        alert("Some fields are empty!");
        return false;
    }
    else {
        alert("Thank you for filling out this form!")
        return true;
    }
}
