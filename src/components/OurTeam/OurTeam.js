import React from 'react'
import OurTeambackground from "../../assets/images/OurTeam-background.jpg";
import person1 from "../../assets/images/person1team.png";
import LineImage from "../../assets/images/our-teamLine.png";

const OurTeam = () => {
console.log(
  'run'
)




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
            <div  data-aos='team-animation' className='team-content'>
              <img src={person1} className='team-person-image'></img>
              <h1>Web Developer</h1>
              <h2>Lorem ipsum helo world what ever how is potato ya hala overpro</h2>

            </div>
            <img className='line-team' src={LineImage} />


            <div data-aos='team-animation' className='team-content'>
              <img src={person1} className='team-person-image'></img>
              <h1>Mobile Developer</h1>
              <h2>Lorem ipsum helo world wha sds sd sd s asas as sds st ever how is potato ya hala overpro</h2>

            </div>
            <img className='line-team' src={LineImage} />
            <div data-aos='team-animation' className='team-content'>
              <img src={person1} className='team-person-image'></img>
              <h1>CEO</h1>
              <h2>Lorem ipsum helo world what ever how is potato ya hala overpro</h2>

            </div>
            
          </div>

        </div>

      </section>
    </>
  )
}

export default OurTeam