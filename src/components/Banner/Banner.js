import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        // Banner part
        <div className="banner-image">
            <Container>
                <Row>
                    {/* Header Menu  */}
                    <Header></Header>
                    <Col sm={2}></Col>
                    <Col sm={8} className="text-center text-white banner-text">
                        <h2 className="banner-title">Get Health and well-being with Swimming School.</h2>
                        <p className="banner-description">Swimming is a confusing sport, because sometimes you do it for fun, and other times you do it to not die. And when I'm swimming, sometimes I'm not sure which one it is.</p>
                        <Link to='/contact'>
                            <Button className="fw-bold regular-btn mt-3">Contact Us</Button>
                        </Link>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;