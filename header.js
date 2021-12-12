function getcartItem(){
    db.collection("cart-items").onSnapshot((snapshot) => {
        let totalCount=0;
        snapshot.forEach((doc) => {
           totalCount += doc.data().quantity 
           

        });
        // console.log(`${doc.id} => ${doc.data()}`);
       setCartCounter(totalCount)
        
    });
    generatesItems(totalCount)
    
    
}


function setCartCounter(totalCount){
    document.querySelector(".cart-item-number").innerText=totalCount
    console.log("hello");
}
getcartItem()
