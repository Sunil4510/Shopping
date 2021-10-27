import React, { useContext} from 'react'
//import products from './products'
import Items from './Items'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartContext } from './Cart';
import Top from './Top';
import Total from './Total';
import Special from './Special';


const ContextCart = () => {
    const {items} = useContext(CartContext)
    return (
            <div className="flex flex-col">
            <Top/>
                <div className="flex justify-center items-center mt-10">
                    <Scrollbars style={{width:1200,height:550}} className="bg-purple-100 rounded-2xl shadow-2xl">
                    {items.map((curitem)=>{
                        return <Items key={curitem.id}{...curitem}/>    
                    })}
                        {items.length===0?(
                            <div className="flex items-center justify-center w-full h-full">
                           <button className="border-2  w-40 h-12 text-xl font-bold rounded-lg bg-blue-400 text-center text-white hover:bg-blue-300" onClick={()=>window.location.reload()}>Reload</button>
                           </div>
                        ):(
                          console.log() 
                        )}
                    </Scrollbars>
                </div>
                <div className="flex items-center justify-evenly sm:flex-col mt-5">
                <Special/>
            <Total/> 
            </div>   
            </div>
        )
    }
export default ContextCart
