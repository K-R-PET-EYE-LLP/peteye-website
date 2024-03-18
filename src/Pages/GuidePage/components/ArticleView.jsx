import React from 'react'
import './ArticleView.css'
import GuideCard from './GuideCard'
import articleJson from '../../../assets/json/article.json'

const images = {
    sec2DefaultImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702655/Tab/78f808ad-9091-4881-aac4-483667f640ac_1_uptdmp.png",
    secDefImg: "https://res.cloudinary.com/djweedhpy/image/upload/v1709702661/Tab/Frame_1171277050_zo8m0q.png"
}

export default function ArticleView({ selectedItem, setSelectedItem, setArticleToView, articleToView }) {
    let articleArr = articleJson.filter(item => item.category === articleToView.category);
    return (
        <div className="article-view">
            <div className="av-container">

                <div className="av-container-sec-1">
                    <b>{articleToView.title}</b>
                    {
                        (articleToView?.summary ?? []).map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </div>
                <div className="av-container-sec-2">
                    <img src={articleToView?.image} alt="" />
                </div>
            </div>
            {
                (articleToView?.description ?? []).map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
            <div className="article-suggestions">
                {
                    (articleArr ?? []).map((item, index) => {
                        if (articleToView.title === item.title) {
                            return null
                        } else {
                            return <GuideCard guide={item} index={index} setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></GuideCard>
                        }
                    })
                }
            </div>
        </div>
    )
}
