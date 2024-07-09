import React from 'react'
import img3 from '../assets/images/feature2.png'
import img2 from '../assets/images/feature1.png'
import img1 from '../assets/images/feature3.png'
const Features = () => {
  return (
    <div id='features-section'>
        <div className="container">
            <div>
                <img src={img1} alt="" />
                <h3>Certificate</h3>
                <p>Certificate of Authenticity Available</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <h3>Secure</h3>
                <p>Certificate of Authenticity Available Since 2024</p>
            </div>
            <div>
                <img src={img3} alt="" />
                <h3>Shipping</h3>
                <p>Prompt, Dependable Service Across the Nation</p>
            </div>
            <div>
                <img src={img1} alt="" />
                <h3>Trustworthy</h3>
                <p>Prompt, Dependable Service Across the Nation</p>
            </div>
        </div>
    </div>
  )
}

export default Features