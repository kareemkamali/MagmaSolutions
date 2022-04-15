import React from 'react';
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
const ContactUs = () => {

  const inputHandler = () => { }

  return (
    <>
      <section id='contact-us'>
        <div className='contact-section'>

          <img className='contact-background' src={bakcgroundImage}></img>
          {/* container contain all width of section with padding */}
          <div className='contact-container'>

            {/* form */}
            <div className='contact-form'>
              <h1>Are You Ready To Grow?</h1>
              {/* Card of white bg */}
              <Card>
                <div className='form-container-contact'>
                  {/* spins the circle at corner form */}
                  <Spins />
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
                  <Spins />



                </div>


              </Card>

            </div>
            {/* Image right container */}
            <div className='contact-image'>
              <img src={contactImage} alt='contact-image' />
            </div>

          </div>




        </div>


      </section>
    </>
  )
}

export default ContactUs