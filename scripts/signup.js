

var form = document.querySelector("#form")
form.addEventListener("submit", storedata)


function storedata() {
    event.preventDefault()

    var userdatabase = JSON.parse(localStorage.getItem("userdatabase")) || []
    var user = {}

    var name = form.name.value
    var email = form.email.value
    var emailconfirm = form.emailconfirm.value
    var password = form.password.value
    var passwordconfirm = form.passwordconfirm.value


    user.name = name
    user.email = email
    user.password = password
    user.cell = form.cellphone.value
    user.refer = form.refercode.value

    userdatabase.push(user)
    localStorage.setItem("user",JSON.stringify(user))
    localStorage.setItem("userdatabase", JSON.stringify(userdatabase))
    window.location.href="./login.html";
}
