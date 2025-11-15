import React from 'react'
import { Bookmark } from 'lucide-react';

const Cards = (props) => {
  return (
    <>
    <div className="parent">
    <div className='card'>
        <div className="top">
            <img src={props.img} alt={props.company} />
            <button>Save <Bookmark  size={12} /></button>
        </div>
       
        <div className="center">
             <h3>{props.company}<span>{props.timeline}</span></h3>
             <h2>{props.role} </h2>
             <div className='tag'>
                <h4>{props.job_type}</h4>
                <h4>{props.level}</h4>
             </div>    
        </div>
        <div className="bottom">
            <div className='price'>
                <h3>{props.amount}</h3>
                <p>{props.location}</p>
            </div>
        <button className='apply'>Apply</button>
    </div>
    </div>
</div>

    </>
  )
}

export default Cards
