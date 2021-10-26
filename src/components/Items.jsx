import React, { useContext } from 'react'
import { CartContext } from './Cart';
const Items = ({id,title,description,price,img,quantity}) => {
    const {Increment,Decrement,Delete} = useContext(CartContext);
    return (
            <div className="shadow-2xl rounded-2xl h-44 grid grid-cols-5 space-x-12 sm:space-x-4 sm:mx-0 sm:h-32 mx-10 mt-10 overflow-x-auto place-items-center hover:bg-purple-200 ">
                <div className="card-img">
                    <img src={img} alt="product" className="w-32 h-28 rounded-xl sm:w-14 sm:h-14"/>
                </div>
                <div className="title flex flex-col">
                    <h1 className="font-bold sm:text-sm">{title}</h1>
                    <p className="text-xs sm:text-xs">{description}</p>
                </div>
                <div className="add-minus-quantity flex cursor-pointer">
                
                   {quantity===0?(<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 mr-2 sm:mr-0 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>):(
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{Decrement(id)}} className="h-6 w-6 mt-1 mr-2 sm:mr-0 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    )}
                    <p className="border-2 w-20 border-gray-500 rounded-lg shadow-lg text-center h-8 sm:w-10 md:w-20 lg:w-25 xs:w-10">{quantity}</p>
                   {quantity===5?( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 ml-2 sm:ml-0 hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>):(
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{Increment(id)}} className="h-6 w-6 mt-1 ml-2 sm:ml-0 hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                   )}
                   
                </div>
                <div className="price">
                    <h3 className="font-bold ml-10">{price}₹</h3>
                </div>
                <div className="delete cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{Delete(id)}} className="h-5 w-5 fill-current text-red-600 " viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
             </div>
    )
}

export default Items
