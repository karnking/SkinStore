var productsArray = [
    {
        id: 3,
        img: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11165911-4274943595981285.jpg",
        logo: "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/eltamd.gif",
        title: "EltaMD Foaming Facial Cleanser 207ml",
        bPrice: 80.00, 
        aPrice: 72.00,
        desc: "Experience superior cleansing with Sarah Chapman's Skinesis Ultimate Cleanse, an anti-aging balm-to-milk cleanser that works to lift away stubborn makeup and impurities whilst softening and brightening the skin.<br/>With an intelligent formula, the aromatic cleanser combines omega rich oils and powerful antioxidants with anti-aging actives to gently exfoliate and clean deep down, melting effortlessly into the skin and deep into pores to eradicate grime, dirt and makeup; expertly decongesting to leave your complexion clean, revitalised and glowing. After use, previously tight skin will feel calm and comfortable. Pores will be free of dirt and grime and your complexion will look fresh and radiant. - K.N.<br/> Suitable for all skin types. Products are packaged in airless pumps to protect light and air sensitive ingredients such as vitamins and antioxidants, keeping your product fresh and potent.",
        ingredients: "Aqua (Water), Glycerin, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Decyl Glucoside, Carthamus Tinctorius (Safflower) Seed Oil, Stearic Acid, Glyceryl Stearate SE, Pentaclethra Macroloba Seed Oil, Butyrospermum Parkii (Shea) Butter, Glycol Stearate, Kaolin, Cocamidopropyl Betaine, Illite, Cetearyl Alcohol, Betaine, Magnesium Aluminium Silicate, Phenoxyethanol, Lepidium Sativum Sprout Extract, Citrus Bergamia Fruit Oil, Salicylic Acid, Limonene, Sodium Ascorbyl Phosphate, Xanthan Gum, Linalool, Lactic Acid, Benzyl Alcohol, Sodium Hydroxide, Citrus Aurantium Amara Leaf/Twig Oil, Alcohol, Cyclodextrin, Calendula Officinalis Flower Extract, Ethylhexylglycerin, Menthol, Lecithin, Disodium EDTA, Sodium Benzoate, Menthyl Lactate, Geraniol, Dehydroacetic Acid, Pistacia Lentiscus (Mastic) Gum, Pelargonium Graveolens Oil, Citral, Potassium Sorbate, Citronellol, Citric Acid, Citrus Aurantium Amara Flower Oil.",
        procedure: ["<i class='fa-regular fa-sun'></i> AM / <i class='fa-regular fa-moon'></i> PM","When to Use: ​The first step in your routine.","Recommended Amount:​ 2-4 pumps.","Application:​ Massage onto a dry face and neck and rinse. For use as a mask, leave on for 2 minutes and rinse.","Routine: Follow with serums, moisturiser and SPF."],
        reviews: ["Fucking great","Excellent Product"],
    },
    { img: "https://s4.thcdn.com//productimg/1600/1600/11370312-1945014852424127.jpg", title: "EltaMD UV Clear Tinted Broad-Spectrum SPF46", bPrice: 43.00, aPrice: 38.70, pageUrl: "#", gift: "$37 Sarah Chapman Gift" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/11289609-4505043613045506.jpg", title: "SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml", bPrice: 200, aPrice: 182, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
    { img: "https://s4.thcdn.com//productimg/1600/1600/12538013-4764765050522444.jpg", title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $82)", bPrice: 80.00, aPrice: 72.00, pageUrl: "#" },
]
var giftsArray = [
    {
        id: "gift",
        img: "https://s1.thcdn.com/productimg/0/300/300/76/10629476-1343912941-393796.jpg",
        title: "Sarah Chapman Overnight Facial 5ml (Worth $37.00)",
        price: "286.75",
        sec_title: "$37 Sarah Chapman Gift",
        desc: "Receive a free Sarah Chapman Overnight Facial 5ml (Worth $37) when you spend $100 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last."   
    },
]
var featured = {
        brand_logo: "https://s1.thcdn.com/widgets/121-us/59/original-MicrosoftTeams-image_%2820%29-100559.png",
        product1: {
            img: "https://static.thcdn.com/images/small/webp//productimg/480/480/13556039-8794935277083219.jpg",
            title: "Revision Skincare Gentle Foaming Cleanser 5floz / 150ml.",
            price: "372.00"
        },
        product2: {
            img: "https://static.thcdn.com/images/small/webp//productimg/480/480/12902722-7844915030891827.jpg",
            title: "Revision Skincare Brightening Facial Wash 6.7 fl.oz.",
            price: "341.00"
        }
}