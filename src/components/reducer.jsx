
let q=0;
export const reducer = (state,action) => {
    if(action.type === 'increment') {
       let updated = state.items.map((item) =>{
           if(item.id === action.payload){
               return {...item,quantity: item.quantity+1};
           }
           return item;
       })
       return {...state, items: updated};
    }

    if(action.type === 'decrement'){
        let updates = state.items.map((item)=>{
            if(item.id === action.payload) {
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
        
        let { totalItems,totalAmount} = state.items.reduce((accume,item)=>{
            let{price,quantity,id} = item;
            let updatedTotalAmount = price * quantity;
            
            //Cheese
            if(id===4 && quantity%2===0){
                let dis = quantity/2;
                updatedTotalAmount -=dis*price; 
            }
            
            //butter 
            if(id===3 && quantity%3===0){
                let dis = quantity/3;
                updatedTotalAmount -=dis*price;
            }
            //soup and bread
           
            if(id===5 && quantity>=1){
                q = quantity;
                console.log(q);
            }else{
                if(id===5){
                    q=0;
                }
            }
            if(id===1 && quantity>=1 && q>=1){
                let pp = price;
                let half = pp/2;
                updatedTotalAmount -=half; 
            }else{
                if(id===1 && quantity>=1){
                    updatedTotalAmount =quantity*price;
                }
            }

            accume.totalAmount += updatedTotalAmount;
            accume.totalItems += quantity;
            return accume;
        },{totalAmount: 0,totalItems:0});
        return{
            ...state,
            totalAmount,
            totalItems,
        };
    }
    return state;
}
