import React from "react";
import {Col} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Navbar1() {
    return (
        <>
            {/*<Container>*/}
            <div className='row1'>
                <Col md={4} sm={6}>
                    <div>
                        <img src="style/LogoPNG.png" style={{width: '20vh', height: '22vh'}}/>
                    </div>
                </Col>
                <Col md={8}>
                    <div className={'nav'}>
                        <ul className='list-inline '>
                            <li>
                                <Link className='link'>
                                    <div className='icons'>
                                        <FontAwesomeIcon icon={faPhoneAlt}/>
                                    </div>
                                    <div className='service'>
                                        <h5>+998 91 990 99 11</h5>
                                        <p>Biz bilan bog`laning</p>
                                    </div>
                                </Link>

                            </li>
                            <li>
                                <Link className='link'>
                                    <div className='icons'>
                                        <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                    </div>
                                    <div className="service">
                                        <h4>abdullayev@mansuro.uz</h4>
                                        <p>Bizning elektron pochta manzilimiz</p>
                                    </div>
                                </Link>
                            </li>
                            <li style={{borderRight: 'none', marginRight: '0em'}}>
                                <Link className='link'>
                                    <div className='icons'>
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    </div>
                                    <div className='service'>
                                        <h4>Chilonzor metro</h4>
                                        <p>Bizning manzil</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </div>
            {/*</Container>*/}
        </>
    )
}