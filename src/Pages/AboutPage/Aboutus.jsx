import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Aboutus.css";
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useLocation } from "react-router-dom";

const Image1="https://res.cloudinary.com/djweedhpy/image/upload/v1709701933/Desktop/Group_1171276804_deumfi.png",
Image3="https://res.cloudinary.com/djweedhpy/image/upload/v1709897591/Desktop/SplashScreenWeb.5108ad31d7747ea7e14f_dwjyzw.gif",
Image4="https://res.cloudinary.com/djweedhpy/image/upload/v1709897700/Desktop/Group_1171276856.88f15d39a68695475f3a_obbtrs.png",
Image5="https://res.cloudinary.com/djweedhpy/image/upload/v1709897912/Desktop/download_3_whmd9t.png",
Image6="https://res.cloudinary.com/djweedhpy/image/upload/v1709701961/Desktop/6491c548-f58a-4c69-a8e9-07d83057fe82_1_gg9ms4.png",
Image7="https://res.cloudinary.com/djweedhpy/image/upload/v1709701946/Desktop/koushik_2_prbzgd.png",
Image8="https://res.cloudinary.com/djweedhpy/image/upload/v1710921738/Desktop/Goveerdhan_sir_1_1_gbgzkb.png",
Image9="https://res.cloudinary.com/djweedhpy/image/upload/v1709701941/Desktop/image_16418_bmvyse.png",
Image10='https://res.cloudinary.com/djweedhpy/image/upload/v1710921617/Desktop/image_16424_j8uahj.png',
Image11="https://res.cloudinary.com/djweedhpy/image/upload/v1710921212/Desktop/image_16421_cgxjcx.png",
Image12="https://res.cloudinary.com/djweedhpy/image/upload/v1709701933/Desktop/Group_1171276841_crlxff.png",
Image13="https://res.cloudinary.com/djweedhpy/image/upload/v1709701939/Desktop/image_16417_vpiboj.png",
line="https://res.cloudinary.com/djweedhpy/image/upload/v1709898380/Desktop/download_4_sddcv4.png"
const Section1 = () => {
  const location= useLocation()
  useEffect(() => {
      const scrollToRef = () => {
          const element = document.getElementById(location.hash.split("#")?.[1]);
          // console.log(element)
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      };
      scrollToRef()
  }, [location])
  return (
    <section className="w-100 scroll-snap abt" style={{minWidth:"100vw"}}>

      <section>
        <Header />
      </section>


      {/* section1 */}


      <section className="hero container" id="home">
        <h1 className="heading1">At PetEYE, We're More Than Just a Brand</h1>
        <h3 className="heading2">-We're a Lifeline for Pets and Their Familes</h3>
        <div className="paradiv">
          <img src={Image1} alt="My Image" className="about img1" />
        </div>
        <p className="paragraph">
          We're on a mission to envelop every moment you share with your beloved
          pet in safety and care. it's the heartbeat of our commitment to you and
          your furry family members. Dive into our story and discover how we're
          transforming pet safety and bonding, one innovation at a time.
        </p>
      </section>

      {/* section2 */}

      <section className="mission container" id="vision">
        {
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src={Image3} alt="img" className="peteyeimg img-fluid" />
            <p style={{marginTop:'-30px'}} className='para1'>With PetEYE</p>
            <p className='para2'>"We envision  a world where Every Pet is Safe and Loved"</p>
            <img src={Image4} alt="img" className="momdogimg img-fluid" />
          </div>
        }
      </section>

      {/* section3 */}

      <section className="section3 container" id="our-activity">
        <div className='divtext'>
          <p className='text12'>Fostering a world where every pet flourishes</p>
          <p className='text21'>we're dedicated to widespread responsible ownership, comprehensive health care advanced data insights, and creating a secure, compassionate community for all.</p>
          <nav className="navbar1">
            <Link to="/service/#fetch-eco-system">
            <button className="fetchbtn">
              <img src={Image5} alt="Sketch Icon" width="24" height="24" />
              FETCH Ecosystem
            </button>
            </Link>
          </nav>
        </div>

      </section>


      {/* section4 */}

      <section className="section-container w-100" id="our-team">
        <div className="image-container">
          <img src={Image6} alt="Your Image" className="centered-image img-fluid" />
        </div>
        <div className="teambox">
          <div className="teambox-head">
            <p className="bottom-text">Our Team</p>
            <img src={line} className='bottom-text1' />
            <p className='bottom-text2'>Uniting Hearts and Paws for a Brighter Future</p>
          </div>
          <Container className="teamcontainer">
            <Row className='row'>
              <Col xs={12} md={4} lg={4} >
                <div className="text-center">
                  <img src={Image7} alt="Your Image" className="centered-image7 img-fluid" />
                  <h1 className='text1'>Koushik Gaja</h1>
                  <h3 className='text2'>Managing partner</h3>
                </div>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <div className="text-center">
                  <img src={Image8} alt="Your Image" className="centered-image8 img-fluid" />
                  <h1 className='text1'>Goverdhan Reddy</h1>
                  <h3 className='text2'>Director of Operations</h3>
                </div>
              </Col>

            </Row>

            <Row className="row">
         
              <Col xs={12} md={4} lg={3}>
                <div className="text-center mimg">
                  <img src={Image9} alt="Your Image" className="centered-image9 img-fluid" />
                  <h1 className='text1 mtext'>Mohit Kuril</h1>
                  <h3 className='text2 mtext'> Developer</h3>
                </div>
              </Col>

              <Col xs={12} md={4} lg={3}>
                <div className="text-center mimg">
                  <img src={Image10} alt="Your Image" className="centered-image9 img-fluid" />
                  <h1 className='text1 mtext'>Jithun Madhav</h1>
                  <h3 className='text2 mtext'> Developer</h3>
                </div>
              </Col>

              <Col xs={12} md={4} lg={3}>
                <div className="text-center simg">
                  <img src={Image11} alt="Your Image" className="centered-image11 img-fluid" />
                  <h1 className='text1'>Subhashini Kannan</h1>
                  <h3 className='text2'>UI/UX Designer</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </section>



      {/* Support Section */}

      <section className="support" id="need-support">
        <div className="container support-con">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <p className="supportPara">Need Support?</p>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-md-4">
              <div className="support-item">
                <img src={Image12} alt="Image 12" className="image121" />
                <div className="support-content">
                  <h1 className="supporttext1">Operations Team</h1>
                  <p className="supporttext2">
                    Our dedicated team is here to guide you every step of the way, with a personal touch and unwavering commitment.
                  </p>
                  <button className="supportbtn" >Contact Sale</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="support-item">
                <img src={Image13} alt="Image 13" className="image12" />
                <div className="support-content">
                  <h1 className="supporttext1">Customer Care</h1>
                  <p className="supporttext2">
                    Have a question or need assistance with anything? Always here to assist you with  a warm and helpful approach.
                  </p>
                  <button className="supportbtn">Contact Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer/>




    </section>

  );
};
export default Section1;
