import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import './LandingPage.css'
import ImageCard from './components/ImageCard'
import VideoModal from './components/VideoModal'
import AOS from 'aos';
import { Link } from 'react-router-dom'

const petEyeImg="https://res.cloudinary.com/djweedhpy/image/upload/v1709897228/Landing%20page/desktop/PetEYE.4f02e2b0fe20852674c4_o3pmsp.png",
mainImg1="https://res.cloudinary.com/djweedhpy/image/upload/v1710406587/Mohit/Frame_1171277161_kvugnv.png",
mainImg2="https://res.cloudinary.com/djweedhpy/image/upload/v1710406592/Mohit/Frame_1171277162_qtzkcz.png",
mainImg3="https://res.cloudinary.com/djweedhpy/image/upload/v1710406581/Mohit/Frame_1171277159_ae5ku0.png",
mainImg4="https://res.cloudinary.com/djweedhpy/image/upload/v1710406597/Mohit/Frame_1171277163_djruel.png",
mainImg5="https://res.cloudinary.com/djweedhpy/image/upload/v1710406603/Mohit/Frame_1171277164_spubgr.png",
sec2Img1="https://res.cloudinary.com/djweedhpy/image/upload/v1709701951/Desktop/205d2156-b217-4f1b-9640-1bc3a54dd2a1_1_gwgqmu.png",
wheelImg="https://res.cloudinary.com/djweedhpy/image/upload/v1710762733/Landing%20page/desktop/Group_1171277035_aceovc.png",
sec5Img="https://res.cloudinary.com/djweedhpy/image/upload/v1709897283/Landing%20page/desktop/fa655bdfd352150fb9538a78491fc34c_bwetw7.png",
mobileImg="https://res.cloudinary.com/djweedhpy/image/upload/v1709896905/Landing%20page/desktop/iphone-12-pro--silver.8e03b609b6a588e53d8c_qeifvh.png",
playStoreBadge="https://res.cloudinary.com/djweedhpy/image/upload/v1709896978/Landing%20page/desktop/download_ibjjrt.png",
appStoreBadge="https://res.cloudinary.com/djweedhpy/image/upload/v1709896977/Landing%20page/desktop/download_1_zeayui.png",
landingFooter="https://res.cloudinary.com/djweedhpy/image/upload/v1710760634/Landing%20page/desktop/fmbeibjsxehbabxc2bfm.png",
youtubeSm='https://res.cloudinary.com/djweedhpy/image/upload/v1710845193/Landing%20page/desktop/gxa9edwvqebzykvgqqa3.png',
instaSm='https://res.cloudinary.com/djweedhpy/image/upload/v1710845193/Landing%20page/desktop/bok9plgfjxknerbrqini.png',
twitterSm='https://res.cloudinary.com/djweedhpy/image/upload/v1710845193/Landing%20page/desktop/uvqiwboro3byuwdrgzsf.png',
facebookSm='https://res.cloudinary.com/djweedhpy/image/upload/v1710845193/Landing%20page/desktop/tyfuaw2c1z2bp0wwnhai.png',
linkedinSm='https://res.cloudinary.com/djweedhpy/image/upload/v1710845193/Landing%20page/desktop/qdqedwiiyejkb5hanhmd.png',
mail='https://res.cloudinary.com/djweedhpy/image/upload/v1710845193/Landing%20page/desktop/iuboowl7inwzgpjtvwtz.png'

const defaultVid="https://res.cloudinary.com/djweedhpy/video/upload/v1710404311/Mohit/Onboard_-_Made_with_Clipchamp_vcxyvp.mp4";

export default function LandingPage() {
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [isHovered, setHovered] = useState(false);
  const [sec3Vid, setSec3Vid] = useState(defaultVid)
  const [imageRotation, setImageRotation] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 500, delay: 50 });
  }, [])

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const playVideo = (src) => {
    setVideoToPlay(src)
  }
  const videoImages = [
    "https://res.cloudinary.com/djweedhpy/image/upload/v1709705419/Landing%20page/tab/Frame_1171277171_rwooza.png",
    "https://res.cloudinary.com/djweedhpy/image/upload/v1709705394/Landing%20page/tab/Frame_1171277383_psn4f8.png",
    "https://res.cloudinary.com/djweedhpy/image/upload/v1709705392/Landing%20page/tab/Frame_1171277176_gsumbw.png",
    "https://res.cloudinary.com/djweedhpy/image/upload/v1709705389/Landing%20page/tab/Frame_1171277175_uwmxqx.png",
    "https://res.cloudinary.com/djweedhpy/image/upload/v1709705385/Landing%20page/tab/Frame_1171277174_vaueqo.png",
    "https://res.cloudinary.com/djweedhpy/image/upload/v1709705249/Landing%20page/tab/Frame_1171277173_zedpvl.png",
  ]
  const videos = [
    "https://res.cloudinary.com/djweedhpy/video/upload/v1710404311/Mohit/Onboard_-_Made_with_Clipchamp_vcxyvp.mp4",
    "https://res.cloudinary.com/djweedhpy/video/upload/v1710404303/Mohit/add_family_-_Made_with_Clipchamp_wkeqlq.mp4",
    "https://res.cloudinary.com/djweedhpy/video/upload/v1710404297/Mohit/reminder_-_Made_with_Clipchamp_uxka6k.mp4",
    "https://res.cloudinary.com/djweedhpy/video/upload/v1710404293/Mohit/Add_pet_-_Made_with_Clipchamp_dsnxvh.mp4",
    "https://res.cloudinary.com/djweedhpy/video/upload/v1710404292/Mohit/Add_document_-_Made_with_Clipchamp_lfuklf.mp4",
    "https://res.cloudinary.com/djweedhpy/video/upload/v1710404290/Mohit/L_F_-_Made_with_Clipchamp_lihzrx.mp4",
  ]
  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setImageRotation((prevRotation) => prevRotation - 15);
    }, 3000);
    return () => clearInterval(imageRotationInterval);
  }, [])
  console.log(imageRotation)


    

  return (
    <div className="main landing scroll-snap">
      <Header></Header>
      <section className="home-main-sec home-sec">
        <div className="home-head-tag" data-aos="fade-up">
        <div className="home-head">
          <img src={petEyeImg} alt="" data-aos="fade-up" data-aos-delay="200" />
        </div>
          <span>Nurturing Bonds Ensuring Safety</span>
          <button className='primary-btn'>Explore</button>
        </div>
        <div className="home-main-img-row container">
          <div className="home-main-img-row-item" data-aos="fade-up" data-aos-delay="400" data-aos-duration="750">
            <img src={mainImg1} alt="" />
          </div>
          <div className="home-main-img-row-item" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
            <img src={mainImg2} alt="" />
          </div>
          <div className="home-main-img-row-item" data-aos="fade-up" data-aos-delay="0">
            <img src={mainImg3} alt="" />
          </div>
          <div className="home-main-img-row-item" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
            <img src={mainImg4} alt="" />
          </div>
          <div className="home-main-img-row-item" data-aos="fade-up" data-aos-delay="400" data-aos-duration="750">
            <img src={mainImg5} alt="" />
          </div>
        </div>
      </section>


      <section className="home-sec-2 home-sec container">
        <div className="sec-title" data-aos="fade-up">
          <span data-aos="fade-up">What we do</span>
        </div>
        <div className="sec-header" data-aos="fade-up">
          <h3 data-aos="fade-up">
            Effortlessly meet your pet's needs with<br/> our user-friendly app.
          </h3>
        </div>
        <div className="sec-containers">
          <div className="sec-container" data-aos="fade-up">
            <div className="sec-container-1-img">
              <img data-aos="zoom-out-down" src={sec2Img1} alt="" />
            </div>
            <div className="sec-container-header" data-aos="fade-up">
              <h5>Experience data management
                and  track progress</h5>
                <p className='sec-container-desc'>Effortlessly monitor your progress with complimentary data management services, ensuring streamlined organization and optimization of your data.</p>
            </div>
            {/* <div className="sec-container-desc" data-aos="fade-up">
              Effortlessly monitor your progress with complimentary data management services, ensuring streamlined organization and optimization of your data.
            </div> */}
          </div>
          <div className="sec-container" style={{marginTop:'-70px'}} data-aos="fade-up">
            <div className="sec-container-2-img">
              <img data-aos="zoom-out-down" src={sec2Img1} alt="" />
            </div>
            <div className="sec-container-header" data-aos="fade-up">
              <h5>Set Reminders and updates</h5>
            </div>
            <div className="sec-container-desc" data-aos="fade-up">
              Access reminders and updates via our complimentary data management services for seamless progress tracking.
            </div>
            <div className="sec-container-btn" data-aos="fade-up">
              <button className='primary-btn'>Explore</button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sec-3 home-sec container" id='sec-3' >
        <div className="home-sec-3-row-1">
          <div className="home-sec-3-row-1-container" >
            <h1 data-aos="fade-up">Welcome to new era & Discover ultimate pet care experience</h1>
            <p data-aos="fade-up">Explore features like reminders and health tracking to ensure your pet's well-being. Don't forget to warmly engage with the 'Add Your Pet' document section. Welcome to a new era of pet parenting!"</p>
          </div>
          <div className="home-sec-3-row-1-container">
            <div className='video'>
              <video key={sec3Vid} data-aos="zoom-out-down" autoPlay muted controls width="100%" height="auto">
                <source src={sec3Vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="sec-title mt-5" data-aos="fade-up">
          <span>Get familiar with our features</span>
        </div>
        <div className="home-sec-3-row-3" >
          <div className="home-sec-3-row-3-container mt-5" >
            {
              [0, 0, 0, 0, 0, 0].map((im, index) => {
                return <ImageCard src={videoImages[index]} onClick={() => {
                  setSec3Vid(videos[index]);
                  window.location.href = "#sec-3"
                }} />
              })
            }
          </div>
        </div>
      </section>
      <section className="home-sec-4 .home-sec container">
        <div className="home-sec-4-row-1" data-aos="fade-up">
          <h1>"PetEye Stories: Heartwarming Tales from Our Furry Friends!"</h1>
        </div>
        <div className="sec-title text-center mt-5">
          <span data-aos="fade-up">Here We Go</span>
        </div>
        {/* <div className="home-sec-4-container mt-3">
          {
            [0, 0, 0, 0, 0, 0,0, 0,0 ].map((item, index) => {
              return <StoryCard item={item} index={index} length={6} />
            })
          }
        </div> */}
        <div className="home-sec-4-wheel-row container mt-5">
          <div className="home-sec-4-wheel-container">
            <img src={wheelImg} style={{ transform: `rotate(${imageRotation}deg)` }} alt="" />
          </div>
        </div>

      </section>
      <section className="home-sec-5">
        <div className="home-sec-5-container" >
          <h1 >Effortlessly</h1>
          <div className="sec-5-img-container"
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {
              isHovered ? <video autoPlay muted controls className='sec-5-video' >
                <source src={defaultVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video> :
                <img src={sec5Img} alt="" />

            }
          </div>
        </div>
      </section>
      <section className="home-sec-6">
        <div className="home-sec-6-container container">
          <div className="sec-6-img-container">
            <img src={mobileImg} alt="" data-aos="fade-up" />
          </div>
          <div className="home-sec-6-content">
            <h1 data-aos="fade-up">Enhance Your Experience Download Our App from the App Store or Play Store </h1>
            <div className='sec-6-mobile-image'>
            <img src={mobileImg} alt="" data-aos="fade-up"  />
            </div>
            <p className='home-sec-6-para' data-aos="fade-up">"Discover a world of convenience and joy with our PetEye app! Seamlessly manage your pet's needs, connect with fellow pet lovers, and explore exclusive features tailored for you and your furry companion. Elevate your pet parenting journey – download now from the App Store or Play Store!"</p>
            <div className="btns">
              <img data-aos="fade-up" src={playStoreBadge} alt="" />
              <img data-aos="fade-up" src={appStoreBadge} alt="" />
            </div>
          </div>
        </div>
       
      </section>

        {/* <img src={landingFooter} alt=""  /> */}
      <section className='home-sec-7'>
        <div className='lp-footer-logo-div'>
        <img  className='lp-footer-logo'  src="https://res.cloudinary.com/djweedhpy/image/upload/v1710753625/Landing%20page/desktop/peteye_smtpuu.png" alt="" />
        </div>

        <div className='footer-sm-main-div'>
            
          <div onClick={()=> window.location.href = 'https://www.w3schools.com/css/css_padding.asp'} className='sm-sub-small-div' >
          <img  data-aos="fade-up" className='social-img-sub' src={youtubeSm} alt="" />
          </div>
          <div onClick={()=> window.location.href = 'https://imvenx.github.io/multiglancer/#/'} className='sm-sub-div'>
          <img  data-aos="fade-up" className='social-img-main' src={instaSm} alt="" />
          </div>
          <div onClick={()=> window.location.href = 'https://github.com/'} className='sm-sub-div'>
          <img  data-aos="fade-up" className='social-img-main' src={twitterSm} alt="" />
          </div>
          <div onClick={()=> window.location.href = 'https://www.w3schools.com/css/css_padding.asp'} className='sm-sub-div'>
          <img  data-aos="fade-up" className='social-img-main' src={facebookSm} alt="" />
          </div>
          <div onClick={()=> window.location.href = 'https://imvenx.github.io/multiglancer/#/'} className='sm-sub-div'>
          <img  data-aos="fade-up" className='social-img-main' src={linkedinSm} alt="" />
          </div>
          <div onClick={()=> window.location.href = 'https://github.com/'} className='sm-sub-small-div'>
          <img  data-aos="fade-up" className='social-img-sub' src={mail} alt="" />
          </div>
       </div>
       <div  className='lp-para'>
          <p  className='lp-para1'>Terms & Conditions</p>
          <p className='lp-para2' >© 2023 K R PET EYE LLP. All Rights Reserved. </p>
        </div>


      </section>
      <VideoModal videoSrc={videoToPlay} setVideoSrc={setVideoToPlay}></VideoModal>
    </div>
  )
}

