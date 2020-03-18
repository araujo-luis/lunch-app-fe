import React, { FC } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { useAuth0 } from '../context/Auth0Context';

const Home: FC = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (

        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <br />
                    <Jumbotron>
                        <h1>Welcome to Lunch Picker app!</h1>
                        <p>
                            This is a simple application which is designed to eliminate the endless discussions over
                             what to eat lunch for you and your co-workers, family, friends, etc.</p>

                        {!isAuthenticated ?
                            <div>
                                <p>To get started, Log in</p> <p>
                                    <Button onClick={() => loginWithRedirect({})}>
                                        Log in
                                    </Button>
                                </p>
                            </div> : null}

                    </Jumbotron>

                </Col>

            </Row>

        </Container>



    );
}

export default Home;