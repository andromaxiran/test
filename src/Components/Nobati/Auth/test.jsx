
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const Test = ({mob}) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (

            <>
                {/*<Button variant="primary" onClick={handleShow}>*/}
                {/*    Launch static backdrop modal*/}
                {/*</Button>*/}

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {mob}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       کد تایید ارسال شده به شماره خود را در کادر زیر وارد کنید در صورتی که هنوز کدی دریافت نکرده اید درخواست مجدد کد تایید را بزنید

                          <input type={'text'} placeholder={'کد تایید را وارد کنید'} className={'form-control w-75 mx-auto my-3 text-center'} maxLength="6"/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" >
                            ثبت
                        </Button>
                        <Button variant="primary">درخواست مجدد کد تایید</Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
};