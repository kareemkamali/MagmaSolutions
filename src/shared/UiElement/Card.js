import React from 'react';



const Card = props => {
  return (
    <div className={`card ${props.className}`} data-aos={props.dataaos} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
