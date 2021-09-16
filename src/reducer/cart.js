import {INC_ITEM,DEC_ITEM,SET_ITEM,SET_SIZE,INC_CART,DEC_CART,CLEAR_CART, INC_TOTAL, DEC_TOTAL} from '../type/cart'

const initialState={
    products:[],
    cart:0,
    total:0,
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case SET_ITEM:
    
            return {
                ...state,
                products:payload,
            }
        case INC_ITEM:
            state.products[payload.index]['sets']=payload.value
            return{
                ...state,
                products:state.products
            }
        
        case INC_CART:
            return{
                    ...state,
                    cart:state.cart+1
                }
        case DEC_CART:
               
                return{
                    ...state,
                    cart:state.cart!==0?state.cart-1:0
                }        
        case CLEAR_CART:
            for(let i=0;i<payload.length;i++){
                state.products[payload[i]]['sets']=0
            }
           return{
               ...state,
               products:state.products,
               cart:0,
               total:0,
           }

        case INC_TOTAL:
            if(state.total+payload<=60){
                return{
                    ...state,
                    total:state.total+payload,
                }
            }
            return state
        
        case DEC_TOTAL:
            if(state.total-payload>=0){
                return{
                    ...state,
                    total:state.total-payload,
                }
            }
            return state

        default :
          return state
    }
}
