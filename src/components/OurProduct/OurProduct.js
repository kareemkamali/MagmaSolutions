import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductImageBackground from "../../assets/images/product-bg.png";
import DUMMY_PRODUCT from './ProductData';
import ScrollContainer from 'react-indiana-drag-scroll'
const OurProduct = () => {
const productContainerRef=useRef();
const wrapperContainerRef=useRef();
 let pressed;
 let left='0px';
 let startx;
 let x;


const MouseDown=(e)=>{
  pressed=true;
startx=e.target.offsetLeft - productContainerRef.current.offsetLeft;

//make cursor grapping

}
const MouseUp=()=>{
  pressed=false;
//make curror grap

}
 
  const MouseEnter=(e)=>{
//     setClick(true);
// console.log(Click);
  }

  const MouseMove=(e)=>{
if(pressed)
return;
  e.preventDefault();
  x=e.clientX;
  left=`${x - startx}px`;
  // console.log(x);
  // console.log(startx);
  console.log(left);


  }



  return (
   
   <>
     <div className='our-product'>
{/* product bg */}
        <img className='product-background' src={ProductImageBackground} alt="product-bkg"></img>
            
              <div className='product-title'>
                 <h1 data-aos="fade-left">Our Products</h1>
                    <Link to='/products'>
                             <h2 data-aos="fade-right">View More...</h2>
                                                   </Link>
  </div>
  
  <ScrollContainer  
  className='product-containe-wrapper'>

 
    <div
    ref={productContainerRef}
    style={{'left':`${left}`}}
    className='product-container'>

{DUMMY_PRODUCT.map((product,index)=>(

    <div  key={product.id} id={product.id} className='product-content'>
     

    {index%2==0?  
    <div  className='product-image'>
       <img data-aos="fade-up"  src={product.image} alt="product"/>
    </div>: <div  className='product-image'>
       <img data-aos="fade-down"  src={product.image} alt="product"/>
    </div> }
    <h1>{product.text}</h1>
        </div>

))}


</div>
</ScrollContainer>


{/* dashed line at bottom section */}

<div className='bottom-border'></div>


    </div>

   </>
  )
  
}

export default OurProduct