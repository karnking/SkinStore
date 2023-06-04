var cart = JSON.parse(localStorage.getItem("cart")) || []

cart.map(function(elem){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = elem.main_img;
    var title = document.createElement("p");
    title.textContent = elem.title;
    var price = document.createElement("p");
    price.textContent = "$"+elem.aprice;
    var minus = document.createElement("button")
    minus.textContent = "-"
    var plus = document.createElement("button")
    plus.textContent = "+";
    var qt = document.createElement("p");
    qt.textContent = "1";
    var total = document.createElement("p");
    total.innerHTML = "<b>$"+elem.aprice*qt+"</b>";
    var cross = document.createElement("button");
    cross.textContent = "X"
    div.append(img,title,price,minus,qt,plus,total,cross)
    document.querySelector("#cartPage #products").append(div)
})