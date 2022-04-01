import React from 'react'
import OurTeambackground from "../../assets/images/OurTeam-background.jpg";
import person1 from "../../assets/images/person1team.png";
import LineImage from "../../assets/images/our-teamLine.png";

const OurTeam = () => {
  return (
 <>
 <section id='our-team-section'>
     <div className='team-section'>
         <img classname='team-background'src={OurTeambackground} alt='OurTeam'/>
       <div className='team-title'>
       <h1>Our Team</h1>
       </div>
  <div className='team-content'>
      <div className='person-content'>
          <img src={person1}></img>
          
          <h1>CEO</h1>
          <h2>Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsumLoreum ipsumLoreum ipsum Loreum ipsumLoreum ipsum Loreum ipsum Loreum ipsum </h2>
      </div>
 
     <div className='person-content'>
          <img src={person1}></img>
          
          <h1>Mobile Developer</h1>
          <h2>Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsumLoreum ipsumLoreum ipsum Loreum ipsumLoreum ipsum Loreum ipsum Loreum ipsum </h2>
      </div>
     
      <div className='person-content'>
          <img src={person1}></img>
          
          <h1>Web Developer</h1>
          <h2>Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsumLoreum ipsumLoreum ipsum Loreum ipsumLoreum ipsum Loreum ipsum Loreum ipsum </h2>
      </div>
   
  </div>

     </div>
   
 </section>
 </>
  )
}

export default OurTeam