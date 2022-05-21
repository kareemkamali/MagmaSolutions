import React from 'react'
import OurTeambackground from "../../assets/images/OurTeam-background.png";
import person1 from "../../assets/images/person1team.png";
import LineImage from "../../assets/images/our-teamLine.png";

const OurTeam = () => {





  return (
    <>
      <section id='our-team-section'>
        <div className='team-section'>

          <img className='team-background' src={OurTeambackground} alt='OurTeam' />
          <div data-aos='opacity-animation'
            data-aos-delay='2000'
          className='team-title'>
            <h1>Our Team</h1>
          </div>
          <div className='team-container'>
            {/* i will maked them into array of Lists */}
            <div data-aos="flip-left" className='team-content'>
              <img src={person1} className='team-person-image' alt='website developer'></img>
              <h1>Taha Abdallah</h1>
              <h2>Web Developper</h2>

            </div>
            <img className='line-team' alt='line' src={LineImage} />


            <div data-aos='flip-right' className='team-content'>
              <img src={person1} className='team-person-image' alt='mobile developer'></img>
              <h1>Karim Kamali</h1>
              <h2>Web Developer</h2>

            </div>
            <img className='line-team' src={LineImage} alt='line' />
            <div data-aos='flip-left' className='team-content'>
              <img src={person1} className='team-person-image' alt='ceo developer'></img>
              <h1>Azzam Baitiye</h1>
              <h2>Management</h2>

            </div>
            
          </div>

        </div>

      </section>
    </>
  )
}

export default OurTeam