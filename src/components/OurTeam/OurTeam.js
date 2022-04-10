import React from 'react'
import OurTeambackground from "../../assets/images/OurTeam-background.jpg";
import person1 from "../../assets/images/person1team.png";
import LineImage from "../../assets/images/our-teamLine.png";

const OurTeam = () => {
  return (
 <>
 <section id='our-team-section'>
     <div className='team-section'>

         <img className='team-background' src={OurTeambackground} alt='OurTeam'/>
         <div className='team-title'>
       <h1>Our Team</h1>
       </div>
         <div className='team-container'>
         
  <div className='team-content'>
    <img src={person1} className='team-person-image'></img>
    <h1>Web Developer</h1>
    <h2>Lorem ipsum helo world what ever how is potato ya hala overpro</h2>

     </div>
     <img className='line-team' src={LineImage}/>


     <div className='team-content'>
    <img src={person1} className='team-person-image'></img>
    <h1>Web Developer</h1>
    <h2>Lorem ipsum helo world what ever how is potato ya hala overpro</h2>

     </div>
     <img className='line-team' src={LineImage}/>
     <div className='team-content'>
    <img src={person1} className='team-person-image'></img>
    <h1>Web Developer</h1>
    <h2>Lorem ipsum helo world what ever how is potato ya hala overpro</h2>

     </div>
  










         </div>
    
     </div>
   
 </section>
 </>
  )
}

export default OurTeam