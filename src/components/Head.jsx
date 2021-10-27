import React, { useContext } from 'react'
import { CartContext } from './Cart';

const Head = () => {
    const {totalItems} = useContext(CartContext);
    
    return (
        <header>
            <div className="top flex justify-between items-center border-b-4 border-purple-200 bg-purple-300 p-5 sm:p-3">
                <div className="left flex items-center justify-center">   
                    <img src="./images/arrow.png" alt="imag" className="images w-9 h-9 sm:w-5 sm:h-5"/>
                    <h3 className="ml-10 font-bold text-xl mb-4 sm:text-lg">Continue Shopping</h3>
                </div>
                <div className="right flex items-center justify-end relative"> 
                    <p className="border-2 border-blue-400 rounded-full bg-blue-400 text-sm h-6 w-6 mb-10 sm:mb-10 text-center sm:text-xs absolute sm:h-4 sm:w-4"><span className="font-bold">{totalItems}</span></p>
                    <img src="./images/cart.png" alt="imag" className="images sm:w-6 sm:h-6"/>
                </div> 
            </div>
        </header> 
    )
}

export default Head
