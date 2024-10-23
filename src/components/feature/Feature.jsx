import React from 'react';
import './feature.css';

const Feature = ({ title, text,coulmn,grid}) => (
   <div className={`${grid ? 'gpt3__grid':'gpt3__features-container__feature '} ${coulmn ? 'gpt3__features-column' : ''}`}>
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  
);
export default Feature;