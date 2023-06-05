
localStorage.setItem("tab", "cleansers")

var trendingOffersData = [{ image: "https://static.thcdn.com/images/small/webp/widgets/121-us/20/original-bioeffect.ss-083920.png", name: "20% off  + Extra 10% off BIOEFFECT with code: EXTRA10", content: "Discover the anti-aging power of BIOEFFECT's award-winning line of plant-based EGF skincare products.", pageUrl: "Shop.html" },
{ image: "https://static.thcdn.com/images/small/webp/widgets/121-us/08/nuface.ss-040408.jpg", name: "20% off + Extra 10% off select NuFACE with code: EXTRA10", content: "NuFACE treats your skin at every level using Microcurrent Skincare™, to help tone, firm and smooth your skin.", pageUrl: "Shop.html" },
{ image: "https://static.thcdn.com/images/small/webp/widgets/121-us/37/original-elemis.ss-083937.jpg", name: "20% off + Extra 10% off select NuFACE with code: EXTRA10", content: "ELEMIS is globally recognized for harnessing the power of natural ingredients and scientific innovation.", pageUrl: "Shop.html" },
{ image: "https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-Shot_9_500x500-051058.jpg", name: "25% off + Extra 10% off First Aid Beauty with code: EXTRA10", content: "SkinMedica believes that everybody deserves to have gorgeously healthy and radiant skin to allow them to feel gorgeous and confident.", pageUrl: "Shop.html" },
{ image: "https://static.thcdn.com/images/small/webp/widgets/121-us/12/Arcona.ss-081512.jpg", name: "25% off + Extra 10% off Arcona with code: EXTRA10", content: "Strengthen your skin's immune system and discover the best-selling product range from ARCONA.", pageUrl: "Shop.html" },
{ image: "https://static.thcdn.com/images/small/webp/widgets/121-us/13/original-original-CS-Pod1_AllMineralSunscreen_500x500-035323-075713.jpg", name: "20% off + Extra 10% off Colorescience with code: EXTRA10", content: "We're Colorescience, and we know healthy skin. From sunlight, to pollution, to free radicals, we believe in going way beyond UV.", pageUrl: "Shop.html" },
];


trendingOffersData.map(function (elem) {
    var boxDiv = document.createElement("div")
    var boxImage = document.createElement("img")
    boxImage.setAttribute("src", elem.image)
    var boxh3 = document.createElement("h3")
    boxh3.textContent = elem.name
    var boxp = document.createElement("p")
    boxp.textContent = elem.content
    var boxbtm = document.createElement("button")
    boxbtm.textContent = "SHOP NOW"
    boxbtm.addEventListener("click", function () {
        window.location.href = elem.pageUrl
    });

    boxDiv.append(boxImage, boxh3, boxp, boxbtm)
    document.querySelector("#trendingOffers").append(boxDiv)
});

// <!--Here I created the rightNowOffersData array -->    
var rightNowOffersData = [{ image: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289613-6975043613167717.jpg", name: "EltaMD UV Clear Broad-Spectrum SPF46", bPrice: 41.00, aPrice: 36.90, pageUrl: "#" },
{ image: "https://s4.thcdn.com//productimg/1600/1600/11370312-1945014852424127.jpg", name: "EltaMD UV Clear Tinted Broad-Spectrum SPF46", bPrice: 43.00, aPrice: 38.70, pageUrl: "#" },
{ image: "https://s4.thcdn.com//productimg/1600/1600/11289609-4505043613045506.jpg", name: "SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml", bPrice: 0, aPrice: 182, pageUrl: "#" },
{ image: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", name: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },

];


rightNowOffersData.map(function (elem) {
    var boxDiv = document.createElement("div")
    var boxImage = document.createElement("img")
    boxImage.setAttribute("src", elem.image)
    var boxh3 = document.createElement("h3")
    boxh3.textContent = elem.name
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
    boxbtm.addEventListener("click", function () {
        window.location.href = elem.pageUrl
    });

    boxDiv.append(boxImage, boxh3, boxp, boxh5, boxbtm)
    document.querySelector("#rightNowOffers").append(boxDiv)
});


function navSlideOut() {
    document.querySelector("#nav-link").style.left = "-16px"
}
function navSlideIn() {
    document.querySelector("#nav-link").style.left = "-2000px"
}
document.querySelector("#nav-link>li:nth-child(3)").addEventListener("click",function(){
    var ele = document.querySelector("#mem_sale");
    ele.scrollIntoView();
})
document.querySelector("#nav-link>li:nth-child(4)").addEventListener("click",function(){
    var ele = document.querySelector("#new_offer");
    ele.scrollIntoView();
})
document.querySelector("#nav-link>li:nth-child(5)").addEventListener("click",function(){
    var ele = document.querySelector("#trending");
    ele.scrollIntoView();
})
document.querySelector("#nav-link>li:nth-child(6)").addEventListener("click",function(){
    localStorage.setItem("tab","moisturisers");
    window.location.href="./productGrid.html"
})
document.querySelector("#nav-link>li:nth-child(7)").addEventListener("click",function(){
    localStorage.setItem("tab","cleansers");
    window.location.href="./productGrid.html"
})
document.querySelector("#nav-link>li:nth-child(8)").addEventListener("click",function(){
    localStorage.setItem("tab","shampoo");
    window.location.href="./productGrid.html"
})
document.querySelector("#nav-link>li:nth-child(9)").addEventListener("click",function(){
    localStorage.setItem("tab","randomM");
    window.location.href="./productGrid.html"
})
document.querySelector("#nav-link>li:nth-child(10)").addEventListener("click",function(){
    localStorage.setItem("tab","randomS");
    window.location.href="./productGrid.html"
})
document.querySelector("#nav-link>li:nth-child(11)").addEventListener("click",function(){
    localStorage.setItem("tab","randomC");
    window.location.href="./productGrid.html"
})
document.querySelector("#nav-link>li:nth-child(13)").addEventListener("click",function(){
    localStorage.setItem("tab","randomM>");
    window.location.href="./productGrid.html"
})