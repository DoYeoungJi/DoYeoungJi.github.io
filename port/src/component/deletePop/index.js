import React, { useState, useEffect } from 'react';
import {Link,Route, BrowserRouter } from 'react-router-dom'
import _ from 'lodash'
import { collection,doc, getDocs, setDoc,deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';
import Popup from "reactjs-popup";
import Form from "./form"
import close from "./images/closeIcons.png"
import smile from "./images/smile.png"
import { useForm } from 'react-hook-form';
import md5 from 'md5'
import moment from 'moment'
import swal from 'sweetalert2'

const Index = ({trigger,setReload,reload,pickDetail}) => {
  const contentStyle = {
    maxWidth: "393px",
    width: "90%"
  };

  const [isOpen, setIsOpen] = useState(false);
  const {register,handleSubmit,getValues,errors,setValue} = useForm();

  const onSubmit = async(data) => {

    
    if(_.get(pickDetail,"password") === _.get(data,"password")){

      await deleteDoc(doc(db, "board", `${_.get(pickDetail,"boardId")}`));
      swal.fire(
        '삭제가 완료되었습니다.',
        '등록한 게시글이 삭제되었습니다.',
        'success'
      )

      setIsOpen(!isOpen)
      setReload(!reload)

    } else {
      swal.fire(
        '삭제를 실패하였습니다.',
        '등록한 게시글과 비밀번호가 다릅니다.',
        'error'
      )
    }
    
  }

  return(
    <Popup
      contentStyle={contentStyle}
      trigger={trigger}
      modal
      closeOnDocumentClick = {false}
      open={isOpen}
      onOpen={() => setIsOpen(!isOpen)}
    >
      <div className="closePng">
        <img src={close} onClick={()=>{setIsOpen(!isOpen)}}/>
      </div>
      <div className="popTitle">
        등록시 입력했던 비밀번호를 입력하세요
      </div>
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit} errors={errors} register={register}  setReload={setReload} reload={reload} pickDetail={pickDetail} setValue={setValue} isOpen={isOpen} />
    </Popup >
  )
}

export default Index

