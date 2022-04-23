import React, { useState, useEffect } from 'react';
import {Link,Route, BrowserRouter,useParams } from 'react-router-dom'
import _ from 'lodash'
import topPic from '../images/figtop.png';

const About = ({setDetailPage}) => {

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
      <div className="backBorder illue"></div>
      <div className="figTop">
        <img src={topPic} alt="내사진"/>
      </div>
      <div className="aboutBox">
        <div className="aboutInnerBox">
            
            {/* 왼쪽부분 */}
            <div className="aboutLeftBox">
              <div className="gradientCircle"></div>
              <div className="abTop">

                  <div className="abTopTitle">
                    <span className="thinTitle">안녕하세요</span><br/>
                    MAP입니다.
                  </div>

                  <div className="abTopDetail">
                    <span className="thinDetail">안녕하세요</span><br/>
                    프론트엔드 개발자 겸 디자이너<br/>
                    지도영입니다.
                  </div>
              </div>
              <div className="abBottom">
                <div className="detailTitle">
                  <div className="detailBack"></div>
                  <div className="detailName">경력</div>
                </div>

                <div className="workHisBox">

                  <div className="workHis">
                      <div className="workHisCircle"></div>
                      <div className="workHisTitle">
                        육군병장 만기 제대
                      </div>
                      <div className="workHisDetail">
                          2014.10 ~ 2016.07
                      </div>
                  </div>

                  <div className="workHis">
                      <div className="workHisCircle"></div>
                      <div className="workHisTitle">
                        <div className="titleLeft">
                          지페이퍼
                        </div>
                        <div className="titleRight">
                          2019.01 ~ 2019.10
                        </div>
                      </div>
                      <div className="workHisDetail plusSize">
                        상세페이지 디자인, 배너디자인, 퍼블리싱
                      </div>
                  </div>


                  <div className="workHis">
                      <div className="workHisCircle"></div>
                      <div className="workHisTitle">
                        <div className="titleLeft">
                          디자인코어
                        </div>
                        <div className="titleRight">
                          2019.12 ~ 2021.05
                        </div>
                      </div>
                      <div className="workHisDetail plusSize">
                        웹디자인, 퍼블리싱, 웹 기획
                      </div>
                  </div>


                  <div className="workHis">
                      <div className="workHisCircle"></div>
                      <div className="workHisTitle">
                        <div className="titleLeft">
                          오베네프
                        </div>
                        <div className="titleRight">
                          2021.05 ~ 2022.04
                        </div>
                      </div>
                      <div className="workHisDetail plusSize">
                        프론트엔드 개발, 퍼블리싱
                      </div>
                  </div>

                </div>
                
              </div>
            </div>
            {/* 왼쪽부분 */}

            {/* 가운데부분 */}
            <div className="aboutMiddleBox">
                <div className="setGra"></div>
            </div>
            {/* 가운데부분 */}

            {/* 오른쪽부분 */}
            <div className="aboutRightBox">

              <div className="abTop">
                <div className="detailTitle">
                  <div className="detailBack"></div>
                  <div className="detailName">경력</div>
                </div>

                <div className="workHisBox">


                  <div className="workHis">
                      <div className="workHisCircle"></div>
                      <div className="workHisTitle">
                        <div className="titleLeft">
                          MBTI
                        </div>
                        <div className="titleRight">
                          ISTJ
                        </div>
                      </div>
                      <div className="workHisDetail plusSize">
                        엄격한 관리자, 사업가형
                      </div>
                  </div>

                  <div className="workHis">
                      <div className="workHisCircle"></div>
                      <div className="workHisTitle bottomPadding">
                        <div className="titleLeft">
                          하고있는 공부
                        </div>
                        <div className="titleRight">
                          Node.js, Svelte
                        </div>
                      </div>
                  </div>


                </div>
                
              </div>


              <div className="abBottom">
                <div className="detailTitle">
                  <div className="detailBack"></div>
                  <div className="detailName">능력치</div>
                </div>

                <div className="workHisBox">

                  <div className="graphBox">
                    <div className="graphWrap">
                      <div className="grapCre" style={{width:"75%"}}></div>
                    </div>

                    <div className="graphTitle">
                      UI/UX
                    </div>
                    <div className="graphDetail">
                      UI/UX 디자인 구현, 색상에 따른 접근성 구분, 컬러배치<br/>
                      능력, 반응형 및 창의적인 UI 구현 
                    </div>
                  </div>


                  <div className="graphBox">
                    <div className="graphWrap">
                      <div className="grapCre" style={{width:"82%"}}></div>
                    </div>

                    <div className="graphTitle" >
                      퍼블리싱
                    </div>
                    <div className="graphDetail">
                      HTML, CSS, 자바스크립트, 제이쿼리를 이용한 화면 구성,<br/>
                      반응형 디자인 구현 및 디테일한 디자인 구현
                    </div>
                  </div>


                  <div className="graphBox">
                    <div className="graphWrap">
                      <div className="grapCre" style={{width:"94%"}}></div>
                    </div>

                    <div className="graphTitle">
                      프론트엔드 개발
                    </div>
                    <div className="graphDetail">
                      react를 활용한 데이터 동적 표출, react 함수를 활용한<br/>
                      데이터 가공 · 저장, 라이브러리 활용 
                    </div>
                  </div>


                </div>

                
              </div>
            </div>
            {/* 오른쪽부분 */}

        </div>
      </div>
    </>
  )
}

export default About

