var cart = JSON.parse(localStorage.getItem("cart")) || []
var cartIdx = JSON.parse(localStorage.getItem("cartIdx")) || []

function showProducts(){
    document.querySelector("#cartPage #products").innerHTML = ""
    cart.map(function(elem,idx){
        var parentDiv = document.createElement("div");
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.main_img;
        var title = document.createElement("p");
        title.textContent = elem.title;
        var price = document.createElement("p");
        price.textContent = "$"+elem.aPrice;
        var div2 = document.createElement("div");
        var minus = document.createElement("button")
        minus.textContent = "-"
        minus.addEventListener("click",function(){
            cartIdx[elem.id]--;
            cartIdx["subTotal"]-=Number(elem.aPrice);
            if(cartIdx[elem.id]==0){
                cart.splice(idx,1);
                delete cartIdx[elem.id];
            }
            localStorage.setItem("cart",JSON.stringify(cart));
            localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
            showProducts();
        })
        var plus = document.createElement("button")
        plus.textContent = "+";
        plus.addEventListener("click",function(){
            cartIdx[elem.id]++;
            cartIdx["subTotal"]+=Number(elem.aPrice);
            localStorage.setItem("cart",JSON.stringify(cart));
            localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
            showProducts();
        })
        var qt = document.createElement("p");
        qt.textContent = cartIdx[elem.id];
        div2.append(minus,qt,plus)
        var total = document.createElement("p");
        total.innerHTML = "<b>$"+(elem.aPrice*cartIdx[elem.id]).toFixed(2)+"</b>";
        var cross = document.createElement("button");
        cross.textContent = "X"
        cross.addEventListener("click",function(){
            cart.splice(idx,1);
            cartIdx["subTotal"]-=Number(elem.aPrice)*Number(cartIdx[elem.id]);
            delete cartIdx[elem.id];
            localStorage.setItem("cart",JSON.stringify(cart));
            localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
            showProducts();
        })
        var div1 = document.createElement("div");
        var inputBtn = document.createElement("button");
        inputBtn.innerHTML = "<i class='fa-regular fa-heart'></i> Save to Wishlist"
        inputBtn.addEventListener("click",function(){
            console.log(inputBtn.children[0])
            if(inputBtn.children[0].style.fontWeight != "900"){
                inputBtn.children[0].style.fontWeight = "900"
            }else{
                inputBtn.children[0].style.fontWeight = "100"
            }
            wishList(elem)
        })
        div1.append(inputBtn);
        div.append(img,title,price,div2,total,cross)
        parentDiv.append(div,div1);
        document.querySelector("#cartPage #products").append(parentDiv)
    })
    var subTotalDiv = document.createElement("div");
    subTotalDiv.setAttribute("id","subTotal");
    subTotalDiv.innerHTML = "<labeL>Cart Subtotal : </label><span>$"+cartIdx["subTotal"].toFixed(2)+"</span>";
    document.querySelector("#cartPage #products").append(subTotalDiv)
}
showProducts();
var wishListArr = JSON.parse(localStorage.getItem("wishList")) || []
function wishList(elem){
    var idx = wishListArr.indexOf(elem);
    if(idx!=-1){
        wishListArr.splice(idx,1);
    }else{
        wishListArr.push(elem);
    }
    localStorage.setItem("wishlist",JSON.stringify(wishListArr));
}

document.querySelector("#cartPage #products+div>input[type='button']").addEventListener("click",checkPromo)
function checkPromo(){
    var promo = document.querySelector("#cartPage #products+div>input[type='text']")
    if(promo.value=="MASAI15"){
        cartIdx["promo"] = "MASAI15";
        localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
        var subTotalDiv = document.querySelector("#subTotal");
        subTotalDiv.innerHTML = "<labeL>Cart Subtotal : </label><span>$"+(cartIdx["subTotal"]*0.85).toFixed(2)+"</span>";
    }else{
        promo.setAttribute("class","promo")
        cartIdx["promo"] = null;
        var subTotalDiv = document.querySelector("#subTotal");
        subTotalDiv.innerHTML = "<labeL>Cart Subtotal : </label><span>$"+(cartIdx["subTotal"]).toFixed(2)+"</span>";
        localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
    }
    console.log("here")
    if(cartIdx["promo"]){
        promo.style.backgroundColor = "#b4e7b4";
        promo.style.border = "2px solid green"
    }else if(promo.value!=""){
        promo.style.backgroundColor = "white";
        promo.style.border = "2px solid red"
        promo.value = ""
        promo.setAttribute("placeholder","Invalid Promo")
    }
}
cartIdx["promo"]="";
localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
document.querySelector("#cartPage #products+div>input[type='text']").value = cartIdx["promo"]