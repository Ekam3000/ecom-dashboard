import React from 'react';
import {Link} from 'react-router-dom'

const Footer = ()=> {
    return(
        <div className='footer'>
            <h3>Ecomm Dashboard Footer</h3>
            <p>Made With <span style={{color:'red', fontSize:'larger'}}>&#9829;</span> By <Link to="https://www.linkedin.com/in/ekam-8a4310216/">Ekam</Link></p>
        </div>
    )
}

export default Footer;