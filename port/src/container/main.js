import React, { useState, useEffect } from 'react';
import {Link,Route, BrowserRouter,useParams } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import mainBall from '../images/rightBall.png';
import mainPic from '../images/fig.png';
import _ from 'lodash'

const Main = ({setDetailPage}) => {

  const {id} = useParams();
  useEffect(()=>{
    if(!_.isEmpty(id)){
      setDetailPage(true)
    } else {
      setDetailPage(false)
    }
  },[id])

  return(
    <>
      <div className="backBorder"></div>
      <div className="mainBox">
        <div className="mainpic">
          <img src={mainPic} alt="내사진"/>
        </div>
        <div className="innerBox">
          <div className="contBox">
            <div className="leftBox">
              <div className="mainTitle">
                <div className="titleTop">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(`<span class="lighter">i'm</span><br/>프론트엔드 +<br/>디자이너`)
                        .callFunction(() => {
                          console.log('String typed out!');
                        }).start();
                    }}
                  />
                </div>
                <div className="titleBottom">
                  안녕하세요 <span className="bolds">프론트엔드개발자 겸 디자이너</span><br/>
                  지도영입니다.
                </div>
                <div className="linkButton">
                  <Link to="/works">
                    저의 성과물을 보시겠어요?
                  </Link>
                </div>
              </div>
            </div>

            <div className="rightBox">
            </div>

          </div>
          

          <div className="rightBack">
            <div className="ballImage">
              <img src={mainBall} alt="볼이미지"/>
            </div>
            <div className="rightGreen"></div>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default Main

