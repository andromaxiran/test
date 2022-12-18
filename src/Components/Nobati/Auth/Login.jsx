import { Modal, Button } from "react-bootstrap";
import * as React from 'react';
import {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';


export const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button style={{height: '50px'}} className={'btn btn-outline-secondary'} onClick={handleShow}>
                ورود | ثبت نام
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>ورود | ثبت نام</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className={'d-flex justify-content-evenly'}>
                                <Nav variant="pills" className="p-3">
                                    <Nav.Item>
                                        <Nav.Link className={'mx-3'} eventKey="first">ورود</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className={'mx-3'}>ثبت نام</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three" className={'mx-3'}>فراموشی کلمه عبور</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>sad 111111111111</p>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose}>
                                                ورود
                                            </Button>
                                            <Button variant="secondary" onClick={handleClose}>
                                                بستن
                                            </Button>
                                        </Modal.Footer>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>sad 3333333</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <p>sad 5656</p>
                                    </Tab.Pane>
                                </Tab.Content>
                    </Tab.Container>

                </Modal.Body>

            </Modal>
        </>

    );
};
