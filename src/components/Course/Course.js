import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolder, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
    const { name, image, price, description, courseEnrol, category, lesson } = props.course;
    //Single Course 
    return (
        <Col>
            <Card className="card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <p> <FontAwesomeIcon className="icon" icon={faFolder} /> <small className="category">{category}</small> </p>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="fw-bold"> <small>Price: ${price}</small> </Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <p> <FontAwesomeIcon className="icon" icon={faUser} /> <small className="category">{courseEnrol} Enrolled</small></p>
                        <p><FontAwesomeIcon className="icon" icon={faLayerGroup} /> <small className="category">{lesson}</small></p>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className="w-100" variant="info"> <FontAwesomeIcon className="icon" icon={faCheckCircle} /> Enroll Now</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;