function getCartItems() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let cartItems=[]
        snapshot.docs.forEach((doc)=>{
            cartItems.push({
                id:doc.id,
                ...doc.data()
            })
           
        })
        // console.log(`${doc.id} => ${doc.data()}`);
        
        console.log(cartItems)
        getTotalCost(cartItems) 

        generateCartItems(cartItems)
        
    });
}



function generateCartItems(cartItems){
let itemsHTMl="";
cartItems.forEach(function(item){
    itemsHTMl += `
    <div class="cart-item flex items-center pb-4 border-b border-gray-00 pt-2  ">
    <div class="cart-item-img w-40 h-24 bg-white p-4 rounded-lg">
        <img class="w-full h-full object-contain" src=${item.img} alt=${item.name}>
    </div>
    <div class="cart-item-details flex-grow ml-6">
        <div class="cart-item-title text-sm font-bold text-gray-400">${item.name}</div>
        <div class="cart-item-brain text-sm text-gray-400">${item.make}</div>
    </div>

    <div class="cart-item-counter w-48 flex items-center">
        <div data-id="${item.id}"  class=" cheveron-left   cursor-pointer text-gray-400  rounded h-6 w-6 flex items-center bg-gray-100 hover:bg-gray-200 justify-center mr-2"><i class="fas fa-chevron-left fa-x5"></i></div>
        <h4 class="text-gray-400">x${item.quantity}</h4>
        <div data-id="${item.id}" class="cheveron-right   cursor-pointer text-gray-400 ml-2 rounded justify-center h-6 w-6 flex items-center bg-gray-100 hover:bg-gray-200"><i class="fas fa-chevron-right fa-x5"></i></div>
    </div>
    <div class="total-item-cost w-48 text-gray-400 font-bold">${numeral(item.price * item.quantity).format("$0,0.00")}
    </div>
    <div data-id="${item.id}" class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-400 "><i class="fas fa-times"></i></div>

</div>
    
    `
   
})
document.querySelector(".cart-items").innerHTML =itemsHTMl
createAddventListener()
}


function createAddventListener() {
    let increase= document.querySelectorAll(".cheveron-right")
    let decrease= document.querySelectorAll(".cheveron-left")
    

    let deletebtn=document.querySelectorAll(".cart-item-delete")

    increase.forEach(function(btn){
        btn.addEventListener("click", function(){
            increaseCount(btn.dataset.id);
          
        })
    })

    decrease.forEach(function(btn){
        btn.addEventListener("click", function(){
            decreaseCount(btn.dataset.id);
          
        })
    })
deletebtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        deleteItem(btn.dataset.id)
    })
})
}



function increaseCount(itemId) {
    let cartItem = db.collection("cart-items").doc(itemId);
    
    cartItem.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().quantity >0) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
        }
    })
}

function decreaseCount(itemId) {
    let cartItem = db.collection("cart-items").doc(itemId);
    
    cartItem.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().quantity > 1) {
                cartItem.update({
                    quantity: doc.data().quantity - 1
                })
            }
        }
    })
}

function deleteItem(itemId) {
    db.collection("cart-items").doc(itemId).delete();
}

function getTotalCost(items) {
    let totalcost = 0 ;
    items.forEach(function(item){
        totalcost +=(item.price * item.quantity)
    })
    document.querySelector(".total-cost-number").innerText=numeral(totalcost).format("$0,0.00")
}




getCartItems()



console.log("helo cart");