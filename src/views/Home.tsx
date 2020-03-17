import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Home: FC = () => {

    return (

        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <h3>Welcome to the Lunch Picker</h3>
                    <p>Let's get started</p>


                </Col>

            </Row>

        </Container>



    );
}

export default Home;