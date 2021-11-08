

export const reducer = (state,action) => {
    if(action.type === 'increment') {
       let updated = state.items.map((item) =>{
           if(item.id === action.payload){
            //    if(item.id===4){
            //        return {...item, quantity:item.quantity+2};
            //    }
            //    if(item.id===3){
            //        return {...item, quantity:item.quantity+3};
            //    }
               return {...item,quantity: item.quantity+1};
           }
           return item;
       })
       return {...state, items: updated};
    }

    if(action.type === 'decrement'){
        let updates = state.items.map((item)=>{
            if(item.id === action.payload) {
                // if(item.id===4){
                //     return{...item,quantity:item.quantity-2};
                // }
                // if(item.id===3){
                //     return{...item,quantity:item.quantity-3};
                // }
                return{...item,quantity: item.quantity-1};
            }
            return item;
        })
        return{...state,items: updates};
    }
    
    if(action.type === 'delete') {
        return({
            ...state,
            items:state.items.filter((item) =>{
                return item.id !== action.payload;
            }),
        });
    };

    if(action.type === 'clear'){
        return{
            ...state,
            items:[],
        };
    }

    if(action.type === 'get_total'){
        
        let { totalItems,totalAmount,discountSoup,discountBread} = state.items.reduce((accume,item)=>{
            let{price,quantity,id} = item;
            let updatedTotalAmount = price * quantity;
            let discSoup = 0;
            let discBread = 0;
            //Cheese

            if(id===4 && quantity%2===0){
                let dis = quantity/2;
                updatedTotalAmount -=dis*price; 
            }else{
                if(id===4 && quantity>2){
                    let dis = Math.floor(quantity/2);
                    console.log(dis)
                updatedTotalAmount -=dis*70; 
                }
            }
            
            //butter 
            if(id===3 && quantity%3===0){
                let dis = quantity/3;
                updatedTotalAmount -=dis*price;
            }else{
                if(id===3 && quantity>3){
                    let dis = Math.floor(quantity/3);
                    updatedTotalAmount -=dis*100;
                }
            }

            //soup and bread
           if(id===5 && quantity>=1){
               discSoup = 1;
           }
           if(id===1 && quantity>=1){
                discBread = 1;
           }

            
            accume.totalItems += quantity;
            accume.discountSoup  += discSoup;
            accume.discountBread += discBread;
            accume.totalAmount += updatedTotalAmount;
            return accume;
        },{totalAmount: 0,totalItems:0,discountSoup:0,discountBread:0});

        if(discountSoup===1 && discountBread===1){
            totalAmount = totalAmount - (90/2);
        }
        return{
            ...state,
            totalAmount,
            totalItems,
            discountSoup,
            discountBread,
        };
    }
    return state;
}
