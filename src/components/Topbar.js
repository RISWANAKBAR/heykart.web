import React from 'react'
import './topbar.css'
import logo from '../image/logo1.jpg';
import { Home } from '@mui/icons-material/';
import IconButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ShoppingCart } from '@mui/icons-material/';
import { Navigate, useNavigate } from 'react-router-dom'
import { Person2 } from '@mui/icons-material/';
import { Search } from '@mui/icons-material/';
import { useState, useEffect } from 'react';
import axios from "axios";



export default function Topbar() {
  const navigate = useNavigate()
  const avathar = localStorage.getItem("ids")
  const [bud, setbud] = useState()

  useEffect(() => {
    console.log(avathar.ids);

    axios.get(`https://maitexa.in/water-delivery-api/api/get-customer-info/${avathar}`)

      .then(resp => {
        console.log(" ccc===>", resp)
        setbud(resp.data.customer_info)
      })
  }, [])
  console.log("bus===>", bud)

  const func = () => {
    navigate("/")
    window.location.reload()
  }



  return (
    <>

      <div id='heading12'>
        <nav id='navbar' class="navbar navbar-expand-lg bg fixed-top" style={{ backgroundColor: '#404258' }}>
          <div class="container-fluid">
            <a class="navbar-brand justift-content-center" href="#" style={{ color: 'white' }}>hEYkaRt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none' }}>
              <span class="navbar-toggler-icon">  <i class="fa fa-list" aria-hidden="true" style={{ color: 'white', border: 'none' }}></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <center>
                <div class="search-box">
                  <button class="btn-search"><i class="fas fa-search"></i></button>
                  <input type="text" class="input-search" placeholder="hEYkaRt...." />
                </div></center>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <h6 style={{ color: 'white' }} id='name'>{bud?.name}</h6>
                </li>
                <li class="nav-item">
                  {/* <IconButton style={{ size: 'larger' }}> <Person2 style={{ color: 'whitesmoke' }} onClick={() => navigate("/pro")} /></IconButton> */}
                  <img onClick={() => navigate("/pro")} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXneWqi_j966mFkz2yVzoQQOJKfMias9_F7bKYW17yg4e4_xrH' class="avatar" id='avatar'/>
                </li>

                <li class="nav-item">

                  {/* <a id='hov' style={{color:'white'}} class="nav-link active" aria-current="page" href="#"><Home/></a> */}
                  <IconButton style={{ size: 'larger' }}> <Home style={{ color: 'whitesmoke' }} onClick={func} /></IconButton>
                </li>
                <li class="nav-item">
                  <IconButton style={{ size: 'larger' }}> <ShoppingCart style={{ color: 'whitesmoke' }} onClick={() => navigate("/cart")} /></IconButton>
                </li>
                <li class="nav-item">
                  <button id='bbt' style={{ color: 'red', backgroundColor: 'none', background: 'none', border: 'none', borderRadius: '5px', height: '35px', width: '60px' }} onClick={() => navigate("/login")} >Login</button>
                </li>



              </ul>

            </div>
          </div>
        </nav>
      </div>


    </>

  )
}
