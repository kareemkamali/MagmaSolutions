import ServicesImage1 from '../../assets/images/services1.png';
import ServicesImage2 from '../../assets/images/servicespic2.png';
import ServicesImage3 from '../../assets/images/servicespic3.png';
import Servicebg1 from '../../assets/images/OurServices-bg.jpg';
import Servicebg2 from '../../assets/images/servicesBg2.jpg';

import Servicebg1m from '../../assets/images/MobileImages/Services1Bg.png';
import Servicebg2m from '../../assets/images/MobileImages/services2Bg.png';
import Servicebg3m from '../../assets/images/MobileImages/Services3Bg.png';







import Line1 from '../../assets/images/Line.png';

import Line2 from '../../assets/images/Line2.png';
import Line3 from '../../assets/images/Line3.png';
const DUMMY_SERVICES=[

    {
        id:'Development',
        bgImage:Servicebg1,
        bgImageMobile: Servicebg1m,
        serviceImage:ServicesImage1,

        imageLine:Line1,
        textColor:'#683385',
        title:'Development',
        text:'Magma Solutions Provides all needed services and support to create your own Websites or build your online solutions .'
    },
    {
        id:'Design',
        bgImage:Servicebg2,
        bgImageMobile: Servicebg2m,
        serviceImage:ServicesImage2,
        textColor:'#fff',
        title:'Design',
        imageLine:Line2,
        text:'Welcome to design Department , Magma Solutions Provides all Kinds of Design .  And we have a specialized Designers Team working on convert your idea to amazing reality .'
        
    },
    {
        id:'Marketing',
        bgImage:Servicebg1,
        bgImageMobile: Servicebg3m,
        serviceImage:ServicesImage3,
        textColor:'#683385',
        title:'Digital Marketing',
        imageLine:Line3,
        text:'it’s not just what we do but how we do it, and putting the social in Digital Marketing is a large part of how we do it exactly. Magma Solutions is a Digital marketing company in Lebanon with a vast experience in Marketing and an extensive knowledge in creatively designing and implementing effective digital marketing plans for businesses in the Lebanese and MENA market.'
        
    },

  

]
export default DUMMY_SERVICES;