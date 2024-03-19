import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./Service.css";
import { useLocation, useParams } from 'react-router-dom';

const images = {
    qrscanner: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702671/Tab/Group_1171276963_ll4f4j.png"
}

const catdog="https://res.cloudinary.com/djweedhpy/image/upload/v1709701969/Desktop/87fa3bba-f762-4110-93c3-3eeef5671822_2_1_zwxpcw.png",
dmslogo="https://res.cloudinary.com/djweedhpy/image/upload/v1709898968/Desktop/download_5_a90p2u.png",
hmslogo="https://res.cloudinary.com/djweedhpy/image/upload/v1709898965/Desktop/download_6_nbvuqs.png",
dsslogo="https://res.cloudinary.com/djweedhpy/image/upload/v1709898963/Desktop/download_7_thedv4.png",
logo="https://res.cloudinary.com/djweedhpy/image/upload/v1709897397/Desktop/download_2_yawoh6.png",
iphone="https://res.cloudinary.com/djweedhpy/image/upload/v1709899144/Desktop/iphone.a47d49252946f7aa7156_1_xctbzr.png",
hms="https://res.cloudinary.com/djweedhpy/image/upload/v1709899144/Desktop/iphone.a47d49252946f7aa7156_1_xctbzr.png",
dss="https://res.cloudinary.com/djweedhpy/image/upload/v1709899725/Desktop/dss.e06de17822f950da2313_zl3weq.png",
Dms1="https://res.cloudinary.com/djweedhpy/image/upload/v1709898957/Desktop/Dms1.af67868bbb85ac478819_f6zvk6.png",
Dms2="https://res.cloudinary.com/djweedhpy/image/upload/v1709898955/Desktop/Dms2.801c19bf77962eb9cf15_y5zzwc.png",
Dms3="https://res.cloudinary.com/djweedhpy/image/upload/v1709898959/Desktop/Dms3.990afe8ab787c2ee5cf0_jpejv3.png",
Dms4="https://res.cloudinary.com/djweedhpy/image/upload/v1709898959/Desktop/Dms3.990afe8ab787c2ee5cf0_jpejv3.png",
hms1="https://res.cloudinary.com/djweedhpy/image/upload/v1709899476/Desktop/hms1.6aac8966a1d691875592_hfbfmz.png",
hms2="https://res.cloudinary.com/djweedhpy/image/upload/v1709899475/Desktop/hms2.b50551433928ba81907d_namaph.png",
hms3="https://res.cloudinary.com/djweedhpy/image/upload/v1709899472/Desktop/hms3.89feb92d5324ea6bdae1_oz8vdb.png",
hms4="https://res.cloudinary.com/djweedhpy/image/upload/v1709899470/Desktop/hms4.7d09629ad3ca9d41441c_mnutzo.png",
dss1="https://res.cloudinary.com/djweedhpy/image/upload/v1709899872/Desktop/dss1.d30e35117902daf30cec_zaqvnv.png",
dss2="https://res.cloudinary.com/djweedhpy/image/upload/v1709899872/Desktop/dss2.c79e91bfc24b8368b019_yaldms.png",
dss3="https://res.cloudinary.com/djweedhpy/image/upload/v1709899872/Desktop/dss3.af36b47cef7a256fab9b_uid1vv.png",
dss4="https://res.cloudinary.com/djweedhpy/image/upload/v1709899871/Desktop/dss4.a7c952f82bfd6978bb8c_xr2bep.png",
globe="https://res.cloudinary.com/djweedhpy/image/upload/v1709701956/Desktop/image_16406_nyzunw.png"

const sec3Vid="https://res.cloudinary.com/djweedhpy/video/upload/v1709705609/videos%20and%20gif/ADD_FAMILY_epvcdw.mp4"


const Service = () => {
    const { screen } = useParams()
    
    useEffect(() => {
        setActiveContent(screen ?? "dms");
    }, [screen])
    const location= useLocation()
    useEffect(() => {
        const scrollToRef = () => {
            const element = document.getElementById(location.hash.split("#")?.[1]);
            console.log(element)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToRef()
    }, [location])



    // playvideo

    const videoRef = useRef(null);
    const [videoVisible, setVideoVisible] = useState(false);

    const playVideo = () => {
        setVideoVisible(true);
        videoRef.current.play();
    };

    const resetVideo = () => {
        setVideoVisible(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };


    // end of video




    const [activeContent, setActiveContent] = useState("dms");


    const handleButtonClick = (contentKey) => {
        setActiveContent(contentKey);
    };
    const renderContent = (contentKey) => {
        switch (contentKey) {
            case "dms":
                return <div className='section2'>
                    <div className="sv-sec-2-container-1">
                        <div>
                            {/* <p className='dms1'>DMS</p> */}
                            <h1 className='dms2'>Data Management System</h1>
                        </div>
                        <div className='sv-sec-2-img-container'>
                            <img src={iphone} alt="" />
                        </div>
                        <div>
                            <img src={Dms1} alt='image1' className='img1' />
                            <img src={Dms2} alt='image1' className='img1' />
                            <img src={Dms3} alt='image1' className='img1' />
                            <img src={Dms4} alt='image1' className='img1' />
                        </div>
                        <p className='dms3'>Discover unparalleled data control and efficiency with our Data  Management Service. Experience the peace of mind that comes with  top-tier security, the ease of a user-friendly interface, and the power to maximize your data's impact.</p>
                    </div>
                    <div className="sv-sec-2-container-2">
                        <img src={iphone} alt='img2' className='img2' />
                    </div>
                </div>;
            case "hms":
                return <div className='section2'>
                    <div className="sv-sec-2-container-1">
                        <div>

                            {/* <p className='dms1'>HMS</p> */}
                            <h1 className='dms2'>Health  Management System</h1>
                        </div>
                        <div className='sv-sec-2-img-container'>
                            <img src={hms} alt="" />col
                        </div>
                        <div>
                            <img src={hms1} alt='image1' className='img1' />
                            <img src={hms2} alt='image1' className='img1' />
                            <img src={hms3} alt='image1' className='img1' />
                            <img src={hms4} alt='image1' className='img1' />
                        </div>
                        <p className='dms3'>Elevate your pet's well-being with our Pet Health Management   Service. We offer a comprehensive solution that combines   advanced technology, personalized care, and convenience to  ensure your furry friend enjoys the best possible health and  happiness.</p>
                    </div>
                    <div className="sv-sec-2-container-2">
                        <img src={hms} alt='img2' className='img2' />
                    </div>
                </div>;
            case "dss":
                return <div className='section2'>
                    <div className="sv-sec-2-container-1">
                        <div>

                            {/* <p className='dms1'>DSS</p> */}
                            <h1 className='dms2'>Door Step Services</h1>
                        </div>
                        <div className='sv-sec-2-img-container'>
                            <img src={dss} alt="" />
                        </div>
                        <div>
                            <img src={dss1} alt='image1' className='img1' />
                            <img src={dss2} alt='image1' className='img1' />
                            <img src={dss3} alt='image1' className='img1' />
                            <img src={dss4} alt='image1' className='img1' />
                        </div>
                        <p className='dms3'> Elevate your pet's well-being with our Pet Health Management Service. We offer a comprehensive solution that combines advanced technology, personalized care, and convenience to ensure your furry friend enjoys the best possible health and  happiness.</p>
                    </div>
                    <div className="sv-sec-2-container-2">
                        <img src={dss} alt='img2' className='img2' />
                    </div>
                </div>;
            case "cms":
                return <div className='section2'>
                    <div className="sv-sec-2-container-1">
                        <p>Coming soon...</p>
                    </div>
                </div>
            default:
                return <p>Default Content</p>;
        }
    };

    console.log(activeContent, activeContent == "cms" ? 'active-btn' : '')

    return (
        <section className='service scroll-snap' style={{ minWidth: "100vw" }}>
            <section>
                <Header />
            </section>
            {/* section1 */}

            <section className="section1">
                <Container>
                    <Row>
                        <Col>
                            <p className="lead1">Our Services</p>
                            <h1 className="lead2">Empowering Pet Care</h1>
                            <p className="lead3">Discover a world of pet services designed to elevate your pet’s well-being</p>


                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <img
                                src={catdog}
                                alt="Big Image"
                                className="img-fluid catimg"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section2 */}

            <section className='sv-sec-2' id='services'>
                <Container className=''>
                    {/* Desktop layout */}

                    <Row className="mb-4 " >
                        <Col className='sec2heading'>
                            <div>
                                <button className={`btn btn-outline-dark sec2btn ${activeContent === "dms" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("dms")}>
                                    <img src={dmslogo} />&emsp;
                                    <span>
                                        Data Management System
                                    </span>
                                </button>
                                <span>DMS</span>
                            </div>
                            <div>


                                <button className={`btn btn-outline-dark sec2btn ${activeContent === "hms" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("hms")}>
                                    <img src={hmslogo} />&emsp;
                                    <span>
                                        Health Management System
                                    </span>
                                </button>{' '}
                                <span>HMS</span>
                            </div>
                            <div>

                                <Button className={`btn btn-outline-dark sec2btn ${activeContent == "dss" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("dss")}>
                                    <img src={dsslogo} />&emsp;
                                    <span>
                                        Door Step Service
                                    </span>
                                </Button>{' '}
                                <span>DSS</span>
                            </div>
                            <div>

                                <Button className={`btn btn-outline-dark sec2btn ${activeContent == "cms" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("cms")}>
                                    <img src={dsslogo} />&emsp;
                                    <span>
                                        Coming Soon
                                    </span>
                                </Button>
                                <span>Coming Soon</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="content-box">
                                {renderContent(activeContent)}
                            </div>
                        </Col>
                    </Row>

                </Container>

                {/* mobile layout */}

                {/* <Container className="d-lg-none ">

                    <Row className='mb-4 mobilesec2'>
                        <Col className='sec21heading'>
                            <Button className={`sec21btn ${activeContent === "content1" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("content1")}>
                                <img src={dmslogo} />
                            </Button>{' '}
                            <Button className={`sec21btn ${activeContent === "content2" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("content2")}>
                                <img src={hmslogo} />
                            </Button>{' '}
                            <Button className={`sec21btn ${activeContent === "content3" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("content3")}>
                                <img src={dsslogo} />
                            </Button>{' '}
                            <Button className={`sec21btn ${activeContent === "content4" ? 'active-btn' : ''}`} onClick={() => handleButtonClick("content4")}>
                                <img src={dsslogo} />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="content-box">
                                {renderContent(activeContent)}
                            </div>
                        </Col>
                    </Row>
                </Container> */}
            </section>

            {/* section3 */}

            <section className={`black-section`} id='fetch-eco-system' >
                <Container>
                    <div className='sec-3-row'>
                        <div className={`sv-sec-3-container-1`}>
                            <div className={`video-container ${videoVisible ? '' : 'hidden'}`}>
                                <video
                                    ref={videoRef}
                                    src={sec3Vid}
                                    controls
                                    onEnded={resetVideo}
                                    className="img-fluid"
                                />
                            </div>
                            {!videoVisible && (
                                <div className='sv-sec-3-content'>
                                    <p className="small-text">Your Pet’s Complete Ecosystem</p>
                                    <h2 className="big-text">FETCH Ecosystem</h2>
                                    <p className="small-text2">From data nurturing to health guardians, doorstep miracles, and state-of-the-art devices, this is where dreams meet reality.</p>
                                    <button className='secondary-btn' onClick={() => setVideoVisible(true)} style={{ width: "200px" }}>Play</button>
                                    {/* <Button variant="primary" onClick={playVideo}>Play Video</Button> */}
                                </div>
                            )}
                        </div>
                        <div className={`sv-sec-3-container-2 ${videoVisible ? 'hidden' : ''}`}>
                            <img
                                src={globe}
                                alt="Image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* section4 */}

            <section className="responsive-section section4" id='tag-echo'>
                <Container>
                    {/* Mobile layout */}
                    <div className="sv-sec-4-row">
                        <div className='sv-sec-4-container'>
                            <div className='mbscannersec'>
                                <img
                                    src={logo}
                                    alt="Left Image"
                                    className="img-fluid left-image"
                                />
                                <span className="left-small-text">TAG</span>
                            </div>

                            <h2 className="scannerbt">Never lose a pet again.</h2>
                            <p className="scannerst">Echo is a revolutionary pet identification tag with built-in NFC and QR code technology. Access your pet's profile with a simple scan, sharing vital information when needed.</p>
                            <div className='sv-sec-4-btns'>
                                <button className='primary-btn ps-4 pe-4'>Buy</button>
                                <button className='bg-none'>Find out more</button>
                            </div>
                        </div>
                        <div className='sv-sec-4-container'>
                            <img
                                src={images.qrscanner}
                                alt="Big Image"
                                className="img-fluid mt-3"
                            />
                        </div>
                    </div>


                    {/* Desktop layout */}
                    {/* <Row className="d-none d-md-flex">
                        <Col md={6}>
                            <div className="left-content">
                                <img
                                    src={logo}
                                    alt="Left Image"
                                    className="img-fluid left-image"
                                />
                                <span className="left-small-text">TAG</span>
                            </div>
                            <h2 className="scannerbt">Never lose a pet again.</h2>
                            <p className="scannerst">Echo is a revolutionary pet identification tag with built-in NFC and QR code technology. Access your pet's profile with a simple scan, sharing vital information when needed.</p>
                            <div className="button-container">                                <Button variant="primary" className="mr-2 button1">
                                Buy
                            </Button>
                                <Button variant="primary" className='button2'>
                                    Find Out More
                                </Button>
                            </div>

                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src={scanner}
                                alt="Right Image"
                                className="img-fluid right-image scannerimg"
                            />
                        </Col>
                    </Row> */}

                </Container>
            </section>

            <section>
                <Footer />
            </section>




        </section>




    );
};

export default Service