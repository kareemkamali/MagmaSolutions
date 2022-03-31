import React from 'react';
import bakcgroundImage from "../../assets/images/contact-section-bkg.png"
import Card from '../../shared/UiElement/Card';
import PaperImage from '../../assets/images/PaperPlane.png';
import contactImage from '../../assets/images/contactimage.png';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import Spins from '../../shared/UiElement/Spins';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
const ContactUs = () => {

const inputHandler=()=>{}

  return (
<>
<section id='contact-us'>
    <div className='contact-section'>
        <img src={bakcgroundImage}></img>
       <div className='contact-form'>
        <h1>Are You Ready To Grow?</h1>
    <Card>
    <div className='form-container-contact'> 
      <Spins/>
<div className='form-content'>
  <div className='form-title'>
    <img src={PaperImage}/>
    <h1>Contact Us</h1>
  </div>
  <Input
 element="input"
 id="name"
 type="text"
 label="Name"
 validators={[VALIDATOR_REQUIRE()]}
 errorText="Please enter a name."
 onInput={inputHandler}
 placeholder='Enter Your Full Name'
 />
 <Input
 element="input"
 id="email"
 type="email"
 label="Email"
 validators={[VALIDATOR_EMAIL()]}
 errorText="Please enter a valid email address."
 onInput={inputHandler}
 placeholder='Enter Your Email'
 />
 <Input
 id="message"
 element="textarea"
 label="Your Message"
 validators={[VALIDATOR_MINLENGTH(5)]}
 errorText="Please enter a valid description (at least 5 characters)."
 onInput={inputHandler}
 placeholder='Enter Your Message'
 />




</div>
     
<div className='btn-contactUs'> 
 <Button size='medium' to='/'>Send Message</Button></div>
 <Spins/>



</div>


    </Card>
 
       </div>
        
        <div className='contact-image'>
          <img src={contactImage} alt='contact-image'/>
        </div>
        
         </div>
       
       
</section>
</>
  )
}

export default ContactUs






































































// <Card  >
// <div className='form-container-contact'>  
//   <Spins/>
//   <div className='form-contact-title'>
//     <div className='paper-image'>
//       <img src={PaperImage}></img>
//     </div>
//     <h1>Contact Us</h1>
//   </div>
//   <Input
// element="input"
// id="name"
// type="text"
// label="Name"
// validators={[VALIDATOR_REQUIRE()]}
// errorText="Please enter a name."
// onInput={inputHandler}
// placeholder='Enter Your Full Name'
// />
// <Input
// element="input"
// id="email"
// type="email"
// label="Email"
// validators={[VALIDATOR_EMAIL()]}
// errorText="Please enter a valid email address."
// onInput={inputHandler}
// placeholder='Enter Your Email'
// />
// <Input
// id="message"
// element="textarea"
// label="Your Message"
// validators={[VALIDATOR_MINLENGTH(5)]}
// errorText="Please enter a valid description (at least 5 characters)."
// onInput={inputHandler}
// placeholder='Enter Your Message'
// />
// <div className='btn-contactUs'> 
// <Button size='medium' to='/'>Send Message</Button></div>
// <Spins/>
//   </div>

// </Card>







