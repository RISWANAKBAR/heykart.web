import React from 'react'
import Footer from '../Footer'
import Onecard from '../Onecard'
import Topbar from '../Topbar'

export default function ({ecut}) {
  return (
    <div>
        <Topbar/>
        <Onecard ecut={ecut} />
     
    </div>
  )
}
