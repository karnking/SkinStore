//featured part
for(x in featured){
    if(typeof(featured[x])=="string"){
        var brand = document.querySelector("#brand-logo")
        brand.setAttribute("src",featured.brand_logo)
    }else{
        var featuredBox = document.querySelector("#featured");
        var div1 = document.createElement("div")
        var brand_img = document.createElement("img")
        brand_img.setAttribute("src",featured.product1.img)
        var brand_title = document.createElement("a")
        brand_title.textContent = featured.product1
    }
}
//product grid part
productsArray.map(function (elem) {
    var boxDiv = document.createElement("div")
    var heartIcon = document.createElement("i");
    heartIcon.setAttribute("class","fa-regular fa-heart")
    heartIcon.addEventListener("click",wishList)
    var boxImage = document.createElement("img")
    boxImage.setAttribute("src", elem.img)
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
            boxp.innerHTML = `MSRP:<s>$${elem.bPrice.toFixed(2)}</s>`
        } else {
            boxp.innerHTML = "<br>"
        }
    }
    var boxh5 = document.createElement("h5")
    boxh5.innerHTML = `$${elem.aPrice.toFixed(2)}`

    var boxbtm = document.createElement("button")
    boxbtm.textContent = "SHOP NOW"
    boxbtm.addEventListener("click", function (){
        window.location.href = "../productDetail.html"
    });
    subBox.append(boxh3, giftInp, boxp, boxh5)
    boxDiv.append(heartIcon,boxImage, subBox, boxbtm)
    document.querySelector("#product-grid").append(boxDiv)
});
function popUp(){

}
function wishList(){

}