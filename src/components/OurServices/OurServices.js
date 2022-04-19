import React from 'react'
import DUMMY_SERVICES from '../OurServices/OurServicesData';
import { Link } from 'react-router-dom';
import ServicesList from './ServicesList';

const OurServices = () => {

 
  return (
  <>
  <section id='services'>

   <div className='services-section'>
{/* dummy array with map to fetch all details of each services  */}
{DUMMY_SERVICES.map((services)=>(

(<React.Fragment key={services.id}>
{/* change background for Mobiles */}
<ServicesList

id={services.id}
serviceImage={services.serviceImage}
textColor={services.textColor}
text={services.text}
imageLine={services.imageLine}
bgImage={services.bgImage}
title={services.title}
bgImageMobile={services.bgImageMobile}
>

</ServicesList>
</React.Fragment>
)

))}











   </div>















   
  </section>
  </>
  )
}

export default OurServices







