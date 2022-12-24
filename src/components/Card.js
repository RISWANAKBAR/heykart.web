import React from 'react'
import './card.css'
import {useState,useEffect} from 'react';
import electronics from '../image/electronics.jpg';

export default function Card({catdat}) {
  console.log(" mmm==>",catdat)
  const [cat, setcat] = useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
              console.log("json===>",json)
              setcat(json)

            
            })
}, [])
console.log("cat===>",cat);
  
  return (
    <div>
        {/* <center id='hh12'>  <h1  > Categories</h1>
        <p> Purchase your need's</p>
        </center> */}
        
        <div id='body1' >
           {cat?.map((item,index)=>
        
              <div className="card" id='card1' >
                 <div className="card-body">
                 {/* <img  id='img1'src={electronics}/> */}
                 <p id='cato' onClick={()=>catdat(cat[index])}>{cat[index]}</p>
                      
                      </div>
                      </div>
                      )}
                      </div>
                      </div>
  )
}
