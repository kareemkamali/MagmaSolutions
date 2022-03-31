import React, { useRef } from 'react'
import ServicesBackground from "../../assets/images/OurServices-bg.jpg";
import ServicesImage1 from "../../assets/images/services1.jpg";
import LineScroll from "../../assets/images/Line.png";
import DUMMY_SERVICES from '../OurServices/OurServicesData';
const OurServices = () => {
    const ourServicesRef=useRef();
    console.log('sd');
    const mouseover=(e)=>{
        console.log(ourServicesRef.current.contains(e.target));
    }
  return (
  <>
  <section id='services'>
      <div className='services-section'>
      {DUMMY_SERVICES.map(services=>(
<> 
        
      <img src={services.bgImage}/>
           <div className='services-title'>
          <h1>Our Services</h1>
          </div>


     
    <div className='services-container'>
    <div className='services-image'>
        <img src={services.serviceImage}/>
        <h2 style={{'color':services.textColor}}>{services.text}</h2>
  
    </div>
  
    <div className='services-container-right'>
        <img src={services.imageLine}></img></div>
        <div className='services-container-right-title'>
        <h1>{services.title}</h1>
        <h2>Learn More</h2>
        </div>
       
       
    
    
</div> 
</>

)
)


}

      
         
      </div>
  </section>
  </>
  )
}

export default OurServices