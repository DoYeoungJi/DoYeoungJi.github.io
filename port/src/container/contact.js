import React, { useState, useEffect } from 'react';
import {Link,Route, BrowserRouter,useParams,useLocation  } from 'react-router-dom'
import _ from 'lodash'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import Popup from '../component/popup'
import DeletePopup from '../component/deletePop'

const Contact = ({setDetailPage}) => {

  const {id} = useParams();
  const [boardItems,setBoardItems] = useState([]);
  const [pickDetail,setPickDetail] = useState({});
  const [reload,setReload] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const perPage = 3;
  const [indexOfLastPage,setIndexOfLastPage] = useState(0)
  const [indexOfFirstPage,setIndexOfFirstPage] = useState(0);
  const [currentPost,setCurrenPost] = useState(null);
  const [pageNumber,setPageNumber] = useState([]);

  useEffect(()=>{
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "board"));
      let newArr = [];
      querySnapshot.forEach((doc) => {
        let docitem = doc.data();
        
        if(!_.isEmpty(docitem)){
          newArr.push(docitem)
        }
      });

      if(!_.isEmpty(newArr)){
       
        let sortArr = _.sortBy(newArr, 'nums').reverse();
        setBoardItems(sortArr);
        setPickDetail(sortArr[0])
      }else {
        setPickDetail({})
        setBoardItems([]);
      }
    }
    getData();
  },[reload])


  useEffect(()=>{
    if(!_.isEmpty(id)){
      setDetailPage(true)
    } else {
      setDetailPage(false)
    }
  },[id])


  useEffect(()=>{
    setIndexOfLastPage(currentPage * (perPage))
  },[currentPage,perPage])


  useEffect(()=>{
    setIndexOfFirstPage(indexOfLastPage - perPage);
  },[currentPage,perPage,indexOfLastPage])


  useEffect(()=>{
    if(!_.isEmpty(boardItems)){
      setCurrenPost(boardItems.slice(indexOfFirstPage,indexOfLastPage));
      let numArray = [];

      for(let i=1;i<=Math.ceil(boardItems.length/perPage);i++){
        numArray.push(i)
      }

      if(!_.isEmpty(numArray)){
        setPageNumber(numArray)
      }
    }
  },[boardItems,perPage,indexOfFirstPage,indexOfLastPage])

  
  return( <>
     <div className="backBorder illue"></div>
     <div className="contactBox">
      <div className="contactInnerBox">
          <div className="contactLeft">

            <div className="abTop">
              <div className="abTopTitle">
                ????????? ???????????????.
              </div>

              <div className="abTopDetail">
                ????????? ???????????? ?????? ???????????????.
                <br/>
                <span className="thinDetail">
                  ?????? ????????? ??? ??? ????????????.
                </span>
              </div>
            </div>

            <div className="abBottom">
              <div className="abButtonZone">
                <div className="buttonRight">

                  <Popup trigger={<div className="writeButton">?????????</div>} setReload={setReload} reload={reload} />
                  
                  <div className="boardSelect">
                    <select >
                      <option>?????????</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* ??????????????? */}
              <div className="abBoard">

                  {
                    !_.isEmpty(currentPost) && currentPost.map((items,idx) => {
                      return(
                        <div className={_.get(pickDetail,"boardId") === _.get(items,"boardId") ? "boardList actives" : "boardList"} key={idx} onClick={() => {setPickDetail(items)}}>
                          <div className="boardTitle">
                            {items.title}
                          </div>
                          <div className="boardDate">
                            {items.createdAt}
                          </div>
                        </div>
                      )
                    })
                  }

              </div>

              <div className="abBoardPage">
                  <div className="adPageBox">
                    
                    {
                      !_.isEmpty(pageNumber) && pageNumber.map((item,idx) => {
                        return(
                        <div key={idx} className={item == currentPage ? "buttonNum active" : "buttonNum"} onClick={()=>{setCurrentPage(item)}}>{item}</div>)
                      })
                    }
                    
                  </div>
              </div>

            </div>

          </div>
          <div className="contactRight">
              {
                !_.isEmpty(pickDetail) && 
                  <div className="boardDetail">
                    <div className="detailTitle">
                      <div className="detailLeft">
                        ??????
                      </div>
                      <div className="detailInput">
                        { pickDetail.title}
                      </div>
                    </div>

                    <div className="detailDetail">
                      <div className="detailLeft">
                        ??????
                      </div>
                      <div className="detailInput">
                       { pickDetail.body}
                      </div>
                    </div>

                    <div className="boardBottom">
                      <DeletePopup trigger={<div className="boardDelete">????????????</div> } pickDetail={pickDetail} setReload={setReload} reload={reload} />
                    </div>
                </div>
              }
              
          </div>
      </div>
    </div>

    </>
  )}

export default Contact

