import React, { FC } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap'
const Navigation: FC = () => {

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Lunch Picker</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Button>
                Log in
              </Button>
        </Navbar>
    )
}

export default Navigation;