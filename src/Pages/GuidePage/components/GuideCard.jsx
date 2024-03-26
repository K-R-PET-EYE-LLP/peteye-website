import React, { useEffect } from 'react'
import './GuideSec.css'
import articleJson from '../../../assets/json/article.json'

import { RiCalendar2Fill, RiTimerFill } from 'react-icons/ri'

import AOS from 'aos'
const images = {
    sec2DefaultImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702655/Tab/78f808ad-9091-4881-aac4-483667f640ac_1_uptdmp.png",
    secDefImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702661/Tab/Frame_1171277050_zo8m0q.png"
}

export default function GuideCard({ index = 0, selectedItem = -1, guide = {}, setSelectedItem = () => { }, setArticleToView = () => { }, category = "" }) {
    let articleArr = [];
    if (category === "all") {
        articleArr = articleJson
    } else {
        articleArr = articleJson.filter(item => item.category === category)
    }
    return (
        <div className='gs-contain'>
        
                
                <div  className="gs-container-sec-1-item" onClick={() => setSelectedItem(index)}>
                    {/* <b>0{index + 1}</b> */}
                    <div style={{ display:'flex', flexDirection:'column', width:'400px' }}>

                {
                    selectedItem != index &&
                    <img src={guide.image} alt="" />
                }
                <div className="box-footer" style={{color:'#000'}}>
                    <div>
                        <span>
                            <RiTimerFill className="rIcon" />
                        </span>
                        <span>{guide.duration} Read</span>

                    </div>
                    <div>
                        <span>
                            <RiCalendar2Fill className='rIcon' />
                        </span>
                        <span>{guide.date}</span>
                    </div>
                </div>
                <p  className='card-head'>{guide.title}</p>

                <span className='card-desc' >{guide?.description?.[0]}</span>
                <div className={`gs-container-sec-1-item-divider ${selectedItem == index ? "active" : ""}`} />

            </div>

</div>


        </div>
    )
}
