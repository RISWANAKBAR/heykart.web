import React from 'react'
import Card from '../Card'
import Footer from '../Footer'
import Head from '../Head'
import Items from '../Items'
import Topbar from '../Topbar'

export default function First({data,catdat,ecut}) {
  return (
    <div >
        <Topbar/>
        <Head/>
        <Card   catdat={catdat}/>
        <Items data={data}  ecut={ecut}/>
        <Footer/>
 </div>
  )
}
