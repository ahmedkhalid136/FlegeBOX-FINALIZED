import {SET_ITEM,INC_ITEM,INC_CART,DEC_CART,CLEAR_CART,INC_TOTAL,DEC_TOTAL} from '../type/cart';

export const setItem=(data)=>async dispatch=>{
       dispatch({type:SET_ITEM,payload:data});
 }

 export const ChangeQuantity=(index,value)=> dispatch=>{
    dispatch({type:INC_ITEM,payload:{'index':index,'value':value}})
 }

 export const increment_cart=()=> dispatch=>{
   dispatch({type:INC_CART})
}

export const decrement_cart=()=> dispatch=>{
   dispatch({type:DEC_CART})
}

export const clear_cart=(data)=>async dispatch=>{
   let indexs=[]
   data.forEach(element => {
      indexs.push(element.index);
   });
   dispatch({type:CLEAR_CART,payload:indexs})

}

export const increase_total=(value)=> dispatch=>{
  dispatch({type:INC_TOTAL,payload:value})
}

export const decrease_total=(value)=> dispatch=>{
  dispatch({type:DEC_TOTAL,payload:value})
}