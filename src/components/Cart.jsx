import React, { createContext, useEffect, useReducer } from 'react'
import ContextCart from './ContextCart';
import products from './products'
import {reducer} from './reducer'

export const CartContext = createContext();

const initialState = {
    items: products,
    totalAmount: 0,
    totalItems:0,
};

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const Increment = (id) =>{
        return dispatch({
            type: 'increment',
            payload:id,
        });
    };

    const Decrement = (id) =>{
        return dispatch({
            type: 'decrement',
            payload:id,
        });
    };

    const Delete = (id) =>{
        return dispatch({
            type: 'delete',
            payload:id,
        });
    };

    const Clear = () => {
        return dispatch({
            type:'clear',
        });
    };

    useEffect(() => {
        dispatch({type:'get_total'});
    }, [state.items]);

    return (
        <>
        <CartContext.Provider value={{...state, Increment, Decrement,Delete,Clear}}>
            <ContextCart/>
        </CartContext.Provider>
        </>
    )
}

export default Cart
