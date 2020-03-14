import React, { FC } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap'
import { useAuth0 } from '../context/Auth0Context';

const Navigation: FC = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Lunch Picker</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            {!isAuthenticated && (

                <Button onClick={() => loginWithRedirect({})}>
                    Log in
                </Button>

            )}
        </Navbar>
    )
}

export default Navigation;