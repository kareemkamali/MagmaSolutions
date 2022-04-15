import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductImageBackground from "../../assets/images/product-bg.jpg";
import DUMMY_PRODUCT from './ProductData';

const OurProduct = () => {

    const ourProduct=useRef();

  return (
   
   <>
     <div className='our-product'>
{/* product bg */}
        <img className='product-background' src={ProductImageBackground} alt="product-bkg"></img>
            
              <div className='product-title'>
                 <h1>Our Products</h1>
                    <Link to='/products'>
                             <h2>View More...</h2>
                                                   </Link>
  </div>
  
  <div className='product-containe-wrapper'>

 
    <div ref={ourProduct}  className='product-container'>

{DUMMY_PRODUCT.map(product=>(
    
    <div key={product.id} id={product.id} className='product-content'>
    <div className='product-image'>
        <img src={product.image} alt="product"/>
    </div>
    <h1>{product.text}</h1>
        </div>

))}


</div>
</div>


{/* dashed line at bottom section */}

<div className='bottom-border'></div>


    </div>

   </>
  )
  
}

export default OurProduct