import React, { FC } from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
const Bounce = require('react-reveal/Bounce');

export interface Lunch {
    id?: number;
    plate_name?: string;
    plate_description?: string;
    restaurant_name?: string;
    category?: string;
    price?: number;
    plate_image?: string;
}


const RandomLunch: FC<Lunch> = (props) => {
    const { plate_name, plate_description, restaurant_name, category, price, plate_image } = props;

    return (


        <div>
            <Bounce opposite collapse>
                <Container className="random-lunch">
                    <Row className="justify-content-md-center">

                        <Col lg="6" xl="8">
                            <Card>
                                <Card.Title

                                    className="text-uppercase text-muted mb-0 lunch-header"
                                >
                                    {plate_name}
                                </Card.Title>
                                <div className="image-holder">
                                    <Card.Img className="image-position" src={plate_image} />
                                </div>
                                <Card.Body>
                                    <div>
                                        <h4 className="d-inline">
                                            <Badge variant="info">{category}</Badge>
                                        </h4>
                                        <span className="float-right lunch-price">L. {price}</span>
                                        <hr />
                                    </div>
                                    <Card.Text>
                                        {plate_description}
                                    </Card.Text>

                                    <hr />

                                    <Card.Text>
                                        You can find it at:  <span className="font-weight-bold">{restaurant_name}</span>
                                    </Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Bounce>
        </div >
    )

}

export default RandomLunch;