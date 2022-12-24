import { height } from '@mui/system';
import React from 'react'
import './cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{Delete} from '@mui/icons-material/';
export default function Cart({storage,erase}) {
    console.log("ssttt",storage)

    const totalScores = storage.reduce(
      (previousScore,currentScore)=>previousScore+currentScore?.price,0);
      console.log("nnn===>",totalScores);
  return (
    <div>
        
        <div class="container">
	<div class="row">
		<div class="col-md-12">
			<div><p id='cv' >Your Cart</p></div>
      <center>
            <div class="row">
                {storage.map(ccat=>(
                <div class="col-sm-4"  >
							<div class="thumb-wrapper">
								
								<div class="img-box" id='nnnn'>
									<img id='img22' class="img-responsive fixed" src={ccat?.image} alt=""/>	
									<h4 style={{color:'black'}}>{ccat?.title.slice(0,20)}</h4>									
									
																
								</div>
								<div class="thumb-content">
								<p  style={{color:'black'}} class="item-price"> {ccat?.price}$</p>	
									
									<a id='bbtn' href="#" class="btn btn-primary">Buy Now</a><a  onClick={()=>erase(ccat?.id)}  href="#" class="btn"><Delete/> </a>
								</div>						
							</div>
						</div>
                          ))}
						
						
					</div>
          </center>
				</div>
			</div>
			</div>
      <div>
        <h4 style={{color:'black '}}>
          Total: ${Math.floor(totalScores)} only...
        </h4>
      </div>

			
		

    </div>
  )
}
