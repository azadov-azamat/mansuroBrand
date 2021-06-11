import React from "react";
import {Col, Container, Row} from "reactstrap";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {useHistory} from "react-router-dom";
import Menu from "../Menu";

export default function Register() {
    const history = useHistory();

    function loginPage(){
        history.push('/login');
    }

    return (
        <>
            <Menu/>
            <Container>
                <Row>
                    <Col md={12}
                         className='mt-5 d-flex justify-content-center align-content-center'>
                        <Row className='align-items-center signUp ' style={{width: '37em'}}>
                            <Col md={6}>
                                <div style={{width: '18em'}} className="text-center ">
                                    <h1>Welcome to my website</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet
                                        architecto consequuntur </p>
                                    <button id='btn' className='btn btn-outline-info' onClick={loginPage}>SignIn</button>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div style={{width: '18em'}}
                                     className='text-center mb-3 mt-2 d-flex justify-content-center align-content-center'>
                                    <AvForm>
                                        <AvField
                                            label='Your name'
                                            name='firstName'
                                            placeholder='Ex: Davronjon'

                                        />
                                        <AvField
                                            label='Your phone number'
                                            name='phoneNumber'
                                            placeholder='Ex: +998 99 680 22 08'

                                        />
                                        <AvField
                                            label='Your password'
                                            name='password'
                                            placeholder='Ex: root123'

                                        />
                                        <button type='submit' id='btn ' className='btn btn-outline-success'>Registration</button>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}