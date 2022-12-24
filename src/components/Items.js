import { color } from '@mui/system'
import React from 'react'
import { Navigate,useNavigate} from 'react-router-dom'
import './items.css'


export default function Items({data,ecut}) {
    console.log(data)
    const Navigate=useNavigate()

  return (
    <div>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h2>Featured <b>Products</b></h2>
            <div class="row">
                {data&&data?.map(fdata=>(
                <div class="col-sm-4" id='iii'>
							<div class="thumb-wrapper">
								
								<div class="img-box" id='nnnn'  onClick={()=>Navigate(`./single/${fdata.id}`)}>
									<img id='img22' class="img-responsive fixed" src={fdata.image} alt=""/>	
									<h4 style={{color:'black'}}>{fdata.title.slice(0,20)}</h4>									
									
																
								</div>
								<div class="thumb-content">
								<p  style={{color:'black'}} class="item-price"> {fdata.price}$</p>	
									
									{/* <a id='bbtn' href="#" class="" style={{backgroundColor:'green',border:'none',height:'30px'}}>Buy Now</a><a id='add'  href="#"  style={{backgroundColor:'green',border:'none'}}>Add to Cart</a> */}
									<button id='buy' style={{backgroundColor:'#50577A',border:'0', borderRight:'2px solid black',height:'30px' ,color:'white'}}  >Buy now</button><button  onClick={()=>ecut(fdata)}  style={{backgroundColor:'#50577A',border:'none',height:'30px',color:'white'}}>Add to cart</button>
								</div>						
							</div>
						</div>
                          ))}
						
						
					</div>
				</div>
			</div>
			</div>
			
			
			
		
				
		</div>

        
    
  )
}
