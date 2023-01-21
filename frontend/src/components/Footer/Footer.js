import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <div className='footer' style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className='footer-left' style={{ width: 300, paddingTop: 30 }}>
        <h3>ABOUT THE HEXA TEMPLATE</h3>
        <p style={{ color: "#ffffff80" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
      </div>
      <div className='footer-middle' style={{ paddingTop: 30 }}>
        <h3>Contact Info</h3>
        <ul>
          <li>
            <h4 style={{ color: "#ffffff80" }}>Address:</h4>
            <p style={{ color: "white" }}>34 Street Name, City Name Here, United States</p>
          </li>
          <li>
            <h4 style={{ color: "#ffffff80" }}>Address:</h4>
            <p style={{ color: "white" }}>34 Street Name, City Name Here, United States</p>
          </li>
          <li>
            <h4 style={{ color: "#ffffff80" }}>Address:</h4>
            <p style={{ color: "white" }}>34 Street Name, City Name Here, United States</p>
          </li>
        </ul>
      </div>
      <div className='footer-right' style={{ paddingTop: 30 }}>
        <h3>Quick Links</h3>
        <ul>
          <li>About</li>
          <li>Terms of Use</li>
          <li>Disclaimers</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

