import React from 'react'
import Cart from '../Cart'
import Topbar from '../Topbar'


export default function Addtocart({storage,erase}) {
  return (
    <div>
       <Topbar/>
        <Cart storage={storage} erase={erase} />
       
    </div>
  )
}


