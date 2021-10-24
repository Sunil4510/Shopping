import React from 'react'

const Head = () => {
    return (
        <header>
            <div className="top flex justify-between items-center border-b-4 border-purple-200 bg-purple-300 p-5 sm:p-3">
                <div className="left flex items-center justify-center">   
                    <img src="./images/arrow.png" alt="imag" className="images w-9 h-9 sm:w-5 sm:h-5"/>
                    <h3 className="ml-10 font-bold text-xl mb-4 sm:text-lg">Continue Shopping</h3>
                </div>
                <div className="right"> 
                    <img src="./images/cart.png" alt="imag" className="images sm:w-6 sm:h-6"/>
                </div> 
            </div>
        </header> 
    )
}

export default Head
