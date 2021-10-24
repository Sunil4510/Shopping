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
            if(id===4 && (quantity==2)){
                updatedTotalAmount -=1*price; 
           }
           if(id===4 && quantity==4){
            updatedTotalAmount -=2*price; 
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
