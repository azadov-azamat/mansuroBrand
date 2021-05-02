import React from "react";
import {Col, Row} from "reactstrap";
import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCashRegister, faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {

    let history = useHistory();

    function home() {
        history.push("/");
    }

    function register() {
        history.push("/register");
    }

    function about() {
        history.push("/about");
    }

    function service() {
        history.push("/service");
    }

    function gallery() {
        history.push("/gallery");
    }

    return (
        <div className="menu">
            <Row>
                <Col md={12}>
                    <ul className='list'>
                        <li>
                            <div className="div">
                                <Link className={'link'} onClick={home}>
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className={'link'} onClick={about}>
                                    About US
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className="link" onClick={service}>
                                    Service
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className="link" onClick={gallery}>
                                    Gallery
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="div">
                                <Link className="link" onClick={register}>
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