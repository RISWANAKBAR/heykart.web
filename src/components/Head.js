import React from 'react'
import './head.css'

export default function Head() {
  return (
    <div >
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
 
  
    <div class="carousel-item active">
    <img className='d-block w-100' id='imm'  />
    <div class="carousel-caption d-none d-md-block">
    <h5 id='bg'>hEYkaRt</h5>
    <p id='bg1'>Shop with us and make your own style</p>
  </div>
    </div>
    <div class="carousel-item">
      <img className='d-block w-100'  id='imm1'  />
      <div class="carousel-caption d-none d-md-block">
    <h5 id='bg'>hEYkaRt</h5>
    <p id='bg1'> Shop with us and make ur own style</p>
  </div>
    </div>
    <div class="carousel-item">
      <img className='d-block w-100'  id='imm2'/>
      <div class="carousel-caption d-none d-md-block">
    <h5 id='bg'> hEYkaRt</h5>
    <p id='bg1'>Shop with us and make ur own style</p>
  </div>
      </div>
   
 
  </div>
 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



         </div>
  )
}

