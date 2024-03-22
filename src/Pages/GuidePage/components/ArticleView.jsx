import React from 'react'
import './ArticleView.css'
import GuideCard from './GuideCard'
import articleJson from '../../../assets/json/article.json'
import { RiCalendar2Fill, RiTimerFill } from 'react-icons/ri'


const images = {
    sec2DefaultImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702655/Tab/78f808ad-9091-4881-aac4-483667f640ac_1_uptdmp.png",
    secDefImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702661/Tab/Frame_1171277050_zo8m0q.png"
}

export default function ArticleView({ selectedItem, setSelectedItem, setArticleToView, articleToView }) {
    let articleArr = articleJson.filter(item => item.category === articleToView.category);
    return (
        <div className="article-view">
            <div className="av-container-sec-1">
                <b>{articleToView.title}</b>
                {
                    (articleToView?.summary ?? []).map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
                <div style={{color:'#000'}}>
                    <span>
                        <RiCalendar2Fill className='rIcon' />
                    </span>
                    <span>{articleToView.date}</span>
                    &emsp;
                    &emsp;
                    <span>
                        <RiTimerFill className="rIcon" />
                    </span>
                    <span>{articleToView.duration} Read</span>

                </div>
                
            </div>

            <div className="av-container-sec-2">
                <img src={articleToView?.image} alt="" />
            </div>
            <div className='description'>
            {
                (articleToView?.description ?? []).map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
            </div>
        </div>
    )
}
