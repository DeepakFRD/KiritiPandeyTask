import React, { Fragment } from 'react'
import { Row, Col, Container, Card, Button } from 'reactstrap'
import { EventsArray } from './DummyArray'
import { CornerUpRight, MapPin, MoreHorizontal, Star,ChevronDown } from 'react-feather'

const EventsCard = () => {

    // ========================  Mian_return_function ======================//
    return (
        <Fragment>
            <Container>
                <Row>
                    {EventsArray.map((item) => (
                        <Col xs={6} md={6} lg={3} xl={3} className='mt-5'>
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
                                            <MoreHorizontal size={13}/>

                                        </div>
                                    </div>
                                    <h5>Diamond Platnumz with sar Veg...</h5>
                                    <p className='text-muted'><MapPin size={16} />&nbsp;Wemblay Center, London, UK</p>
                                    <img className='img1' src='https://s3-alpha-sig.figma.com/img/300a/1288/37e96ac49d78e0d31a7fc13953463564?Expires=1685923200&Signature=HAQxpVqT9cId--pOAkcJe9Lyze4kTdC19GxivPMAp~qo099DuEqPxfMy~rLLwJOt2oKDy7cyhQ4lsm7WwHswgxdC0O4yt-wpWGPXyfrfMZyhcB6uIFUTvtNMW92owSanW3JYgCCG9yqpGN~UhKis2yv-kIdthRQiF0sXtC6ALwyn-XoTIj6FGwMddeBYoehtFCmVnsn2Xh60GsHUSVQ49r2TSrSNvvjFEA44y9iAv7PoI75i7OTScoOpQPybBR6~LcA5NRge1jaLiCoRENxpmwb4QraqRVjIecYzb8rhbl~JExJVTKWBLHoXmjKAbMs9qxoXBNxMjqBLtzHX1EEmVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                    <img className='img2' src='https://s3-alpha-sig.figma.com/img/db52/6c16/9ee26d95db2d5e50c9f9bf14b062cb6b?Expires=1685923200&Signature=KtTBUyN7~VQtA3cIsxcWNTDzKaJnSNemPdAb5~xIBbWthN~xgwMt~VLjr9i7TxRHwTt8IbsG4AG9cbT92bFTZ8-XCkgzO2fQplLWfOwpVzUh4Q2KD3w-3CJoQadYAATXDO0U-gGL8V3TrW5WCHnbEqR0j2NGyFEAlevoTZd9a4Q0dzkLtdTdgdWYqli83jU5q1PmPwkTUGa1-Ky3tIWBBZxtASnlnLcIRG0I5gzyaqQ8zIXw-5TyllTW6hz5sbavoM0x6hriB906jQAsKwkNmPjzoosxmcx0mR0mkSn96ozKZUm4WyS2uRzAIhbSbe9pRbT8rlSe3TmxAli~fjZQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                    <img className='img3' src='https://s3-alpha-sig.figma.com/img/a989/fdc8/9c83b167b9782d670e311f9d9eb4e890?Expires=1685923200&Signature=ZFVfqY3UifpWUNMd0tkl6893ZyByhaKa8aVBFcZgjhCd3qhLCJFqXqT2h7aFCk7qZnM51GImm8cACBH3yIhi-wFvfpgaHgvbJzUZvDCij4TZKeYrMDk~Q5ExQnf6z9Yj-P87HR1Bxu49oBzt3G6u5Vdeh-C6qVZIR4dox8pcDig1r005z9IDZQObXCYaM1U8pDuXQCGZ7uit2yefucgjPSeV7AGBkMAzmrJ2MmUx04zvLJ3P20vvezces9OAHRT2cLqPE4XE6myyyLkDjlYHQewo3oKOe0lkRQ8avuaFyrMyDrt8btE0CcSXK~fX9I59BcZY5jeCnc6zLLJrz3HbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                    <img className='img4' src='https://s3-alpha-sig.figma.com/img/e7a8/66ea/8de00a67e3d649c684ae4898fadc1047?Expires=1685923200&Signature=UfC4Vz9ZNeA86drHFz31UwMrCrE08jVxrpDKmwjkJl4eYyUnvapHsR8F-vjMkFLHiFoIf-MY2-OE6IWfMEH2LuqpydPLQ8gIx9y49v9uHpMdKZSYZnevPv6wxSGLSerys8ejiNNUgswWlNRksRUGa2g1EFJXI09i~VqP6LR3c7HhZowzZyV0N3n~ooc5Q84W-zlRAIxy8~dpdb9vu7zKLRBm3BK5Y5AviJphFktqNc2Ly3p2d8oPFluCCLI3XqCxrNEFSOkBMKEyNhGq6rFEJk4FFymqwI~AIIPNDKNMMWe1PYn9pve~ywjbuuoIzb3ZXXlWBa0nybfXYVbN3gn8QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                    <span>50 people interested</span>
                                    <div className='d-flex align-items-center gap-2 mt-3 '>
                                        <Button outline className='btn-light w-50  d-flex flex-nowrap align-items-center gap-1 justify-content-center' style={{ fontSize: ".8rem", borderColor: "rgba(0, 0, 0, 0.1)" }} ><Star size={15} />Interested</Button>
                                        <Button outline className='btn-light w-50  d-flex flex-nowrap align-items-center gap-1 justify-content-center' style={{ fontSize: ".8rem", borderColor: "rgba(0, 0, 0, 0.1)" }} ><CornerUpRight size={14} />Share</Button>
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
