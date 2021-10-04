import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCoursers';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';

const Home = () => {
    // use custom hook
    const [courses] = useCourses()
    return (
        <div>
            {/* banner import here */}
            <Banner></Banner>
            <Container>
                <div className="w-75 mx-auto">
                    <h2 className="text-center fs-3 fw-bold mt-5">Our Services</h2>
                    <p className="text-center">Swimming is a healthy activity that you can continue for a lifetime. It is a low-impact activity that has many physical and mental health benefits.</p>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.slice(0, 4)?.map(course => <Course course={course} key={course.id}></Course>)
                    }
                </Row>
                <Row>
                    <Col sm={10}></Col>
                    <Col className="d-flex justify-content-end my-3" sm={2}>
                        <Link className="text-decoration-none" to='/services'> <Button variant="outline-info">See More <FontAwesomeIcon icon={faArrowRight} /> </Button> </Link>
                    </Col>
                </Row>
            </Container>
            {/* Footer import here */}
            <Footer></Footer>
        </div>
    );
};

export default Home;