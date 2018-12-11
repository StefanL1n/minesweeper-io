import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
class Header extends Component {
    render() {
        return (
            <div className='ui secondary pointing menu'>
                <Link to='/' className='item'>minesweeper.io</Link>
                <Link to='/' className='item active'><i className='gamepad icon'/>Game Rooms</Link>
                <div className='item'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 mines</div>
                <div className='item'><button className='ui compact icon button'><i className='black smile outline icon'/></button></div>
                <div className='item'>999 s</div>
                <div className='right menu'>
                    <div className='item'>2&nbsp;<i className='user icon'/></div>
                    <GoogleAuth/>
                </div>
            </div>
        );
    }
}

export default Header;