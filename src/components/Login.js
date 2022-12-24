import React, { useState,useEffect, useContext } from 'react'
import './login.css'
import { Navigate,useNavigate} from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { personcontext } from '../context/Personcontext';

export default function () {
//    const  {setperson,person}=useContext(personcontext)

   
    const navigate=useNavigate()
    const [logdata, setlogdata] = useState()
   


    const logg=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const{name,value}=e.target

        setlogdata({
            ...logdata,
            [name]:value

        })
        console.log("gfs==>",logdata)
    
    }
      const loginform=(event)=>{
        // if(logdata.username==patternmail)
        // {
          
        // }
        // else{
        //   document.getElementById("sol").innerHTML="invalid"
        // }

        event.preventDefault()
        axios.post("https://maitexa.in/water-delivery-api/api/login",logdata)
        .then(respp=>{
            console.log(respp.data)
            if(respp.data.success==1){
            
            toast(respp.data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                localStorage.setItem("ids",JSON.stringify(respp.data.loginid))
                  navigate("/")
            }

            else{
                toast(respp.data.message, {
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
          
               
              
              

         


            
        }




            
            )
        


      }

    


  return (
    <div>
        <center>
    
    
            <div className="login-card">
                <p div='hMt'>Login</p>
                <form className="login-form"  onSubmit={loginform}>
                    <input onChange={logg} type="text" placeholder="Username" name='username'  />
                    <p  style={{color:'red'}} id='sol'></p>
                    <input onChange={logg} type="password" placeholder="Password" name='password' />
                    <a>Forgot your password?</a>
                    <button type="submit">LOGIN</button>
                </form>
                <a id='sign' onClick={()=>navigate('/reg')}>not have a account| Register...</a>
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
