import React from "react";
import {Col, Row} from "reactstrap";
import {Link, useHistory} from "react-router-dom";

export default function Menu() {

    let history = useHistory();


    return (
        <div className="menu">
            <Row>
                <Col md={12}>
                    <ul className='list pl-5'>
                        <li>
                            <div className="div">
                                <Link className={'link'} to='/'>
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className={'link'} to='/about'>
                                    About US
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className="link" to='/service'>
                                    Service
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className="link" to='/gallery'>
                                    Gallery
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className="link" to='/register'>
                                    Register
                                </Link>
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}