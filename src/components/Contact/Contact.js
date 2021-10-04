import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import image from '../../images/contact.jpg';
import './Contact.css'
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <div className="header-bg">
                <Header></Header>
            </div>
            <Container>
                <div className="w-50 mx-auto text-center">
                    <h3 className="mt-5">Get in Touch With Us</h3>
                    <p className="about-text mt-3 mb-5">We read each e-mail and reply within a maximum of 2 business days.
                        Please enter correct e-mail address so that we can back to you</p>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-6">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="your  email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Write Message</Form.Label>
                                <Form.Control as="textarea" placeholder="write your message..." rows={3} />
                            </Form.Group>
                            <Button className="regular-btn">Send</Button>
                        </Form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                </div>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Contact;