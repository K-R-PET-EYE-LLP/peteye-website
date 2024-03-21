import React, { useEffect } from 'react'
import './GuideSec.css'
import articleJson from '../../../assets/json/article.json'

import { RiCalendar2Fill, RiTimerFill } from 'react-icons/ri'

import AOS from 'aos'
const images = {
    sec2DefaultImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702655/Tab/78f808ad-9091-4881-aac4-483667f640ac_1_uptdmp.png",
    secDefImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702661/Tab/Frame_1171277050_zo8m0q.png"
}

export default function GuideCard({ index = 0,  selectedItem = -1, guide = {}, setSelectedItem = () => { }, setArticleToView = () => { },category = ""  }) {
    let articleArr = [];
    if (category === "all") {
        articleArr = articleJson
    } else {
        articleArr = articleJson.filter(item => item.category === category)
    }
    return (
        <div className='gs-contain'>
            <div>
                
                <div className="gs-container-sec-1-item" onClick={() => setSelectedItem(index)}>
                    {/* <b>0{index + 1}</b> */}
                    {
                        selectedItem != index &&
                        <img src={guide.image} alt="" />
                    }
                    <div className="gs-container-sec-1-item-content" >
                    <div className="box-footer">
                            <div>
                                <span>
                                    <RiTimerFill className="rIcon" />
                                </span>
                                <span>{articleArr?.[selectedItem]?.duration} Read</span>
                            </div>
                            <div>
                                <span>
                                    <RiCalendar2Fill className='rIcon' />
                                </span>
                                <span>{articleArr?.[selectedItem]?.date}</span>
                            </div>
                        </div>
                        <b>{guide.title}</b>
                        {
                            selectedItem != index ?
                                <span>{guide?.summary?.[0]}</span> :
                                <>
                                <button  className='primary-btn p-2' onClick={() => setArticleToView(guide)}>Read More</button>
                                </>
                                // <>
                                //     <ul data-aos="fade-up">
                                //         {
                                //             (guide?.summary ?? []).slice(0, 3).map((item, index) => {
                                //                 return <li key={index}>{item}</li>
                                //             })
                                //         }
                                //     </ul>
                                //     <button  className='primary-btn p-2' onClick={() => setArticleToView(guide)}>Read More</button>
                                // </>
                        }
                    </div>
                </div>
                <div className={`gs-container-sec-1-item-divider ${selectedItem == index ? "active" : ""}`} />
            </div>
            
        </div>
    )
}
