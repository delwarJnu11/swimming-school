import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCoursers';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

//services page
const Services = () => {
    // use custom hook here
    const [courses] = useCourses();
    return (
        <div>
            {/* Header import here  */}
            <div className="header-bg">
                <Header></Header>
            </div>
            <Container className="my-5">
                <div className="w-75 mx-auto">
                    <h2 className="text-center fs-3 fw-bold mt-5">Our Awesome Services</h2>
                    <p className="text-center mt-3 mb-5">Swimming is a healthy activity that you can continue for a lifetime. It is a low-impact activity that has many physical and mental health benefits.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses?.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </Row>
            </Container>
            {/* footer import here */}
            <Footer></Footer>

        </div>
    );
};

export default Services;