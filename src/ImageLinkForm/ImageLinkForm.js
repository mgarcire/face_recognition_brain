import React, { Component } from 'react';
import './ImageLinkForm.css'

class ImageLinkForm extends Component {
    
    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='tc'>This <i>Magic Brain</i> will detect face in your pictures. Give it a try 👽</p>
                    </div>
                    <div className='form tc pa3 br3'>
                        <input id='input-url' type='text'/>
                        <button type='button' id='detect-button' className='btn'>Detect</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageLinkForm;