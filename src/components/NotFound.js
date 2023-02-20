import React from 'react'
import {FaSadCry} from 'react-icons/fa'

function NotFound() {
  return (
    <div className="container text-center">
        <FaSadCry id='notFound'/>
        <h3>Oops!</h3>
        <p>Property Not Found. Please try again!</p>
    </div>
  )
}

export default NotFound