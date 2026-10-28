import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:'CartSlice',
    initialState:{
items:[],
totalAmount:0,
value:true
    },
    reducers:{
addToCart:(state,action)=>{
    const exists=state.items.some((i)=>i.id===action.payload.id)
    if(exists) return ;
    state.items.push(action.payload);
state.totalAmount+=action.payload.price;
},
removeFromCart:(state,action)=>{
const item =state.items.find((i)=>i.id==action.payload.id);
if(item) {
    state.totalAmount-=item.price;
    state.items=state.items.filter((i)=>i.id!=action.payload.id)
}
}
    }
})
export const {addToCart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;