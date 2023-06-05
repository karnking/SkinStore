//featured part
for(x in featured){
    if(typeof(featured[x])=="string"){
        var brand = document.querySelector("#brand-logo")
        brand.setAttribute("src",featured.brand_logo)
    }else{
        var featuredBox = document.querySelector("#featured");
        var div1 = document.createElement("div")
        var brand_img = document.createElement("img")
        brand_img.setAttribute("src",featured[x].img)
        var div2 = document.createElement("div")
        var brand_title = document.createElement("a")
        brand_title.textContent = featured[x].title;
        var brand_price = document.createElement("a")
        brand_price.textContent = "$ "+featured[x].price;
        div2.append(brand_title,brand_price)
        div1.append(brand_img,div2)
        featuredBox.append(div1)
    }
}
//product grid part
var tab = localStorage.getItem("tab");
if(tab=="randomC"){
    tab = "cleansers"
    var tempArr = productsArray[tab].arr.slice().sort(function(a,b){
        return Math.floor(Math.random() * (15) ) - 1;
    });    
}else if(tab=="randomM"){
    tab = "moisturisers"
    var tempArr = productsArray[tab].arr.slice().sort(function(a,b){
        return Math.floor(Math.random() * (15) ) - 1;
    });
}else if(tab=="randomS"){
    tab = "shampoo"
    var tempArr = productsArray[tab].arr.slice().sort(function(a,b){
        return Math.floor(Math.random() * (15) ) - 1;
    });
}
else{
    var tempArr = productsArray[tab].arr.slice();
}
function showGrid(elem,index){
    var boxDiv = document.createElement("div")
    var heartIcon = document.createElement("i");
    heartIcon.setAttribute("class","fa-regular fa-heart")
    heartIcon.addEventListener("click",function(){
        wishList(elem);
        if(heartIcon.style.fontWeight != "900"){
            heartIcon.style.fontWeight = "900"
        }else{
            heartIcon.style.fontWeight = "100"
        }
    })
    var boxImage = document.createElement("img")
    boxImage.src = elem.main_img;
    boxImage.addEventListener("mouseout",function(){
        boxImage.src = elem.main_img;
    })
    boxImage.addEventListener("mouseover",function(){
        boxImage.src = elem.hover_img;
    })
    boxImage.addEventListener("click", function (){
        localStorage.setItem("showProduct",index)
        window.location.href = "../productDetail.html"
    });
    var subBox = document.createElement("div")
    var boxh3 = document.createElement("h3")
    boxh3.textContent = elem.title
    boxh3.addEventListener("click", function (){
        localStorage.setItem("showProduct",index)
        window.location.href = "../productDetail.html"
    });
    var giftInp = document.createElement("input");
    giftInp.setAttribute("type","button")
    giftInp.setAttribute("value",giftsArray[0].sec_title)
    giftInp.addEventListener("click",popUp);
    //rating star
    var starDiv = document.createElement("div");
    starDiv.setAttribute("class","stars");
    for(i=0; i<elem.reviews; i++){
        var star = document.createElement("div");
        star.innerHTML = "&#9733"
        starDiv.append(star);
    }
    for(i=0; i<5-elem.reviews; i++){
        var star = document.createElement("div");
        star.innerHTML = "&#9734"
        starDiv.append(star);
    }
    //price
    var boxp = document.createElement("p")
    boxp.innerHTML = `MSRP:<s>$${elem.bPrice}</s>`
    var boxh5 = document.createElement("h5")
    boxh5.innerHTML = `$${elem.aPrice}`
    var boxbtn = document.createElement("button")
    boxbtn.textContent = "QUICK BUY"
    boxbtn.addEventListener("click", function (){
        addToCart(elem);
    });
    subBox.append(boxh3, giftInp, starDiv, boxp, boxh5)
    boxDiv.append(heartIcon,boxImage, subBox, boxbtn)
    document.querySelector("#product-grid").append(boxDiv)
};
function initialShow(){
    document.querySelector("#product-grid").innerHTML = ""
    document.querySelector("#productGrid #page>h1").textContent = productsArray[tab].detail.heading;
    document.querySelector("#productGrid #page>p").textContent = productsArray[tab].detail.qt;
    document.querySelector("#productGrid #page>.page-desc").textContent = productsArray[tab].detail.page_desc;
    tempArr.map(function (elem,index) {
        showGrid(elem,index);
    })
}
initialShow()
document.getElementById("read-more").addEventListener("click",function(){
    var p = document.querySelector(".page-desc");
    p.classList.toggle("page-desc-active")
    if(p.classList.contains("page-desc-active")){
        p.style.maxHeight = "150px";
        document.getElementById("read-more").textContent = "Read Less"
    }else{
        document.getElementById("read-more").textContent = "Read More"
        p.style.maxHeight = "60px"; 
    }
})

document.querySelectorAll("#productGrid>div:last-child>div:first-child>h3").forEach(function(ele){
    ele.addEventListener("click",function(){
        ele.classList.toggle("h3-active")
        var d = ele.nextElementSibling.nextElementSibling;
        d.classList.toggle("check-options-active")
        if(d.classList.contains("check-options-active")){
            d.style.maxHeight = "0";
        }else{
            d.style.maxHeight = "6.1em";
        }
    })
})

document.querySelectorAll("#productGrid .check-options input").forEach(function(ele){
    ele.addEventListener("click",function(){
        tempArr = productsArray[tab].arr;
        var name = ele.name;
        var value = ele.value;
        if(name==="gender"){
            document.querySelectorAll("#productGrid .check-options input[name='price'],#productGrid .check-options input[name='type'],#productGrid .check-options input[name='review']").forEach(function(elem){
                elem.checked = false;
            })
            if(value!='all'){
                tempArr = tempArr.filter(function(elem){
                    return elem[name]==value;
                })
            }
        }else if(name==="price"){
            document.querySelectorAll("#productGrid .check-options input[name='gender'],#productGrid .check-options input[name='type'],#productGrid .check-options input[name='review']").forEach(function(elem){
                elem.checked = false;
            })
            if(value!='all'){
                tempArr = tempArr.filter(function(elem){
                    if(value==="ten"){
                        return elem.aPrice<10;
                    }else if(value==="tf"){
                        return elem.aPrice <= 25 && elem.aPrice >= 10;
                    }else if(value==="fifty"){
                        return elem.aPrice <= 50 && elem.aPrice >= 25;
                    }else if(value==="hund"){
                        return elem.aPrice <= 100 && elem.aPrice >= 50;
                    }else if(value==="mth"){
                        return elem.aPrice > 100;
                    }
                })
            }
        }else if(name==="review"){
            document.querySelectorAll("#productGrid .check-options input[name='price'],#productGrid .check-options input[name='type'],#productGrid .check-options input[name='gender']").forEach(function(elem){
                elem.checked = false;
            })
            if(value!='all'){
                tempArr = tempArr.filter(function(elem){
                    if(value==="review_2"){
                        return elem.reviews>=2 && elem.reviews<=3;
                    }else if(value==="review_3"){
                        return elem.reviews>=3 && elem.reviews<=4;
                    }else if(value==="review_4"){
                        return elem.reviews>4;
                    }
                })
            }
        }else if(name==="type"){
            document.querySelectorAll("#productGrid .check-options input[name='price'],#productGrid .check-options input[name='gender'],#productGrid .check-options input[name='review']").forEach(function(elem){
                elem.checked = false;
            })
            if(value!='all'){
                tempArr = tempArr.filter(function(elem){
                    return elem[name]==value;
                })
            }
        }
        initialShow()
    })
})
document.querySelector("#productGrid #page>div:nth-child(5)>select").addEventListener("change",function(){
    tempArr = productsArray[tab].arr;
    var sorter = document.querySelector("#productGrid #page>div:nth-child(5)>select").value;
    if(sorter==="pop"){
        tempArr.sort(function(a,b){
            return Number(b.reviews)-Number(a.reviews);
        })  
    }else if(sorter==="lth"){
        tempArr.sort(function(a,b){
            return Number(a.aPrice)-Number(b.aPrice);
        })
    }else if(sorter==="htl"){
        tempArr.sort(function(a,b){
            return Number(b.aPrice)-Number(a.aPrice);
        })
    }else if(sorter==="az"){
        tempArr.sort(function(a,b){
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
    }else if(sorter==="random"){
        tempArr.sort(function(a,b){
            return Math.floor(Math.random() * (3) ) - 1;
        })
    }else if(sorter===""){
        tempArr = productsArray[tab].arr.slice();
    }
    initialShow()
})

function popUp(){

}
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
var cart = JSON.parse(localStorage.getItem("cart")) || []
var cartIdx = JSON.parse(localStorage.getItem("cartIdx")) || {}
function addToCart(elem){
    if(!cartIdx[elem.id]){
        cart.push(elem);
        cartIdx[elem.id] = 1;
    }
    else{ 
        cartIdx[elem.id]++;
    }
    if(cartIdx["subTotal"]){
        cartIdx["subTotal"] += Number(elem.aPrice);
    }
    else {
        cartIdx["subTotal"] = Number(elem.aPrice);
    }

    localStorage.setItem("cart",JSON.stringify(cart));
    localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
}
