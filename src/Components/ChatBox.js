import React, { Fragment, useState } from 'react'
import { AlignJustify, Bell, Calendar, Check, ChevronDown, Circle, FileText, Film, Grid, Image, LogOut, MessageCircle, MessageSquare, Mic, MoreHorizontal, MoreVertical, Paperclip, Plus, Search, Send, Settings, Smile, User } from 'react-feather'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Input, Row } from 'reactstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const ChatBox = () => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState(1)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // to toggle the chat room 
    const [activeChat, setActiveChat] = useState(false)

    return (

        // -------------------Main Section Chat Bar-------------//
        <Fragment>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Chat-App</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <img src='https://s3-alpha-sig.figma.com/img/db52/6c16/9ee26d95db2d5e50c9f9bf14b062cb6b?Expires=1685923200&Signature=KtTBUyN7~VQtA3cIsxcWNTDzKaJnSNemPdAb5~xIBbWthN~xgwMt~VLjr9i7TxRHwTt8IbsG4AG9cbT92bFTZ8-XCkgzO2fQplLWfOwpVzUh4Q2KD3w-3CJoQadYAATXDO0U-gGL8V3TrW5WCHnbEqR0j2NGyFEAlevoTZd9a4Q0dzkLtdTdgdWYqli83jU5q1PmPwkTUGa1-Ky3tIWBBZxtASnlnLcIRG0I5gzyaqQ8zIXw-5TyllTW6hz5sbavoM0x6hriB906jQAsKwkNmPjzoosxmcx0mR0mkSn96ozKZUm4WyS2uRzAIhbSbe9pRbT8rlSe3TmxAli~fjZQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' className='img1' />
                    </div>
                    <h6 className='hen_section mt-3'>Henry Jabbawockiez&nbsp;<ChevronDown size={18} /></h6>
                    <div>
                        <h6 className='header_section mt-5'><Grid size={14} />&nbsp;&nbsp;Home</h6>
                        <h6 onClick={() => setValue(4)} className={`bg ${value === 1 ? "Active" : ""}`}><MessageCircle size={14} onClick={() => setValue(4)} className={`bg ${value === 2 ? "Active1" : ""}`} />&nbsp;&nbsp;Chat</h6>
                        <h6 className='header_section'><User size={14} />&nbsp;&nbsp;Contact</h6>
                        <h6 className='header_section'><Bell size={14} />&nbsp;&nbsp;Notifications</h6>
                        <h6 className='header_section'><Calendar size={14} />&nbsp;&nbsp;Calendar</h6>
                        <h6 className='header_section'><Settings size={14} />&nbsp;&nbsp;Settings</h6>
                        <h6 className='log header_section'><LogOut size={14} />&nbsp;&nbsp;LogOut</h6>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <AlignJustify onClick={handleShow} className='check ' />
            <Button className='btn btn-primary BackBtnRight' onClick={handleShow}>Back</Button>
            <Row style={{ maxHeight: "100vh" }}>

                <Col className='col-xl-2 col-lg-2 cross_section' >
                    <div>
                        <img src='https://s3-alpha-sig.figma.com/img/db52/6c16/9ee26d95db2d5e50c9f9bf14b062cb6b?Expires=1685923200&Signature=KtTBUyN7~VQtA3cIsxcWNTDzKaJnSNemPdAb5~xIBbWthN~xgwMt~VLjr9i7TxRHwTt8IbsG4AG9cbT92bFTZ8-XCkgzO2fQplLWfOwpVzUh4Q2KD3w-3CJoQadYAATXDO0U-gGL8V3TrW5WCHnbEqR0j2NGyFEAlevoTZd9a4Q0dzkLtdTdgdWYqli83jU5q1PmPwkTUGa1-Ky3tIWBBZxtASnlnLcIRG0I5gzyaqQ8zIXw-5TyllTW6hz5sbavoM0x6hriB906jQAsKwkNmPjzoosxmcx0mR0mkSn96ozKZUm4WyS2uRzAIhbSbe9pRbT8rlSe3TmxAli~fjZQjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' className='img1' />
                    </div>
                    <h6 className='hen_section mt-3'>Henry Jabbawockiez&nbsp;<ChevronDown size={18} /></h6>
                    <div>
                        <h6 className='header_section mt-5'><Grid size={14} />&nbsp;&nbsp;Home</h6>
                        <h6 onClick={() => setValue(4)} className={`bg ${value === 1 ? "Active" : ""}`}><MessageCircle size={14} onClick={() => setValue(4)} className={`bg ${value === 2 ? "Active1" : ""}`} />&nbsp;&nbsp;Chat</h6>
                        <h6 className='header_section'><User size={14} />&nbsp;&nbsp;Contact</h6>
                        <h6 className='header_section'><Bell size={14} />&nbsp;&nbsp;Notifications</h6>
                        <h6 className='header_section'><Calendar size={14} />&nbsp;&nbsp;Calendar</h6>
                        <h6 className='header_section'><Settings size={14} />&nbsp;&nbsp;Settings</h6>
                        <h6 className='log header_section'><LogOut size={14} />&nbsp;&nbsp;LogOut</h6>
                    </div>

                </Col>
                {/* ------------------Second Column Section--------------------- */}
                <Col className='col-lg-10 col-xl-10 col-md-12 col-sm-12  head-section' style={{ maxHeight: "100vh", overflow: "auto" }} >
                    <Row className='p-4 w-100'>
                        <Col className={`${activeChat === true ? "NotInMobile" : ""}`} md={5} sm={12} style={{ maxHeight: "100vh", overflowY: "auto" }}>
                            <div className='Events_Body_Top_section1'>
                                <div>
                                    <h5>Chats</h5>
                                    <p>Recent Chats&nbsp;<ChevronDown size={15} /></p>
                                </div>
                                <div className='Events_Menu1'>
                                    <Button className='MyBtn'><Plus size={15} />&nbsp;Create New Chat</Button>
                                </div>
                            </div>
                            {/*===================== message section======================== */}
                            <div className='Events_Body_Top_section2 shadow'>
                                <div className='Events_Menu2'>
                                    {/* <p><Search size={15} />&nbsp;&nbsp;Search</p> */}
                                    <Search size={15} />&nbsp;<Input className='border-0 inputBox justify-content-center align-items-center' placeholder='Search......' />
                                </div>
                                <div className='Events_Menu2'>

                                    <NavDropdown
                                        title="Message"
                                        className='drop1'

                                    >&nbsp;&nbsp;
                                        <NavDropdown.Item href="#action/3.1">Timeline</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            About
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3" >Shotz</NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4" >
                                            Articles
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </div>
                            {/* ==============Card Section===================== */}
                            <div onClick={() => setActiveChat(true)} className='Events_Body_Top_section3 mt-3 shadow rounded-2 p-1'>
                                <div className='w-100 d-flex justify-content-between  align-items-center p-2'>
                                    <div className='Events_Menu3 d-flex align-items-center gap-2'>
                                        <img src='https://s3-alpha-sig.figma.com/img/a989/fdc8/9c83b167b9782d670e311f9d9eb4e890?Expires=1685923200&Signature=ZFVfqY3UifpWUNMd0tkl6893ZyByhaKa8aVBFcZgjhCd3qhLCJFqXqT2h7aFCk7qZnM51GImm8cACBH3yIhi-wFvfpgaHgvbJzUZvDCij4TZKeYrMDk~Q5ExQnf6z9Yj-P87HR1Bxu49oBzt3G6u5Vdeh-C6qVZIR4dox8pcDig1r005z9IDZQObXCYaM1U8pDuXQCGZ7uit2yefucgjPSeV7AGBkMAzmrJ2MmUx04zvLJ3P20vvezces9OAHRT2cLqPE4XE6myyyLkDjlYHQewo3oKOe0lkRQ8avuaFyrMyDrt8btE0CcSXK~fX9I59BcZY5jeCnc6zLLJrz3HbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                        <div className='d-flex flex-column align-items-start justify-content-center'>
                                            <h5 className='luy pt-2'>Luy Robin</h5>
                                            <p className='wt'><img src='https://cdn-icons-gif.flaticon.com/10282/10282620.gif' alt='' style={{ height: '1.5rem' }} />......writes</p>
                                        </div>
                                    </div>
                                    <div className='Events_Menu3'>
                                        <p>1 minutes ago</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='pera'>Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p>
                                    <p className='para1'>2</p>
                                </div>

                            </div>

                            {/*============================ content section========================= */}
                            <div onClick={() => setActiveChat(true)} className='Events_Body_Top_section3 mt-3 shadow rounded-2 p-2'>
                                <div className='w-100 d-flex justify-content-between  align-items-center p-2'>
                                    <div className='Events_Menu3 d-flex align-items-center gap-2'>
                                        <img src='https://s3-alpha-sig.figma.com/img/a8de/b080/6ecb230ed941d771dd185bcb77ae8017?Expires=1685923200&Signature=LhBsIFyxbbtgPVJH5bmWVaNA3~RjbfRuaSXFAmKEE6eIhN2Qu-ahSA4WLDDx63ikLcPJPANlbMJnpam-PDBk~Sfg47h23oZL3YBLFwkzrjcUO89fOu9SmCbQ-3YLptr5CKDZ5-AwCABscKDJ87JXgJDIqMqeNfdKaMc5vF86d6io9YZXw-D08bTFEAL4YniVCOTCdELEGr7kr5ysgSHd8tinJQpHLN1Op5ytM5Da8AlBjbgRA2AY3doeFOVevZ9OH96labkbEztGw4VYw764hsmy80oqiK6fOq2DUUP6j~u5KXeEJZadYEednit6BaWLKjJFyeQTfnapwCbvxsne-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                        <div className='d-flex flex-column align-items-start'>
                                            <h5 className='luy pt-2'>Jared Sunn</h5>
                                            <p className='wt'><Circle size={6} className='wt1' />&nbsp;&nbsp;&nbsp;&nbsp;records voice message</p>
                                        </div>
                                    </div>
                                    <div className='Events_Menu3'>
                                        <p>1 minutes ago</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='vo'><Mic size={12} />&nbsp;Voice message(01:15)</p>
                                    <p className='para1'>1</p>
                                </div>

                                <button className='btn1'><FileText size={13} />&nbsp;Files(x2)</button>&nbsp;&nbsp;&nbsp;
                                <button className='btn2'><Image size={13} />&nbsp;Photo</button>
                            </div>
                            {/* ========================linear section=============== */}
                            <div onClick={() => setActiveChat(true)} className='Events_Body_Top_section4 mt-3 shadow rounded-2 p-2'>
                                <div className='w-100 d-flex justify-content-between  align-items-center p-2'>
                                    <div className='Events_Menu3 d-flex align-items-center gap-3'>
                                        <img src='https://s3-alpha-sig.figma.com/img/a989/fdc8/9c83b167b9782d670e311f9d9eb4e890?Expires=1685923200&Signature=ZFVfqY3UifpWUNMd0tkl6893ZyByhaKa8aVBFcZgjhCd3qhLCJFqXqT2h7aFCk7qZnM51GImm8cACBH3yIhi-wFvfpgaHgvbJzUZvDCij4TZKeYrMDk~Q5ExQnf6z9Yj-P87HR1Bxu49oBzt3G6u5Vdeh-C6qVZIR4dox8pcDig1r005z9IDZQObXCYaM1U8pDuXQCGZ7uit2yefucgjPSeV7AGBkMAzmrJ2MmUx04zvLJ3P20vvezces9OAHRT2cLqPE4XE6myyyLkDjlYHQewo3oKOe0lkRQ8avuaFyrMyDrt8btE0CcSXK~fX9I59BcZY5jeCnc6zLLJrz3HbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                        <div className='d-flex flex-column align-items-start gap-1'>
                                            <h5 className='luy pt-2'>Nika Jerrardo</h5>
                                            <p className='wt text-white'>last online 5 hours ago</p>
                                        </div>
                                    </div>
                                    <div className='Events_Menu3'>
                                        <p className='text-white'>3 days ago</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='pera text-white'>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                                </div>

                            </div>
                            {/*======================= last section=================== = */}
                            <div onClick={() => setActiveChat(true)} className='w-100 d-flex justify-content-between  align-items-center p-2 shadow mt-3'>
                                <div className='Events_Menu3 d-flex align-items-center gap-3'>
                                    <img src='https://s3-alpha-sig.figma.com/img/8f24/0a29/fffb0839abc4b0012a1d0fbf72f01174?Expires=1685923200&Signature=JxXLpIBRJxB8n-W6G357Ol-zyjKs0~CfdV9EtJy4RoJfzRz8bo-94YNCws6Q6dwjjSIMAotr6tGBgFC2kPpiU1YnrhJ~0-EyuNB8G8c7g-NBlaz9dCwvDwFkqOMNA-qXpb-x9YTQJ093YEwZ6X1AX3txNk~qr2XKvQOStGNLzw4cNfR77px~W7skjhK-wQZYZpqG4dQbNFKIaE~exe-ZInkB52EpKsfaweMCGqG0Y6LuQZ27MuSbvZprKZvi93Z9GONlBUgMxHs3iAr42U6YLikfso3r5rse23ZKra42W8BodPyKo6gBzsXjcse1WRxQmJGtNibr9f5DAibJ155wpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                                    <div className='d-flex flex-column align-items-start gap-1'>
                                        <h5 className='luy mt-5'>david Amrosa</h5>
                                        <p style={{ color: "#2A8BF2" }}>last online 5 hours ago</p>
                                    </div>
                                </div>
                                <div className='Events_Menu3'>
                                    <p className='text-dark p-2'>3 days ago</p>
                                </div>
                            </div>


                        </Col>
                        {/*================================= end last section=========================== */}
                        {/* ======================start third section=================== */}
                        <Col md={7} sm={12} className={`${activeChat === true ? "" : "NotInMobile"} h-100`}>
                            <Card className='w-100 shadow cardSection_he'>
                                <CardHeader className='d-flex align-items-center justify-content-between cardheader'>
                                    <div className="UserProfileCont d-flex align-items-center gap-2">
                                        <img src='https://s3-alpha-sig.figma.com/img/fa64/f5b7/685ecbe71d740ad73411bccba68b2aff?Expires=1685923200&Signature=Rhrhw3ZZb0xzy-N9QvBoUvCubYGRijl18m7041SqJb6-SU-I85giuPFcE~C~BnOvePOZ1gqRYtYxD31o8sW3~SzjUs~u3Edc17gZOekR4~Jvr9JQ~pPAxN9H6f~xDzOKpLbK5XkWAwc6w5ATs4PydGlli-t~iQwsUwSfLA~qvU0Q8oMzZ6AMl6~rf5PGtL2BHkKC9ATEINvDG9SiEDWkxHa4Gb22~~OiAMnzj7WqsvnN9Z4iZBLk~k7xFH2KXCihSGlde3i1Rn88HlxZIf0-tPR7UjZPcGNg-EqUBlIQNI56ok1aePSRgXCmQFBv4iHX0WByY5rj4ergfUIzQYxNhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='UserImgEdit' alt='UserImg' />
                                        <div className='d-flex flex-column  align-items-start justify-content-center'>
                                            <span className='nikolo_header'>Nicholas Pooran</span>
                                            <span className='last_seen'>Last Seen 5 hours ago </span>
                                        </div>

                                    </div>
                                    <div className='d-flex justify-content-end  gap-2'>
                                        <span className='p-2 rounded-circle shadow-lg '>
                                            <Paperclip size={13} />
                                        </span>
                                        <span className='p-2 rounded-circle shadow-lg '>
                                            <MoreVertical size={13} />
                                        </span>
                                    </div>

                                </CardHeader>
                                <CardBody className='ScrollYMsg text-center '>
                                    <div className='d-flex align-items-start justify-content-start gap-2 leftMsg' style={{ maxWidth: "70%" }}>
                                        <img className='chatUserImg' src="https://s3-alpha-sig.figma.com/img/fa64/f5b7/685ecbe71d740ad73411bccba68b2aff?Expires=1685923200&Signature=Rhrhw3ZZb0xzy-N9QvBoUvCubYGRijl18m7041SqJb6-SU-I85giuPFcE~C~BnOvePOZ1gqRYtYxD31o8sW3~SzjUs~u3Edc17gZOekR4~Jvr9JQ~pPAxN9H6f~xDzOKpLbK5XkWAwc6w5ATs4PydGlli-t~iQwsUwSfLA~qvU0Q8oMzZ6AMl6~rf5PGtL2BHkKC9ATEINvDG9SiEDWkxHa4Gb22~~OiAMnzj7WqsvnN9Z4iZBLk~k7xFH2KXCihSGlde3i1Rn88HlxZIf0-tPR7UjZPcGNg-EqUBlIQNI56ok1aePSRgXCmQFBv4iHX0WByY5rj4ergfUIzQYxNhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="ChatUserImg" />
                                        <div>
                                            <div className="Msg d-flex flex-column align-items-start justify-content-start shadow position-relative ">
                                                Hello! Finally found the time to write to you I need your help in creating interactive animations for my mobile application.

                                                <MoreHorizontal color="#b6bdcc" size={14} className='threeDotIcon' />
                                            </div>
                                            <div className="MsgTime text-muted text-end">
                                                2 hr ago
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-start justify-content-start gap-2 leftMsg p-2' style={{ maxWidth: "40%" }}>

                                        <div>

                                            <div className="Msg d-flex flex-column align-items-start justify-content-start shadow position-relative" style={{ marginLeft: "40px" }}>
                                                Can I send you files?
                                                <MoreHorizontal color="#b6bdcc" size={14} className='threeDotIcon' />
                                            </div>
                                            <div className="MsgTime text-muted text-end">
                                                4 days ago
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-start justify-content-start gap-2 rightMsg p-2' style={{ maxWidth: "40%" }}>

                                        <div>
                                            <div className="Msg1 d-flex flex-column align-items-start justify-content-start shadow position-relative">
                                                <MoreHorizontal color="#b6bdcc" size={14} className='threeDotIcon1' />
                                                Hey! Okay, send out.
                                                <Check color="#b6bdcc" size={14} className='threeDotIcon' />
                                            </div>
                                            <div className="MsgTime text-muted text-end">
                                                4 days ago
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-start justify-content-start gap-2 leftMsg p-2' style={{ maxWidth: "40%" }}>

                                        <div>

                                            <div className='d-flex align-items-start justify-content-start gap-2 leftMsg' style={{ maxWidth: "100%" }}>
                                                <img className='chatUserImg' src="https://s3-alpha-sig.figma.com/img/fa64/f5b7/685ecbe71d740ad73411bccba68b2aff?Expires=1685923200&Signature=Rhrhw3ZZb0xzy-N9QvBoUvCubYGRijl18m7041SqJb6-SU-I85giuPFcE~C~BnOvePOZ1gqRYtYxD31o8sW3~SzjUs~u3Edc17gZOekR4~Jvr9JQ~pPAxN9H6f~xDzOKpLbK5XkWAwc6w5ATs4PydGlli-t~iQwsUwSfLA~qvU0Q8oMzZ6AMl6~rf5PGtL2BHkKC9ATEINvDG9SiEDWkxHa4Gb22~~OiAMnzj7WqsvnN9Z4iZBLk~k7xFH2KXCihSGlde3i1Rn88HlxZIf0-tPR7UjZPcGNg-EqUBlIQNI56ok1aePSRgXCmQFBv4iHX0WByY5rj4ergfUIzQYxNhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="ChatUserImg" /> 
                                                <div>
                                                    <div className="Msg d-flex flex-column align-items-start justify-content-start shadow position-relative">
                                                        Style .Zip
                                                        <MoreHorizontal color="#b6bdcc" size={14} className='threeDotIcon' />
                                                    </div>
                                                    <div className="MsgTime text-muted text-end">
                                                        4 days ago
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="Timestamps w-100">
                                        <h6 className='timeStrip'>3 days ago</h6>
                                    </div>

                                    <div className='d-flex align-items-start justify-content-start gap-2 rightMsg p-2' style={{ maxWidth: "40%" }}>
                                        <div>
                                            <div className="Msg1 d-flex flex-column align-items-start justify-content-start shadow position-relative">
                                                <MoreHorizontal color="#b6bdcc" size={14} className='threeDotIcon2' />
                                                Hello! I tweaked everything you asked. I am sending the finished file.
                                                <Check color="#b6bdcc" size={14} className='threeDotIcon' />
                                            </div>
                                            <div className="MsgTime text-muted text-end">
                                                3 days ago
                                            </div>
                                        </div>

                                    </div>

                                </CardBody>
                                {/* =================footer section================== */}
                                <CardFooter className='footerBox bg-white d-flex flex-nowrap gap-2 '>
                                    <span className='p-2 bg-dark rounded-circle text-white footerIconSize'>
                                        <Plus size={14} onClick={() => setShow(!show)} />

                                        {show ?
                                            <span className=' footerIconSize2  flex-column gap-2'>
                                                <span className='p-2 bg-dark  text-white footerIconSize'>
                                                    <Film size={14} />

                                                </span>
                                                <span className='p-2 bg-dark rounded-circle text-white footerIconSize'>

                                                    <MessageSquare size={14} />

                                                </span>
                                                <span className='p-2 bg-dark rounded-circle text-white footerIconSize'>

                                                    <Film size={14} />

                                                </span>
                                            </span>
                                            : ""}

                                    </span>
                                    <Input className='border-0 inputBox' placeholder='Type a message here......' />
                                    <span className='p-2  rounded-circle text-dark footerIconSize1'>
                                        <Smile size={14} />
                                    </span>
                                    <span className='p-2 bg-dark rounded-circle text-white footerIconSize'>
                                        <Send size={14} />
                                    </span>

                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Fragment>
    )
}

export default ChatBox
