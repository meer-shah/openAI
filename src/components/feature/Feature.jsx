import React from 'react'
import'./Feature.css';
// we will use this functional component in containers 
const Feature = ({title , text}) => {
  return (
    <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div/>
      {/* yeh div as a line kam kry ga */}
      <h1>{title}</h1>
    </div>

    <div className="gpt3__features-container__feature-text">
      <p>{text}</p>
    </div>
  </div>
  );
};

export default Feature