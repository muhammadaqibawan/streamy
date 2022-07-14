import React from 'react';
import GoogelOAuth from './GoogelOAuth';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Streamer</Link>
            <div className='right menu'>
                <Link to='/' className='item'>All Streams</Link>
            </div>
            <GoogelOAuth />
        </div>
    );
};

export default Header;