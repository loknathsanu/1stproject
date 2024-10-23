import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gp3__whatgpt3 section__margin' id='Whatisgp3'>
      <div className='gp3__whatgpt3-features'>
        <Feature grid={true} title='What is gpt3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div> 
      <div className='gp3__whatgpt3-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature coulmn={true} title='Chatbots'text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
        <Feature coulmn={true} title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        <Feature coulmn={true} title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
      </div>
      
     
      
    </div>
  )
}

export default WhatGPT3