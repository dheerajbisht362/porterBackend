var logInData = [["dheerajbisht362@gmail.com", "123456","Dheeraj Bisht"]]
localStorage.setItem("logData", JSON.stringify(logInData))

function openForm() {
    document.getElementById("myForm").style.display = "block"
    document.getElementById("main-container").classList.add("blur");
            }
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main-container").classList.remove("blur");
}
var last_question

function toggleElement(id)
{
    if (last_question != undefined) {
        console.log(document.getElementById(id))
        document.getElementById(last_question).classList.toggle("dis_none");
        document.getElementById(last_question+"Col").classList.toggle("colBlue");
    }
    if(document.getElementById(id).style.display == 'none')
    {
        element.classList.toggle("dis_none");
        console.log(id)
        document.getElementById(id+ "Col").style.color = 'blue';
    }
    else
    {
        document.getElementById(id).classList.toggle("dis_none");
        document.getElementById(id+"Col").classList.toggle("colBlue");
    }
    last_question= id;
}

function redirect() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var data = JSON.parse(localStorage.getItem("logData"))
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] == email && data[i][1] == password) {
            // console.log(1)
            localStorage.setItem("currentuser", JSON.stringify(data[i]))
            return true
        }
    }
    return false
}
function validateMyForm()
{   console.log(1)
    if (redirect()) {
        // console.log(1)
        window.location.href = "userOrderHistory.html"
    }
    else {
        alert("Email or password incorrect");
    }
}
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault()
});

