import React, { FC, FormEvent, useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

const LunchForm: FC = () => {

    const [formValidated, setFormValidated] = useState(false);

    const formHandler = (e: any) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            
            e.preventDefault();
            e.stopPropagation();
        }
        console.log("VALIDATION");

        setFormValidated(true);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <h1>Create Lunch</h1>

                    <Form noValidate validated={formValidated}  onSubmit={formHandler}>
                        <Form.Group controlId="plateName">
                            <Form.Label>Plate Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Plate Name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="plateDescription">
                            <Form.Label>Plate Description</Form.Label>
                            <Form.Control required as="textarea" rows="2" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Description.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="restaurantName">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Restaurant Name" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Restaurant.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Category" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Category.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Price" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Price.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="imageUrl">
                            <Form.Label>Plate Image URL</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Plate Image URL" />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Image.
                            </Form.Control.Feedback>
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