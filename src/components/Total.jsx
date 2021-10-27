import React, { useContext } from 'react'
import { CartContext } from './Cart';


const Total = () => {
    const {Clear,totalAmount} = useContext(CartContext);
    const paid = () => {
        totalAmount!==0?
            (alert(`After applying special offers amount to be paid ${totalAmount}`)):
            (alert("Your Cart is Empty"))
        
    }
    return (
        <div className="flex flex-col items-center mt-20">
            <p className="text-2xl font-bold text-green-400 mb-5">Cart Total : {`${totalAmount} Rs`}</p>
            <div className="flex  items-center mt-2 space-x-10">
                <button className="border-2 border-purple-50 rounded-md shadow-xl w-40 h-10 bg-green-400" onClick={paid}>
                    <p className="text-sm font-bold">CHECKOUT</p>
                </button>
                
                <button className="border-2 border-purple-50 rounded-md shadow-xl w-40 h-10 bg-red-500" onClick={Clear}>
                    <p className="text-sm font-bold">   CLEAR CART</p>   
                </button>
            </div>
        </div>
    )
}

export default Total
