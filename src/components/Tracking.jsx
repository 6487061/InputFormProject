import React from 'react'
import Accept from '../assets/accept.png'
import { FaFile } from "react-icons/fa6";

const Tracking = () => {
  return (
    <div className='Tracking'>
        <div className='box'>
            <div className='sub-box'>
                <h3>General Request Form</h3>
                <h3>Mar 24th 2024</h3>
            </div>
            <div id='Recent'>
                <div className='sub-item'>
                    <div className='line'></div>
                    <div className='item'>
                        <div id='item-circle1' className='item-circle'>
                            <FaFile id='item-circle'/>
                            <img src={Accept}/>
                        </div>
                        <h3>Request</h3>
                    </div>
                    <div className='item'>
                        <div className='item-circle'></div>
                        <h3>Panding</h3>
                    </div>
                    <div className='item'>
                        <div className='item-circle'></div>
                        <h3>Approve</h3>
                    </div>
                    <div className='item'>
                        <div className='item-circle'></div>
                        <h3>Success</h3>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Tracking
