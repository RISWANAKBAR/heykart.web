
import React from 'react'
import './profile.css'
import  { useState,useEffect } from 'react'
import axios from "axios";
import { personcontext } from '../context/Personcontext';
import { useContext } from 'react';

export default function () {
   
    const [bus, setbus] = useState()
     const variabl=localStorage.getItem("ids")
    console.log("ede===>",variabl)
    useEffect(() => {
        
        axios.get(`https://maitexa.in/water-delivery-api/api/get-customer-info/${variabl}`)
        .then(resp=>{console.log(" ccc===>",resp)
        setbus(resp.data.customer_info)
    })
     }, [])
     console.log("bus===>",bus)
    


    return (
        <div>
            <center>
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 class="f-w-600">{bus?.name}</h6>
                                            <h6 class="f-w-600">{bus?.email}</h6>
                                           
                                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Profile</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">{bus?.email}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                    <h6 class="text-muted f-w-400">{bus?.mobile_number}</h6>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Place</p>
                                                    <h6 class="text-muted f-w-400">{bus?.place}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">City</p>
                                                    <h6 class="text-muted f-w-400">{bus?.city}</h6>
                                                </div>
                                                <center>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Address</p>
                                                    <h6 class="text-muted f-w-400">{bus?.place}  PO:{bus?.post} {bus?.city} {bus?.pincode}</h6>
                                                </div>
                                                </center>
                                            </div>
                                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </center>
        </div>
    )
}
