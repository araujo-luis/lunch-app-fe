import React, { FC } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

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
    const { id, plate_name, plate_description, restaurant_name, category, price, plate_image } = props;

    return (


        <div>
            <Container>
                <Row>

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
                                <Card.Text>
                                    {plate_description}
                                </Card.Text>
                                <Card.Text>
                                    {restaurant_name}
                                </Card.Text>
                                <Card.Text>
                                    {price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <ul>
                    <li>{id}</li>
                    <li>{plate_name}</li>
                    <li>{plate_description}</li>
                    <li>{restaurant_name}</li>
                    <li>{category}</li>
                    <li>{price}</li>
                </ul>
                <img src={plate_image} alt={plate_description} />
            </Container>
        </div>
    )

}

export default RandomLunch;