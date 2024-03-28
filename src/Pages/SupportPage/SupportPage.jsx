import React, { useEffect, useState } from 'react'
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
import faqJson from '../../assets/json/faq.json'
import { IoMdArrowDropdown } from "react-icons/io";

const mainImg="https://res.cloudinary.com/djweedhpy/image/upload/v1709701963/Desktop/b477f547-f202-44e5-9b18-c480bb06b05c_1_gahf0z.png"

export default function SupportPage() {
    useEffect(() => {
        AOS.init({duration:500, delay:100});
      }, [])

      const PetData=faqJson;
      console.log(PetData);
      const [searchQuery, setSearchQuery] = useState('');
      const [searchResults, setSearchResults] = useState([]);
    
      const handleSearch = (e) => {
        const query = e.target.value;
        console.log(searchQuery);
        setSearchQuery(query);

        const regex = new RegExp(query, 'i'); 
        const results = PetData.filter(item =>
          regex.test(item.Question) || regex.test(item.Answer)
        );
        setSearchResults(results);
      };

      const [openAnswers, setOpenAnswers] = useState([]);

      const toggleAnswer = (index) => {
        const newOpenAnswers = [...openAnswers];
        newOpenAnswers[index] = !newOpenAnswers[index];
        setOpenAnswers(newOpenAnswers);
      };
console.log("SEARCH_RES : ",searchResults);

  return (
    <div className="main">
        <Header></Header>
        <div>
        <section className="support-main-sec">
            <div className="support-main-sec-title" data-aos="fade-up">
                {/* <span>Support</span> */}
            </div>
            <div className="support-main-sec-head" data-aos="fade-up">
                <h1>Hi! How can I help you?</h1>
            </div>
            <div className="support-main-sec-search-box" data-aos="fade-up">
                <div className="search-box-container">
                    <input type="text" placeholder='Have a Question'
                    value={searchQuery}
                    onChange={handleSearch}
                     />
                    <button>
                    <IoSearchOutline className='icon'/>
                    </button>
                </div>
            </div>
            {searchResults.length==0 || searchQuery.trim()=='' ?
            <div></div>

            : 
                <div className='search-result-main-div'>
                
        {searchResults.map((item, index) => (
       <>
       <div key={index} className='res-question-div'>
        <div style={{display:'flex',justifyContent:'space-between'}}>
       <div>{item.Question}</div>
       <div>
         <IoMdArrowDropdown
           onClick={() => toggleAnswer(index)}
           style={{ transform: openAnswers[index] ? 'rotate(180deg)' : 'rotate(0deg)',cursor:'pointer' }}
           />
       </div>
        </div>
       <div style={{ display: openAnswers[index] ? 'block' : 'none' }}>{item.Answer}</div>
     </div>
           </>
        ))}
    
         </div>

             }


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
                <button className='primary-btn contact-btn' data-aos="fade-up">Contact Us</button>
            </div>
        </section>
        </div>
        <section>
        <Footer></Footer>
        </section>
        
    </div>
  )
}
