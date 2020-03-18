import React, { FC, FormEvent, useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

const LunchForm: FC = () => {

    const [formValidated, setFormValidated] = useState(false);

    const [plateName, setPlateName] = useState("");
    const [plateDescription, setPlateDescription] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const formHandler = (e: any) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {

            e.preventDefault();
            e.stopPropagation();

        }
        setFormValidated(true);
        console.log(formValidated);
        console.log(plateName);
        if (formValidated) {
            axios.post(`${baseUrl}/lunch`, {
                plate_name: plateName,
                plate_description: plateDescription,
                restaurant_name: restaurant,
                category: category,
                price: Number(price),
                plate_image: image
            }).then(res => {
                console.log("CREATED");

            }).catch(err => {
                console.log("ERROR", err);
            });
        }

        console.log("VALIDATION");


    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="12">
                    <h1>Create Lunch</h1>

                    <Form noValidate validated={formValidated} onSubmit={formHandler}>
                        <Form.Group controlId="plateName">
                            <Form.Label>Plate Name</Form.Label>
                            <Form.Control required type="text"  onChange={(e: FormEvent<HTMLInputElement>) => {setPlateName(e.currentTarget.value);}} placeholder="Enter Plate Name" />
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
    )
}

export default LunchForm;