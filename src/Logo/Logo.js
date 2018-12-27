import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

class Logo extends Component {
    
    render () {
        return (
            <div className='row'>
                <div className='col-12'>
                    <Tilt className="Tilt" options={{ max : 30 }}>
                        <div className="Tilt-inner"><img id='logo-image' alt='logo' src='./images/brain.png'/></div>
                    </Tilt>
                </div>
            </div>
        );
    }
}

export default Logo;