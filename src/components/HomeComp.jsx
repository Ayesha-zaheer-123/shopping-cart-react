import React from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { addToCart } from '../store/CartSlice';
import { removeFromCart } from '../store/CartSlice';
export default function HomeComp() {
     const [product,setproduct]=useState([]);
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch();
  const [error,seterror]=useState("");
  const value=useSelector((state)=>state.cart.items)
    const API="https://fakestoreapi.com/products";
  async function Fetch() {
   try{
 const result =await axios.get(API);
 setproduct(result.data);
   }catch(err) {
seterror(err.message);
   }finally{
setloading(false);
   }
  }
  useEffect(()=>{
Fetch();
  },[])
  if(loading) return <h1>Loading..........</h1>
  if(error!="") return <h1>Error </h1>
  return (
    <div>
{product.map((products)=>{
const inCart=value.some((val)=>val.id==products.id)
  return (
    <div  className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <img
    src={products.image}
    alt={products.title}
    className="h-44 w-full object-contain"
  />
<h3 className="my-3 line-clamp-2 text-sm font-medium">{products.title}</h3>
  <p className="mt-auto font-bold">${products.price}</p>
{inCart?(<button className="mt-3 rounded-lg bg-red-500 py-2 text-white hover:bg-red-600"
 onClick={()=>dispatch(removeFromCart(products))}
 >Remove from cart</button>)
:
(<button    className="mt-3 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
 onClick={()=>dispatch(addToCart(products))}>Add to cart </button>)
}
</div>
  );
})}
    </div>
  )
}
