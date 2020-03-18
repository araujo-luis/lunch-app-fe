import React, { FC, FormEvent, useState } from 'react';
import { Form, Button, Col, Container, Row, Toast } from 'react-bootstrap';

import axios from 'axios';
import { useAuth0 } from '../context/Auth0Context';

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

const LunchForm: FC = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const [formValidated, setFormValidated] = useState(false);
    const [plateName, setPlateName] = useState("");
    const [plateDescription, setPlateDescription] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        window.scroll(0, 0);
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setFormValidated(true);
        console.log(formValidated);
        console.log(plateName);

        axios.post(`${baseUrl}/lunch`, {
            plate_name: plateName,
            plate_description: plateDescription,
            restaurant_name: restaurant,
            category: category,
            price: Number(price),
            plate_image: image
        }).then(res => {
            setShow(true);
            setMessage("Created");
        }).catch(err => {
            setShow(true);
            setMessage("Something went wrong");
        });

    };

    return (
        <div>
            {isAuthenticated ?
                <Container>
                    <Toast show={show} style={{
                        position: 'absolute',
                        top: "5em",
                        right: 0,
                        minWidth: '300px',
                        zIndex: 100,
                    }} delay={4000} autohide onClose={() => setShow(false)} >
                        <Toast.Header>
                            <strong className="mr-auto">Notification</strong>
                            <small>Now</small>
                        </Toast.Header>
                        <Toast.Body>{message}</Toast.Body>
                    </Toast>
                    <Row className="justify-content-md-center">
                        <Col xs lg="12">

                            <h1>Create Lunch</h1>


                            <Form noValidate validated={formValidated} onSubmit={formHandler}>
                                <Form.Group controlId="plateName">
                                    <Form.Label>Plate Name</Form.Label>
                                    <Form.Control required type="text" onChange={(e: FormEvent<HTMLInputElement>) => { setPlateName(e.currentTarget.value); }} placeholder="Enter Plate Name" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Name.
                            </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="plateDescription">
                                    <Form.Label>Plate Description</Form.Label>
                                    <Form.Control required as="textarea" onChange={(e: FormEvent<HTMLInputElement>) => setPlateDescription(e.currentTarget.value)} rows="2" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Description.
                            </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="restaurantName">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control required type="text" onChange={(e: FormEvent<HTMLInputElement>) => setRestaurant(e.currentTarget.value)} placeholder="Enter Restaurant Name" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Restaurant.
                            </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="category">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control required type="text" onChange={(e: FormEvent<HTMLInputElement>) => setCategory(e.currentTarget.value)} placeholder="Enter Category" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Category.
                            </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required type="text" onChange={(e: FormEvent<HTMLInputElement>) => setPrice(e.currentTarget.value)} placeholder="Enter Price" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Price.
                            </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="imageUrl">
                                    <Form.Label>Plate Image URL</Form.Label>
                                    <Form.Control required type="text" onChange={(e: FormEvent<HTMLInputElement>) => setImage(e.currentTarget.value)} placeholder="Enter Plate Image URL" />
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
                :
                <h1>AUTHENTICATE</h1>

            }
        </div>
    )
}

export default LunchForm;