
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VerificationInput from "react-verification-input";
import {useEffect, useState} from "react";

export const Test = ({mob}) => {

    const [show , setShow] = useState(true);
    const [code , setCode] = useState()

    // const handleClose = () => setShow(false);
    //  const handleShow = () => setShow(true);

    function PrintMyState(state){
        console.log(state)
    }
    useEffect( ()=>{ PrintMyState(code) } , [code] )

    function s (text){
        setCode(text)
    }

  function sent(e){
      e.preventDefault();
      console.log(code)
    }
    return (
            <>
                {/*<Button variant="primary" onClick={handleShow}>*/}
                {/*    Launch static backdrop modal*/}
                {/*</Button>*/}
                <Modal
                    show={show}
                    // onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                           کد تایید هویت
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       کد تایید ارسال شده به شماره خود را در کادر زیر وارد کنید در صورتی که هنوز کدی دریافت نکرده اید درخواست مجدد کد تایید را بزنید

                          {/*<input type={'text'} placeholder={'کد تایید را وارد کنید'} className={'form-control w-75 mx-auto my-3 text-center'} maxLength="6"/>*/}
                    <div className={'m-auto'}>
                        <form>
                        <VerificationInput
                            name="code"
                            placeholder="_"
                            length={6}
                            validChars="0-9"
                            inputProps={{type: "tel"}}
                            value={code}
                            onChange={e => setCode(e.target.value)}
                            // inputField={{
                            //
                            //     onChange: (e) => {setCode(e.nativeEvent.target.value)}
                            // }}
                        />
                        {/*    <input*/}
                        {/*        className='form-input'*/}
                        {/*        type='text'*/}
                        {/*        name='username'*/}
                        {/*        placeholder='Enter your username'*/}
                        {/*        value={code}*/}
                        {/*        onChange={e => setCode(e.target.value)}*/}
                        {/*    />*/}
                        </form>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={sent}>
                            ثبت
                        </Button>
                        <Button variant="primary">درخواست مجدد کد تایید</Button>
                    </Modal.Footer>
                </Modal>
            </>

        );
};