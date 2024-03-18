import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import { IoSearchOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSmartphone, MdOutlineSwitchAccount } from "react-icons/md";
import './SupportPage.css'
import { LuRefreshCcwDot } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos';

const mainImg="https://res.cloudinary.com/djweedhpy/image/upload/v1709701963/Desktop/b477f547-f202-44e5-9b18-c480bb06b05c_1_gahf0z.png"

export default function SupportPage() {
    useEffect(() => {
        AOS.init({duration:500, delay:100});
      }, [])
  return (
    <div className="main">
        <Header></Header>
        <div>
        <section className="support-main-sec">
            <div className="support-main-sec-title" data-aos="fade-up">
                <span>Support</span>
            </div>
            <div className="support-main-sec-head" data-aos="fade-up">
                <h1>Hi! How can I help you?</h1>
            </div>
            <div className="support-main-sec-search-box" data-aos="fade-up">
                <div className="search-box-container">
                    <input type="text" placeholder='Have a Question' />
                    <button>
                    <IoSearchOutline className='icon'/>
                    </button>
                </div>
            </div>
            <div className="support-main-sec-img">
                <img src={mainImg} alt=""  data-aos="fade-up"/>
            </div>
            <div className="support-sec-options">
                <div className="support-sec-option-container">
                    <div className="support-sec-option" data-aos="fade-up">
                    <MdOutlineSwitchAccount size={50}/>
                        <span>Manage Your Account</span>
                    </div>
                    <div className="support-sec-option" data-aos="fade-up">
                    <FaRegMoneyBillAlt size={50}/>
                        <span>Manage Your Account</span>
                    </div>
                    <div className="support-sec-option" data-aos="fade-up">
                    <TbTruckDelivery size={50}/>
                        <span>Manage Your Account</span>
                    </div>
                    <div className="support-sec-option" data-aos="fade-up">
                    <MdOutlineSmartphone size={50}/>
                        <span>Manage Your Account</span>
                    </div>
                    <div className="support-sec-option" data-aos="fade-up">
                    <LuRefreshCcwDot size={50}/>
                        <span>Manage Your Account</span>
                    </div>
                    <div className="support-sec-option" data-aos="fade-up">
                    <FiCheckSquare size={50}/>
                        <span>Manage Your Account</span>
                    </div>
                </div>
            </div>
            <div className="support-sec-btn">
                <button className='primary-btn' data-aos="fade-up">Contact Us</button>
            </div>
        </section>
        </div>
        <section>
        <Footer></Footer>
        </section>
        
    </div>
  )
}
