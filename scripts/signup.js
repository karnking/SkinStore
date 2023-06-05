var form = document.querySelector("#form")
form.addEventListener("submit", storedata)


function storedata() {
    event.preventDefault()

    var userdatabase = JSON.parse(localStorage.getItem("userdatabase")) || []
    var user = {}

    var name = form.name.value
    var email = form.email.value
    var emailconfirm = form.emailconfirm.value;
    var password = form.password.value
    var passwordconfirm = form.passwordconfirm.value;

    user.name = name
    user.email = email
    user.password = password
    user.password = password
    user.cell = form.cellphone.value
    user.refer = form.refercode.value

    userdatabase.push(user)
    localStorage.setItem("user",JSON.stringify(user))
    localStorage.setItem("userdatabase", JSON.stringify(userdatabase))
    history.go(-1)
}


let link_location = () => {
    window.location.href = './index.html';
}
document.querySelector(".facebook").addEventListener("click",function(){
    window.location.href="https://facebook.com/login"
})
document.querySelector(".google").addEventListener("click",function(){
    window.location.href="https://accounts.google.com/signin"
})