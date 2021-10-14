import React from 'react';
import '../../App.css'
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        const space = {
            margin: '0 20px 0 0'
          };

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Container className="App-Header">
                        <Navbar.Brand href="/">                            
                            <img src='/logo/logo03.png' className="d-inline-block align-top" width="60" height="60" style={space} alt=''/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="/About" style={space}>About</Nav.Link> */}
                                <Nav.Link href="#link" style={space}>RoadMap</Nav.Link>
                                <NavDropdown title="Courses" id="basic-nav-dropdown"style={space}>
                                    <NavDropdown.Item href="#action/3.1">Coding</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Physics</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Math</NavDropdown.Item>
                                    {/* <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                                <Nav.Link href="#link" style={space}>Challenge</Nav.Link>
                                <Nav.Link href="#link" style={space}>FAQ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header;