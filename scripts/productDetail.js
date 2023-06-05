var idxOfProduct = Number(localStorage.getItem("showProduct"));
var tab = localStorage.getItem("tab");
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var elem = productsArray[tab].arr[idxOfProduct];
function showProductDesc(){
  var giftData = giftsArray[Math.floor(Math.random() * 3)];
  // left div
  var hoverImg = document.querySelector("#product #hover_img");
  hoverImg.setAttribute("src",elem.hover_img)
  var hover2Img = document.querySelector("#product #main_image");
  hover2Img.setAttribute("src",elem.main_img)
  var imgMain = document.querySelector("#product #main_img");
  imgMain.setAttribute("src",elem.main_img);
  var leftArrow = document.querySelector("#product #left_arrow");
  leftArrow.src = "https://cdn-icons-png.flaticon.com/128/271/271220.png"
  leftArrow.addEventListener("click",changeImg)
  var rightArrow = document.querySelector("#product #right_arrow");
  rightArrow.src = "https://cdn-icons-png.flaticon.com/128/271/271228.png"
  rightArrow.addEventListener("click",changeImg)
  function changeImg(){
    if(imgMain.src==elem.main_img){
      imgMain.src = elem.hover_img;
    }else{
      imgMain.src = elem.main_img;
    }
  }
  var descDiv = document.querySelector("#product #desc");
  descDiv.innerHTML = elem.desc;
  var ingredientsDiv = document.querySelector("#product #ingredients");
  ingredientsDiv.innerHTML = elem.ingredients;
  var directionsUL = document.querySelector("#product #directions");
  directionsUL.innerHTML = ""
  elem.procedure.map(function(obj){
    var li = document.createElement("li")
    li.innerHTML = obj;
    directionsUL.append(li)
  })
  // right div
  var titleH1 = document.querySelector("#product #title");
  titleH1.textContent = elem.title;
  var priceH1 = document.querySelector("#product #price");
  priceH1.textContent = "$"+elem.aPrice;
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
  // Gift section
  var imgGift = document.querySelector("#product #gift_image");
  imgGift.setAttribute("src",giftData.img);
  var giftBtn = document.querySelector("#product #giftBtn");
  giftBtn.value = giftData.sec_title;
  giftBtn.addEventListener("click",function(){
    showPopUp(giftData)
  });
  var giftTitle = document.querySelector("#product #gift-title");
  giftTitle.textContent = giftData.title;
  var giftPrice = document.querySelector("#product #gift-price");
  giftPrice.textContent = "$  "+giftData.price;
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
  if(Number(qtBox.value) + 1 > 1){
    document.querySelector("#product #minus").disabled = false;  
  }
  qtBox.value = Number(qtBox.value) + 1;
}
function decreaseQt(){
  var qtBox = document.querySelector("#product #qt")
  if(Number(qtBox.value) - 1 < 1){
    document.querySelector("#product #minus").disabled = true;
  }else{
    qtBox.value = Number(qtBox.value) - 1;  
  }
}
var cartIdx = JSON.parse(localStorage.getItem("cartIdx")) || {}
function addToCartFn(){
  var qtBox = document.querySelector("#product #qt")
  if(!cartIdx[elem.id]){
    cart.push(elem);
    cartIdx[elem.id] = Number(qtBox.value);
  }
  else{ 
      cartIdx[elem.id] = Number(Number(cartIdx[elem.id])+Number(qtBox.value));
  }
  if(cartIdx.subTotal){
    cartIdx.subTotal += Number(elem.aPrice)*Number(qtBox.value);
  }
  else {
    cartIdx.subTotal = Number(elem.aPrice)*Number(qtBox.value);
  }
  localStorage.setItem("cart",JSON.stringify(cart));
  localStorage.setItem("cartIdx",JSON.stringify(cartIdx));
}
function giftToCartFn(){
  window.location.href = "../productGrid.html"
}
var wishListArr = JSON.parse(localStorage.getItem("wishList")) || []
function wishlistFn(){
  var idx = wishListArr.indexOf(elem);
    if(idx!=-1){
        wishListArr.splice(idx,1);
    }else{
        wishListArr.push(elem);
    }
    localStorage.setItem("wishlist",JSON.stringify(wishListArr));
}
function showPopUp(giftData){
  document.querySelector(".popup").classList.toggle("open");
  document.querySelector(".productDiv").classList.toggle("blurred")
}
document.querySelectorAll("#product>div:nth-child(2)>h2").forEach(function(ele){
  ele.addEventListener("click",function(){
      ele.classList.toggle("h2-active")
      var d = ele.nextElementSibling;
      d.classList.toggle("pdesc-active")
      if(d.classList.contains("pdesc-active")){
          d.style.maxHeight = "15em";
      }else{
          d.style.maxHeight = "0";
      }
  })
})