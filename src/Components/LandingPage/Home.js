import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home container">
                <div className="main">
                    <h1 id="header">First group chat developed by a bunch of freshies!</h1>
                    <button type="button" className="btn" id="joinbtn">join zeww</button>
                    <button type="button" className="btn" id="signinbtn">Sign In</button>
                </div>
            </div>
        )
    }
}

export default Home