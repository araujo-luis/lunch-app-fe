import React, { FC } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

const LunchForm: FC = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <h1>Create Lunch</h1>

                    <Form>
                        <Form.Group controlId="plateName">
                            <Form.Label>Plate Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Plate Name" />
                        </Form.Group>

                        <Form.Group controlId="plateDescription">
                            <Form.Label>Plate Description</Form.Label>
                            <Form.Control as="textarea" rows="2" />
                        </Form.Group>

                        <Form.Group controlId="restaurantName">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Restaurant Name" />
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price" />
                        </Form.Group>

                        <Form.Group controlId="imageUrl">
                            <Form.Label>Plate Image URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter Plate Image URL" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <br /><br /><br /><br />

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LunchForm;