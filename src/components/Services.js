import React from "react";
import {Col, Row} from "reactstrap";

export default function Services() {
    return (
        <div  id='service' className='images mt-5 '>
            <Row>
                <Col md={4} className='images1'>
                    <div className='images0 '>
                        <div className='image '>
                            <img src="style/mansuro 3.jpg"/>
                        </div>
                        <div className="text mt-4">
                            <h3>Bizda yangi loyihalar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque in
                                nulla?</p>
                        </div>
                    </div>

                </Col>
                <Col md={4} className='images2'>
                    <div className='images0 '>
                        <div className='image '>
                            <img src="style/Mansuro 5.jpg"/>
                        </div>
                        <div className="text mt-4">
                            <h3>Bizda yangi ish o`rinlar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque in
                                nulla?</p>
                        </div>
                    </div>

                </Col>
                <Col md={4} className='images3'>
                    <div className='images0 '>
                        <div className='image '>
                            <img src="style/mansuro 6.jpg"/>
                        </div>
                        <div className="text mt-4">
                            <h3>Bizda yangi xizmatlar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque in
                                nulla?</p>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    )
}