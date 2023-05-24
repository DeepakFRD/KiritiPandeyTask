import React, { Fragment } from 'react'
import { Row, Col, Container, Card } from 'reactstrap'
import { EventsArray } from './DummyArray'

const EventsCard = () => {

    // ========================  Mian_return_function ======================//
    return (
        <Fragment>
            <Container>
                <Row>
                    {EventsArray.map((item) => (
                        <Col sm={3}>
                            <Card className='Events_Crad_Main_blk mb-4'>
                                <img src={item.img} alt='events-img' className='img-fluid' />
                                <div className='Events_Label'>
                                    {item.label}
                                </div>
                                <div className='Events_Body_section '>
                                    <div className='Events_Body_Top_section'>
                                        <div>
                                            <h4>Sun, 21 Feb </h4>
                                        </div>
                                        <div className='Events_Menu'>
                                            ""
                                        </div>
                                    </div>
                                </div>

                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
        </Fragment>
    )
}

export default EventsCard
