import React, { createContext, useReducer, useEffect } from 'react'
import { products } from './porducts';
import { reducer } from './reducer';
import ShopApp from './ShopApp';



export const ShopContext = createContext();

    const initialState  = {
        item: products,
        totalAmount: 0,
        totalItem: 0,
    };

    
    const Card = () => {
        
        const [state, dispatch] = useReducer(reducer, initialState);



        const removeItems = (id) =>{
            return dispatch({
                type: "REMOVE_ITEMS",
                payload: id,
            }) 
        };

        
        useEffect(()=>{
            dispatch({type: "GET_TOTAL" });
            console.log("hello")
        },[state.item]);


        
    return (
        <>
        <ShopContext.Provider value={{...state, removeItems}}>
        <ShopApp/>
        </ShopContext.Provider>
        </>
    )
}

export default Card;
