
var userdatabase = JSON.parse(localStorage.getItem("userdatabase")) || []
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault()
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    userdatabase.map(function(elem){
        if(elem.email==email && elem.password==password){
            localStorage.setItem("login",true);
            history.go(-1)
        }
    })
})