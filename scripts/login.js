
var userdatabase = JSON.parse(localStorage.getItem("userdatabase")) || []
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault()
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    userdatabase.map(function(elem){
        if(elem.email==email && elem.password==password){
            localStorage.setItem("login",true);
            history.go(-1)
        }else if(elem.email==email){
            document.querySelector("#password").style.border = "1px solid red"
            document.querySelector("#password").value = ""
            document.querySelector("#email").value = ""
            document.querySelector("#password").placeholder = "Enter Correct Password"
        }else{
            document.querySelector("#email").style.border = "1px solid red"
            document.querySelector("#email").value = ""
            document.querySelector("#password").value = ""
            document.querySelector("#email").placeholder = "Enter Correct Email"
        }
    })
})