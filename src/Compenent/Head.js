import React from 'react'
import {Link} from 'react-router-dom'
import './head_style.css'
export default function Head() {
  return (
    <div className='head'>
      <Link to='/' className='lien' >CONTACT LIST</Link>
      <Link to='/ajouter' className='lien' >ADD CONTACT</Link>
    </div>
  )
}
