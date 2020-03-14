import React, { FC } from 'react';
import { Button, Navbar, Nav, Dropdown } from 'react-bootstrap'
import { useAuth0 } from '../context/Auth0Context';

const Navigation: FC = () => {
    const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin
        });
    console.log("USERRRR");
    console.log(user);

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Lunch Picker</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav>
                {!isAuthenticated && (

                    <Button onClick={() => loginWithRedirect({})}>
                        Log in
                    </Button>

                )}

                {isAuthenticated && user && (
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <img
                                src={user.picture}
                                alt="Profile"
                                className="nav-user-profile rounded-circle"
                                width="21"
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => logoutWithRedirect()}>Log Out</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                )}
            </Nav>
        </Navbar>
    )
}

export default Navigation;