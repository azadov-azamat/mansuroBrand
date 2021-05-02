import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faPhoneAlt, faPrint} from "@fortawesome/free-solid-svg-icons";

export default function Footer1() {
    return (
        <>
            <footer color="unique-color-dark" className="page-footer font-small pt-0 ">
                <div style={{backgroundColor: "#fff"}}>
                    {/*<Container fluid className="text-center text-md-left">*/}
                    {/*    <Row className="py-4 d-flex align-items-center">*/}
                    {/*        <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">*/}
                    {/*            <h6 className="mb-0 white-text">*/}
                    {/*                Get connected with us on social networks!*/}
                    {/*            </h6>*/}
                    {/*        </Col>*/}
                    {/*        <Col md="6" lg="7" className="text-center text-md-right">*/}
                    {/*            <a className="fb-ic ml-0">*/}
                    {/*                <FontAwesomeIcon icon={['fab', 'facebook-f']} className=' mr-lg-4'/>*/}
                    {/*                /!*<FontAwesomeIcon icon="coffee" inverse />*!/*/}
                    {/*                /!*<FontAwesomeIcon icon={faGrinStars} className='white-text mr-lg-4'/>*!/*/}
                    {/*                /!*<i className="fab fa-facebook-f white-text mr-lg-4"> </i>*!/*/}
                    {/*            </a>*/}
                    {/*            <a className="tw-ic">*/}
                    {/*                <i className="fab fa-twitter white-text mr-lg-4"> </i>*/}
                    {/*            </a>*/}
                    {/*            <a className="gplus-ic">*/}
                    {/*                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>*/}
                    {/*            </a>*/}
                    {/*            <a className="li-ic">*/}
                    {/*                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>*/}
                    {/*            </a>*/}
                    {/*            <a className="ins-ic">*/}
                    {/*                <i className="fab fa-instagram white-text mr-lg-4"> </i>*/}
                    {/*            </a>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Container>*/}
                </div>
                <Container className="mt-5 mb-4 text-center">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Company name</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px"}}/>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Products</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px"}}/>
                            <p>
                                <a href="#">Bootstrap</a>
                            </p>
                            <p>
                                <a href="#">Reactstrap</a>
                            </p>
                            <p>
                                <a href="#">Brand</a>
                            </p>
                            <p>
                                <a href="#">Bootstrap Javascript</a>
                            </p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px"}}/>
                            <p>
                                <a href="#">Your Account</a>
                            </p>
                            <p>
                                <a href="#">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#">Help</a>
                            </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4 ">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{width: "60px"}}/>
                            <div className='text-md-left'>
                                <p>
                                    <FontAwesomeIcon icon={faHome} className={'mr-3'}/> Tashkent, Chilonzor, Uzb
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} className={'mr-3'}/> abdullayev@mansuro.com
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPhoneAlt} className={'mr-3'}/> +998 91 990 99 11
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPrint} className='mr-3'/> +998 90 550 22 10
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#"> abdullayev@mansuro.com </a>
                    </Container>
                </div>
            </footer>
        </>
    )
}