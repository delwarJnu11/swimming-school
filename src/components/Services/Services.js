import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
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
            <Container className="my-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        courses?.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Services;