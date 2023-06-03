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

function showGrid(elem,index){
    var boxDiv = document.createElement("div")
    var heartIcon = document.createElement("i");
    heartIcon.setAttribute("class","fa-regular fa-heart")
    heartIcon.addEventListener("click",wishList)
    var boxImage = document.createElement("img")
    boxImage.src = elem.main_img;
    boxImage.addEventListener("mouseout",function(){
        boxImage.src = elem.main_img;
    })
    boxImage.addEventListener("mouseover",function(){
        boxImage.src = elem.hover_img;
    })
    var subBox = document.createElement("div")
    var boxh3 = document.createElement("h3")
    boxh3.textContent = elem.title
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
    boxbtn.textContent = "SHOP NOW"
    boxbtn.addEventListener("click", function (){
        localStorage.setItem("showProduct",index)
        window.location.href = "../productDetail.html"
    });
    subBox.append(boxh3, giftInp, starDiv, boxp, boxh5)
    boxDiv.append(heartIcon,boxImage, subBox, boxbtn)
    document.querySelector("#product-grid").append(boxDiv)
};
function initialShow(){
    document.querySelector("#productGrid #page>h1").textContent = productsArray[tab].detail.heading;
    document.querySelector("#productGrid #page>p").textContent = productsArray[tab].detail.qt;
    document.querySelector("#productGrid #page>.page-desc").textContent = productsArray[tab].detail.page_desc;
    productsArray[tab].arr.map(function (elem,index) {
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
            d.style.maxHeight = "6em";
        }
    })
})
document.querySelectorAll("#productGrid>div:last-child>div:first-child>div").forEach(function(elem){
    
})
document.querySelector("#productGrid #page>div:nth-child(5)>select").addEventListener("change",function(){
    var sorter = document.querySelector("#productGrid #page>div:nth-child(5)>select").value;
    if(sorter==="pop"){
        var newArr = productsArray[tab].arr.sort(function(a,b){
            return Number(b.reviews)-Number(a.reviews);
        })  
    }else if(sorter==="lth"){
        var newArr = productsArray[tab].arr.slice().sort(function(a,b){
            return Number(a.aPrice)-Number(b.aPrice);
        })
    }else if(sorter==="htl"){
        var newArr = productsArray[tab].arr.slice().sort(function(a,b){
            return Number(b.aPrice)-Number(a.aPrice);
        })
    }else if(sorter==="az"){
        var newArr = productsArray[tab].arr.slice().sort(function(a,b){
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
    }else if(sorter==="random"){
        var newArr = productsArray[tab].arr.slice().sort(function(a,b){
            return Math.floor(Math.random() * (3) ) - 1;
        })
    }else if(sorter===""){
        var newArr = productsArray[tab].arr.slice();
    }
    document.querySelector("#product-grid").innerHTML = ""
    newArr.map(function (elem,index) {
        showGrid(elem,index);
    })
})

function popUp(){

}
function wishList(){

}
