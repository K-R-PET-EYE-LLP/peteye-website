import React, { useEffect, useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBContainer
} from 'mdb-react-ui-kit';
import './GuidePage.css'
import Header from '../../Components/Header/Header';
// import './GuideSec.css'
import GuideSec from './components/GuideSec';
import Footer from '../../Components/Footer/Footer'
import ArticleView from './components/ArticleView';
import { useParams } from 'react-router-dom';
import articleJson from '../../assets/json/article.json'

export default function GuidePage() {
    const [justifyActive, setJustifyActive] = useState('all');
    const [selectedItem, setSelectedItem] = useState(0)
    const [articleToView, setArticleToView] = useState(null)
    const {section} = useParams();

    console.log(articleJson)


    const handleJustifyClick = (value) => {
        setArticleToView(null);
        setSelectedItem(0)
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    useEffect(()=>{
        setJustifyActive(section ?? "all")
    },[section])

    console.log(section, justifyActive)

    return (
        <div className='guide'>
            <Header></Header>
            <MDBContainer className='mb-5'>
                <div className="guide-header">
                    <span>Our Blog</span>
                    <h2>Stories and Guided Articles</h2>
                    <p>Join our family to learn about pet parenting, pet stories, and health guides</p>
                </div>
                <div className="guide-tab-sec">
                    <MDBTabs className='mb-3 guide-tabs'>
                        <MDBTabsItem className='guide-tab-item'>
                            <MDBTabsLink onClick={() => handleJustifyClick('all')} active={justifyActive === 'all'}>
                                All
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem className='guide-tab-item'>
                            <MDBTabsLink onClick={() => handleJustifyClick('tips_and_tricks')} active={justifyActive === 'tips_and_tricks'}>
                                Tips & Tricks
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem className='guide-tab-item'>
                            <MDBTabsLink onClick={() => handleJustifyClick('pet_care')} active={justifyActive === 'pet_care'}>
                                Pet Care
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem className='guide-tab-item'>
                            <MDBTabsLink onClick={() => handleJustifyClick('health_and_nutritions')} active={justifyActive === 'health_and_nutritions'}>
                                Health & Nutritions
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>



                    <MDBTabsContent>
                        <MDBTabsPane open={justifyActive === 'all'}>
                            {
                                articleToView !== null ?
                                    <ArticleView articleToView={articleToView} setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></ArticleView>
                                    :
                                    <GuideSec category="all" setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></GuideSec>
                            }
                        </MDBTabsPane>
                        <MDBTabsPane open={justifyActive === 'tips_and_tricks'}>
                            {
                                articleToView !== null ?
                                    <ArticleView articleToView={articleToView} setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></ArticleView>
                                    :
                                    <GuideSec  category="tips_and_tricks" setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></GuideSec>
                            }
                        </MDBTabsPane>
                        <MDBTabsPane open={justifyActive === 'pet_care'}>
                            {
                                articleToView !== null ?
                                    <ArticleView articleToView={articleToView} setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></ArticleView>
                                    :
                                    <GuideSec category="pet_care" setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></GuideSec>
                            }
                        </MDBTabsPane>
                        <MDBTabsPane open={justifyActive === 'health_and_nutritions'}>
                            {
                                articleToView !== null ?
                                    <ArticleView articleToView={articleToView} setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></ArticleView>
                                    :
                                    <GuideSec category="health_and_nutritions" setArticleToView={setArticleToView} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></GuideSec>
                            }
                        </MDBTabsPane>
                    </MDBTabsContent>
                </div>
            </MDBContainer>
            <Footer></Footer>
        </div>
    );
}