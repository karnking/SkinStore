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

function showGrid(){
    console.log(document.querySelector("#productGrid #page"))
    document.querySelector("#productGrid #page>h1").textContent = productsArray[tab].detail.heading;
    document.querySelector("#productGrid #page>p").textContent = productsArray[tab].detail.qt;
    document.querySelector("#productGrid #page>.page-desc").textContent = productsArray[tab].detail.page_desc;
    productsArray[tab].arr.map(function (elem) {
        var boxDiv = document.createElement("div")
        var heartIcon = document.createElement("i");
        heartIcon.setAttribute("class","fa-regular fa-heart")
        heartIcon.addEventListener("click",wishList)
        var boxImage = document.createElement("img")
        boxImage.setAttribute("src", elem.main_img)
        var subBox = document.createElement("div")
        var boxh3 = document.createElement("h3")
        boxh3.textContent = elem.title
        var giftInp = document.createElement("input");
        giftInp.setAttribute("type","button")
        giftInp.setAttribute("value",elem.gift)
        giftInp.addEventListener("click",popUp);
        var boxp = document.createElement("p")
        check0(elem.bPrice);
        function check0(val) {
            if (val != 0) {
                boxp.innerHTML = `MSRP:<s>$${elem.bPrice}</s>`
            } else {
                boxp.innerHTML = "<br>"
            }
        }
        var boxh5 = document.createElement("h5")
        boxh5.innerHTML = `$${elem.aPrice}`

        var boxbtm = document.createElement("button")
        boxbtm.textContent = "SHOP NOW"
        boxbtm.addEventListener("click", function (){
            window.location.href = "../productDetail.html"
        });
        subBox.append(boxh3, giftInp, boxp, boxh5)
        boxDiv.append(heartIcon,boxImage, subBox, boxbtm)
        document.querySelector("#product-grid").append(boxDiv)
    });
}
showGrid();
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
            d.style.maxHeight = "0px";
        }else{
            d.style.maxHeight = "70px";
        }
        console.log("here")
    })
})
function popUp(){

}
function wishList(){

}
