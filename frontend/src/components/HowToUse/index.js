import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import './HowToUse.css';

export default class HowToUse extends React.Component {
    render() {
        return (
            <FullPage controls controlsProps={{ className: 'Container' }}>
                <Slide>
                    <div className="Page">
                        <h1>버킷리스트에 적은 꿈이 있나요?</h1>
                        <div className="Page1_Contents">
                            <div className="Page1_Content">
                                <img src={window.location.origin + '/images/card1.jpg'} alt="artist" />
                            </div>
                            <div className="Page1_Content">
                                <img src={window.location.origin + '/images/card2.jpg'} alt="artist" />
                            </div>
                            <div className="Page1_Content">
                                <img src={window.location.origin + '/images/card3.jpg'} alt="artist" />
                            </div>
                        </div>
                        
                    </div>
                </Slide>
                <Slide>
                    <div className="Page">
                        <div className="Page2_Contents">
                            <div className="Page2_Content">
                                <div className="UpperBox">
                                    <h1>버켓 등록</h1>
                                </div>
                                <div className="LowerBox">
                                    <p>평소에 간직하던<br />꿈을 공유해보세요</p>
                                </div>
                            </div>
                            <div className="Page2_Content">
                                <div className="UpperBox">
                                    <h1>후원 시작</h1>
                                </div>
                                <div className="LowerBox">
                                    <p>당신의 꿈에 끌린<br />사람들의 지지를<br />받아보세요!</p>
                                </div>
                            </div>
                            <div className="Page2_Content">
                                <div className="UpperBox">
                                    <h1>컨텐츠/리워드</h1>
                                </div>
                                <div className="LowerBox">
                                    <p>당신의 팬을 위한<br/>컨텐츠와 리워드로<br/>팬들에게 보답하세요</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className="Page3_Content">
                        <img src={window.location.origin + '/images/page3.jpg'} alt="artist" />
                    </div>
                    <div className="EnrollBtn">
                        등록하러 가기
                    </div>
                </Slide>
            </FullPage >
        );
    }
}