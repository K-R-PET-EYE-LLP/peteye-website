import React, { useEffect, useState } from 'react';
import "./Header.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine, RiBookOpenFill, RiBuilding4Fill, RiHeart2Fill, RiHome4Fill, RiShakeHandsFill } from "react-icons/ri";
import AOS from 'aos';

const Android="https://res.cloudinary.com/djweedhpy/image/upload/v1709896978/Landing%20page/desktop/download_ibjjrt.png",
apple="https://res.cloudinary.com/djweedhpy/image/upload/v1709896977/Landing%20page/desktop/download_1_zeayui.png"


const Menu = () => {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [heartDropdownOpen, setHeartDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 200 });
  }, [])
  // for mobile

  const [isHomeSubMenuVisible, setHomeSubMenuVisibility] = useState(false);
  const [isAboutUsSubMenuVisible, setAboutUsSubMenuVisibility] = useState(false);
  const [isMainMenuVisible, setMainMenuVisibility] = useState(true);
  const [isServiceSubMenuVisible, setServiceSubMenuVisibility] = useState(false);

  const handleHomeClick = () => {
    setHomeSubMenuVisibility(!isHomeSubMenuVisible);
    setAboutUsSubMenuVisibility(false);
    setServiceSubMenuVisibility(false);
    setMainMenuVisibility(false);
  };

  const handleAboutUsClick = () => {
    setAboutUsSubMenuVisibility(!isAboutUsSubMenuVisible);
    setHomeSubMenuVisibility(false);
    setServiceSubMenuVisibility(false);
    setMainMenuVisibility(false);
  };

  const handleServiceClick = () => {
    setServiceSubMenuVisibility(!isServiceSubMenuVisible);
    setHomeSubMenuVisibility(false);
    setAboutUsSubMenuVisibility(false);
    setMainMenuVisibility(false);
  };

  const handleSubmenuClick = (option) => {
    // Handle the click on submenu items here
    console.log(`Clicked on ${option}`);
    setHomeSubMenuVisibility(false);
    setAboutUsSubMenuVisibility(false);
    setServiceSubMenuVisibility(false);
    setMainMenuVisibility(true);
  };

  //end of mobile 


  const toggleHomeDropdown = () => {
    closeDropdowns()
    setHomeDropdownOpen(!homeDropdownOpen);
  }
  const toggleHeartDropdown = () => {
    closeDropdowns()
    setHeartDropdownOpen(!heartDropdownOpen);
  }
  const toggleAboutDropdown = () => {
    closeDropdowns()
    setAboutDropdownOpen(!aboutDropdownOpen);
  }
  const toggleGuideDropdown = () => {
    closeDropdowns()
    setGuideDropdownOpen(!guideDropdownOpen);
  }
  const toggleSupportDropdown = () => {
    closeDropdowns()
    setSupportDropdownOpen(!supportDropdownOpen);
  }

  const closeDropdowns = () => {
    setHomeDropdownOpen(false);
    setHeartDropdownOpen(false);
    setAboutDropdownOpen(false);
    setGuideDropdownOpen(false);
    setSupportDropdownOpen(false);
  }



  return (

    <div>
      <div className="menuOptions" data-aos="fade-down" onMouseLeave={closeDropdowns}>

        {/* Home Link with Submenu */}
        <div className="menuImageContainer"   >
          <Link to="/" >
            <div>
        <RiHome4Fill className="rIcon" onMouseEnter={toggleHomeDropdown} />
        <p>&nbsp;Home</p>
          </div>
          </Link>

          {/* Home Dropdown */}
          {homeDropdownOpen && (
            <div className="homeDropdown">
              <MDBContainer>
                <div className="menu-drop-down-container">
                  {/* <section>
                    <div className="menu-drop-down-sec-1">
                      <Link href="/" className='submenu'><span>Submenu 1</span>  <RiArrowRightSLine /></Link>
                      <Link href="/" className='submenu'><span>Submenu 1</span>  <RiArrowRightSLine /></Link>
                      <Link href="/" className='submenu'><span>Submenu 1</span>  <RiArrowRightSLine /></Link>
                    </div>
                    <div className="menu-drop-down-sec-1">
                      <Link href="/" className='submenu'><span>Submenu 1</span>  <RiArrowRightSLine /></Link>
                      <Link href="/" className='submenu'><span>Submenu 1</span>  <RiArrowRightSLine /></Link>
                    </div>
                  </section>
                  <div className="menu-divider"></div> */}
                  <section>
                    <div className="menu-drop-down-sec-2">
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                    </div>

                  </section>
                </div>
              </MDBContainer>
            </div>
          )}
        </div>

        {/* Other Links */}
        <div className="menuImageContainer" >
          <Link to="/Service/">
          <div>
        <RiHeart2Fill className='rIcon' onMouseEnter={toggleHeartDropdown} />
        <p>Services</p>
          </div>
            </Link>

          {/* Heart Dropdown */}
          {heartDropdownOpen && (
            <div className="homeDropdown">
              <MDBContainer>
                <div className="menu-drop-down-container">
                  <section>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/service/dms/#services" className='submenu'><span>DMS</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/service/hms/#services" className='submenu'><span>HMS</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/service/dss/#services" className='submenu'><span>DSS</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/service/#fetch-eco-system" className='submenu'><span>Fetch Eco-system</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/service/#tag-echo" className='submenu'><span>Tag Echo</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                  </section>
                  <div className="menu-divider"></div>
                  <section>
                    <div className="menu-drop-down-sec-2">
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                    </div>

                  </section>
                </div>
              </MDBContainer>
            </div>
          )}
        </div>
        <div className="menuImageContainer"  >
          <Link to="/about/">
          <div>
        <RiBuilding4Fill className="rIcon" onMouseEnter={toggleAboutDropdown} />
        <p>About</p>
          </div>
          </Link>

          {/* About Dropdown */}
          {aboutDropdownOpen && (
            <div className="homeDropdown">
              <MDBContainer>
                <div className="menu-drop-down-container">
                  <section>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/about/" className='submenu'><span>Home</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/about/#mission" className='submenu'><span>Mission</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <a href="/about/#vision" className='submenu'><span>Vision</span>  <RiArrowRightSLine className='riIcon' /></a>
                    </div>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/about/#our-activity" className='submenu'><span>Our Activity</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/about/#our-team" className='submenu'><span>Out Team</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/about/#need-support" className='submenu'><span>Need Support?</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                  </section>
                  <div className="menu-divider"></div>
                  <section>
                    <div className="menu-drop-down-sec-2">
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                    </div>

                  </section>
                </div>
              </MDBContainer>
            </div>
          )}
        </div>
        <div className="menuImageContainer"  >
          <Link to="/guide/">
          <div>
        <RiBookOpenFill className="rIcon" onMouseEnter={toggleGuideDropdown} />
            <p>Guide</p>
          </div>
          </Link>


          {/* Guide Dropdown */}
          {guideDropdownOpen && (
            <div className="homeDropdown">
              <MDBContainer>
                <div className="menu-drop-down-container">
                  <section>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/guide/all" className='submenu'><span>All</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/guide/tips_and_tricks" className='submenu'><span>Tips & Tricks</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/guide/pet_care" className='submenu'><span>Pet Care</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/guide/health_and_nutritions" className='submenu'><span>Health Nutritions</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                  </section>
                  <div className="menu-divider"></div>
                  <section>
                    <div className="menu-drop-down-sec-2">
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                    </div>

                  </section>
                </div>
              </MDBContainer>
            </div>
          )}
        </div>
        <div className="menuImageContainer"  >
          <Link to="/support/">
          <div>
        <RiShakeHandsFill className='rIcon' onMouseEnter={toggleSupportDropdown} />
            <p>Support</p>
          </div>
          </Link>


          {/* Support Dropdown */}
          {supportDropdownOpen && (
            <div className="homeDropdown">
              <MDBContainer>
                <div className="menu-drop-down-container">
                  <section>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/support" className='submenu'><span>Manage Accounts</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/support" className='submenu'><span>Payment History</span>  <RiArrowRightSLine className='riIcon' /></Link>
                      <Link to="/support" className='submenu'><span>Delivery Status</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                    <div className="menu-drop-down-sec-1">
                      <Link to="/support" className='submenu'><span>Contact Us</span>  <RiArrowRightSLine className='riIcon' /></Link>
                    </div>
                  </section>
                  <div className="menu-divider"></div>
                  <section>
                    <div className="menu-drop-down-sec-2">
                      <div className="menu-dropdown-img"></div>
                      <div className="menu-dropdown-img"></div>
                    </div>

                  </section>
                </div>
              </MDBContainer>
            </div>
          )}
        </div>




      </div>
      {/* for mobile */}
      <div className="mobile-menu d-lg-none" onMouseLeave={closeDropdowns}>
        {isMainMenuVisible && (
          <>
            <MDBAccordion flush className='mobile-menu-accordion'>
              <MDBAccordionItem collapseId={1} headerTitle='About US'>
                <div className="accordion-items">
                  <Link to="/">Home</Link>
                  <Link to="/about/#mission">Mission</Link>
                  <Link to="/about/#vision">Vision</Link>
                  <Link to="/about/#our-activity">Our Activity</Link>
                  <Link to="/about/#our-team">Our Team</Link>
                  <Link to="/about/#need-support">Need Support</Link>
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle='Service'>
                <div className="accordion-items">
                  <Link to="/service/dms/#services">DMS</Link>
                  <Link to="/service/hms/#services">HMS</Link>
                  <Link to="/service/dss/#services">DSS</Link>
                  <Link to="/service/#fetch-eco-system">Fetch Eco-system</Link>
                  <Link to="/service/#tag-echo">Tag Echo</Link>
                </div>
                </MDBAccordionItem>
            </MDBAccordion>
            <Link to="/guide">Guide</Link>
            <Link to="/support">Support</Link>
            <div className='download-icons'>
              <a href='/'>
                <img src={apple} alt='playstore' />
              </a>
              <a href='/'>
                <img src={Android} alt='playstore' />
              </a>
            </div>

          </>

        )}


      </div>

    </div>
  );
};

export default Menu;