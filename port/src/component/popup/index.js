import React, { useState, useEffect } from 'react';
import {Link,Route, BrowserRouter } from 'react-router-dom'
import _ from 'lodash'
import { collection,doc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../../firebase';
import Popup from "reactjs-popup";
import Form from "./form"
import close from "./images/closeIcons.png"
import smile from "./images/smile.png"
import { useForm } from 'react-hook-form';
import md5 from 'md5'
import moment from 'moment'
import swal from 'sweetalert2'

const Index = ({trigger,setReload,reload}) => {
  const contentStyle = {
    maxWidth: "520px",
    width: "90%"
  };

  const [isOpen, setIsOpen] = useState(false);
  const {register,handleSubmit,getValues,errors,setValue} = useForm();

  const onSubmit = async(data) => {

    const querySnapshot = await getDocs(collection(db, "board"));

    let newArr = [];
    querySnapshot.forEach((doc) => {
      let docitem = doc.data();
      
      if(!_.isEmpty(docitem)){
        newArr.push(docitem)
      }
    });


    let pickId = md5(moment());
    let parameter = {
      title: `${_.get(data,"title")}`,
      body: `${_.get(data,"body")}`,
      password: `${_.get(data,"password")}`,
      createdAt: `${moment().format("yy-MM-DD")}`,
      boardId:`${pickId}`,
      nums:`${newArr.length + 1}`
    }

    await setDoc(doc(db, "board", `${pickId}`), {...parameter});
    swal.fire(
      '게시글이 등록되었습니다.',
      '메일을 남기면 답장해드리도록 하겠습니다.',
      'success'
    )
    setIsOpen(!isOpen)
    setReload(!reload)
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
        저에게 글을 남겨주세요 
        <img src={smile} />
      </div>
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit} errors={errors} register={register}  setReload={setReload} setValue={setValue} reload={reload} isOpen={isOpen}/>
    </Popup >
  )
}

export default Index

