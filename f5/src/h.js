import React from 'react'
import {Link} from "react-router-dom"
import "./h.css"
const H = () => {
  return (
    <div className='s'>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/pictures">Pictures</Link>
    </div>
  )
}

export default H
