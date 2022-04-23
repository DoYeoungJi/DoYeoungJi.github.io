import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import {Link,Route, BrowserRouter,useParams } from 'react-router-dom'
import _ from 'lodash'
import Cd from '../images/cdroms.png';
import backArrow from '../images/arrowBack.png';
import AnimatedNumber from "animated-number-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import auu from '../images/auu.jpg';
import doctor from '../images/doctor.jpg';
import hero from '../images/hero.jpg';
import inhec from '../images/inhec.jpg';
import kisti from '../images/kisti.jpg';
import koreatech from '../images/koreatech.jpg';
import mice from '../images/mice.jpg';
import star from '../images/star.jpg';
import gjudec from '../images/gjudec.jpg';
import port from '../images/port.jpg';
import portfolio from '../images/portfolio.pdf';

const WorksDetail = ({setDetailPage}) => {

  const {id} = useParams();
  const [detailData,setDetailData] = useState({});
  
  useEffect(()=>{
    if(!_.isEmpty(id)){
      setDetailPage(true)
    } else {
      setDetailPage(false)
    }
  },[id])


  useEffect(()=>{
    async function getData() {
      const docRef = doc(db, "work", `${id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDetailData(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getData();
  },[id])


  return(
  <div className="mainBox">
    {
      !_.isEmpty(detailData) && 
      <div className="detailBox">
        {/* 왼쪽부분 */}
        <div className="leftBox">
          <div className="leftInBox">

            <div className="backButton">
              <Link to="/works">
                <img src={backArrow}/>
              </Link>
            </div>
            
            <div className="albumWrap">
              <div className="albumTop">
                <div className="albumBox">

                  <div className="albumCover">
                    <div className="albumLogo">
                       {
                          _.get(detailData,"workId") === "auoo" ? 
                           <img src={auu} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "doctor" ?
                           <img src={doctor} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "hero" ? 
                           <img src={hero} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "inhec" ? 
                           <img src={inhec} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "kisti" ? 
                           <img src={kisti} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "koreatech" ?  
                           <img src={koreatech} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "mice" ?   
                           <img src={mice} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "star" ?  
                           <img src={star} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "gjudec" ?  
                           <img src={gjudec} alt="볼이미지"/> :
                          _.get(detailData,"workId") === "port" ?  
                           <img src={port} alt="볼이미지"/> : 
                           <img src={port} alt="볼이미지"/>

                        }
                    </div>
                  </div>

                  <div className="albumCd">
                    <img src={Cd} alt="cd이미지"/>
                  </div>

                </div>
              </div>

              <div className="albumBottom">
                <div className="workTitleLink">
                  {_.get(detailData,"link")}
                </div>
                <div className="workLink">
                  {
                    _.get(detailData,"workId") === "port" ?  
                    <a href={portfolio} download="지도영_포트폴리오">포트폴리오 보기</a> :
                    <a href={_.get(detailData,"link")} target="_blank">사이트 이동</a>
                  }
                  
                </div>
              </div>


            </div>
          </div>
        </div>
        {/* 왼쪽부분 끝*/}

        {/* 오른부분 */}
        <div className="rightBox">

          <div className="rightTop">
            <div className="topTitle">
              {_.get(detailData,"title")}
            </div>
            <div className="topGraph">
              <div className="graphTitle">
                개요
              </div>
              
              <div className="graphBox">

                {/* 그래프 한개 */}
                <div className="graphMin">
                  <div className="graphQ">
                    기획
                  </div>
                  <div className="graphGr">
                    <div className="graphNum">
                      <div className="innerNum" style={{width:`${_.get(detailData,'ki')}%`}}>
                        <AnimatedNumber
                            initialValue={0}
                            value={_.get(detailData,"ki")}
                            stepPrecision={0}
                            duration={1000}
                            formatValue={(value) => value.toFixed(0)}
                          />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 그래프 한개 끝 */}


                {/* 그래프 한개 */}
                <div className="graphMin">
                  <div className="graphQ">
                    디자인
                  </div>
                  <div className="graphGr">
                    <div className="graphNum">
                      <div className="innerNum" style={{width:`${_.get(detailData,'de')}%`}}>
                          <AnimatedNumber
                            initialValue={0}
                            value={_.get(detailData,"de")}
                            stepPrecision={0}
                            duration={1000}
                            formatValue={(value) => value.toFixed(0)}
                          />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 그래프 한개 끝 */}


                {/* 그래프 한개 */}
                <div className="graphMin">
                  <div className="graphQ">
                    퍼블리싱
                  </div>
                  <div className="graphGr">
                    <div className="graphNum">
                      <div className="innerNum" style={{width:`${_.get(detailData,'pu')}%`}}>
                          <AnimatedNumber
                            initialValue={0}
                            value={_.get(detailData,"pu")}
                            stepPrecision={0}
                            duration={1000}
                            formatValue={(value) => value.toFixed(0)}
                          />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 그래프 한개 끝 */}


                {/* 그래프 한개 */}
                <div className="graphMin">
                  <div className="graphQ">
                    개발
                  </div>
                  <div className="graphGr">
                    <div className="graphNum">
                      <div className="innerNum" style={{width:`${_.get(detailData,'re')}%`}}>
                          <AnimatedNumber
                            initialValue={0}
                            value={_.get(detailData,'re')}
                            stepPrecision={0}
                            duration={1000}
                            formatValue={(value) => value.toFixed(0)}
                          />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 그래프 한개 끝 */}

              </div>

            </div>
          </div>

          <div className="rightBottom">
            <div className="detailTitle">참여부분</div>
            <div className="rightDetailBox">
                {!_.isEmpty(_.get(detailData,"body")) && _.get(detailData,"body").map((dtem,dtx) => {
                  return(
                    <div className="checkBody" key={dtx}>
                      {dtem}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* 오른부분 끝*/}
      </div>
    }
    
 </div>
)}

export default WorksDetail

