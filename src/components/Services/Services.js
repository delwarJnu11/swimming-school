import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Header from '../Header/Header';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseInfo.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <div className="header-bg">
                <Header></Header>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses?.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Services;