import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Components/Logo";
import {Login} from "../Auth/Login";

const Header =()=> {
    return (
        <Navbar bg="white" expand="lg">
            <Container className={'justify-content-md-center'}>
                <Navbar.Brand href="#">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown className={'top-0'} title="Link" >
                            <NavDropdown.Item style={{left :'0'}} href="#action3" className={'text-center'}>Action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                 <Login/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;