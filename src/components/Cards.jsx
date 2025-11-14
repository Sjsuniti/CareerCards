import React from 'react'
import { Bookmark } from 'lucide-react';

const Cards = (props) => {
  return (
    <>
    <div className="parent">
    <div className='card'>
        <div className="top">
            <img src={props.img}></img>
            <button>Save <Bookmark  size={12} /></button>
        </div>
       
        <div className="center">
             <h3>{props.company} Amazon<span>{props.timeline}2days ago</span></h3>
             <h2>{props.role} Graphic Designer</h2>
             <div className='tag'>
                <h4>{props.job_type}Full-time</h4>
                <h4>{props.level}Senior-Level</h4>
             </div>    
        </div>
        <div className="bottom">
            <div className='price'>
                <h3>{props.amount}$120/hr</h3>
                <p>{props.location}Kolkata, India</p>
            </div>
        <button className='apply'>Apply Now</button>
    </div>
    </div>
</div>

    </>
  )
}

export default Cards
