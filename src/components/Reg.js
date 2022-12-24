import React from 'react'
import './reg.css'
import { Navigate,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Reg() {
    const navigate=useNavigate() 
    var patternmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var phoneno = /^\d{10}$/;

    const [deta, setdeta] = useState({
        "role":1
    })

    const reg=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const{name,value} =e.target
      
        setdeta( {
            ...deta,
             [name]: value
            }
        )
        console.log(deta)
     }

     const upload=(event)=>{
        event.preventDefault()
        console.log(deta.email);
        if(!phoneno.test(deta.mobile_number))
        {
            toast(" invalid phone number ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else if (!patternmail.test(deta.email) ){
            toast(" invalid email ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });


        }
        else{
            axios.post("https://maitexa.in/water-delivery-api/api/customer-register",deta)
            .then(res=>{
                console.log(res.data.success)
                
                    toast(res.data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        
                        });
                    
                
            })
         
        }
        
     

     }


     
  return (
    
      <div>
           
           <center>
    
    
    <div className="login-card">
        <h2 div='hMt'> Made your profile</h2>
        <form className="login-form" onSubmit={upload}>
            <input onChange={reg} type="text" placeholder="name" name='name' required />
            <input onChange={reg} type="email" placeholder="email" name='email' required />
          
            <input onChange={reg} type="number" placeholder="phone number" name='mobile_number' required />
            <input onChange={reg} type="text" placeholder="Place" name='place' required/>
           
            <input onChange={reg} type="text" placeholder="Post" name='post' required />
            <input onChange={reg} type="number" placeholder="Pincode" name='pincode'required />
             <input onChange={reg} type="password" placeholder="password" name='password'required />
             <input  onChange={reg} type="city" placeholder="city" name='city' required/>

            <a>Forgot your password?</a>
            <button type="submit">Create Account</button>
        </form>
        <a id='sign' onClick={()=>navigate('/login')}>Login</a>
    </div>
    </center>  
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

                </div>
     
  )
}
