function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items=[];
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            items.push({
                id:doc.id,
                img:doc.data().img,
                name:doc.data().name,
                make:doc.data().make,
                rate:doc.data().rate,
                price:doc.data().price
            })
            // console.log(items);

        });
        // console.log(`${doc.id} => ${doc.data()}`);
        generatesItems(items)
        
    });
}

function addtocart(item){
    console.log( item, "add to cart")


    let cartitem = db.collection("cart-items").doc(item.id);
    cartitem.get()
    .then(function(doc){
        if(doc.exists){
            cartitem.update({
                quantity:doc.data().quantity + 1
        
            
            
        })
    } else {
        cartitem.set({
            img:item.img,
            make:item.make,
            name:item.name,
            rate:item.rate,
            price:item.price,
            quantity:1
        })
    }
    
    


})
}



function generatesItems(items){
   
    items.forEach(function(item){
        let doc= document.createElement("div");
        doc.classList.add("main-product", "mr-4", "pt-4")
        doc.innerHTML=`

        
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
    <img class="w-full h-full object-contain " src=${item.img} alt=${item.name}/>
     </div>
     <div class="product-name text-gray-700 font-bold mt-2 text-sm">${item.name}</div>
     <div class="product-make text-gray-700 text-green-300 font-bold">${item.make}</div>
     <div class="product-rating text-yellow-300 font-bold my-1">⭐⭐⭐⭐⭐${item.rate}</div>
   <div class="product-price font-bold text-gray-700 text-lg">$${item.price}</div>
   
        `
   let addtocartel = document.createElement("div");
   addtocartel.classList.add("add-to-cart","items-center", "bg-yellow-500", "h-8" ,"flex", "justify-center", "text-white",
   "w-28" ,"text-md" ,"cursor-pointer", "hover:bg-yellow-600", "rounded" )
   addtocartel.innerText="Add to cart"
    doc.appendChild(addtocartel)
    document.querySelector(".main-section-product").appendChild(doc)
    

    addtocartel.addEventListener("click", function(){
        addtocart(item)
    })
    })
    

}

getItems()