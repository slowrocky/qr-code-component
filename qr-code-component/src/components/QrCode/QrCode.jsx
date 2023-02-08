import React from 'react'
import './QrCode.scss';
import QRCodeImage from '../../images/image-qr-code.png';

const QrCode = () => {
  return (
    <div className='qrCode'>
      <div className="container">
        <img src={QRCodeImage} alt="image-qr-code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QrCode