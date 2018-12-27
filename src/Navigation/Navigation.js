import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
      return (
        <div className='row'>
          <div className='col-12'>
            <p id='sign-out'>Log out</p>
          </div>
        </div>
      );
    }
  }
  
  export default Navigation;