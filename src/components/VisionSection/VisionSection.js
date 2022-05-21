import React from 'react';
import VisionImage from "../../assets/images/vision-section-pic.png";
import VisionBackground from "../../assets/images/vision-section-bg.jpg";
import VisionBackgroundMobile from "../../assets/images/MobileImages/VisionBgMobile.png";
import ArrouwImage from "../../assets/images/vision-section-arrow.png";

const VisionSection = () => {
  return (
    <>
      <section id='vision'>
        <div className='vision-section'>

          {/* change Bg for mobile */}
          <img className='vision-image' src={VisionBackground} alt="vision-bkg"></img>
          <img className='vision-image-m' src={VisionBackgroundMobile} alt="vision-bkg"></img>

          <div className='vision-title'>
            <h1>Magma Solutions</h1>
            <h2  data-aos="fade-up">We Take Your business To Digital World</h2>
          </div>
                      {/* container has text and images */}
          <div className='vision-container'>
            <div data-aos="fade-right" className='vision-text'>
              <h1>
              Magma Solutions  is a development , social media management , digital marketing , designing , and planning agency . That specializes in providing high-end innovation technology solution .
              </h1>
            </div>
            <div data-aos="fade-left"  data-aos-duration="2000" className='image-right-vision'>
              <img data-aos="shadow-animation" data-aos-delay="1000"  src={VisionImage} alt='vision' />
            </div>
          </div>

          <div className='arrow-services'>
            <h1>Our Services</h1>
            <img className='arrow-image' src={ArrouwImage} />
          </div>
        </div>
      </section>
    </>
  )
}

export default VisionSection