import React, { useContext } from 'react'
import { CartContext } from './Cart'
import Head from './Head'
const Top = () => {
    const {totalItems} = useContext(CartContext);
    return (
        <>
        <Head/>  
        <div className="flex items-center justify-center flex-col mt-8">
        <h1 className="font-bold text-center text-3xl  h-14 bg-yellow-50 shadow-lg border-2 w-80 rounded-xl border-yellow-50 text-purple-400 sm:text-lg sm:w-40 sm:h-10">Shopping Cart</h1> 
        <p className="font-bold text-center text-2xl mt-8 text-purple-400 sm:text-sm">You Have {totalItems} Items In Shopping Cart</p>
        </div>
        </>
    )
}

export default Top
