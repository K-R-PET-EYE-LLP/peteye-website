import React, { useState } from 'react'
import { RiCalendar2Fill, RiTimerFill } from 'react-icons/ri'
import GuideCard from './GuideCard'
import './GuideSec.css'
import articleJson from '../../../assets/json/article.json'

const images = {
    sec2DefaultImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702655/Tab/78f808ad-9091-4881-aac4-483667f640ac_1_uptdmp.png",
    secDefImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702661/Tab/Frame_1171277050_zo8m0q.png"
}

export default function GuideSec({ selectedItem, setSelectedItem, setArticleToView, category = "" }) {
    let articleArr = [];
    if (category === "all") {
        articleArr = articleJson
    } else {
        articleArr = articleJson.filter(item => item.category === category)
    }
    return (
        <div className="gs">
            <div className="gs-container-sec-1">
                {
                    (articleArr ?? []).map((item, index) => {
                        return <>
                            <GuideCard guide={item} setArticleToView={setArticleToView} index={index} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                        </>
                    })

                }


            </div>
            <div className="gs-container-sec-2">
                {
                    articleArr?.[0] &&
                    <div className="gs-container-sec-2-box" >
                        <img src={articleArr[selectedItem]?.image} alt="" />
                        <span>Featured</span>
                        <h6>{articleArr[selectedItem]?.title}</h6>
                        <p>{articleArr[selectedItem]?.summary?.[0]}</p>
                        <div className="tags">
                            <div className="tag-box">
                                Peteye Devices
                            </div>
                            <div className="tag-box">
                                Pet Socialization
                            </div>
                            <div className="tag-box">
                                Training & Behaviour
                            </div>
                            <div className="tag-box">
                                App Usage and Trouble
                            </div>
                        </div>
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
                    </div>
                }
            </div>
        </div>
    )
}
