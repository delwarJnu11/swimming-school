import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { name, image, price, description } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;