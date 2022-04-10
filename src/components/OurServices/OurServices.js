import React, { useRef } from 'react'
import ServicesBackground from "../../assets/images/OurServices-bg.jpg";
import ServicesImage1 from "../../assets/images/services1.jpg";
import LineScroll from "../../assets/images/Line.png";
import DUMMY_SERVICES from '../OurServices/OurServicesData';
const OurServices = () => {
    const ourServicesRef=useRef();
 
  return (
  <>
  <section id='services'>

   <div className='services-section'>

{DUMMY_SERVICES.map((services)=>(
<>
<img className='services-bg' src={services.bgImage}/>
{services.id=='services1' &&
<div className='services-title'>
    <h1>Our Services</h1>
    </div>
 }
<div className='services-container'>
    <div className='services-content'>

   

    <div className='services-image'>
        <img src={services.serviceImage}/>
    </div>
    <div style={{'color':`${services.textColor}`}} className='services-text'>
        <h2>{services.text} </h2>
    </div>
    
    
     </div>

     <div className='services-right'>
 <div className='scroll-image'>
     <img src={services.imageLine}/>
 </div>
 <div className='scroll-title'>
     <h1>{services.title}</h1>
     <h2>Learn More</h2>
 </div>
         
         
         </div>

</div>
</>
))}











   </div>















   
  </section>
  </>
  )
}

export default OurServices







