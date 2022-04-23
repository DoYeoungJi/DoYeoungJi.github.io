import React, { useState, useEffect } from 'react';
import {Link,Route, BrowserRouter,useParams } from 'react-router-dom'
import Cd from '../images/cdrom.png';
import $ from 'jquery';
import ScrollHorizontal from 'react-scroll-horizontal';
import _ from 'lodash'
import { collection, getDocs } from "firebase/firestore";
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

const Works = ({setDetailPage}) => {

  const {id} = useParams();
  const [boardItems,setBoardItems] = useState([]);

  useEffect(()=>{
    if(!_.isEmpty(id)){
      setDetailPage(true)
    } else {
      setDetailPage(false)
    }
  },[id])

  useEffect(()=>{
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "work"));
      let newArr = [];
      querySnapshot.forEach((doc) => {
        let docitem = doc.data();
        
        if(!_.isEmpty(docitem)){
          newArr.push(docitem)
        }
      });

      if(!_.isEmpty(newArr)){
        let sortArr = _.sortBy(newArr, 'nums');
        setBoardItems(sortArr);
      }
    }
    getData();
  },[])

  
  return(
  <div className="workbox" >

    {/* 상단부분 */}
    <div className="workboxTop">
      <div className="workBoxInner">
        <div className="workTitle">
          <span className="thin">저의</span><br/>
          <span className="differColor">소중한 작업물</span>들입니다.
        </div>

        <div className="workSelect">
          <select >
            <option>등록순</option>
          </select>
        </div>
      </div>
      
    </div>

    {/* 중반워크 */}
    <div className="workSlide">

      <ScrollHorizontal reverseScroll = {true }>

        {
          !_.isEmpty(boardItems) && boardItems.map((items,idx) => {
            return(
              <div className="workListBox" key={idx}>
                <div className="listBoxTop">
                  <div className="listAlbum">
                    <div className="albimCover">
                      <div className="cover">
                        {
                          _.get(items,"workId") === "auoo" ? 
                           <img src={auu} alt="볼이미지"/> :
                          _.get(items,"workId") === "doctor" ?
                           <img src={doctor} alt="볼이미지"/> :
                          _.get(items,"workId") === "hero" ? 
                           <img src={hero} alt="볼이미지"/> :
                          _.get(items,"workId") === "inhec" ? 
                           <img src={inhec} alt="볼이미지"/> :
                          _.get(items,"workId") === "kisti" ? 
                           <img src={kisti} alt="볼이미지"/> :
                          _.get(items,"workId") === "koreatech" ?  
                           <img src={koreatech} alt="볼이미지"/> :
                          _.get(items,"workId") === "mice" ?   
                           <img src={mice} alt="볼이미지"/> :
                          _.get(items,"workId") === "star" ?  
                           <img src={star} alt="볼이미지"/> :
                          _.get(items,"workId") === "gjudec" ? 
                           <img src={gjudec} alt="볼이미지"/> : 
                           _.get(items,"workId") === "port" ?
                           <img src={port} alt="볼이미지"/> :
                           <img src={port} alt="볼이미지"/>
                        }
                      </div>
                    </div>

                    <div className="cdBox">
                      <img src={Cd} alt="cd이미지"/>
                    </div>
                  </div>
                </div>
                
                <div className="listBoxBottom">
                  <div className="listLeft">
                    <div className="listTitle">{_.get(items,"title")}</div>
                    <div className="listLink">
                      <Link to = {`/works/${_.get(items,"workId")}`}>
                        더보기
                      </Link>
                    </div>
                  </div>
                  <div className="listRight">
                  </div>
                </div>
              </div>
            )
          })
        }

      </ScrollHorizontal>
    </div>
  </div>
)}

export default Works

