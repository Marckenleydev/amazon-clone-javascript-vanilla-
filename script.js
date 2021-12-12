slide = [
    {
        image:"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
    }
    ,
    {
        image:"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
    },
    {
        image:"https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
    },
    {
        image:"https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
    },
    {
        image:"https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
    }
];

// products=[
//     {
//         image:"https://st3.myideasoft.com/shop/mr/53/myassets/products/971/macbook-pro-13-3-inc-m1-8c-16gb-ram-256gb-ssd-uzay-grisi-z11b00098-60-jpg.jpeg?revision=1623059036",
//         name:"Apple MarckBook Pro 13.3",
//         make:"Apple",
//         rate:"⭐⭐⭐⭐⭐ 4.5",
//         price:1149,
//         cart:"Add to cart"
//     },
//     {
//         image:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/microsoft/thumb/109337-anagorsel_large.jpg",
//         name:"X-box series s",
//         make:"microsost",
//         rate:"⭐⭐⭐⭐ 4",
//         price:729.99,
//         cart:"Add to cart"
//     },

  
//     {
//         image:"https://www.panasonic.com/content/dam/pim/tr/tr/DM/DMC-GH/DMC-GH4EG/DMC-GH4EG-Variation_Image_for_See_All_1Global-1_tr_tr.png",
//         name:"Panasonic GHS 4k Camera",
//         make:"panasonic",
//         rate:"⭐⭐⭐⭐ 4",
//         price:949,
//         cart:"Add to cart"
//     },
//     {
//         image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6383/6383122_sd.jpg",
//         name:"Beats solo Pro",
//         make:"Beats",
//         rate:"⭐⭐⭐⭐⭐4.3",
//         price:169.99,
//         cart:"Add to cart"
//     },
//     {
//         image:"https://static.fnac-static.com/multimedia/Images/01/01/00/37/225281-1505-1540-1/tsp20210414103547/Vibox-I-31-PC-Gamer-Windows-10-WiFi-Quad-Core-Ryzen-Proceeur-Radeon-Vega-8-Graphique-16Go-RAM-240Go-D-1To-Disque-Dur.jpg",
//         name:"PC gamer",
//         make:"Windows",
//         rate:"⭐⭐⭐3.3",
//         price:569.99,
//         cart:"Add to cart"
//     },
//     {
//         image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000",
//         name:"Apple Iphone 12 Pro max",
//         make:"Apple",
//         rate:"⭐⭐⭐⭐⭐4.3",
//         price:899.99,
//         cart:"Add to cart"
//     },
//     {
//         image:"https://cdn.dsmcdn.com//ty20/product/media/images/20210326/23/75554837/108939192/2/2_org_zoom.jpg",
//         name:"Play station 5",
//         make:"Sony",
//         rate:"⭐⭐⭐⭐⭐4.3",
//         price:889.99,
//         cart:"Add to cart"
//     },
//     {
//         image:"http://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421",
//         name:"Mecahanical keyboard",
//         make:"Havit KB$87l",
//         rate:"⭐⭐⭐⭐3.5",
//         price:89.99,
//         cart:"Add to cart"
//     },
//     {
//         image:"https://m.media-amazon.com/images/I/61-PblYntsL.jpg",
//         name:"Nintendo Switch(2019)",
//         make:"Nintendo",
//         rate:"⭐⭐⭐⭐⭐4.3",
//         price:289.99,
//         cart:"Add to cart"
//     },
//     {
//         image:"http://cdn.shopify.com/s/files/1/0551/9563/1814/products/havit-kb487l-tkl-mechanical-keyboard.jpg?v=1618240421",
//         name:"Mecahanical keyboard",
//         make:"Havit KB$87l",
//         rate:"⭐⭐⭐⭐3.5",
//         price:89.99,
//         cart:"Add to cart"
//     },
// ]
const btns = document.querySelector(".btn");
const next_btn = document.querySelector(".next-btn");
const prev_btn= document.querySelector(".prev-btn");
const img=document.querySelector(".banner-img");



let CurrentItem=0;

window.addEventListener("DOMContentLoaded", function(){
    ShowImg()
})

function ShowImg(){
 const item = slide[CurrentItem];
  img.src= item.image


}

next_btn.addEventListener("click", function(){

    if(CurrentItem > slide.length-1){
        CurrentItem =0;
    }
    ShowImg(CurrentItem)
    CurrentItem ++;
})
prev_btn.addEventListener("click", function(){

    if(CurrentItem < 0){
        CurrentItem =slide.length-1;
    }
    ShowImg(CurrentItem)
    CurrentItem --;
})



// const main_section= document.querySelector(".main-section-product")
// window.addEventListener("DOMContentLoaded", function(){
//     getProducts(products);
// })

// function getProducts(products){

//     let displayProducts =products.map(function(item){

//        return `
// <div class="main-product mr-4 pt-4">

// <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//     <img class="w-full h-full object-contain " src=${item.image} alt=${item.name}/>
// </div>
// <div class="product-name text-gray-700 font-bold mt-2 text-sm">${item.name}</div>
// <div class="product-make text-gray-700 text-green-300 font-bold">${item.make}</div>
// <div class="product-rating text-yellow-300 font-bold my-1">${item.rate}</div>
// <div class="product-price font-bold text-gray-700 text-lg">$${item.price}</div>
// <div class="add-to-cart bg-yellow-500 h-8 flex justify-center text-white  w-28 text-md cursor-pointer hover:bg-yellow-600 rounded">
//                                 ${item.cart}
//                             </div>
// </div>

// `

// }) 
// displayProducts=displayProducts.join("")
//   main_section.innerHTML=displayProducts;
// // console.log(displayproduct)

// }

