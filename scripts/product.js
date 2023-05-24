var idxOfProduct = 0;
function showProductDesc(){
  var data = productsArray[idxOfProduct];
  var giftData = giftsArray[idxOfProduct];
  // left div
  var imgMain = document.querySelector("#product #main_image");
  imgMain.setAttribute("src",data.img);
  var descDiv = document.querySelector("#product #desc");
  descDiv.innerHTML = data.desc;
  var ingredientsDiv = document.querySelector("#product #ingredients");
  ingredientsDiv.textContent = data.ingredients;
  var directionsUL = document.querySelector("#product #directions");
  directionsUL.innerHTML = ""
  data.procedure.map(function(obj){
    var li = document.createElement("li")
    li.innerHTML = obj;
    directionsUL.append(li)
  })
  // right div
  var titleH1 = document.querySelector("#product #title");
  titleH1.textContent = data.title;
  var priceH1 = document.querySelector("#product #price");
  priceH1.textContent = "HK$"+data.price;
  var plusBtn = document.querySelector("#product #plus");
  plusBtn.addEventListener("click",increaseQt);
  var minusBtn = document.querySelector("#product #minus");
  minusBtn.addEventListener("click",decreaseQt);
  var qtBox = document.querySelector("#product #qt");
  qtBox.value = 1;
  var addToCartBtn = document.querySelector("#product #addToCart");
  addToCartBtn.addEventListener("click",addToCartFn);
  var wishlistBtn = document.querySelector("#product #wishlistIt");
  wishlistBtn.addEventListener("click",wishlistFn);
  var inStockLabel = document.querySelector("#product #stock");
  inStockLabel.textContent = data.inStock ? "In Stock" : "Out of Stock";
  // Gift section
  var imgGift = document.querySelector("#product #gift_image");
  imgGift.setAttribute("src",giftData.img);
  var giftBtn = document.querySelector("#product #giftBtn");
  giftBtn.value = giftData.sec_title;
  giftBtn.addEventListener("click",showPopUp);
  var giftTitle = document.querySelector("#product #gift-title");
  giftTitle.textContent = giftData.title;
  var giftPrice = document.querySelector("#product #gift-price");
  giftPrice.textContent = "HK$"+giftData.price;
  var secTitle = document.querySelector("#product #gift-sec-title");
  secTitle.textContent = giftData.sec_title;
  var giftDesc = document.querySelector("#product #gift-desc");
  giftDesc.textContent = giftData.desc;
  var giftToCartBtn = document.querySelector("#product #buy-gift");
  giftToCartBtn.addEventListener("click",giftToCartFn);
}
showProductDesc()
function increaseQt(){
  var qtBox = document.querySelector("#product #qt")
  qtBox.value = Number(qtBox.value) + 1;  
}
function decreaseQt(){
  var qtBox = document.querySelector("#product #qt")
  qtBox.value = Number(qtBox.value) - 1;  
}
function addToCartFn(){
  
}
function giftToCartFn(){

}
function wishlistFn(){
  
}
function showPopUp(){

}