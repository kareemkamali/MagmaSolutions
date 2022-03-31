import React from 'react';
import VisionImage from "../../assets/images/vision-section-pic.png";
import VisionBackground from "../../assets/images/vision-section-bg.jpg";
import ArrouwImage from "../../assets/images/vision-section-arrow.png"
const VisionSection = () => {
  return (
 <>
 <section id='vision'>
        <div className='vision-section'> 
     <img src={VisionBackground} alt="vision-bkg"></img>
      <div className='vision-container'>
              <div className='vision-title'>
                <h1>MAGMA SOLUTIONS</h1>
                <h2>We Take Your business To Digital World</h2>
              </div>
              <div className='vision-content'>
                <div className='vision-text'> 
                <h2>Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegng. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum.. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns.</h2>
                </div>
               
                <img src={VisionImage} alt='vision'/>
              </div>
              <div className='arrow-services'>
              <h1>Our Services</h1>
              <img src={ArrouwImage}/>
              </div>
      
      </div>

     </div>
  
     

 </section>
 </>
  )
}

export default VisionSection