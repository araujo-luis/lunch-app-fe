import React, { FC, useState, useEffect } from 'react';
import RandomLunch, { Lunch } from '../components/RandomLunch';
import axios from 'axios';
import { Button, Container, Card, Row, Nav, NavItem, NavLink, Col } from 'react-bootstrap';
import { CardHeader, CardBody } from 'react-bootstrap/Card';

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

const Home: FC = () => {
    const [randomLunch, setRandomLunch] = useState<Lunch>();
    const [showLunch, setShowLunch] = useState(false);

    useEffect(() => {
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLunch = () => {
        console.log("base URL");
        console.log(baseUrl);
        axios.get(`${baseUrl}/lunch`).then(res => {
            console.log(res.data);
            
            setRandomLunch(res.data);
            setShowLunch(true);
            console.log(randomLunch);

        });
    };

    return (
      
        <div>

            <h3>Welcome to the Lunch Picker</h3>
            <p>Let's get started</p>

            <Button onClick={handleLunch}>Get a Random Lunch</Button>
            {showLunch?  <RandomLunch
                id={randomLunch?.id}
                plate_name={randomLunch?.plate_name}
                plate_description={randomLunch?.plate_description}
                restaurant_name={randomLunch?.restaurant_name}
                category={randomLunch?.category}
                price={randomLunch?.price}
                plate_image={randomLunch?.plate_image} />: null}
            
        </div>
        
    );
}

export default Home;