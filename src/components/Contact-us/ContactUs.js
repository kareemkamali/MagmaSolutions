import React, { useRef } from 'react';
import bakcgroundImage from "../../assets/images/contact-section-bkg.png";
//2e2lob background 
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
import { useForm } from '../../shared/hooks/form-hook';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form=useRef();

  const name='name';
 const [formState, inputHandler] = useForm(
  {
    name: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    message: {
      value: '',
      isValid: false
    },
  },
  false
);


const sendContactHandler=event=>{
  event.preventDefault();
  try { 



    console.log(form);
    const formData = new FormData();

    formData.append('name',formState.inputs.name.value);
    formData.append('email',formState.inputs.email.value);
    formData.append('message',formState.inputs.message.value);
    console.log(formState.inputs.name.value);
    // console.log(form.current)
    emailjs.sendForm('service_f75ji1l','template_80gzk0e',form.current,'_97coDA-w4izN2cjt');
  
  } 
  catch (err) {
 
    console.log(err)
  }

}
  

  return (
    <>
      <section id='contact-us'>
        <div className='contact-section'>

          <img className='contact-background' src={bakcgroundImage}></img>
          {/* container contain all width of section with padding */}
          <div className='contact-container'>

            {/* form */}
            <div className='contact-form'>
              <h1 data-aos="fade-down" >Are You Ready To Grow?</h1>
              {/* Card of white bg */}
              <Card  dataaos="fade-up">




                <div className='form-container-contact'>
                  {/* spins the circle at corner form */}
                  <Spins />



                  <form  ref={form} onSubmit={sendContactHandler}>  
                  <div className='form-content'>
                    <div className='form-title'>
                      <img src={PaperImage} />
                      <h1>Contact Us</h1>
                    </div>

                    {/* input components for each type and label
  the validator for check if entered in the typle is correctly
  */}

                    <Input
                      element="input"
                      id="name"
                      type="text"
                      label="Name"
                      validators={[VALIDATOR_REQUIRE()]}
                      errorText="Please enter a name."
                      onInput={inputHandler}
                      placeholder='Enter Your Full Name'
                      name='name'
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
                      name='email'
                    />
                    <Input
                      id="message"
                      element="textarea"
                      label="Your Message"
                      validators={[VALIDATOR_MINLENGTH(5)]}
                      errorText="Please enter a valid description (at least 5 characters)."
                      onInput={inputHandler}
                      placeholder='Enter Your Message'
                      name='message'
                    />




                  </div>   
                  <div className='btn-contactUs'>
                    <Button type='submit' size='medium' >Send Message</Button></div>
                  </form>
               
                  <Spins />

                

                </div>
          


              </Card>

            </div>
            {/* Image right container */}
            <div data-aos="zoom-in" className='contact-image'>
              <img src={contactImage} alt='contact-image' />
            </div>

          </div>




        </div>


      </section>
    </>
  )
}

export default ContactUs