import React from 'react'
import './possibility.css';
import  possibility  from '../../assest/possibility.png';


const Possibility = () => {
  return (
    <div className='gpt3__Possibility section__padding'id='Possibility'>
      <div className='gpt3__Possibility-img'>
        <img className='pic' src={possibility} alt="possibility" />
      </div>
      <div className='gpt3__Possibility-content'>
        <h4 className='content1'>Request Early Access to Get Started</h4>
        <h1 className='gragradient-text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 className='content2'>Request Early Access to Get Started</h4>

      </div>
    </div>
  )
}

export default Possibility