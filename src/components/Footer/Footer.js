import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'



const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <div className="row py-5">
                    <div className="col-12 col-md-5">
                        <h1>Swimming School</h1>
                        <p>
                            <FontAwesomeIcon className="social-icon" icon={faFacebookSquare} />
                            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                            <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                        </p>
                        <p> <small>Swimming is a confusing sport, because sometimes you do it for fun, and other times you do it to not die. And when I'm swimming, sometimes I'm not sure which one it is.</small> </p>
                        <p> <small>Delwar &copy; All Right Reserved.</small></p>
                    </div>
                    <div className="col-12 col-md-2">
                        <Link className="footer-nav" to='/home'>Home</Link>
                        <Link className="footer-nav" to='/about'>About</Link>
                        <Link className="footer-nav" to='/services'>Services</Link>
                        <Link className="footer-nav" to='/contact'>Contact</Link>
                        <Link className="footer-nav" to='/privacy'>Privacy & Policy</Link>
                        <Link className="footer-nav" to='/condition'>Terms & Conditions</Link>
                    </div>
                    <div className="col-12 col-md-5">
                        <h3>Sign up newsletters</h3>
                        <div className="my-4 w-50">
                            <Form.Control type="text" placeholder=" enter Your Email" />
                        </div>
                        <p className="my-4"><FontAwesomeIcon icon={faPhoneAlt} />  +8801749-497676</p>
                        <p className="my-4"><FontAwesomeIcon icon={faMapMarkedAlt} />   160 Broadway, New York, NY 10038,
                            <br />  102 1st Avenue, New York, NY 100</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;