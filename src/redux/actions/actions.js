import {ADD_FAV, REMOVE_FAV}from "./types"


export const addFav = (characters)=>{
    return {
        type:ADD_FAV,
        payload: characters
    }
}

export const removeFav = (id)=>{
    return {
        type:REMOVE_FAV,
        payload: id
    }
}


export const filterCards = (gender)=> {
    return {
        type: 'FILTER',
        payload: gender
    }

}

export const OrderCards = (order)=>  {
    return {
        type: 'ORDER',
        payload: order
    }
}