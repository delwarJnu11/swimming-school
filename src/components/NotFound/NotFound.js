import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/notfound.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Link className="not-found-page" to='/home'>
                <img height="500px" src={image} alt="" />
                <Button variant="danger">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;