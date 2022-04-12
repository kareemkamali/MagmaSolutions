import React from 'react';
import VisionImage from "../../assets/images/vision-section-pic.png";
import VisionBackground from "../../assets/images/vision-section-bg.jpg";
import VisionBackgroundMobile from "../../assets/images/MobileImages/VisionBgMobile.png";
import ArrouwImage from "../../assets/images/vision-section-arrow.png"
const VisionSection = () => {
  return (
 <>
 <section id='vision'>
        <div className='vision-section'> 
     <img className='vision-image' src={VisionBackground} alt="vision-bkg"></img>
     <img className='vision-image-m' src={VisionBackgroundMobile} alt="vision-bkg"></img>
    
          <div className='vision-title'>
                <h1>MAGMA SOLUTIONS</h1>
                <h2>We Take Your business To Digital World</h2>
                                       </div>
                                       
      <div className='vision-container'>
             
              
                <div className='vision-text'> 
                <h1>Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegng. Lörem ipsum vande sebel blandkostare koren dåns. Pande trena att adar, kadegt. Matnationalism åfaling</h1>
                </div>
               <div className='image-right-vision'>

            <img   src={VisionImage} alt='vision'/>
                </div>
             
      
      </div>
      
      <div className='arrow-services'>
              <h1>Our Services</h1>
              <img className='arrow-image' src={ArrouwImage}/>
              </div>
     </div>
  
     

 </section>
 </>
  )
}

export default VisionSection