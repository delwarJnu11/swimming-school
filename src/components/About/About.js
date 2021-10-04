import React from 'react';
import Header from '../Header/Header';
import image from '../../images/banner.jpg';
import './About.css'
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div className="header-bg">
                <Header></Header>
            </div>
            <Container className="my-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="col-12 col-md-6 ps-2">
                        <h5 className="mb-3">About Us</h5>
                        <h3 className="mb-3">Health, Safety, and Learning
                            <br />  Through Having Fun</h3>
                        <p className="about-text">The Swim Academy school conducts classes for both children and adults in the field of swimming, diving as well as aqua aerobics. Perfectly trained staff in a calm and pleasant atmosphere will make each participant of the course overcome the fear of water and learn various swimming techniques so that they can choose their favorite one.</p>
                        <p> <strong>Why you should trust us?</strong> </p>
                        <div className="d-flex mt-5">
                            <div className="me-4">
                                <h3 className="text-primary fs-4 fw-bold mb-3">39</h3>
                                <h5 className="fs-6">Experienced Trainers</h5>
                            </div>
                            <div className="me-4">
                                <h3 className="text-primary fs-4 fw-bold mb-3">500+</h3>
                                <h5 className="fs-6">Competitions Won</h5>
                            </div>
                            <div className="me-4">
                                <h3 className="text-primary fs-4 fw-bold mb-3">96%</h3>
                                <h5 className="fs-6">Recommends Us</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;