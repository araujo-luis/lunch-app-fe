import React, { FC } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';


const Home: FC = () => {

    return (

        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <br />
                    <Jumbotron>
                        <h1>Welcome to Lunch Picker app!</h1>
                        <p>
                            This is a simple application which is designed to eliminate the endless discussions over
                             where to eat lunch for you and your co-workers, family, friends, etc.</p>
                        <div>
                            <p>To get started, Log in</p>
                        <p>
                            <Button variant="primary">Log in</Button>
                        </p>
                        </div>                             
                    </Jumbotron>

                </Col>

            </Row>

        </Container>



    );
}

export default Home;