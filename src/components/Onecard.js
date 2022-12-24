import React from 'react'
import {json, useParams } from 'react-router-dom'
import {useState,useEffect} from 'react';
import'./onecard.css'
import {Favorite}from '@mui/icons-material/';

export default function Onecard({ecut}) {
   
    const id=useParams();
    console.log(id.val)
    const [single, setsingle] = useState()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id.val}`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
            setsingle(json)})
         }, [])
         console.log(single)
    



  return (
    <div>
       
<div class="d-flex justify-content-center container mt-5">
        <div class="card p-3 " id='card10'>
            <div class="about-product text-center mt-2"><img id='nnnnn'src={single?.image} width="300"/>
                <div>
                    <h4  style={{color:'black'}}>{single?.title}</h4>
                    <h6 class="mt-0 text-black-50">{single?.category}</h6>
                </div>
            </div>
            <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price"><span style={{color:'black'}}>Rating</span><span  style={{color:'black'}}>{single?.rating.rate}/5</span></div><br/>
                <div class="d-flex justify-content-between p-price"><span  style={{color:'black'}}>Likes</span><span style={{color:'red'}}>{single?.rating.count}<Favorite/></span></div>
               
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4"><span  style={{color:'black'}}>Price</span><span  style={{color:'black'}}>{single?.price}$</span></div>
        </div>
        
    </div>
    <button onClick={()=>ecut(single)} style={{color:'white', borderRadius:'6px',backgroundColor:'green'}}>Add to cart</button>
   
</div>
  )
}
