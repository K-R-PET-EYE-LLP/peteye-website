import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

const images = {
  catimg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702647/Tab/Group_1171277016_rr7npa.png"
}
const logo = "https://res.cloudinary.com/djweedhpy/image/upload/v1709897397/Desktop/download_2_yawoh6.png"


const LinkSection = () => {
  const [isNavigationOpen, setNavigationOpen] = useState(false);
  const [isLegalOpen, setLegalOpen] = useState(false);

  const toggleNavigation = () => {
    setNavigationOpen(!isNavigationOpen);
  };

  const toggleLegal = () => {
    setLegalOpen(!isLegalOpen);
  };



  return (
    <section>
      <section className='container11'>
        <div className="container-fluid container5 py-5">
          <h1 className="h1">PetEye's Inbox: Safe & Connected!</h1>
          <div className="container">
            <p className="paragraph-text">
              Sign up for product updates, offers, and learn more about PET EYE and its Services. Must be over 16 years to sign up.
            </p>

          </div>
          <div className="d-flex justify-content-center">
            <div className="subscription-box">
              <input
                type="email"
                placeholder="Enter your email"
              // className="form-control mb-2"
              />
              <button> Join Us</button>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <p className="bottom-text-subsciption">
              See our privacy statement to find out how we collect and use your data, to contact us with privacy questions, or to exercise your personal data rights.
            </p>
          </div>
        </div>
      </section>



      <section className="bg-light text-dark py-5 d-none d-md-block navigationsec">
        <div className="container">
          {/* <div className="row justify-content-between align-items-center mainsec">
            <section className="col-md-3 px-4 py-3">
              <div className="navigation-title font-weight-bold mb-3">Navigation</div>
              <ul className="navigation-links list-unstyled">
                <li><a href="#" className="text-dark">Home</a></li>
                <li><a href="#" className="text-dark">About Us</a></li>
                <li><a href="#" className="text-dark">What We Do</a></li>
                <li><a href="#" className="text-dark">To the Power of 10</a></li>
                <li><a href="#" className="text-dark">Donate</a></li>
              </ul>
            </section>
            <section className="col-md-3 px-4 py-3 legalsec">
              <div className="legal-title font-weight-bold mb-3">Legal</div>
              <ul className="legal-links list-unstyled">
                <li><a href="#" className="text-dark">Refund Policy</a></li>
                <li><a href="#" className="text-dark">Privacy Policy</a></li>
                <li><a href="#" className="text-dark">Terms & Conditions</a></li>

              </ul>
            </section>
            <section className="col-md-4 px-4 py-3 catsec">
              <div className="contact-title mb-3">
                <img src={catimg} alt='img' className="img-fluid catimg" />
                <div className="contactext text-center">
                  <p className="font-weight-bold ctext">Our Dedicated Care Support - 24 Hours by 7 Days</p>
                  <p className='ctext'>Monday-Saturday</p>
                  <p className='ctext'>+91 00000-00000</p>
                </div>
              <div className="contact-buttons">
                <button className="btn btn-dark btn-lg contact-button mb-2">Contact Us</button>
              </div>
              </div>
            </section>
          </div> */}
          <div className="">

            <div className="footer-content border-bottom mb-4">
              <div className="footer-content-sec-1">
                <div>
                  <b>NAVIGATION</b>
                  <div>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/">To the power of 10</Link></li>
                    <li><Link to="/">Donate</Link></li>
                  </div>
                </div>
                <div>
                  <b>LEGAL</b>
                  <div>

                    <li><Link to="/">Refund Policy</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Terms and condition</Link></li>
                  </div>
                </div>
              </div>
              <div className="footer-content-sec-2">
                <div>
                  <img src={images.catimg} alt="" />
                  {/* <span>Our Dedicated Care Support - 24 Hours by 7 Days</span>
                <span>Monday - Sunday</span>
                <a href="#">+91 000000000000</a> */}
                  <button className='primary-btn p-0' >Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <section className="footer container d-none d-md-flex justify-content-between align-items-center">

          <div className="col-md-4 d-flex jusify-content-start">
            <div className="">
              <img src={logo} alt="img" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="middle w-100 d-flex justify-content-center">
              <p> &copy;2023 K R PET EYE LLP. All Right Reserved.</p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <div className="socialmedia d-flex justify-content-end">
              <span>
                <RiFacebookFill />
              </span>
              <span>
                <RiLinkedinFill />
              </span>
              <span>
                <RiTwitterXFill />
              </span>
            </div>
          </div>
        </section>
      </section>
      {/* mobilefooter */}
      <section className='mobilefooter container'>
        <div>
          <img className='mobilefooterlogo' src={logo} alt='logo' />
          <span className='mftext'>PetEYE</span>

        </div>
        {/* <hr className="col-md-12 footerline" /> */}

        <div>
          <h1 onClick={toggleNavigation}>
            <span className='navplus'>NAVIGATION</span> {isNavigationOpen ? '-' : '+'}
          </h1>
          {isNavigationOpen && (
            <div className='mfnav'>

              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/service">Service</Link>
              <Link to="/guide">Guide</Link>
              <Link to="/support">Suport</Link>

            </div>
          )}
        </div>

        {/* <hr className="col-md-12 footerline" /> */}

        <div>
          <h1 onClick={toggleLegal}>
            <span className='legalplus'>LEGAL</span> {isLegalOpen ? '-' : '+'}
          </h1>
          {isLegalOpen && (
            <div className='mfnav'>

              <a href="#">Refund Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>

            </div>
          )}
        </div>

        {/* <hr className="col-md-12 footerline" /> */}

        <div className='mfsocial'>
            <span>
              <RiFacebookFill />
            </span>
            <span>
              <RiLinkedinFill />
            </span>
            <span>
              <RiTwitterXFill />
            </span>
        </div>

        <p className='mflasttext'>&copy;2023 K R PET EYE LLP. All Right Reserved.</p>
      </section>
  



    </section>
  );
};

export default LinkSection;