import React from "react";
import Menu from "../Menu";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";


export default function Gallery() {
    return (
        <>
            <Menu/>
            <Container>
                <Row style={{marginTop: '4em'}}>
                    <Col md={12} style={{
                        width: '55em',
                        height: '20em'
                    }}>
                            <div className='gallery2 text-center'>
                            <h1 className='mb-3'>Bizning Ishxona</h1>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium amet animi autem corporis, dolor dolorem ducimus et eum eveniet
                                    excepturi
                                    expedita
                                    fugit harum, illo incidunt ipsam molestias nam nemo nesciunt nostrum perspiciatis
                                    porro
                                    quae quidem
                                    rem saepe soluta tenetur totam velit! Labore, optio, porro? Doloribus hic natus sunt
                                    suscipit totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                                    aspernatur culpa debitis deserunt error eveniet facere in libero maxime natus
                                    numquam optio perferendis quas, quisquam quod sed tempora vitae voluptate.</p>
                            </div>
                        </div>
                    </Col>
                    <div className="container" style={{width: '6em', height: '5em'}}>
                        <div className="col-md-12">
                            <a href="#">
                                <FontAwesomeIcon icon={faArrowDown} className='icon'/>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}