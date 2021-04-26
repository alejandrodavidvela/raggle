import React from 'react';
import logo from '../images/raggle_image.png'; // Tell webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return (
    <div className='RaggleImage'>
    <img src={logo} alt="Logo" />
    </div>
    )
}

export default Header;