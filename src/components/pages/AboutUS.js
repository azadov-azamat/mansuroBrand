import React from "react";
import Navbar1 from "../Navbar1";
import {Col, Container, Row} from "reactstrap";
import Footer1 from "../Footer1";
import Menu from "../Menu";

export default function AboutUS() {
    return (
        <>
            <Menu/>
            <h1 className='text-center mt-2'>About Us</h1>
            <Container>
                <Row className='about'>
                    <Col md={6}>
                        <div className="aboutImg img1">
                            <img src="style/mansuro 3.jpg"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="text-center">
                            <h3>About Company</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi consequuntur
                                cupiditate eaque facilis itaque iure magnam maxime, nulla odio quisquam rerum.
                                Accusantium blanditiis dolores eum nobis tenetur ut, veniam! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Accusantium aliquam aliquid aspernatur assumenda atque
                                cumque dolorum earum et excepturi exercitationem, hic illum modi nam obcaecati quae,
                                reiciendis soluta voluptas voluptates?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='about'>
                    <Col md={6}>
                        <div className="text-center">
                            <h3>About Service</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi consequuntur
                                cupiditate eaque facilis itaque iure magnam maxime, nulla odio quisquam rerum.
                                Accusantium blanditiis dolores eum nobis tenetur ut, veniam! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Accusantium aliquam aliquid aspernatur assumenda atque
                                cumque dolorum earum et excepturi exercitationem, hic illum modi nam obcaecati quae,
                                reiciendis soluta voluptas voluptates?</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="aboutImg img2 mb-5">
                            <img src="style/mansuro 6.jpg"/>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer1/>
        </>
    )
}