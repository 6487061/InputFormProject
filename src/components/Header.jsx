import React from 'react'
import PDF from '../assets/img/PDF.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='left'>
            <h2>Hi, Esher Howard</h2>
            <h1 id='one'>Simplifying</h1>
            <h1 id='two'>Document Management</h1>
            <h1 id='tree'>for You!</h1>
            <h3>Step into ICTPaperTrall for an elegant blend of security, ease of use, 24/7 accessibility, and real-time update!</h3>
        </div>
        <div className='right'>
            <img src={PDF} alt='header-img'/>
        </div>
    </div>
  )
}

export default Header
